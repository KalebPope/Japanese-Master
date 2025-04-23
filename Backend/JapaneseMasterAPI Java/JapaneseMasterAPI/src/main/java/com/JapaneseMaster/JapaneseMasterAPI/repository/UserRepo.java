package com.JapaneseMaster.JapaneseMasterAPI.repository;

import com.JapaneseMaster.JapaneseMasterAPI.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users, Integer> {
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    Users findByUsername(String username);
    Users findByEmail(String email);
}
