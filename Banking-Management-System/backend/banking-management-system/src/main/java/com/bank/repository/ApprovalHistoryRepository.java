package com.bank.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entity.AccountApplication;
import com.bank.entity.ApprovalHistory;
import com.bank.entity.User;
import com.bank.enums.ApprovalAction;

@Repository
public interface ApprovalHistoryRepository
        extends JpaRepository<ApprovalHistory, Long> {

    /**
     * Get complete approval history of an application
     */
    List<ApprovalHistory> findByApplicationOrderByActionAtAsc(
            AccountApplication application
    );

    /**
     * Get approval history by employee/admin
     */
    List<ApprovalHistory> findByActionByOrderByActionAtDesc(
            User actionBy
    );

    /**
     * Get history by action
     */
    List<ApprovalHistory> findByAction(
            ApprovalAction action
    );

    /**
     * Get history by application and action
     */
    List<ApprovalHistory> findByApplicationAndAction(
            AccountApplication application,
            ApprovalAction action
    );

    /**
     * Get actions performed between dates
     */
    List<ApprovalHistory> findByActionAtBetween(
            LocalDateTime startDate,
            LocalDateTime endDate
    );

    /**
     * Get all approvals by employee/admin
     */
    List<ApprovalHistory> findByActionByAndAction(
            User actionBy,
            ApprovalAction action
    );

    /**
     * Count approvals performed by employee/admin
     */
    long countByActionBy(
            User actionBy
    );

    /**
     * Count approvals by action type
     */
    long countByAction(
            ApprovalAction action
    );

}