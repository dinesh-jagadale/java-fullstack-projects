package com.bank.enums;

public enum ApplicationStatus {

    // Customer Side
    DRAFT,
    SUBMITTED,

    // Employee Workflow
    PENDING_EMPLOYEE,
    RETURNED_BY_EMPLOYEE,
    REJECTED_BY_EMPLOYEE,

    // Admin Workflow
    PENDING_ADMIN,
    RETURNED_BY_ADMIN,
    REJECTED_BY_ADMIN,

    // Final Status
    APPROVED,
    ACCOUNT_CREATED,
    CANCELLED

}