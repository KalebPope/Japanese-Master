package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;

public interface AuthService {
    public SignupResponse signup(SignupRequest signupRequest);

    public Users login(LoginRequest loginRequest);
}
