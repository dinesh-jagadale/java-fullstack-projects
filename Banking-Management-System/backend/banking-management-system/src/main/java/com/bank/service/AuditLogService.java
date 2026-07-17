package com.bank.service;

import java.util.List;

import com.bank.entity.User;
import com.bank.entity.AuditLog;

public interface AuditLogService {

    /* ==========================================
            Create Audit Log
    ========================================== */

    AuditLog logActivity(
            User user,
            String action,
            String module,
            String referenceId,
            String referenceType,
            String description,
            String ipAddress,
            String userAgent,
            String requestMethod,
            String requestUri,
            String status
    );

    /* ==========================================
            User Logs
    ========================================== */

    List<AuditLog> getUserLogs(
            User user
    );

    /* ==========================================
            Module Logs
    ========================================== */

    List<AuditLog> getModuleLogs(
            String module
    );

    /* ==========================================
            Action Logs
    ========================================== */

    List<AuditLog> getActionLogs(
            String action
    );

    /* ==========================================
            Status Logs
    ========================================== */

    List<AuditLog> getStatusLogs(
            String status
    );

    /* ==========================================
            Reference Logs
    ========================================== */

    List<AuditLog> getReferenceLogs(
            String referenceType,
            String referenceId
    );

    /* ==========================================
            Dashboard Statistics
    ========================================== */

    long countLogsByModule(
            String module
    );

    long countLogsByAction(
            String action
    );

    long countLogsByUser(
            User user
    );

}