package com.JapaneseMaster.JapaneseMasterAPI.dto.auth;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SignupResponse {

    private String token;
}
