package com.bank.enums;

public enum LoanStatus {

    /* =====================================================
                    APPLICATION STAGE
       ===================================================== */

    PENDING,

    PENDING_EMPLOYEE,

    PENDING_ADMIN,

    EMPLOYEE_REJECTED,

    ADMIN_REJECTED,

    /* =====================================================
                    APPROVAL STAGE
       ===================================================== */

    APPROVED,

    REJECTED,

    DISBURSED,

    /* =====================================================
                    REPAYMENT STAGE
       ===================================================== */

    ACTIVE,

    OVERDUE,

    NPA,

    CLOSED,

    WRITTEN_OFF,

    SETTLED,

    CANCELLED
}