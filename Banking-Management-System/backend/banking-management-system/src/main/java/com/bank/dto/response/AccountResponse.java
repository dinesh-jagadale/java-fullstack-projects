package com.bank.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bank.enums.AccountStatus;
import com.bank.enums.AccountType;

public class AccountResponse {

    /* =========================================================
                    ACCOUNT INFORMATION
       ========================================================= */

    private Long id;

    private String accountNumber;

    private String cifNumber;

    private String accountName;

    private AccountType accountType;

    private AccountStatus status;

    /* =========================================================
                    CUSTOMER
       ========================================================= */

    private Long customerId;

    private String customerName;

    private String customerEmail;

    private String customerMobile;

    /* =========================================================
                    BRANCH
       ========================================================= */

    private Long branchId;

    private String branchCode;

    private String branchName;

    /* =========================================================
                    BALANCE
       ========================================================= */

    private BigDecimal availableBalance;

    private BigDecimal ledgerBalance;

    private BigDecimal holdBalance;

    private BigDecimal minimumBalance;

    private BigDecimal interestRate;

    private String currency;

    /* =========================================================
                    ACCOUNT STATUS
       ========================================================= */

    private Boolean kycVerified;

    private Boolean debitAllowed;

    private Boolean creditAllowed;

    private Boolean internetBankingEnabled;

    private Boolean mobileBankingEnabled;

    private Boolean chequeBookIssued;

    private Boolean atmCardIssued;

    private Boolean frozen;

    private Boolean closed;

    /* =========================================================
                    EMPLOYEE / ADMIN
       ========================================================= */

    private Long createdByEmployeeId;

    private String createdByEmployeeName;

    private Long approvedByAdminId;

    private String approvedByAdminName;

    /* =========================================================
                    IMPORTANT DATES
       ========================================================= */

    private LocalDate openedDate;

    private LocalDate closedDate;

    private LocalDate lastTransactionDate;

    /* =========================================================
                    AUDIT
       ========================================================= */

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    /* =========================================================
                    CONSTRUCTORS
       ========================================================= */

    public AccountResponse() {
    }

    /* =========================================================
                    GETTERS & SETTERS
       ========================================================= */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getCifNumber() {
        return cifNumber;
    }

    public void setCifNumber(String cifNumber) {
        this.cifNumber = cifNumber;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public AccountStatus getStatus() {
        return status;
    }

    public void setStatus(AccountStatus status) {
        this.status = status;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    public String getCustomerMobile() {
        return customerMobile;
    }

    public void setCustomerMobile(String customerMobile) {
        this.customerMobile = customerMobile;
    }

    public Long getBranchId() {
        return branchId;
    }

    public void setBranchId(Long branchId) {
        this.branchId = branchId;
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

    public BigDecimal getAvailableBalance() {
        return availableBalance;
    }

    public void setAvailableBalance(BigDecimal availableBalance) {
        this.availableBalance = availableBalance;
    }

    public BigDecimal getLedgerBalance() {
        return ledgerBalance;
    }

    public void setLedgerBalance(BigDecimal ledgerBalance) {
        this.ledgerBalance = ledgerBalance;
    }

    public BigDecimal getHoldBalance() {
        return holdBalance;
    }

    public void setHoldBalance(BigDecimal holdBalance) {
        this.holdBalance = holdBalance;
    }

    public BigDecimal getMinimumBalance() {
        return minimumBalance;
    }

    public void setMinimumBalance(BigDecimal minimumBalance) {
        this.minimumBalance = minimumBalance;
    }

    public BigDecimal getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(BigDecimal interestRate) {
        this.interestRate = interestRate;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Boolean getKycVerified() {
        return kycVerified;
    }

    public void setKycVerified(Boolean kycVerified) {
        this.kycVerified = kycVerified;
    }

    public Boolean getDebitAllowed() {
        return debitAllowed;
    }

    public void setDebitAllowed(Boolean debitAllowed) {
        this.debitAllowed = debitAllowed;
    }

    public Boolean getCreditAllowed() {
        return creditAllowed;
    }

    public void setCreditAllowed(Boolean creditAllowed) {
        this.creditAllowed = creditAllowed;
    }

    public Boolean getInternetBankingEnabled() {
        return internetBankingEnabled;
    }

    public void setInternetBankingEnabled(Boolean internetBankingEnabled) {
        this.internetBankingEnabled = internetBankingEnabled;
    }

    public Boolean getMobileBankingEnabled() {
        return mobileBankingEnabled;
    }

    public void setMobileBankingEnabled(Boolean mobileBankingEnabled) {
        this.mobileBankingEnabled = mobileBankingEnabled;
    }

    public Boolean getChequeBookIssued() {
        return chequeBookIssued;
    }

    public void setChequeBookIssued(Boolean chequeBookIssued) {
        this.chequeBookIssued = chequeBookIssued;
    }

    public Boolean getAtmCardIssued() {
        return atmCardIssued;
    }

    public void setAtmCardIssued(Boolean atmCardIssued) {
        this.atmCardIssued = atmCardIssued;
    }

    public Boolean getFrozen() {
        return frozen;
    }

    public void setFrozen(Boolean frozen) {
        this.frozen = frozen;
    }

    public Boolean getClosed() {
        return closed;
    }

    public void setClosed(Boolean closed) {
        this.closed = closed;
    }

    public Long getCreatedByEmployeeId() {
        return createdByEmployeeId;
    }

    public void setCreatedByEmployeeId(Long createdByEmployeeId) {
        this.createdByEmployeeId = createdByEmployeeId;
    }

    public String getCreatedByEmployeeName() {
        return createdByEmployeeName;
    }

    public void setCreatedByEmployeeName(String createdByEmployeeName) {
        this.createdByEmployeeName = createdByEmployeeName;
    }

    public Long getApprovedByAdminId() {
        return approvedByAdminId;
    }

    public void setApprovedByAdminId(Long approvedByAdminId) {
        this.approvedByAdminId = approvedByAdminId;
    }

    public String getApprovedByAdminName() {
        return approvedByAdminName;
    }

    public void setApprovedByAdminName(String approvedByAdminName) {
        this.approvedByAdminName = approvedByAdminName;
    }

    public LocalDate getOpenedDate() {
        return openedDate;
    }

    public void setOpenedDate(LocalDate openedDate) {
        this.openedDate = openedDate;
    }

    public LocalDate getClosedDate() {
        return closedDate;
    }

    public void setClosedDate(LocalDate closedDate) {
        this.closedDate = closedDate;
    }

    public LocalDate getLastTransactionDate() {
        return lastTransactionDate;
    }

    public void setLastTransactionDate(LocalDate lastTransactionDate) {
        this.lastTransactionDate = lastTransactionDate;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

}