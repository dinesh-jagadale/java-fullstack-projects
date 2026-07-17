package com.bank.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bank.enums.PaymentMode;
import com.bank.enums.PaymentStatus;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "loan_repayments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LoanRepayment {

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
                    TRANSACTION
       ===================================================== */

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "transaction_id")
    private Transaction transaction;

    /* =====================================================
                    EMI
       ===================================================== */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "emi_schedule_id")
    private EmiSchedule emiSchedule;

    /* =====================================================
                    PAYMENT
       ===================================================== */

    @Column(nullable = false, unique = true)
    private String repaymentNumber;

    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal amountPaid;

    @Column(precision = 19, scale = 2)
    private BigDecimal principalPaid;

    @Column(precision = 19, scale = 2)
    private BigDecimal interestPaid;

    @Column(precision = 19, scale = 2)
    private BigDecimal penaltyPaid;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentMode paymentMode;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentStatus paymentStatus;

    private LocalDate paymentDate;

    private String paymentReference;

    private String remarks;
    
    /* =====================================================
    CUSTOMER
===================================================== */

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "customer_id")
private CustomerProfile customer;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "bank_account_id")
private BankAccount bankAccount;

/* =====================================================
    PROCESSED BY
===================================================== */

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "processed_by")
private User processedBy;

@ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "approved_by")
private User approvedBy;

/* =====================================================
    FLAGS
===================================================== */

@Builder.Default
private Boolean emiPayment = true;

@Builder.Default
private Boolean advancePayment = false;

@Builder.Default
private Boolean penaltyIncluded = false;

@Builder.Default
private Boolean active = true;

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

if (paymentDate == null) {
paymentDate = LocalDate.now();
}

if (paymentStatus == null) {
paymentStatus = PaymentStatus.PENDING;
}

if (amountPaid == null) {
amountPaid = BigDecimal.ZERO;
}

if (principalPaid == null) {
principalPaid = BigDecimal.ZERO;
}

if (interestPaid == null) {
interestPaid = BigDecimal.ZERO;
}

if (penaltyPaid == null) {
penaltyPaid = BigDecimal.ZERO;
}

if (emiPayment == null) {
emiPayment = true;
}

if (advancePayment == null) {
advancePayment = false;
}

if (penaltyIncluded == null) {
penaltyIncluded = false;
}

if (active == null) {
active = true;
}
}

@PreUpdate
protected void onUpdate() {

updatedAt = LocalDateTime.now();
}

/* =====================================================
HELPER METHODS
===================================================== */

public void markSuccessful(
String paymentReference) {

this.paymentStatus = PaymentStatus.SUCCESS;
this.paymentReference = paymentReference;
this.paymentDate = LocalDate.now();
}

public void markFailed(
String remarks) {

this.paymentStatus = PaymentStatus.FAILED;
this.remarks = remarks;
}

public void markPending() {

this.paymentStatus = PaymentStatus.PENDING;
}

public BigDecimal getTotalPaidAmount() {

BigDecimal principal =
principalPaid == null
    ? BigDecimal.ZERO
    : principalPaid;

BigDecimal interest =
interestPaid == null
    ? BigDecimal.ZERO
    : interestPaid;

BigDecimal penalty =
penaltyPaid == null
    ? BigDecimal.ZERO
    : penaltyPaid;

return principal
.add(interest)
.add(penalty);
}

/* =====================================================
STATUS HELPERS
===================================================== */

public boolean isSuccessful() {

return paymentStatus == PaymentStatus.SUCCESS;
}

public boolean isPending() {

return paymentStatus == PaymentStatus.PENDING;
}

public boolean isFailed() {

return paymentStatus == PaymentStatus.FAILED;
}

public boolean isAdvancePayment() {

return Boolean.TRUE.equals(advancePayment);
}

public boolean isEmiPayment() {

return Boolean.TRUE.equals(emiPayment);
}

public boolean hasPenalty() {

return Boolean.TRUE.equals(penaltyIncluded);
}

public boolean isActive() {

return Boolean.TRUE.equals(active);
}

@Override
public String toString() {

return "LoanRepayment{" +
"id=" + id +
", repaymentNumber='" + repaymentNumber + '\'' +
", amountPaid=" + amountPaid +
", paymentStatus=" + paymentStatus +
", paymentDate=" + paymentDate +
'}';
}

}