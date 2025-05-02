package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import com.JapaneseMaster.JapaneseMasterAPI.entity.Users;
import io.jsonwebtoken.Claims;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.function.Function;

public interface JwtService {

    String generateToken(UserDetails userDetails);

    String generateRefreshToken(UserDetails userDetails);

    Claims extractAllClaims(String token);

    <T> T extractClaims(String token, Function<Claims, T> claimsResolver);

    String extractUsername(String token);

    void revokeAllTokens(Users user);

    boolean isTokenValid(String token, UserDetails userDetails);

    boolean isTokenExpired(String token);

}
