package com.bank.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "loan_guarantors")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoanGuarantor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* =====================================================
                    LOAN
       ===================================================== */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_id", nullable = false)
    private Loan loan;

    /* =====================================================
                    PERSONAL DETAILS
       ===================================================== */

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, unique = true, length = 20)
    private String mobileNumber;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String relation;

    @Column(nullable = false, length = 500)
    private String address;

    private LocalDate dateOfBirth;

    private String gender;

    private String occupation;

    private String employerName;

    @Column(precision = 19, scale = 2)
    private BigDecimal annualIncome;
    
    /* =====================================================
    IDENTITY DETAILS
===================================================== */

@Column(length = 20)
private String aadharNumber;

@Column(length = 20)
private String panNumber;

@Column(length = 30)
private String voterIdNumber;

@Column(length = 30)
private String passportNumber;

@Column(length = 30)
private String drivingLicenseNumber;

/* =====================================================
    ADDRESS DETAILS
===================================================== */

@Column(length = 100)
private String city;

@Column(length = 100)
private String state;

@Column(length = 100)
private String country;

@Column(length = 10)
private String pinCode;

/* =====================================================
    EMPLOYMENT DETAILS
===================================================== */

private String designation;

private Integer experienceYears;

@Column(length = 100)
private String officeAddress;

@Column(length = 20)
private String officePhone;

/* =====================================================
    FINANCIAL DETAILS
===================================================== */

@Column(precision = 19, scale = 2)
private BigDecimal monthlyIncome;

@Column(precision = 19, scale = 2)
private BigDecimal netWorth;

@Column(precision = 19, scale = 2)
private BigDecimal existingLoanAmount;

@Builder.Default
private Boolean cibilVerified = false;

private Integer cibilScore;

/* =====================================================
    AUDIT
===================================================== */

private LocalDateTime createdAt;

private LocalDateTime updatedAt;

/* =====================================================
ENTITY LIFECYCLE
===================================================== */

@PrePersist
protected void onCreate() {

createdAt = LocalDateTime.now();
updatedAt = LocalDateTime.now();

if (cibilVerified == null) {
cibilVerified = false;
}

if (monthlyIncome == null) {
monthlyIncome = BigDecimal.ZERO;
}

if (annualIncome == null) {
annualIncome = BigDecimal.ZERO;
}

if (netWorth == null) {
netWorth = BigDecimal.ZERO;
}

if (existingLoanAmount == null) {
existingLoanAmount = BigDecimal.ZERO;
}

if (cibilScore == null) {
cibilScore = 0;
}
}

@PreUpdate
protected void onUpdate() {

updatedAt = LocalDateTime.now();
}

/* =====================================================
HELPER METHODS
===================================================== */

public boolean isEligibleGuarantor() {

return Boolean.TRUE.equals(cibilVerified)
&& cibilScore >= 700
&& annualIncome.compareTo(
    new BigDecimal("300000")) >= 0;
}

public boolean isHighCibilScore() {

return cibilScore >= 750;
}

public boolean hasExistingLoan() {

return existingLoanAmount != null
&& existingLoanAmount.compareTo(
    BigDecimal.ZERO) > 0;
}

public BigDecimal getAnnualIncomeFromMonthly() {

if (monthlyIncome == null) {
return BigDecimal.ZERO;
}

return monthlyIncome.multiply(
BigDecimal.valueOf(12));
}

public boolean isIncomeSufficient(
BigDecimal minimumIncome) {

if (annualIncome == null
|| minimumIncome == null) {

return false;
}

return annualIncome.compareTo(
minimumIncome) >= 0;
}

public boolean isWorking() {

return occupation != null
&& !occupation.isBlank();
}

/* =====================================================
VALIDATION HELPERS
===================================================== */

public boolean hasValidIdentity() {

return (aadharNumber != null && !aadharNumber.isBlank())
|| (panNumber != null && !panNumber.isBlank())
|| (passportNumber != null && !passportNumber.isBlank())
|| (voterIdNumber != null && !voterIdNumber.isBlank())
|| (drivingLicenseNumber != null
    && !drivingLicenseNumber.isBlank());
}

public boolean hasCompleteAddress() {

return address != null
&& !address.isBlank()
&& city != null
&& !city.isBlank()
&& state != null
&& !state.isBlank()
&& country != null
&& !country.isBlank()
&& pinCode != null
&& !pinCode.isBlank();
}

public String getFullAddress() {

StringBuilder builder = new StringBuilder();

if (address != null) {
builder.append(address);
}

if (city != null && !city.isBlank()) {
builder.append(", ").append(city);
}

if (state != null && !state.isBlank()) {
builder.append(", ").append(state);
}

if (country != null && !country.isBlank()) {
builder.append(", ").append(country);
}

if (pinCode != null && !pinCode.isBlank()) {
builder.append(" - ").append(pinCode);
}

return builder.toString();
}

@Override
public String toString() {

return "LoanGuarantor{" +
"id=" + id +
", fullName='" + fullName + '\'' +
", mobileNumber='" + mobileNumber + '\'' +
", relation='" + relation + '\'' +
", annualIncome=" + annualIncome +
", cibilScore=" + cibilScore +
'}';
}

}