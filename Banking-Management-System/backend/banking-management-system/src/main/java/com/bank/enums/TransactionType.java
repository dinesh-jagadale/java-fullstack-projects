package com.bank.enums;

public enum TransactionType {

    /* ==========================================
            CASH TRANSACTIONS
    ========================================== */

    DEPOSIT,

    WITHDRAWAL,

    CASH_DEPOSIT,

    CASH_WITHDRAWAL,

    /* ==========================================
            ACCOUNT TRANSFER
    ========================================== */

    TRANSFER,

    TRANSFER_IN,

    TRANSFER_OUT,

    /* ==========================================
            DIGITAL BANKING
    ========================================== */

    UPI_PAYMENT,

    UPI_RECEIVED,

    IMPS,

    NEFT,

    RTGS,

    /* ==========================================
            CARD TRANSACTIONS
    ========================================== */

    DEBIT_CARD_PAYMENT,

    CREDIT_CARD_PAYMENT,

    ATM_WITHDRAWAL,

    ATM_DEPOSIT,

    POS_PAYMENT,

    ONLINE_PAYMENT,

    /* ==========================================
            CHEQUE TRANSACTIONS
    ========================================== */

    CHEQUE_DEPOSIT,

    CHEQUE_WITHDRAWAL,

    CHEQUE_CLEARANCE,

    CHEQUE_BOUNCE,

    /* ==========================================
            LOAN TRANSACTIONS
    ========================================== */

    LOAN_DISBURSEMENT,

    EMI_PAYMENT,

    LOAN_PREPAYMENT,

    LOAN_CLOSURE,

    /* ==========================================
            INTEREST
    ========================================== */

    INTEREST_CREDIT,

    INTEREST_DEBIT,

    /* ==========================================
            BANK CHARGES
    ========================================== */

    SERVICE_CHARGE,

    GST,

    PENALTY,

    ANNUAL_MAINTENANCE_CHARGE,

    SMS_CHARGE,

    ATM_CHARGE,

    /* ==========================================
            REFUND
    ========================================== */

    REFUND,

    CASHBACK,

    REVERSAL,

    /* ==========================================
            ACCOUNT OPERATIONS
    ========================================== */

    ACCOUNT_OPENING,

    ACCOUNT_CLOSURE,

    MINIMUM_BALANCE_PENALTY,

    /* ==========================================
            FIXED DEPOSIT
    ========================================== */

    FD_DEPOSIT,

    FD_MATURITY,

    FD_INTEREST,

    /* ==========================================
            RECURRING DEPOSIT
    ========================================== */

    RD_INSTALLMENT,

    RD_MATURITY,

    /* ==========================================
            OTHER
    ========================================== */

    OTHER

}