package com.bank.dto.request;

import java.math.BigDecimal;

import com.bank.enums.AccountType;
import com.bank.enums.IncomeRange;
import com.bank.enums.OccupationType;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class AccountApplicationRequest {

    /* ==========================================
            Account Details
    ========================================== */

    @NotNull(message = "Account type is required.")
    private AccountType accountType;

    @NotBlank(message = "Branch code is required.")
    @Size(max = 20)
    private String branchCode;

    @NotBlank(message = "Branch name is required.")
    @Size(max = 100)
    private String branchName;

    /* ==========================================
            Occupation Details
    ========================================== */

    @NotBlank(message = "Occupation is required.")
    @Size(max = 100)
    private String occupation;

    @NotNull(message = "Occupation type is required.")
    private OccupationType occupationType;

    @NotNull(message = "Income range is required.")
    private IncomeRange incomeRange;

    @NotNull(message = "Annual income is required.")
    @DecimalMin(value = "0.0", inclusive = true)
    private BigDecimal annualIncome;

    @NotBlank(message = "Source of income is required.")
    @Size(max = 200)
    private String sourceOfIncome;

    /* ==========================================
            Nominee Details
    ========================================== */

    @NotBlank(message = "Nominee name is required.")
    @Size(max = 100)
    private String nomineeName;

    @NotBlank(message = "Nominee relation is required.")
    @Size(max = 50)
    private String nomineeRelation;

    @NotBlank(message = "Nominee mobile number is required.")
    @Pattern(
            regexp = "^[6-9][0-9]{9}$",
            message = "Invalid mobile number."
    )
    private String nomineeMobile;

    /* ==========================================
            Deposit Details
    ========================================== */

    @NotNull(message = "Initial deposit is required.")
    @DecimalMin(value = "500.00", message = "Minimum deposit must be ₹500.")
    private BigDecimal initialDeposit;

    /* ==========================================
            Terms & Conditions
    ========================================== */

    @NotNull(message = "Terms acceptance is required.")
    private Boolean termsAccepted;

    @NotNull(message = "Declaration acceptance is required.")
    private Boolean declarationAccepted;

    /* ==========================================
            Constructors
    ========================================== */

    public AccountApplicationRequest() {
    }

    /* ==========================================
            Getters and Setters
    ========================================== */

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public String getBranchCode() {
        return branchCode;
    }

    public void setBranchCode(String branchCode) {
        this.branchCode = branchCode;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public OccupationType getOccupationType() {
        return occupationType;
    }

    public void setOccupationType(OccupationType occupationType) {
        this.occupationType = occupationType;
    }

    public IncomeRange getIncomeRange() {
        return incomeRange;
    }

    public void setIncomeRange(IncomeRange incomeRange) {
        this.incomeRange = incomeRange;
    }

    public BigDecimal getAnnualIncome() {
        return annualIncome;
    }

    public void setAnnualIncome(BigDecimal annualIncome) {
        this.annualIncome = annualIncome;
    }

    public String getSourceOfIncome() {
        return sourceOfIncome;
    }

    public void setSourceOfIncome(String sourceOfIncome) {
        this.sourceOfIncome = sourceOfIncome;
    }

    public String getNomineeName() {
        return nomineeName;
    }

    public void setNomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
    }

    public String getNomineeRelation() {
        return nomineeRelation;
    }

    public void setNomineeRelation(String nomineeRelation) {
        this.nomineeRelation = nomineeRelation;
    }

    public String getNomineeMobile() {
        return nomineeMobile;
    }

    public void setNomineeMobile(String nomineeMobile) {
        this.nomineeMobile = nomineeMobile;
    }

    public BigDecimal getInitialDeposit() {
        return initialDeposit;
    }

    public void setInitialDeposit(BigDecimal initialDeposit) {
        this.initialDeposit = initialDeposit;
    }

    public Boolean getTermsAccepted() {
        return termsAccepted;
    }

    public void setTermsAccepted(Boolean termsAccepted) {
        this.termsAccepted = termsAccepted;
    }

    public Boolean getDeclarationAccepted() {
        return declarationAccepted;
    }

    public void setDeclarationAccepted(Boolean declarationAccepted) {
        this.declarationAccepted = declarationAccepted;
    }

}