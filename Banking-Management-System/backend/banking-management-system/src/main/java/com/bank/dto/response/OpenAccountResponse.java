package com.bank.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bank.enums.AccountType;
import com.bank.enums.ApplicationStatus;
import com.bank.enums.EmploymentType;
import com.bank.enums.KycStatus;

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
public class OpenAccountResponse {

    /* ==========================================
                APPLICATION DETAILS
    ========================================== */

    private Long applicationId;

    private ApplicationStatus applicationStatus;

    private LocalDate applicationDate;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    /* ==========================================
                CUSTOMER DETAILS
    ========================================== */

    private Long customerId;

    private String customerName;

    private String username;

    private String email;

    private String mobileNumber;

    /* ==========================================
                ACCOUNT DETAILS
    ========================================== */

    private AccountType accountType;

    private BigDecimal initialDeposit;

    private String purposeOfAccount;

    /* ==========================================
                EMPLOYMENT DETAILS
    ========================================== */

    private String occupation;

    private EmploymentType employmentType;

    private String employerName;

    private BigDecimal annualIncome;

    /* ==========================================
                NOMINEE DETAILS
    ========================================== */

    private String nomineeName;

    private String nomineeRelation;

    private String nomineeMobile;

    /* ==========================================
                ADDRESS DETAILS
    ========================================== */

    private String addressLine1;

    private String addressLine2;

    private String city;

    private String district;

    private String state;

    private String pincode;

    /* ==========================================
                KYC STATUS
    ========================================== */

    private KycStatus kycStatus;

    /* ==========================================
                DOCUMENTS
    ========================================== */

    private String aadhaarDocument;

    private String panDocument;

    private String addressProofDocument;

    private String photoDocument;

    private String signatureDocument;

    /* ==========================================
                EMPLOYEE VERIFICATION
    ========================================== */

    private Long employeeId;

    private String employeeName;

    private LocalDateTime employeeVerifiedAt;

    private String employeeRemarks;

    /* ==========================================
                ADMIN APPROVAL
    ========================================== */

    private Long adminId;

    private String adminName;

    private LocalDateTime adminApprovedAt;

    private String adminRemarks;

    /* ==========================================
                ACCOUNT DETAILS
    ========================================== */

    private Long accountId;

    private String accountNumber;

    private String branchName;

    /* ==========================================
                RESPONSE
    ========================================== */

    private String message;

}