package com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response;

import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignupResponse {
    private String token;
    private UserResponse user;
}
