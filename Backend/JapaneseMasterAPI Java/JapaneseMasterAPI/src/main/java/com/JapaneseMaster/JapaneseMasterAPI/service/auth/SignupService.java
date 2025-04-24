package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.SignupReq;
import com.JapaneseMaster.JapaneseMasterAPI.model.Users;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepo;
import jakarta.validation.ValidationException;
import org.springframework.security.crypto.password.PasswordEncoder;

public class SignupService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public SignupService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public Users signupUser (SignupReq signupReq) {

        if (userRepo.existsByUsername(signupReq.getUsername())) {
            System.out.println("Hello");
            throw new ValidationException("Username is already taken");
        }

        if (userRepo.existsByEmail(signupReq.getEmail())) {
            throw new ValidationException("Email is already registered");
        }

        Users user = new Users();
        user.setUsername(signupReq.getUsername());
        user.setEmail(signupReq.getEmail());

        String hashedPassword = passwordEncoder.encode((signupReq.getPassword()));

        user.setPassword(hashedPassword);
        return userRepo.save(user);
    }
}
