package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.*;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Token;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenStatus;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenType;
import com.JapaneseMaster.JapaneseMasterAPI.repository.TokenRepository;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import com.JapaneseMaster.JapaneseMasterAPI.util.UsernameUtil;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    @Value("${jwt.rotation.threshold}")
    private long rotationThreshold;

    public SignupResponse signup(SignupRequest request, HttpServletResponse response) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new ValidationException("Username is already taken");
        }

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ValidationException("Email is already registered");
        }

        String hashedPassword = passwordEncoder.encode((request.getPassword()));

        Users user = Users.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(hashedPassword)
                .build();

        userRepository.save(user);

        String jwtToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        Token refresh = Token.builder()
                .token(refreshToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.REFRESH)
                .user(user)
                .build();

        ResponseCookie refreshCookie = ResponseCookie.from("refreshToken", refreshToken)
                .sameSite("Strict")
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(Duration.ofDays(7))
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, refreshCookie.toString());

        tokenRepository.save(refresh);

        UserResponse userResponse = UserResponse.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .build();

        return SignupResponse.builder()
                .token(jwtToken)
                .user(userResponse)
                .build();
    }

    public LoginResponse login(LoginRequest request, HttpServletResponse response) {

        final String username = request.getUsername();
        final String email = request.getEmail();

        if (username == null && email == null) {
            throw new ValidationException("Username or Email has not been provided.");
        }

        Optional<Users> user = (username != null)
                ? userRepository.findByUsername(username)
                : userRepository.findByEmail(email);

        Users userFound = user.orElseThrow(() -> new ValidationException("User not found"));

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userFound.getEmail(), request.getPassword()));

        String jwtToken = jwtService.generateToken(userFound);
        String refreshToken = jwtService.generateRefreshToken(userFound);

        Token dbRefreshToken = Token.builder()
                .token(refreshToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.REFRESH)
                .user(userFound)
                .build();

        ResponseCookie refreshCookie = ResponseCookie.from("refreshToken", refreshToken)
                .sameSite("Strict")
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(Duration.ofDays(7))
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, refreshCookie.toString());


            jwtService.revokeAllTokens(userFound);
            tokenRepository.save(dbRefreshToken);

        return LoginResponse.builder()
                .token(jwtToken)
                .build();
    }

    public ValidateResponse validate(HttpServletRequest request) {

        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new JwtException("Authorization header missing");
        }

        String jwt = authHeader.substring(7);
        String username = jwtService.extractUsername(jwt);

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        boolean isExpired = jwtService.isTokenExpired(jwt);

        boolean isValid = jwtService.isTokenValid(jwt, userDetails);

        Token dbToken = tokenRepository.findByToken(jwt).orElseThrow(() -> new JwtException("Could not find token in database"));

        if (isExpired || dbToken.getTokenStatus() == TokenStatus.EXPIRED) {
            dbToken.setTokenStatus(TokenStatus.EXPIRED);
            tokenRepository.save(dbToken);
            throw new JwtException("The token is expired");
        }

        if (!isValid || dbToken.getTokenStatus() == TokenStatus.REVOKED) {
            dbToken.setTokenStatus(TokenStatus.REVOKED);
            tokenRepository.save(dbToken);
            throw new JwtException("The token is invalid");
        }

        return ValidateResponse.builder()
                .message("Validation is successful")
                .build();
    }

    public RefreshResponse refresh(HttpServletRequest request, HttpServletResponse response) {

        Cookie[] cookies = request.getCookies();

        if (cookies == null) {
            throw new JwtException("Refresh token not in cookie");
        }

        String refreshToken = null;

        for (Cookie cookie : cookies) {
            if ("refreshToken".equals(cookie.getName())) {
                refreshToken = cookie.getValue();
                break;
            }
        }

        if (refreshToken == null) {
            throw new JwtException("Refresh Token not found");
        }

        String username = jwtService.extractUsername(refreshToken);

        if (username != null) {

            Users user = this.userRepository.findByEmail(username).orElseThrow(()
                    -> new UsernameNotFoundException("User not found"));

            Token dbToken = tokenRepository.findByToken(refreshToken).orElseThrow(()
                    -> new JwtException("Refresh token not found"));

            if(dbToken.getTokenType() != TokenType.REFRESH) {
                throw new JwtException("Token is not of type refresh");
            }

            boolean isExpired = jwtService.isTokenExpired(refreshToken);

            boolean isValid = jwtService.isTokenValid(refreshToken, user);

            if (isExpired || dbToken.getTokenStatus() == TokenStatus.EXPIRED) {
                dbToken.setTokenStatus(TokenStatus.EXPIRED);
                tokenRepository.save(dbToken);
                throw new JwtException("The token is expired");
            }

            if (!isValid || dbToken.getTokenStatus() == TokenStatus.REVOKED) {
                dbToken.setTokenStatus(TokenStatus.REVOKED);
                tokenRepository.save(dbToken);
                throw new JwtException("The token is invalid");
            }

            Date expiryDate = jwtService.extractExpiration(refreshToken);
            long timeLeft = expiryDate.getTime() - System.currentTimeMillis();

            String tokenToSend = refreshToken;

            if (timeLeft < rotationThreshold) {
                String newRefreshToken = jwtService.generateRefreshToken(user);

                Token newRefresh = Token.builder()
                        .token(newRefreshToken)
                        .tokenStatus(TokenStatus.ACTIVE)
                        .tokenType(TokenType.REFRESH)
                        .user(user)
                        .build();

                tokenToSend = newRefreshToken;

                dbToken.setTokenStatus(TokenStatus.REVOKED);
                tokenRepository.save(dbToken);
                tokenRepository.save(newRefresh);

            }


            String accessToken = jwtService.generateToken(user);

            ResponseCookie refreshCookie = ResponseCookie.from("refreshToken", tokenToSend)
                    .sameSite("Strict")
                    .httpOnly(true)
                    .secure(true)
                    .path("/")
                    .maxAge(Duration.ofDays(7))
                    .build();
            response.addHeader(HttpHeaders.SET_COOKIE, refreshCookie.toString());

            System.out.println(user.getUsername());

            UserResponse userResponse = UserResponse.builder()
                    .username(user.getProfileUsername())
                    .email(user.getEmail())
                    .build();

            return RefreshResponse.builder()
                    .accessToken(accessToken)
                    .user(userResponse)
                    .build();
        }

        throw new JwtException("Refresh failed");
    }

}
