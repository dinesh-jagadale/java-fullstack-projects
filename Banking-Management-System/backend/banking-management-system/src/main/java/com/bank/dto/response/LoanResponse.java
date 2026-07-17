package com.bank.dto.response;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bank.enums.ApplicationStatus;
import com.bank.enums.LoanStatus;
import com.bank.enums.LoanType;



public class LoanResponse {

    /* =====================================================
                    LOAN INFORMATION
       ===================================================== */

    private Long id;

    private String loanNumber;

    private LoanType loanType;

    private LoanStatus loanStatus;

    private ApplicationStatus applicationStatus;

    private BigDecimal requestedAmount;

    private BigDecimal approvedAmount;

    private BigDecimal interestRate;

    private Integer tenureMonths;

    private BigDecimal emiAmount;

    /* =====================================================
                    CUSTOMER
       ===================================================== */

    private Long customerId;

    private String customerName;

    private String customerEmail;

    private String customerMobile;

    /* =====================================================
                    ACCOUNT
       ===================================================== */

    private Long accountId;

    private String accountNumber;

    private String accountType;

    /* =====================================================
                    BRANCH
       ===================================================== */

    private Long branchId;

    private String branchCode;

    private String branchName;

    /* =====================================================
                    LOAN PURPOSE
       ===================================================== */

    private String loanPurpose;

    private String remarks;

    /* =====================================================
                    EMPLOYMENT DETAILS
       ===================================================== */

    private String employerName;

    private String designation;

    private BigDecimal monthlyIncome;

    private String employmentType;

    private String businessName;

    private String businessType;

    private Integer workExperienceYears;

       
/* =====================================================
AUDIT
===================================================== */

private LocalDateTime createdAt;

private LocalDateTime updatedAt;


/* =====================================================
GUARANTOR
===================================================== */

private String guarantorName;

private String guarantorMobile;

private String guarantorEmail;

private String guarantorRelation;

private String guarantorAddress;

/* =====================================================
COLLATERAL
===================================================== */

private String collateralType;

private String collateralDescription;

private BigDecimal collateralValue;

/* =====================================================
EMPLOYEE VERIFICATION
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
DISBURSEMENT
===================================================== */

private BigDecimal disbursedAmount;

private LocalDate disbursementDate;

private String disbursementReference;

/* =====================================================
EMI DETAILS
===================================================== */

private BigDecimal outstandingAmount;

private BigDecimal totalPaidAmount;

private Integer totalEmis;

private Integer paidEmis;

private Integer pendingEmis;

private LocalDate nextEmiDate;

private LocalDate lastEmiPaidDate;

private BigDecimal overdueAmount;

/* =====================================================
FLAGS
===================================================== */

private Boolean disbursed;

private Boolean closed;

private Boolean npa;

private Boolean insuranceOpted;

/* =====================================================
CONSTRUCTORS
===================================================== */

public LoanResponse() {
}

/* =====================================================
GETTERS & SETTERS
===================================================== */

public Long getId() {
return id;
}

public void setId(Long id) {
this.id = id;
}

public String getLoanNumber() {
return loanNumber;
}

public void setLoanNumber(String loanNumber) {
this.loanNumber = loanNumber;
}

public LoanType getLoanType() {
return loanType;
}

public void setLoanType(LoanType loanType) {
this.loanType = loanType;
}

public LoanStatus getLoanStatus() {
return loanStatus;
}

public void setLoanStatus(LoanStatus loanStatus) {
this.loanStatus = loanStatus;
}

public ApplicationStatus getApplicationStatus() {
return applicationStatus;
}

public void setApplicationStatus(
ApplicationStatus applicationStatus) {
this.applicationStatus = applicationStatus;
}

public BigDecimal getRequestedAmount() {
return requestedAmount;
}

public void setRequestedAmount(
BigDecimal requestedAmount) {
this.requestedAmount = requestedAmount;
}

public BigDecimal getApprovedAmount() {
return approvedAmount;
}

public void setApprovedAmount(
BigDecimal approvedAmount) {
this.approvedAmount = approvedAmount;
}

public BigDecimal getInterestRate() {
return interestRate;
}

public void setInterestRate(
BigDecimal interestRate) {
this.interestRate = interestRate;
}

public Integer getTenureMonths() {
return tenureMonths;
}

public void setTenureMonths(
Integer tenureMonths) {
this.tenureMonths = tenureMonths;
}

public BigDecimal getEmiAmount() {
return emiAmount;
}

public void setEmiAmount(
BigDecimal emiAmount) {
this.emiAmount = emiAmount;
}

/* =====================================================
CUSTOMER
===================================================== */

public Long getCustomerId() {
return customerId;
}

public void setCustomerId(Long customerId) {
this.customerId = customerId;
}

public String getCustomerName() {
return customerName;
}

public void setCustomerName(
String customerName) {
this.customerName = customerName;
}

public String getCustomerEmail() {
return customerEmail;
}

public void setCustomerEmail(
String customerEmail) {
this.customerEmail = customerEmail;
}

public String getCustomerMobile() {
return customerMobile;
}

public void setCustomerMobile(
String customerMobile) {
this.customerMobile = customerMobile;
}

/* =====================================================
ACCOUNT
===================================================== */

public Long getAccountId() {
return accountId;
}

public void setAccountId(Long accountId) {
this.accountId = accountId;
}

public String getAccountNumber() {
return accountNumber;
}

public void setAccountNumber(
String accountNumber) {
this.accountNumber = accountNumber;
}

public String getAccountType() {
return accountType;
}

public void setAccountType(
String accountType) {
this.accountType = accountType;
}

/* =====================================================
BRANCH
===================================================== */

public Long getBranchId() {
return branchId;
}

public void setBranchId(Long branchId) {
this.branchId = branchId;
}

public String getBranchCode() {
return branchCode;
}

public void setBranchCode(
String branchCode) {
this.branchCode = branchCode;
}

public String getBranchName() {
return branchName;
}

public void setBranchName(
String branchName) {
this.branchName = branchName;
}

/* =====================================================
LOAN PURPOSE
===================================================== */

public String getLoanPurpose() {
return loanPurpose;
}

public void setLoanPurpose(
String loanPurpose) {
this.loanPurpose = loanPurpose;
}

public String getRemarks() {
return remarks;
}

public void setRemarks(
String remarks) {
this.remarks = remarks;
}

/* =====================================================
EMPLOYMENT
===================================================== */

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

/* =====================================================
GUARANTOR
===================================================== */

public String getGuarantorName() {
return guarantorName;
}

public void setGuarantorName(String guarantorName) {
this.guarantorName = guarantorName;
}

public String getGuarantorMobile() {
return guarantorMobile;
}

public void setGuarantorMobile(String guarantorMobile) {
this.guarantorMobile = guarantorMobile;
}

public String getGuarantorEmail() {
return guarantorEmail;
}

public void setGuarantorEmail(String guarantorEmail) {
this.guarantorEmail = guarantorEmail;
}

public String getGuarantorRelation() {
return guarantorRelation;
}

public void setGuarantorRelation(String guarantorRelation) {
this.guarantorRelation = guarantorRelation;
}

public String getGuarantorAddress() {
return guarantorAddress;
}

public void setGuarantorAddress(String guarantorAddress) {
this.guarantorAddress = guarantorAddress;
}

/* =====================================================
COLLATERAL
===================================================== */

public String getCollateralType() {
return collateralType;
}

public void setCollateralType(String collateralType) {
this.collateralType = collateralType;
}

public String getCollateralDescription() {
return collateralDescription;
}

public void setCollateralDescription(String collateralDescription) {
this.collateralDescription = collateralDescription;
}

public BigDecimal getCollateralValue() {
return collateralValue;
}

public void setCollateralValue(BigDecimal collateralValue) {
this.collateralValue = collateralValue;
}

/* =====================================================
EMPLOYEE VERIFICATION
===================================================== */

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

public void setEmployeeVerifiedAt(
LocalDateTime employeeVerifiedAt) {
this.employeeVerifiedAt = employeeVerifiedAt;
}

public String getEmployeeRemark() {
return employeeRemark;
}

public void setEmployeeRemark(String employeeRemark) {
this.employeeRemark = employeeRemark;
}

/* =====================================================
ADMIN APPROVAL
===================================================== */

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

public void setAdminApprovedAt(
LocalDateTime adminApprovedAt) {
this.adminApprovedAt = adminApprovedAt;
}

public String getAdminRemark() {
return adminRemark;
}

public void setAdminRemark(String adminRemark) {
this.adminRemark = adminRemark;
}

/* =====================================================
DISBURSEMENT
===================================================== */

public BigDecimal getDisbursedAmount() {
return disbursedAmount;
}

public void setDisbursedAmount(BigDecimal disbursedAmount) {
this.disbursedAmount = disbursedAmount;
}

public LocalDate getDisbursementDate() {
return disbursementDate;
}

public void setDisbursementDate(LocalDate disbursementDate) {
this.disbursementDate = disbursementDate;
}

public String getDisbursementReference() {
return disbursementReference;
}

public void setDisbursementReference(
String disbursementReference) {
this.disbursementReference = disbursementReference;
}

/* =====================================================
EMI DETAILS
===================================================== */

public BigDecimal getOutstandingAmount() {
return outstandingAmount;
}

public void setOutstandingAmount(BigDecimal outstandingAmount) {
this.outstandingAmount = outstandingAmount;
}

public BigDecimal getTotalPaidAmount() {
return totalPaidAmount;
}

public void setTotalPaidAmount(BigDecimal totalPaidAmount) {
this.totalPaidAmount = totalPaidAmount;
}

public Integer getTotalEmis() {
return totalEmis;
}

public void setTotalEmis(Integer totalEmis) {
this.totalEmis = totalEmis;
}

public Integer getPaidEmis() {
return paidEmis;
}

public void setPaidEmis(Integer paidEmis) {
this.paidEmis = paidEmis;
}

public Integer getPendingEmis() {
return pendingEmis;
}

public void setPendingEmis(Integer pendingEmis) {
this.pendingEmis = pendingEmis;
}

public LocalDate getNextEmiDate() {
return nextEmiDate;
}

public void setNextEmiDate(LocalDate nextEmiDate) {
this.nextEmiDate = nextEmiDate;
}

public LocalDate getLastEmiPaidDate() {
return lastEmiPaidDate;
}

public void setLastEmiPaidDate(LocalDate lastEmiPaidDate) {
this.lastEmiPaidDate = lastEmiPaidDate;
}

public BigDecimal getOverdueAmount() {
return overdueAmount;
}

public void setOverdueAmount(BigDecimal overdueAmount) {
this.overdueAmount = overdueAmount;
}

/* =====================================================
FLAGS
===================================================== */

public Boolean getDisbursed() {
return disbursed;
}

public void setDisbursed(Boolean disbursed) {
this.disbursed = disbursed;
}

public Boolean getClosed() {
return closed;
}

public void setClosed(Boolean closed) {
this.closed = closed;
}

public Boolean getNpa() {
return npa;
}

public void setNpa(Boolean npa) {
this.npa = npa;
}

public Boolean getInsuranceOpted() {
return insuranceOpted;
}

public void setInsuranceOpted(Boolean insuranceOpted) {
this.insuranceOpted = insuranceOpted;
}

/* =====================================================
AUDIT
===================================================== */

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