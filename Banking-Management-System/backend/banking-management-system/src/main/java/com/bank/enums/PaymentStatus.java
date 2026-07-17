package com.bank.enums;

public enum PaymentStatus {

    /* =====================================================
                    INITIAL STAGE
       ===================================================== */

    PENDING,

    INITIATED,

    PROCESSING,

    /* =====================================================
                    SUCCESS
       ===================================================== */

    SUCCESS,

    COMPLETED,

    SETTLED,

    /* =====================================================
                    FAILURE
       ===================================================== */

    FAILED,

    DECLINED,

    CANCELLED,

    REVERSED,

    REFUNDED,

    TIMEOUT,

    EXPIRED,

    /* =====================================================
                    PARTIAL
       ===================================================== */

    PARTIALLY_PAID,

    PARTIALLY_REFUNDED

}