package com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LogoutRequest {

    @NonNull
    private String token;
}
