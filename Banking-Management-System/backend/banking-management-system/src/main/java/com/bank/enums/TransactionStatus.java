package com.bank.enums;

public enum TransactionStatus {

    /* ==========================================
            Initial Status
    ========================================== */

    INITIATED,

    PENDING,

    PROCESSING,

    UNDER_REVIEW,

    /* ==========================================
            Successful Status
    ========================================== */

    SUCCESS,

    COMPLETED,

    SETTLED,

    /* ==========================================
            Failure Status
    ========================================== */

    FAILED,

    DECLINED,

    REJECTED,

    CANCELLED,

    REVERSED,

    ROLLBACK,

    EXPIRED,

    TIMEOUT,

    /* ==========================================
            Banking Specific
    ========================================== */

    ON_HOLD,

    WAITING_FOR_APPROVAL,

    WAITING_FOR_SETTLEMENT,

    SCHEDULED,

    PARTIALLY_COMPLETED

}
