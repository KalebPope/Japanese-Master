package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import jakarta.validation.ValidationException;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SignupService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final SignupResponse signupResponse;

    public SignupResponse signupUser(SignupRequest request) {

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

        return SignupResponse.builder()
                .token(jwtToken)
                .build();
    }
}
