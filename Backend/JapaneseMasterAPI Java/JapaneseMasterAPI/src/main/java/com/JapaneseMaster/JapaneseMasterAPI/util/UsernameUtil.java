package com.JapaneseMaster.JapaneseMasterAPI.util;


import com.JapaneseMaster.JapaneseMasterAPI.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UsernameUtil {

    private final UserRepository userRepository;

    public String generateUniqueUsername(String email) {
        String initialUsername = email.toLowerCase().replaceAll("[@^a-z0-9]", "");
        String newUsername = initialUsername;
        int count = 0;

        while (userRepository.existsByUsername(newUsername)) {
            count++;
            newUsername = initialUsername  + count;
        }
        return newUsername;
    }
}
