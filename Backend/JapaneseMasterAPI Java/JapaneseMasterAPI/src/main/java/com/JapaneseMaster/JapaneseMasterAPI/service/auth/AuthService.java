package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.LogoutRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request.TokenRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LoginResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LogoutResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.TokenResponse;

public interface AuthService {

    public SignupResponse signup(SignupRequest signupRequest);

    public LoginResponse login(LoginRequest loginRequest);

    public LogoutResponse logout(LogoutRequest logoutRequest);

    public TokenResponse validate(TokenRequest request);
}
