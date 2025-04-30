package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.*;

public interface AuthService {

    public SignupResponse signup(SignupRequest signupRequest);

    public LoginResponse login(LoginRequest loginRequest);

    public TokenResponse validate(TokenRequest request);
}
