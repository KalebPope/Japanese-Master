package com.JapaneseMaster.JapaneseMasterAPI.service.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

//This service generates, validates and extracts tokens

@Service
public class JwtService {

    private static final String SECRET_KEY = "qJDJQU7Swh+9LM5HhSkF9Tp7Y+4pVtMQ7HkC+3iOWEk=";

    //This method converts your secret JWT key to bytes so the HMAC can create a valid key to use for verification

    private SecretKey getSignInKey() {
        byte[] convertKeyToBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(convertKeyToBytes);
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    //If the exp date is before the current date e.g. expires 13th and new date is 14th it is invalid

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    //Generates the token with a subject field, iss and exp date. It then signs the token and compacts it.

    public String generateToken(UserDetails userDetails) {
        return Jwts.builder()
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 30 * 60 * 1000))
                .signWith(getSignInKey())
                .compact();
    }

    //This takes the JWT token (e.g. re45ofj204jg032ujj6hg903jh9035jh) and decodes it into a Claims obj.

    public Claims extractAllClaims(String token) {
        return Jwts.parser() //Creates a parser
                .verifyWith(getSignInKey()) //Tells the parser what key it is to verify the JWT with
                .build() //Builds the parser
                .parseSignedClaims(token) //Parses the token and verifies the key from the verify with method
                .getPayload(); //Extracts the claims of the JWT
    }

    //This is a generic method which allows for different methods to be passed without repeating
    //<T> is telling this method is of type generic. T is the return type of extractClaims.
    //The Function<Claims, T> is the type of the function and its return type
    // e.g. getSubject() returns a string (subject = "John") so Function<Claims, String>

    public <T> T extractClaims(String token, Function<Claims, T> claimsResolver) {

        final Claims claims = extractAllClaims(token);

        //You take the claims obj (which contains all the data from the JWT) and apply the function passed
        // in the parameters e.g. claims.getSubject();

        return claimsResolver.apply(claims);
    }

    public String extractUsername(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    private Date extractExpiration(String token) {
        return extractClaims(token, Claims::getExpiration);
    }

}