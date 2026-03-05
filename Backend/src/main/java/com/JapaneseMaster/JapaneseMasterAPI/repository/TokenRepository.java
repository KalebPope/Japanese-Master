package com.JapaneseMaster.JapaneseMasterAPI.repository;

import com.JapaneseMaster.JapaneseMasterAPI.entity.Token;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Integer> {

    List<Token> findByUserIdAndTokenStatus(Long userId, TokenStatus tokenStatus);

    Optional<Token> findByToken(String token);


}
