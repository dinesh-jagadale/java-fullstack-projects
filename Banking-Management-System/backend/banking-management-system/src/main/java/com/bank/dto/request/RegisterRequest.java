package com.bank.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequest {

    @NotBlank(message = "First name is required")
    @Size(min = 2, max = 100)
    private String firstName;

    @NotBlank(message = "Last name is required")
    @Size(min = 2, max = 100)
    private String lastName;

    @NotBlank(message = "Username is required")
    @Size(min = 4, max = 30)
    private String username;

    @Email(message = "Invalid email address")
    @NotBlank(message = "Email is required")
    @Size(max = 150)
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 8, max = 100)
    @Pattern(
            regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@#$%^&+=!]).*$",
            message = "Password must contain uppercase, lowercase, digit and special character"
    )
    private String password;

    @NotBlank(message = "Mobile number is required")
    @Pattern(
            regexp = "^[6-9]\\d{9}$",
            message = "Invalid mobile number"
    )
    private String mobileNumber;

}