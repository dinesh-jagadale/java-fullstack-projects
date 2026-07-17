package com.bank.dto.request;

import java.math.BigDecimal;

import com.bank.enums.AccountType;
import com.bank.enums.EmploymentType;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OpenAccountRequest {

    /* ==========================================
                ACCOUNT DETAILS
    ========================================== */

    @NotNull(message = "Account type is required.")
    private AccountType accountType;

    @NotNull(message = "Initial deposit is required.")
    @DecimalMin(value = "0.0", inclusive = false,
            message = "Initial deposit must be greater than zero.")
    private BigDecimal initialDeposit;

    @NotBlank(message = "Purpose of account is required.")
    @Size(max = 500)
    private String purposeOfAccount;

    /* ==========================================
                PERSONAL DETAILS
    ========================================== */

    @NotBlank(message = "Occupation is required.")
    @Size(max = 120)
    private String occupation;

    @NotNull(message = "Employment type is required.")
    private EmploymentType employmentType;

    @Size(max = 120)
    private String employerName;

    @NotNull(message = "Annual income is required.")
    @DecimalMin(value = "0.0", inclusive = false)
    private BigDecimal annualIncome;

    /* ==========================================
                NOMINEE DETAILS
    ========================================== */

    @NotBlank(message = "Nominee name is required.")
    @Size(max = 120)
    private String nomineeName;

    @NotBlank(message = "Nominee relationship is required.")
    @Size(max = 50)
    private String nomineeRelation;

    @Pattern(
            regexp = "^[6-9][0-9]{9}$",
            message = "Invalid nominee mobile number."
    )
    private String nomineeMobile;

    /* ==========================================
                ADDRESS DETAILS
    ========================================== */

    @NotBlank(message = "Address Line 1 is required.")
    @Size(max = 300)
    private String addressLine1;

    @Size(max = 300)
    private String addressLine2;

    @NotBlank(message = "City is required.")
    @Size(max = 100)
    private String city;

    @NotBlank(message = "District is required.")
    @Size(max = 100)
    private String district;

    @NotBlank(message = "State is required.")
    @Size(max = 100)
    private String state;

    @Pattern(
            regexp = "^[1-9][0-9]{5}$",
            message = "Invalid PIN Code."
    )
    private String pincode;

    /* ==========================================
                KYC DETAILS
    ========================================== */

    @NotBlank(message = "Aadhaar Number is required.")
    @Pattern(
            regexp = "^[0-9]{12}$",
            message = "Aadhaar number must contain 12 digits."
    )
    private String aadhaarNumber;

    @NotBlank(message = "PAN Number is required.")
    @Pattern(
            regexp = "^[A-Z]{5}[0-9]{4}[A-Z]{1}$",
            message = "Invalid PAN Number."
    )
    private String panNumber;

    @Email(message = "Invalid Email.")
    @NotBlank(message = "Email is required.")
    private String email;

    @Pattern(
            regexp = "^[6-9][0-9]{9}$",
            message = "Invalid Mobile Number."
    )
    private String mobileNumber;

    /* ==========================================
                DOCUMENT PATHS
        (Multipart upload will be added later)
    ========================================== */

    private String aadhaarDocument;

    private String panDocument;

    private String addressProofDocument;

    private String photoDocument;

    private String signatureDocument;

}