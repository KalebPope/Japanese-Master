package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.*;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
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

    private final JwtService jwtServiceImpl;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;
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

        String jwtToken = jwtServiceImpl.generateToken(user);

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

        String jwtToken = jwtServiceImpl.generateToken(userFound);

        return LoginResponse.builder()
                .token(jwtToken)
                .build();
    }

    public TokenResponse validate(TokenRequest request) {

        String token = request.getToken();

        String username = jwtServiceImpl.extractUsername(token);

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        boolean isExpired = jwtServiceImpl.isTokenExpired(token);

        if (isExpired) {
            throw new JwtException("The token is expired");
        }

        boolean isValid = jwtServiceImpl.isTokenValid(token, userDetails);

        if (!isValid) {
            throw new JwtException("The token is invalid");
        }

        return TokenResponse.builder()
                .token(request.getToken())
                .build();
    }
}
