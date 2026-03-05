package com.JapaneseMaster.JapaneseMasterAPI.dto.auth.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TokenRequest {

    @NonNull
    private String token;
}
