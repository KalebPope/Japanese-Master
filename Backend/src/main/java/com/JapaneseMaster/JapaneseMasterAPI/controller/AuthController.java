package com.JapaneseMaster.JapaneseMasterAPI.controller;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.TokenRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LoginResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.RefreshResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.ValidateResponse;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
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
    public ResponseEntity<SignupResponse> signup(@Valid @RequestBody SignupRequest request, HttpServletResponse response) {
        return ResponseEntity.ok(authService.signup(request, response));
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request, HttpServletResponse response) {
        return ResponseEntity.ok(authService.login(request, response));
    }

    @PostMapping("/validate")
    public ResponseEntity<ValidateResponse> validate(HttpServletRequest request) {
        return ResponseEntity.ok(authService.validate(request));
    }

    @PostMapping("/refresh")
    public ResponseEntity<RefreshResponse> refresh(HttpServletRequest request, HttpServletResponse response) {
        return ResponseEntity.ok(authService.refresh(request, response));
    }

}
