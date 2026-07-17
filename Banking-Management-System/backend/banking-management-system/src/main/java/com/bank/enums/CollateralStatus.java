package com.bank.enums;

public enum CollateralStatus {

    /* =====================================================
                    INITIAL STAGE
       ===================================================== */

    PENDING,

    SUBMITTED,

    UNDER_VERIFICATION,

    /* =====================================================
                    VERIFICATION
       ===================================================== */

    VERIFIED,

    REJECTED,

    RE_VERIFICATION_REQUIRED,

    /* =====================================================
                    APPROVAL
       ===================================================== */

    APPROVED,

    NOT_APPROVED,

    /* =====================================================
                    LOAN LIFECYCLE
       ===================================================== */

    ACTIVE,

    RELEASED,

    SEIZED,

    EXPIRED,

    CANCELLED

}