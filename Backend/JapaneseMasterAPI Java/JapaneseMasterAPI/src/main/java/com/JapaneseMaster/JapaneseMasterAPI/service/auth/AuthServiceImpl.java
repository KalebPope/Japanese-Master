package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LoginResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.RefreshResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.ValidateResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Token;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenStatus;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenType;
import com.JapaneseMaster.JapaneseMasterAPI.repository.TokenRepository;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import com.JapaneseMaster.JapaneseMasterAPI.util.UsernameUtil;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
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
    private final UsernameUtil usernameUtil;

    public SignupResponse signup(SignupRequest request) {
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

        Token token = Token.builder()
                .token(jwtToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.BEARER)
                .user(user)
                .build();

        Token refresh = Token.builder()
                .token(refreshToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.REFRESH)
                .user(user)
                .build();

        jwtService.revokeAllTokens(user);
        tokenRepository.save(token);
        tokenRepository.save(refresh);

        return SignupResponse.builder()
                .token(jwtToken)
                .refreshToken(refreshToken)
                .build();
    }

    public LoginResponse login(LoginRequest request) {

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

        Token dbToken = Token.builder()
                .token(jwtToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.BEARER)
                .user(userFound)
                .build();

        Token dbRefreshToken = Token.builder()
                .token(jwtToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.REFRESH)
                .user(userFound)
                .build();


            jwtService.revokeAllTokens(userFound);
            tokenRepository.save(dbToken);
            tokenRepository.save(dbRefreshToken);

        return LoginResponse.builder()
                .token(jwtToken)
                .refreshToken(refreshToken)
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

    public RefreshResponse refresh(HttpServletRequest request) {

        final String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new JwtException("Refresh token not found");
        }

        String refreshToken = authHeader.substring(7);
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

            String accessToken = jwtService.generateToken(user);
            String newRefreshToken = jwtService.generateRefreshToken(user);

            Token token = Token.builder()
                    .token(accessToken)
                    .tokenStatus(TokenStatus.ACTIVE)
                    .tokenType(TokenType.BEARER)
                    .user(user)
                    .build();

            Token refresh = Token.builder()
                    .token(newRefreshToken)
                    .tokenStatus(TokenStatus.ACTIVE)
                    .tokenType(TokenType.REFRESH)
                    .user(user)
                    .build();

            jwtService.revokeAllTokens(user);
            tokenRepository.save(token);
            tokenRepository.save(refresh);

            return RefreshResponse.builder()
                    .accessToken(accessToken)
                    .refreshToken(newRefreshToken)
                    .build();
        }

        throw new JwtException("Refresh failed");
    }

}
