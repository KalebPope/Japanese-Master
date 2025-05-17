package com.JapaneseMaster.JapaneseMasterAPI.config;

import com.JapaneseMaster.JapaneseMasterAPI.dto.auth.response.LoginResponse;
import com.JapaneseMaster.JapaneseMasterAPI.security.JwtAuthFilter;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.LogoutService;
import com.JapaneseMaster.JapaneseMasterAPI.service.auth.Oauth2LoginService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;
    private final AuthenticationProvider authProvider;
    private final LogoutService logoutService;
    private final Oauth2LoginService oauth2LoginService;
    private final CorsConfig corsConfig;

    @Value("${frontend.url}")
    private String frontendUrl;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .cors(cors -> cors.configurationSource(corsConfig.corsConfigurationSource()))
                .csrf((csrf) -> csrf.disable())
                .authorizeHttpRequests(auth ->
                        auth.requestMatchers("/api/auth/**")
                                .permitAll()
                                .anyRequest()
                                .authenticated())
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout((logout) -> logout
                        .logoutUrl("/api/auth/logout")
                        .addLogoutHandler(logoutService)
                        .logoutSuccessHandler(
                                (request, response, authentication)
                                -> SecurityContextHolder.clearContext()))
                .oauth2Login(oauth ->
                        oauth.successHandler((request, response, authentication) -> {

                            OAuth2User oauthUser = (OAuth2User) authentication.getPrincipal();

                            String email = oauthUser.getAttribute("email");

                            System.out.println(email);

                            LoginResponse token = oauth2LoginService.oauth2Login(email);

                            ObjectMapper objectMapper = new ObjectMapper();
                            objectMapper.writeValue(response.getWriter(), token);

                            response.sendRedirect(frontendUrl);
                        }))
                .build();
    }
}
