package com.JapaneseMaster.JapaneseMasterAPI.service;
import com.JapaneseMaster.JapaneseMasterAPI.dto.LoginReq;
import com.JapaneseMaster.JapaneseMasterAPI.dto.SignupReq;
import com.JapaneseMaster.JapaneseMasterAPI.model.Users;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepo;
import jakarta.validation.ValidationException;
import jakarta.validation.constraints.Email;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;

    public AuthService (UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public Users createUser (SignupReq signupReq) {

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
