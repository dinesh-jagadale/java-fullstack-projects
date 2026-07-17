package com.bank.service;

import java.util.List;

import com.bank.dto.request.OpenAccountRequest;
import com.bank.dto.response.OpenAccountResponse;

public interface OpenAccountApplicationService {

    /* =====================================================
                    CUSTOMER
       ===================================================== */

    /**
     * Customer submits a new account opening application.
     */
    OpenAccountResponse submitApplication(
            OpenAccountRequest request,
            String username);

    /**
     * View all applications submitted by logged-in customer.
     */
    List<OpenAccountResponse> getMyApplications(
            String username);

    /**
     * View a single application.
     */
    OpenAccountResponse getApplicationById(
            Long applicationId);

    /**
     * Cancel application before approval.
     */
    void cancelApplication(
            Long applicationId,
            String username);

    /* =====================================================
                    EMPLOYEE
       ===================================================== */

    /**
     * Applications waiting for employee verification.
     */
    List<OpenAccountResponse> getPendingEmployeeApplications();

    /**
     * Employee approves application.
     */
    OpenAccountResponse approveByEmployee(
            Long applicationId,
            String employeeUsername,
            String remarks);

    /**
     * Employee rejects application.
     */
    OpenAccountResponse rejectByEmployee(
            Long applicationId,
            String employeeUsername,
            String remarks);

    /* =====================================================
                    ADMIN
       ===================================================== */

    /**
     * Applications waiting for admin approval.
     */
    List<OpenAccountResponse> getPendingAdminApplications();

    /**
     * Admin approves application.
     * Bank Account will be created.
     */
    OpenAccountResponse approveByAdmin(
            Long applicationId,
            String adminUsername,
            String remarks);

    /**
     * Admin rejects application.
     */
    OpenAccountResponse rejectByAdmin(
            Long applicationId,
            String adminUsername,
            String remarks);

    /* =====================================================
                    COMMON
       ===================================================== */

    /**
     * Total submitted applications.
     */
    long totalApplications();

    /**
     * Total pending applications.
     */
    long totalPendingApplications();

    /**
     * Total approved applications.
     */
    long totalApprovedApplications();

    /**
     * Total rejected applications.
     */
    long totalRejectedApplications();

}