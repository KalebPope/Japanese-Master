package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import jakarta.validation.ValidationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public LoginService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Users loginUser(LoginRequest loginRequest) {

        final String username = loginRequest.getUsername();
        final String email = loginRequest.getEmail();

        if (username == null && email == null) {
            throw new ValidationException("Username or Email has not been provided.");
        }

        Optional<Users> user = (username != null)
                ? userRepository.findByUsername(username)
                : userRepository.findByEmail(email);

        Users userFound = user.orElseThrow(() -> new ValidationException("User not found"));

        boolean verifyPassword = passwordEncoder.matches(loginRequest.getPassword(), userFound.getPassword());

        if (!verifyPassword) {
            throw new ValidationException("Password is incorrect");
        }

        return userFound;

    }

}
