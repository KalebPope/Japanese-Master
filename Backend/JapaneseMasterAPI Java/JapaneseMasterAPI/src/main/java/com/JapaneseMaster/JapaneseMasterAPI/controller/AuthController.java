package com.JapaneseMaster.JapaneseMasterAPI.controller;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.*;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.AuthService;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.AuthServiceImpl;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.JwtServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<SignupResponse> signup(@Valid @RequestBody SignupRequest request) {
        return ResponseEntity.ok(authService.signup(request));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/validate")
    public ResponseEntity<TokenResponse> validate(@Valid @RequestBody TokenRequest request) {
        return ResponseEntity.ok(authService.validate(request));
    }
}
