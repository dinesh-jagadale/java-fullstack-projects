package com.bank.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponse {

    private Long id;

    private String firstName;

    private String lastName;

    private String username;

    private String email;

    private String phoneNumber;

    private String role;

}