package com.JapaneseMaster.JapaneseMasterAPI.controller;

import com.JapaneseMaster.JapaneseMasterAPI.dto.LoginReq;
import com.JapaneseMaster.JapaneseMasterAPI.dto.SignupReq;
import com.JapaneseMaster.JapaneseMasterAPI.model.Users;
import com.JapaneseMaster.JapaneseMasterAPI.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController (AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public ResponseEntity<Users> createUser (@Valid @RequestBody SignupReq signupReq) {
        Users user = authService.createUser(signupReq);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Users> login (@Valid @RequestBody LoginReq loginReq) {
        Users user = authService.loginUser(loginReq);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
