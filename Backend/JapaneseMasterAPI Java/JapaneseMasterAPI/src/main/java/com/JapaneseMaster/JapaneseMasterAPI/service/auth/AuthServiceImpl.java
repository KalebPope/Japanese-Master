package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LogoutRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.TokenRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LoginResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LogoutResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.TokenResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Token;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenStatus;
import com.JapaneseMaster.JapaneseMasterAPI.repository.TokenRepository;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import io.jsonwebtoken.JwtException;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
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

        Token token = Token.builder()
                .token(jwtToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .user(user)
                .build();

        jwtService.revokeAllTokens(user);
        tokenRepository.save(token);

        return SignupResponse.builder()
                .token(jwtToken)
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

        Token token = Token.builder()
                .token(jwtToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .user(userFound)
                .build();

        var dbToken = tokenRepository.findByToken(jwtToken).orElse(null);

        if(dbToken == null) {
            jwtService.revokeAllTokens(userFound);
            tokenRepository.save(token);
        }

        return LoginResponse.builder()
                .token(jwtToken)
                .build();
    }

    public LogoutResponse logout(LogoutRequest request) {

        System.out.println("Hello");

        String token = request.getToken().substring(7);

        Token dbToken = tokenRepository.findByToken(token).orElseThrow(() -> new JwtException("Could not find token in the database"));

        if(dbToken.getTokenStatus() == TokenStatus.EXPIRED || dbToken.getTokenStatus() == TokenStatus.REVOKED) {
            throw new JwtException("User is already logged out");
        }

        dbToken.setTokenStatus(TokenStatus.REVOKED);
        tokenRepository.save(dbToken);

        return LogoutResponse.builder()
                .message("Logout was successful")
                .build();

    }

    public TokenResponse validate(TokenRequest request) {

        String token = request.getToken().substring(7);

        String username = jwtService.extractUsername(token);

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        boolean isExpired = jwtService.isTokenExpired(token);

        boolean isValid = jwtService.isTokenValid(token, userDetails);

        Token dbToken = tokenRepository.findByToken(token).orElseThrow(() -> new JwtException("Could not find token in database"));

        if (isExpired) {
            dbToken.setTokenStatus(TokenStatus.EXPIRED);
            tokenRepository.save(dbToken);
            throw new JwtException("The token is expired");
        }

        if (!isValid) {
            dbToken.setTokenStatus(TokenStatus.REVOKED);
            tokenRepository.save(dbToken);
            throw new JwtException("The token is invalid");
        }

        return TokenResponse.builder()
                .token(request.getToken())
                .build();
    }
}
