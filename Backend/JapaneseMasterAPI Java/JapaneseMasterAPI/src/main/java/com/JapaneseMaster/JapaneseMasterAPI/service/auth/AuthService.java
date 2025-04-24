package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.LoginReq;
import com.JapaneseMaster.JapaneseMasterAPI.dto.SignupReq;
import com.JapaneseMaster.JapaneseMasterAPI.model.Users;

public interface AuthService {
    public Users signup(SignupReq signupReq);
    public Users login(LoginReq loginReq);
}
