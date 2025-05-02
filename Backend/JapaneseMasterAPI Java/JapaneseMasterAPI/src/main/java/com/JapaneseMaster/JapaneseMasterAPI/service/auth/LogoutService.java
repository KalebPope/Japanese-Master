package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.entity.Token;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenStatus;
import com.JapaneseMaster.JapaneseMasterAPI.repository.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    private final TokenRepository tokenRepository;

    private void logoutResponse(HttpServletResponse response, String message, int status) {
        response.setStatus(status);
        response.setContentType("application/json");
        try {
            response.getWriter().write("{\"message\": \""+ message +"\"}");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {

        final String authHeader = request.getHeader("Authorization");
        final String jwt;

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            return;
        }

        jwt = authHeader.substring(7);

        Token dbToken = tokenRepository.findByToken(jwt).orElse(null);

        if (dbToken == null) {
            logoutResponse(response, "Could not find token in the database", HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        if(dbToken.getTokenStatus() == TokenStatus.EXPIRED || dbToken.getTokenStatus() == TokenStatus.REVOKED) {
            logoutResponse(response, "Token is expired or revoked", HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        dbToken.setTokenStatus(TokenStatus.REVOKED);
        tokenRepository.save(dbToken);
        logoutResponse(response, "Logout was successful", HttpServletResponse.SC_OK);

    }
}
