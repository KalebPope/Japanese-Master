package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.TokenRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LoginResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.RefreshResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.ValidateResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthService {

    public SignupResponse signup(SignupRequest signupRequest);

    public LoginResponse login(LoginRequest loginRequest);

    public ValidateResponse validate(HttpServletRequest request);

    public RefreshResponse refresh(HttpServletRequest request);
}
