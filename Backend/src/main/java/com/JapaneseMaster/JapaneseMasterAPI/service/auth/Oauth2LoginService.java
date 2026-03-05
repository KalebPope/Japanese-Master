package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LoginResponse;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Token;
import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenStatus;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenType;
import com.JapaneseMaster.JapaneseMasterAPI.repository.TokenRepository;
import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import com.JapaneseMaster.JapaneseMasterAPI.util.UsernameUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Oauth2LoginService {

    private final UsernameUtil usernameUtil;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final TokenRepository tokenRepository;

    public LoginResponse oauth2Login(String email) {

        String uniqueUsername = usernameUtil.generateUniqueUsername(email);

        Users user = userRepository.findByEmail(email)
                .orElseGet(() -> {
                    Users newUser = Users.builder()
                            .email(email)
                            .username(uniqueUsername)
                            .password("")
                            .build();
                    return userRepository.save(newUser);
                });

        String token = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);


        Token dbToken = Token.builder()
                .token(token)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.BEARER)
                .user(user)
                .build();

        Token dbRefreshToken = Token.builder()
                .token(refreshToken)
                .tokenStatus(TokenStatus.ACTIVE)
                .tokenType(TokenType.REFRESH)
                .user(user)
                .build();

        jwtService.revokeAllTokens(user);
        tokenRepository.save(dbToken);
        tokenRepository.save(dbRefreshToken);

        return LoginResponse.builder()
                .token(token)
                .build();
    }
}
