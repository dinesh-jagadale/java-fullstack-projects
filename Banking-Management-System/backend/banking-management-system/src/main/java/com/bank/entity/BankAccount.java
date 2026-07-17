
package com.bank.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


import com.bank.enums.AccountStatus;
import com.bank.enums.AccountType;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "bank_accounts")
public class BankAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* ==========================================
            Account Details
    ========================================== */

    @Column(nullable = false, unique = true, length = 20)
    private String accountNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AccountType accountType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AccountStatus accountStatus;

    /* ==========================================
            Customer
    ========================================== */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_profile_id", nullable = false)
    private CustomerProfile customerProfile;

    /* ==========================================
            Branch
    ========================================== */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "branch_id", nullable = false)
    private Branch branch;

    /* ==========================================
            Opened By Employee
    ========================================== */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "opened_by")
    private User openedBy;

    /* ==========================================
            Financial Information
    ========================================== */

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal availableBalance;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal ledgerBalance;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal minimumBalance;

    @Column(nullable = false, precision = 15, scale = 2)
    private BigDecimal holdAmount;

    /* ==========================================
            Account Flags
    ========================================== */

    @Column(nullable = false)
    private Boolean debitAllowed = true;

    @Column(nullable = false)
    private Boolean creditAllowed = true;

    @Column(nullable = false)
    private Boolean internetBankingEnabled = false;

    @Column(nullable = false)
    private Boolean mobileBankingEnabled = false;

    @Column(nullable = false)
    private Boolean atmEnabled = false;

    @Column(nullable = false)
    private Boolean chequeFacilityEnabled = true;

    /* ==========================================
            Transactions
    ========================================== */

    @OneToMany(
            mappedBy = "bankAccount",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Transaction> transactions =
            new ArrayList<>();

    /* ==========================================
            Audit
    ========================================== */

    private LocalDateTime openedAt;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
    
    /* ==========================================
    Constructors
========================================== */

public BankAccount() {
}

/* ==========================================
    JPA Lifecycle
========================================== */

@PrePersist
public void prePersist() {

createdAt = LocalDateTime.now();
updatedAt = LocalDateTime.now();
openedAt = LocalDateTime.now();

if (accountStatus == null) {
    accountStatus = AccountStatus.ACTIVE;
}

if (availableBalance == null) {
    availableBalance = BigDecimal.ZERO;
}

if (ledgerBalance == null) {
    ledgerBalance = BigDecimal.ZERO;
}

if (minimumBalance == null) {
    minimumBalance = BigDecimal.ZERO;
}

if (holdAmount == null) {
    holdAmount = BigDecimal.ZERO;
}

}

@PreUpdate
public void preUpdate() {

updatedAt = LocalDateTime.now();

}

/* ==========================================
    Getters & Setters
========================================== */

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

public AccountType getAccountType() {
return accountType;
}

public void setAccountType(AccountType accountType) {
this.accountType = accountType;
}

public AccountStatus getAccountStatus() {
return accountStatus;
}

public void setAccountStatus(AccountStatus accountStatus) {
this.accountStatus = accountStatus;
}

public CustomerProfile getCustomerProfile() {
return customerProfile;
}

public void setCustomerProfile(CustomerProfile customerProfile) {
this.customerProfile = customerProfile;
}

public Branch getBranch() {
return branch;
}

public void setBranch(Branch branch) {
this.branch = branch;
}

public User getOpenedBy() {
return openedBy;
}

public void setOpenedBy(User openedBy) {
this.openedBy = openedBy;
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

public BigDecimal getMinimumBalance() {
return minimumBalance;
}

public void setMinimumBalance(BigDecimal minimumBalance) {
this.minimumBalance = minimumBalance;
}

public BigDecimal getHoldAmount() {
return holdAmount;
}

public void setHoldAmount(BigDecimal holdAmount) {
this.holdAmount = holdAmount;
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

public Boolean getAtmEnabled() {
return atmEnabled;
}

public void setAtmEnabled(Boolean atmEnabled) {
this.atmEnabled = atmEnabled;
}

public Boolean getChequeFacilityEnabled() {
return chequeFacilityEnabled;
}

public void setChequeFacilityEnabled(Boolean chequeFacilityEnabled) {
this.chequeFacilityEnabled = chequeFacilityEnabled;
}

public List<Transaction> getTransactions() {
    return transactions;
}

public void setTransactions(List<Transaction> transactions) {
    this.transactions = transactions;
}

public LocalDateTime getOpenedAt() {
    return openedAt;
}

public void setOpenedAt(LocalDateTime openedAt) {
    this.openedAt = openedAt;
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

/* ==========================================
        Helper Methods
========================================== */

public void credit(BigDecimal amount) {

    if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
        throw new IllegalArgumentException("Invalid credit amount.");
    }

    this.availableBalance = this.availableBalance.add(amount);
    this.ledgerBalance = this.ledgerBalance.add(amount);
}

public void debit(BigDecimal amount) {

    if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
        throw new IllegalArgumentException("Invalid debit amount.");
    }

    if (this.availableBalance.compareTo(amount) < 0) {
        throw new IllegalArgumentException("Insufficient balance.");
    }

    this.availableBalance = this.availableBalance.subtract(amount);
    this.ledgerBalance = this.ledgerBalance.subtract(amount);
}

public BigDecimal getEffectiveBalance() {
    return availableBalance.subtract(holdAmount);
}

public boolean isActive() {
    return accountStatus == AccountStatus.ACTIVE;
}

public boolean canDebit(BigDecimal amount) {

    if (!Boolean.TRUE.equals(debitAllowed)) {
        return false;
    }

    return getEffectiveBalance().compareTo(amount) >= 0;
}

}