package com.bank.service;

import java.util.List;

import com.bank.dto.request.AccountApplicationRequest;
import com.bank.dto.response.AccountApplicationResponse;

public interface AccountApplicationService {

    /* =====================================================
                    CUSTOMER
       ===================================================== */

    /**
     * Apply for Opening Account
     */
    AccountApplicationResponse apply(
            AccountApplicationRequest request,
            String username);

    /**
     * My Applications
     */
    List<AccountApplicationResponse> getMyApplications(
            String username);

    /**
     * Application Details
     */
    AccountApplicationResponse getApplication(
            String applicationNumber,
            String username);

    /**
     * Cancel Application
     */
    void cancelApplication(
            Long applicationId,
            String username);

    /* =====================================================
                    EMPLOYEE
       ===================================================== */

    /**
     * Pending Employee Verification
     */
    List<AccountApplicationResponse>
    getPendingEmployeeApplications();

    /**
     * Employee Approved Applications
     */
    List<AccountApplicationResponse>
    getEmployeeApprovedApplications();

    /**
     * Employee Rejected Applications
     */
    List<AccountApplicationResponse>
    getEmployeeRejectedApplications();

    /**
     * Employee Approve
     */
    AccountApplicationResponse employeeApprove(
            Long applicationId,
            String employeeUsername,
            String remark);

    /**
     * Employee Reject
     */
    AccountApplicationResponse employeeReject(
            Long applicationId,
            String employeeUsername,
            String remark);

    /* =====================================================
                    ADMIN
       ===================================================== */

    /**
     * Pending Admin Approval
     */
    List<AccountApplicationResponse>
    getPendingAdminApplications();

    /**
     * Admin Approved Applications
     */
    List<AccountApplicationResponse>
    getAdminApprovedApplications();

    /**
     * Admin Rejected Applications
     */
    List<AccountApplicationResponse>
    getAdminRejectedApplications();

    /**
     * Admin Approve
     */
    AccountApplicationResponse adminApprove(
            Long applicationId,
            String adminUsername,
            String remark);

    /**
     * Admin Reject
     */
    AccountApplicationResponse adminReject(
            Long applicationId,
            String adminUsername,
            String remark);

    /* =====================================================
                    COMMON
       ===================================================== */

    /**
     * All Applications
     */
    List<AccountApplicationResponse>
    getAllApplications();

    /**
     * Branch Applications
     */
    List<AccountApplicationResponse>
    getApplicationsByBranch(
            String branchCode);

    /**
     * Dashboard Statistics
     */
    Object getStatistics();

}