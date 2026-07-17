package com.bank.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    private String accessToken;

    @Builder.Default
    private String tokenType = "Bearer";

    private Long userId;

    private String username;

    private String email;

    private String firstName;

    private String lastName;

    private Set<String> roles;

    private LocalDateTime loginTime;

    private String message;

}