package com.JapaneseMaster.JapaneseMasterAPI.controller;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.AuthServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthServiceImpl authService;

    @PostMapping("/signup")
    public ResponseEntity<SignupResponse> signup(@Valid @RequestBody SignupRequest request) {
        return ResponseEntity.ok(authService.signup(request));
    }

    @PostMapping("/login")
    public ResponseEntity<Users> login(@Valid @RequestBody LoginRequest loginRequest) {
        Users user = authService.login(loginRequest);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
