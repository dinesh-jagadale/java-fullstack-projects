package com.bank.dto.response;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bank.enums.CardStatus;
import com.bank.enums.CardType;

public class CardResponse {

    /* =====================================================
                    CARD INFORMATION
       ===================================================== */

    private Long id;

    private String cardNumber;

    private String lastFourDigits;

    private String cardHolderName;

    private CardType cardType;

    private String cardVariant;

    private CardStatus status;

    /* =====================================================
                    ACCOUNT INFORMATION
       ===================================================== */

    private Long accountId;

    private String accountNumber;

    private String accountType;

    /* =====================================================
                    CUSTOMER INFORMATION
       ===================================================== */

    private Long customerId;

    private String customerName;

    private String customerEmail;

    private String customerMobile;

    /* =====================================================
                    CARD SETTINGS
       ===================================================== */

    private Boolean contactlessEnabled;

    private Boolean internationalUsageEnabled;

    private Boolean onlineTransactionsEnabled;

    private Boolean atmWithdrawalEnabled;

    private Boolean active;

    private Boolean blocked;

    private Boolean hotListed;

    private Boolean pinGenerated;

    /* =====================================================
                    LIMITS
       ===================================================== */

    private Double dailyWithdrawalLimit;

    private Double dailyPurchaseLimit;

    private Double dailyOnlineLimit;

    /* =====================================================
                    DATES
       ===================================================== */

    private LocalDate issueDate;

    private LocalDate expiryDate;

    /* =====================================================
                    EMPLOYEE APPROVAL
       ===================================================== */

    private Long employeeId;

    private String employeeName;

    private LocalDateTime employeeVerifiedAt;

    private String employeeRemark;

    /* =====================================================
                    ADMIN APPROVAL
       ===================================================== */

    private Long adminId;

    private String adminName;

    private LocalDateTime adminApprovedAt;

    private String adminRemark;

    /* =====================================================
                    AUDIT
       ===================================================== */

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public CardResponse() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getLastFourDigits() {
        return lastFourDigits;
    }

    public void setLastFourDigits(String lastFourDigits) {
        this.lastFourDigits = lastFourDigits;
    }

    public String getCardHolderName() {
        return cardHolderName;
    }

    public void setCardHolderName(String cardHolderName) {
        this.cardHolderName = cardHolderName;
    }

    public CardType getCardType() {
        return cardType;
    }

    public void setCardType(CardType cardType) {
        this.cardType = cardType;
    }

    public String getCardVariant() {
        return cardVariant;
    }

    public void setCardVariant(String cardVariant) {
        this.cardVariant = cardVariant;
    }

    public CardStatus getStatus() {
        return status;
    }

    public void setStatus(CardStatus status) {
        this.status = status;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
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

    public Boolean getContactlessEnabled() {
        return contactlessEnabled;
    }

    public void setContactlessEnabled(Boolean contactlessEnabled) {
        this.contactlessEnabled = contactlessEnabled;
    }

    public Boolean getInternationalUsageEnabled() {
        return internationalUsageEnabled;
    }

    public void setInternationalUsageEnabled(Boolean internationalUsageEnabled) {
        this.internationalUsageEnabled = internationalUsageEnabled;
    }

    public Boolean getOnlineTransactionsEnabled() {
        return onlineTransactionsEnabled;
    }

    public void setOnlineTransactionsEnabled(Boolean onlineTransactionsEnabled) {
        this.onlineTransactionsEnabled = onlineTransactionsEnabled;
    }

    public Boolean getAtmWithdrawalEnabled() {
        return atmWithdrawalEnabled;
    }

    public void setAtmWithdrawalEnabled(Boolean atmWithdrawalEnabled) {
        this.atmWithdrawalEnabled = atmWithdrawalEnabled;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Boolean getBlocked() {
        return blocked;
    }

    public void setBlocked(Boolean blocked) {
        this.blocked = blocked;
    }

    public Boolean getHotListed() {
        return hotListed;
    }

    public void setHotListed(Boolean hotListed) {
        this.hotListed = hotListed;
    }

    public Boolean getPinGenerated() {
        return pinGenerated;
    }

    public void setPinGenerated(Boolean pinGenerated) {
        this.pinGenerated = pinGenerated;
    }

    public Double getDailyWithdrawalLimit() {
        return dailyWithdrawalLimit;
    }

    public void setDailyWithdrawalLimit(Double dailyWithdrawalLimit) {
        this.dailyWithdrawalLimit = dailyWithdrawalLimit;
    }

    public Double getDailyPurchaseLimit() {
        return dailyPurchaseLimit;
    }

    public void setDailyPurchaseLimit(Double dailyPurchaseLimit) {
        this.dailyPurchaseLimit = dailyPurchaseLimit;
    }

    public Double getDailyOnlineLimit() {
        return dailyOnlineLimit;
    }

    public void setDailyOnlineLimit(Double dailyOnlineLimit) {
        this.dailyOnlineLimit = dailyOnlineLimit;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public LocalDateTime getEmployeeVerifiedAt() {
        return employeeVerifiedAt;
    }

    public void setEmployeeVerifiedAt(LocalDateTime employeeVerifiedAt) {
        this.employeeVerifiedAt = employeeVerifiedAt;
    }

    public String getEmployeeRemark() {
        return employeeRemark;
    }

    public void setEmployeeRemark(String employeeRemark) {
        this.employeeRemark = employeeRemark;
    }

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public LocalDateTime getAdminApprovedAt() {
        return adminApprovedAt;
    }

    public void setAdminApprovedAt(LocalDateTime adminApprovedAt) {
        this.adminApprovedAt = adminApprovedAt;
    }

    public String getAdminRemark() {
        return adminRemark;
    }

    public void setAdminRemark(String adminRemark) {
        this.adminRemark = adminRemark;
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