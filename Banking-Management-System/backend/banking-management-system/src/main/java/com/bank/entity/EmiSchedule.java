package com.bank.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bank.enums.EmiStatus;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "emi_schedules")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmiSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* =====================================================
                    LOAN
       ===================================================== */

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loan_id")
    private Loan loan;

    /* =====================================================
                    EMI DETAILS
       ===================================================== */

    @Column(nullable = false)
    private Integer emiNumber;

    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal emiAmount;

    @Column(nullable = false)
    private LocalDate dueDate;

    private LocalDate paidDate;

    @Column(precision = 19, scale = 2)
    private BigDecimal principalAmount;

    @Column(precision = 19, scale = 2)
    private BigDecimal interestAmount;

    @Column(precision = 19, scale = 2)
    private BigDecimal outstandingPrincipal;

    @Column(precision = 19, scale = 2)
    private BigDecimal penaltyAmount;
    
    @Column(precision = 19, scale = 2)
    private BigDecimal paidAmount;

    @Column(precision = 19, scale = 2)
    private BigDecimal balanceAmount;

    @Column(precision = 19, scale = 2)
    private BigDecimal overdueAmount;

    @Column(precision = 19, scale = 2)
    private BigDecimal lateFee;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EmiStatus status;

    /* =====================================================
                    PAYMENT DETAILS
       ===================================================== */

    private String paymentReference;

    private String transactionReference;

    private String paymentMode;

    private String remarks;

    /* =====================================================
                    FLAGS
       ===================================================== */

    @Builder.Default
    private Boolean paid = false;

    @Builder.Default
    private Boolean overdue = false;

    @Builder.Default
    private Boolean penaltyApplied = false;

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

if (status == null) {
status = EmiStatus.PENDING;
}

if (paid == null) {
paid = false;
}

if (overdue == null) {
overdue = false;
}

if (penaltyApplied == null) {
penaltyApplied = false;
}

if (lateFee == null) {
lateFee = BigDecimal.ZERO;
}

if (penaltyAmount == null) {
penaltyAmount = BigDecimal.ZERO;
}

if (paidAmount == null) {
paidAmount = BigDecimal.ZERO;
}

if (overdueAmount == null) {
overdueAmount = BigDecimal.ZERO;
}
}

@PreUpdate
protected void onUpdate() {

updatedAt = LocalDateTime.now();
}

/* =====================================================
    HELPER METHODS
===================================================== */

public void markAsPaid(
BigDecimal amount,
String paymentReference,
String paymentMode) {

this.paid = true;
this.status = EmiStatus.PAID;
this.paidAmount = amount;
this.paymentReference = paymentReference;
this.paymentMode = paymentMode;
this.paidDate = LocalDate.now();
this.overdue = false;
}

public void markAsOverdue() {

this.overdue = true;
this.status = EmiStatus.OVERDUE;
}

public void applyPenalty(
BigDecimal penalty) {

if (penalty == null) {
penalty = BigDecimal.ZERO;
}

this.penaltyApplied = true;
this.penaltyAmount = penalty;
this.lateFee = penalty;

if (this.overdueAmount == null) {
this.overdueAmount = penalty;
} else {
this.overdueAmount =
    this.overdueAmount.add(penalty);
}
}

/* =====================================================
STATUS HELPERS
===================================================== */

public boolean isPending() {

return status == EmiStatus.PENDING;
}

public boolean isPaid() {

return status == EmiStatus.PAID;
}

public boolean isOverdue() {

return status == EmiStatus.OVERDUE;
}

public boolean isDueToday() {

return dueDate != null
&& dueDate.equals(LocalDate.now())
&& status != EmiStatus.PAID;
}

public boolean isFutureEmi() {

return dueDate != null
&& dueDate.isAfter(LocalDate.now());
}

public boolean isMissedEmi() {

return dueDate != null
&& dueDate.isBefore(LocalDate.now())
&& status != EmiStatus.PAID;
}

public BigDecimal getTotalAmountPayable() {

BigDecimal emi =
emiAmount == null
    ? BigDecimal.ZERO
    : emiAmount;

BigDecimal penalty =
penaltyAmount == null
    ? BigDecimal.ZERO
    : penaltyAmount;

return emi.add(penalty);
}

public BigDecimal getRemainingAmount() {

BigDecimal total =
getTotalAmountPayable();

BigDecimal paid =
paidAmount == null
    ? BigDecimal.ZERO
    : paidAmount;

return total.subtract(paid);
}

}