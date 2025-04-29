package com.JapaneseMaster.JapaneseMasterAPI.config;

import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import com.JapaneseMaster.JapaneseMasterAPI.security.JwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private JwtAuthFilter jwtAuthFilter;
    private final AuthenticationProvider authProvider;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .csrf((csrf) -> csrf.disable())  // Disable CSRF for stateless APIs
                .authorizeHttpRequests(auth ->
                        auth.requestMatchers("/api/auth/**")
                                .permitAll()
                                .anyRequest()
                                .authenticated())
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}
