package com.bank.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.bank.enums.AccountType;
import com.bank.enums.ApplicationStatus;
import com.bank.enums.IncomeRange;
import com.bank.enums.OccupationType;

public class AccountApplicationResponse {

    /* ==========================================
            Application Information
    ========================================== */

    private Long id;

    private String applicationNumber;

    private AccountType accountType;

    private ApplicationStatus status;

    private LocalDate applicationDate;

    /* ==========================================
            Customer Information
    ========================================== */

    private Long customerId;

    private String customerName;

    private String customerEmail;

    private String customerMobile;

    /* ==========================================
            Branch Information
    ========================================== */

    private String branchCode;

    private String branchName;

    /* ==========================================
            Occupation Information
    ========================================== */

    private String occupation;

    private OccupationType occupationType;

    private IncomeRange incomeRange;

    private BigDecimal annualIncome;

    private String sourceOfIncome;

    /* ==========================================
            Nominee Information
    ========================================== */

    private String nomineeName;

    private String nomineeRelation;

    private String nomineeMobile;

    /* ==========================================
            Deposit Information
    ========================================== */

    private BigDecimal initialDeposit;

    /* ==========================================
            Employee Verification
    ========================================== */

    private Long employeeId;

    private String employeeName;

    private LocalDateTime employeeVerifiedAt;

    private String employeeRemark;

    /* ==========================================
            Admin Approval
    ========================================== */

    private Long adminId;

    private String adminName;

    private LocalDateTime adminApprovedAt;

    private String adminRemark;

    /* ==========================================
            Documents
    ========================================== */

    private List<String> uploadedDocuments;

    /* ==========================================
            Audit
    ========================================== */

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    /* ==========================================
            Constructors
    ========================================== */

    public AccountApplicationResponse() {
    }

    /* ==========================================
            Getters and Setters
    ========================================== */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApplicationNumber() {
        return applicationNumber;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public AccountType getAccountType() {
        return accountType;
    }

    public void setAccountType(AccountType accountType) {
        this.accountType = accountType;
    }

    public ApplicationStatus getStatus() {
        return status;
    }

    public void setStatus(ApplicationStatus status) {
        this.status = status;
    }

    public LocalDate getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(LocalDate applicationDate) {
        this.applicationDate = applicationDate;
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

    public List<String> getUploadedDocuments() {
        return uploadedDocuments;
    }

    public void setUploadedDocuments(List<String> uploadedDocuments) {
        this.uploadedDocuments = uploadedDocuments;
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