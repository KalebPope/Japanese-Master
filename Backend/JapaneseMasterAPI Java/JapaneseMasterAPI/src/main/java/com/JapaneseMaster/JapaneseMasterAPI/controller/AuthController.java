package com.JapaneseMaster.JapaneseMasterAPI.controller;

import com.JapaneseMaster.JapaneseMasterAPI.dto.LoginReq;
import com.JapaneseMaster.JapaneseMasterAPI.dto.SignupReq;
import com.JapaneseMaster.JapaneseMasterAPI.model.Users;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.AuthServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
public class AuthController {

    private final AuthServiceImpl authService;

    public AuthController (AuthServiceImpl authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Users> createUser (@Valid @RequestBody SignupReq signupReq) {
        Users user = authService.signup(signupReq);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Users> login (@Valid @RequestBody LoginReq loginReq) {
        Users user = authService.login(loginReq);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
