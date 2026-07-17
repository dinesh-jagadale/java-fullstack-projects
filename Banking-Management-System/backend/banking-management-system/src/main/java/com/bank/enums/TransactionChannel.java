package com.bank.enums;

public enum TransactionChannel {

    /* ==========================================
            BRANCH CHANNELS
    ========================================== */

    BRANCH,

    CASH_COUNTER,

    CUSTOMER_SERVICE_DESK,

    /* ==========================================
            ATM CHANNELS
    ========================================== */

    ATM,

    CASH_DEPOSIT_MACHINE,

    PASSBOOK_KIOSK,

    /* ==========================================
            DIGITAL CHANNELS
    ========================================== */

    INTERNET_BANKING,

    MOBILE_BANKING,

    UPI,

    QR_CODE,

    /* ==========================================
            CARD CHANNELS
    ========================================== */

    POS,

    ECOMMERCE,

    CONTACTLESS,

    /* ==========================================
            PAYMENT NETWORKS
    ========================================== */

    IMPS,

    NEFT,

    RTGS,

    SWIFT,

    /* ==========================================
            CHEQUE CHANNELS
    ========================================== */

    CHEQUE,

    CLEARING_HOUSE,

    CTS,

    /* ==========================================
            AUTO DEBIT
    ========================================== */

    ECS,

    NACH,

    STANDING_INSTRUCTION,

    AUTO_DEBIT,

    /* ==========================================
            THIRD PARTY
    ========================================== */

    PAYMENT_GATEWAY,

    WALLET,

    THIRD_PARTY_BANK,

    /* ==========================================
            INTERNAL
    ========================================== */

    INTERNAL_TRANSFER,

    SYSTEM,

    ADMIN,

    EMPLOYEE,

    /* ==========================================
            OTHER
    ========================================== */

    API,

    OTHER

}