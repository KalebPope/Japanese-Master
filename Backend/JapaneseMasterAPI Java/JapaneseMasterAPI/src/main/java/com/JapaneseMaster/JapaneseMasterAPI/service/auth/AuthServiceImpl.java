package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.LoginRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupRequest;
import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.SignupResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final SignupService signupService;
    private final LoginService loginService;

    public SignupResponse signup(SignupRequest request) {
        return signupService.signupUser(request);
    }

    public Users login(LoginRequest loginRequest) {
        return loginService.loginUser(loginRequest);
    }
}
