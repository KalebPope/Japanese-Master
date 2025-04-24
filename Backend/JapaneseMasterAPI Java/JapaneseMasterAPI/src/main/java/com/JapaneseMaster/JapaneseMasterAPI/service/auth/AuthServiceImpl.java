package com.JapaneseMaster.JapaneseMasterAPI.service.auth;
import com.JapaneseMaster.JapaneseMasterAPI.dto.LoginReq;
import com.JapaneseMaster.JapaneseMasterAPI.dto.SignupReq;
import com.JapaneseMaster.JapaneseMasterAPI.model.Users;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private final SignupService signupService;
    private final LoginService loginService;

    public AuthServiceImpl(SignupService signupService, LoginService loginService) {
        this.signupService = signupService;
        this.loginService = loginService;
    }

    public Users signup (SignupReq signupReq) {
        return signupService.signupUser(signupReq);
    }

    public Users login (LoginReq loginReq) {
        return loginService.loginUser(loginReq);
    }
}
