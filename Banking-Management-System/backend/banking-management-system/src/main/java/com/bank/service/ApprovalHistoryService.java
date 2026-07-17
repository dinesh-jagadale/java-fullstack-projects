package com.bank.service;

import java.util.List;

import com.bank.entity.AccountApplication;
import com.bank.entity.ApprovalHistory;
import com.bank.entity.User;
import com.bank.enums.ApprovalAction;

public interface ApprovalHistoryService {

    /* ==========================================
            Create Approval History
    ========================================== */

    ApprovalHistory createHistory(
            AccountApplication application,
            User actionBy,
            ApprovalAction action,
            String previousStatus,
            String currentStatus,
            String remarks,
            String ipAddress,
            String deviceInfo
    );

    /* ==========================================
            Application History
    ========================================== */

    List<ApprovalHistory> getApplicationHistory(
            AccountApplication application
    );

    /* ==========================================
            User History
    ========================================== */

    List<ApprovalHistory> getUserHistory(
            User user
    );

    /* ==========================================
            Action History
    ========================================== */

    List<ApprovalHistory> getActionHistory(
            ApprovalAction action
    );

    List<ApprovalHistory> getApplicationActionHistory(
            AccountApplication application,
            ApprovalAction action
    );

    /* ==========================================
            Dashboard Statistics
    ========================================== */

    long countUserActions(
            User user
    );

    long countAction(
            ApprovalAction action
    );

}