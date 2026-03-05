package com.JapaneseMaster.JapaneseMasterAPI.entity;


import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenStatus;
import com.JapaneseMaster.JapaneseMasterAPI.enums.TokenType;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String token;

    private String deviceId;

    @Enumerated(EnumType.STRING)
    private TokenStatus tokenStatus;

    @Enumerated(EnumType.STRING)
    private TokenType tokenType;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users user;
}
