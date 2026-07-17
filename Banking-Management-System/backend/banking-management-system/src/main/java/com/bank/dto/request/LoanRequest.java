package com.bank.dto.request;

import java.math.BigDecimal;

import com.bank.enums.LoanType;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class LoanRequest {

    /* =====================================================
                    ACCOUNT
       ===================================================== */

    @NotBlank(message = "Account number is required.")
    private String accountNumber;

    @NotBlank(message = "Branch code is required.")
    private String branchCode;

    /* =====================================================
                    LOAN DETAILS
       ===================================================== */

    @NotNull(message = "Loan type is required.")
    private LoanType loanType;

    @NotNull(message = "Loan amount is required.")
    @DecimalMin(value = "1000.00",
            message = "Loan amount must be greater than ₹1000.")
    private BigDecimal requestedAmount;

    @NotNull(message = "Tenure is required.")
    @Min(value = 6,
            message = "Minimum tenure is 6 months.")
    private Integer tenureMonths;

    @NotBlank(message = "Loan purpose is required.")
    @Size(max = 500)
    private String loanPurpose;

    /* =====================================================
                    EMPLOYMENT DETAILS
       ===================================================== */

    @NotBlank(message = "Employer name is required.")
    @Size(max = 100)
    private String employerName;

    @NotBlank(message = "Designation is required.")
    @Size(max = 100)
    private String designation;

    @NotNull(message = "Monthly income is required.")
    @DecimalMin(value = "0.00")
    private BigDecimal monthlyIncome;

    @NotBlank(message = "Employment type is required.")
    private String employmentType;

    @Size(max = 100)
    private String businessName;

    @Size(max = 100)
    private String businessType;

    @Min(value = 0)
    private Integer workExperienceYears;

    /* =====================================================
                    GUARANTOR
       ===================================================== */

    @NotBlank(message = "Guarantor name is required.")
    @Size(max = 100)
    private String guarantorName;

    @NotBlank(message = "Guarantor mobile is required.")
    @Pattern(
            regexp = "^[6-9][0-9]{9}$",
            message = "Invalid mobile number.")
    private String guarantorMobile;

    @Email
    private String guarantorEmail;

    @NotBlank(message = "Guarantor relation is required.")
    private String guarantorRelation;

    @NotBlank(message = "Guarantor address is required.")
    @Size(max = 500)
    private String guarantorAddress;
    
    /* =====================================================
    COLLATERAL DETAILS
===================================================== */

@NotBlank(message = "Collateral type is required.")
@Size(max = 100)
private String collateralType;

@NotBlank(message = "Collateral description is required.")
@Size(max = 300)
private String collateralDescription;

@NotNull(message = "Collateral value is required.")
@DecimalMin(
value = "0.00",
message = "Collateral value must be greater than 0."
)
private BigDecimal collateralValue;

/* =====================================================
    REMARKS
===================================================== */

@Size(max = 500)
private String remarks;

/* =====================================================
    DECLARATION
===================================================== */

@NotNull(message = "Terms acceptance is required.")
private Boolean termsAccepted;

@NotNull(message = "Declaration acceptance is required.")
private Boolean declarationAccepted;

/* =====================================================
    CONSTRUCTORS
===================================================== */

public LoanRequest() {
}

/* =====================================================
    GETTERS & SETTERS
===================================================== */

public String getAccountNumber() {
return accountNumber;
}

public void setAccountNumber(
String accountNumber) {
this.accountNumber = accountNumber;
}

public String getBranchCode() {
return branchCode;
}

public void setBranchCode(
String branchCode) {
this.branchCode = branchCode;
}

public LoanType getLoanType() {
return loanType;
}

public void setLoanType(
LoanType loanType) {
this.loanType = loanType;
}

public BigDecimal getRequestedAmount() {
return requestedAmount;
}

public void setRequestedAmount(
BigDecimal requestedAmount) {
this.requestedAmount = requestedAmount;
}

public Integer getTenureMonths() {
return tenureMonths;
}

public void setTenureMonths(
Integer tenureMonths) {
this.tenureMonths = tenureMonths;
}

public String getLoanPurpose() {
return loanPurpose;
}

public void setLoanPurpose(
String loanPurpose) {
this.loanPurpose = loanPurpose;
}

public String getEmployerName() {
return employerName;
}

public void setEmployerName(
String employerName) {
this.employerName = employerName;
}

public String getDesignation() {
return designation;
}

public void setDesignation(
String designation) {
this.designation = designation;
}

public BigDecimal getMonthlyIncome() {
return monthlyIncome;
}

public void setMonthlyIncome(
BigDecimal monthlyIncome) {
this.monthlyIncome = monthlyIncome;
}

public String getEmploymentType() {
return employmentType;
}

public void setEmploymentType(
String employmentType) {
this.employmentType = employmentType;
}

public String getBusinessName() {
return businessName;
}

public void setBusinessName(
String businessName) {
this.businessName = businessName;
}

public String getBusinessType() {
return businessType;
}

public void setBusinessType(
String businessType) {
this.businessType = businessType;
}

public Integer getWorkExperienceYears() {
return workExperienceYears;
}

public void setWorkExperienceYears(
Integer workExperienceYears) {
this.workExperienceYears = workExperienceYears;
}

public String getGuarantorName() {
return guarantorName;
}

public void setGuarantorName(
String guarantorName) {
this.guarantorName = guarantorName;
}

public String getGuarantorMobile() {
return guarantorMobile;
}

public void setGuarantorMobile(
String guarantorMobile) {
this.guarantorMobile = guarantorMobile;
}

public String getGuarantorEmail() {
return guarantorEmail;
}

public void setGuarantorEmail(
String guarantorEmail) {
this.guarantorEmail = guarantorEmail;
}

public String getGuarantorRelation() {
return guarantorRelation;
}

public void setGuarantorRelation(
String guarantorRelation) {
this.guarantorRelation = guarantorRelation;
}

public String getGuarantorAddress() {
return guarantorAddress;
}

public void setGuarantorAddress(
String guarantorAddress) {
this.guarantorAddress = guarantorAddress;
}

public String getCollateralType() {
    return collateralType;
}

public void setCollateralType(
        String collateralType) {
    this.collateralType = collateralType;
}

public String getCollateralDescription() {
    return collateralDescription;
}

public void setCollateralDescription(
        String collateralDescription) {
    this.collateralDescription = collateralDescription;
}

public BigDecimal getCollateralValue() {
    return collateralValue;
}

public void setCollateralValue(
        BigDecimal collateralValue) {
    this.collateralValue = collateralValue;
}

/* =====================================================
                REMARKS
   ===================================================== */

public String getRemarks() {
    return remarks;
}

public void setRemarks(
        String remarks) {
    this.remarks = remarks;
}

/* =====================================================
                DECLARATION
   ===================================================== */

public Boolean getTermsAccepted() {
    return termsAccepted;
}

public void setTermsAccepted(
        Boolean termsAccepted) {
    this.termsAccepted = termsAccepted;
}

public Boolean getDeclarationAccepted() {
    return declarationAccepted;
}

public void setDeclarationAccepted(
        Boolean declarationAccepted) {
    this.declarationAccepted = declarationAccepted;
}

}