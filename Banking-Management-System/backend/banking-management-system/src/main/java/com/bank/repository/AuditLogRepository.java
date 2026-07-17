package com.bank.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entity.AuditLog;
import com.bank.entity.User;

@Repository
public interface AuditLogRepository
        extends JpaRepository<AuditLog, Long> {

    /**
     * Get all audit logs of a user
     */
    List<AuditLog> findByUserOrderByCreatedAtDesc(
            User user
    );

    /**
     * Get audit logs by module
     */
    List<AuditLog> findByModuleOrderByCreatedAtDesc(
            String module
    );

    /**
     * Get audit logs by action
     */
    List<AuditLog> findByActionOrderByCreatedAtDesc(
            String action
    );

    /**
     * Get audit logs by status
     */
    List<AuditLog> findByStatusOrderByCreatedAtDesc(
            String status
    );

    /**
     * Get logs by user and module
     */
    List<AuditLog> findByUserAndModuleOrderByCreatedAtDesc(
            User user,
            String module
    );

    /**
     * Get logs between two timestamps
     */
    List<AuditLog> findByCreatedAtBetweenOrderByCreatedAtDesc(
            LocalDateTime startDate,
            LocalDateTime endDate
    );

    /**
     * Get logs by reference
     */
    List<AuditLog> findByReferenceTypeAndReferenceIdOrderByCreatedAtDesc(
            String referenceType,
            String referenceId
    );

    /**
     * Count logs by module
     */
    long countByModule(
            String module
    );

    /**
     * Count logs by action
     */
    long countByAction(
            String action
    );

    /**
     * Count logs by user
     */
    long countByUser(
            User user
    );

}