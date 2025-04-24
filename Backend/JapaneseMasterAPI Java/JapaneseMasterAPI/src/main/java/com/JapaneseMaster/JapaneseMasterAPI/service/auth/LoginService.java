package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.LoginReq;
import com.JapaneseMaster.JapaneseMasterAPI.model.Users;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepo;
import jakarta.validation.ValidationException;
import org.springframework.security.crypto.password.PasswordEncoder;

public class LoginService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public LoginService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public Users loginUser (LoginReq loginReq) {

        final String username = loginReq.getUsername();
        final String email = loginReq.getEmail();

        Users user = null;

        if (username == null && email == null ) {
            throw new ValidationException("Username or Email has not been provided.");
        }

        if (username != null) {
            user = userRepo.findByUsername(username);
        } else {
            user = userRepo.findByEmail(email);
        }

        boolean verifyPassword = passwordEncoder.matches(loginReq.getPassword(), user.getPassword());
        if (!verifyPassword) {
            throw new ValidationException("Password is incorrect");
        }

        return user;

    }

}
