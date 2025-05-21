package com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RefreshResponse {
    private String accessToken;
    private UserResponse user;
}
