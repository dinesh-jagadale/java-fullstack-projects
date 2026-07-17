package com.bank.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entity.Notification;
import com.bank.entity.User;

@Repository
public interface NotificationRepository
        extends JpaRepository<Notification, Long> {

    /**
     * Get all notifications of a user
     */
    List<Notification> findByUserOrderByCreatedAtDesc(
            User user
    );

    /**
     * Get unread notifications
     */
    List<Notification> findByUserAndIsReadFalseOrderByCreatedAtDesc(
            User user
    );

    /**
     * Get read notifications
     */
    List<Notification> findByUserAndIsReadTrueOrderByCreatedAtDesc(
            User user
    );

    /**
     * Count unread notifications
     */
    long countByUserAndIsReadFalse(
            User user
    );

    /**
     * Count all notifications
     */
    long countByUser(
            User user
    );

    /**
     * Get notifications by type
     */
    List<Notification> findByUserAndTypeOrderByCreatedAtDesc(
            User user,
            String type
    );

    /**
     * Get notifications created between dates
     */
    List<Notification> findByCreatedAtBetween(
            LocalDateTime startDate,
            LocalDateTime endDate
    );

    /**
     * Get notifications by reference
     */
    List<Notification> findByReferenceTypeAndReferenceId(
            String referenceType,
            String referenceId
    );

}