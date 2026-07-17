package com.bank.service.impl;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bank.dto.request.AccountApplicationRequest;
import com.bank.dto.response.AccountApplicationResponse;
import com.bank.entity.AccountApplication;
import com.bank.entity.Branch;
import com.bank.entity.CustomerProfile;
import com.bank.entity.User;
import com.bank.enums.ApplicationStatus;
import com.bank.exception.BadRequestException;
import com.bank.exception.ResourceNotFoundException;
import com.bank.repository.AccountApplicationRepository;
import com.bank.repository.BranchRepository;
import com.bank.repository.CustomerProfileRepository;
import com.bank.repository.UserRepository;
import com.bank.service.AccountApplicationService;
import com.bank.service.AccountService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class AccountApplicationServiceImpl
        implements AccountApplicationService {

    private final AccountApplicationRepository
            accountApplicationRepository;

    private final CustomerProfileRepository
            customerProfileRepository;

    private final BranchRepository
            branchRepository;

    private final UserRepository
            userRepository;

    private final AccountService
            accountService;

    /* =====================================================
                    CUSTOMER
       ===================================================== */

    @Override
    public AccountApplicationResponse apply(
            AccountApplicationRequest request,
            String username) {

        User user = userRepository
                .findByUsername(username)
                .or(() ->
                        userRepository.findByEmail(username))
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found."));

        CustomerProfile customer =
                customerProfileRepository
                        .findByUser(user)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Customer profile not found."));

        Branch branch =
                branchRepository
                        .findByBranchCode(
                                request.getBranchCode())
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Branch not found."));

        AccountApplication application =
                new AccountApplication();

        application.setApplicationNumber(
                generateApplicationNumber());

        application.setCustomerProfile(
                customer);

        application.setBranch(
                branch);

        application.setAccountType(
                request.getAccountType());

        application.setStatus(
                ApplicationStatus.PENDING_EMPLOYEE);

        application.setOccupation(
                request.getOccupation());

        application.setOccupationType(
                request.getOccupationType());

        application.setIncomeRange(
                request.getIncomeRange());

        application.setAnnualIncome(
                request.getAnnualIncome());

        application.setSourceOfIncome(
                request.getSourceOfIncome());

        application.setNomineeName(
                request.getNomineeName());

        application.setNomineeRelation(
                request.getNomineeRelation());

        application.setNomineeMobile(
                request.getNomineeMobile());

        application.setInitialDeposit(
                request.getInitialDeposit());

        application.setCreatedAt(
                LocalDateTime.now());

        application.setUpdatedAt(
                LocalDateTime.now());

        accountApplicationRepository
                .save(application);

        return map(application);
    }

    /* =====================================================
                    PRIVATE
       ===================================================== */

    private String generateApplicationNumber() {

        return "APP-"
                + UUID.randomUUID()
                .toString()
                .substring(0, 8)
                .toUpperCase();
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse> getMyApplications(
            String username) {

        User user = userRepository
                .findByUsername(username)
                .or(() ->
                        userRepository.findByEmail(username))
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found."));

        CustomerProfile customer =
                customerProfileRepository
                        .findByUser(user)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Customer profile not found."));

        return accountApplicationRepository
                .findByCustomerProfile(customer)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public AccountApplicationResponse getApplication(
            String applicationNumber,
            String username) {

        User user = userRepository
                .findByUsername(username)
                .or(() ->
                        userRepository.findByEmail(username))
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found."));

        CustomerProfile customer =
                customerProfileRepository
                        .findByUser(user)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Customer profile not found."));

        AccountApplication application =
                accountApplicationRepository
                        .findByApplicationNumber(
                                applicationNumber)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found."));

        if (!application.getCustomerProfile()
                .getId()
                .equals(customer.getId())) {

            throw new BadRequestException(
                    "You are not authorized to access this application.");
        }

        return map(application);
    }

    @Override
    public void cancelApplication(
            Long applicationId,
            String username) {

        User user = userRepository
                .findByUsername(username)
                .or(() ->
                        userRepository.findByEmail(username))
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "User not found."));

        CustomerProfile customer =
                customerProfileRepository
                        .findByUser(user)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Customer profile not found."));

        AccountApplication application =
                accountApplicationRepository
                        .findById(applicationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found."));

        if (!application.getCustomerProfile()
                .getId()
                .equals(customer.getId())) {

            throw new BadRequestException(
                    "You cannot cancel another customer's application.");
        }

        if (application.getStatus()
                != ApplicationStatus.PENDING_EMPLOYEE) {

            throw new BadRequestException(
                    "Only pending applications can be cancelled.");
        }

        application.setStatus(
                ApplicationStatus.CANCELLED);

        application.setUpdatedAt(
                LocalDateTime.now());

        accountApplicationRepository.save(
                application);
    }

    /* =====================================================
                    EMPLOYEE
       ===================================================== */
    
    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getPendingEmployeeApplications() {

        return accountApplicationRepository
                .findByStatus(
                        ApplicationStatus.PENDING_EMPLOYEE)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getEmployeeApprovedApplications() {

        return accountApplicationRepository
                .findByStatus(
                        ApplicationStatus.PENDING_ADMIN)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getEmployeeRejectedApplications() {

        return accountApplicationRepository
                .findByStatus(
                        ApplicationStatus.EMPLOYEE_REJECTED)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    public AccountApplicationResponse employeeApprove(
            Long applicationId,
            String employeeUsername,
            String remark) {

        User employee =
                userRepository
                        .findByUsername(employeeUsername)
                        .or(() ->
                                userRepository.findByEmail(
                                        employeeUsername))
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Employee not found."));

        AccountApplication application =
                accountApplicationRepository
                        .findById(applicationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found."));

        if (application.getStatus()
                != ApplicationStatus.PENDING_EMPLOYEE) {

            throw new BadRequestException(
                    "Application is not pending for employee verification.");
        }

        application.setEmployee(
                employee);

        application.setEmployeeRemark(
                remark);

        application.setEmployeeVerifiedAt(
                LocalDateTime.now());

        application.setStatus(
                ApplicationStatus.PENDING_ADMIN);

        application.setUpdatedAt(
                LocalDateTime.now());

        accountApplicationRepository.save(
                application);

        return map(application);
    }
    
    @Override
    public AccountApplicationResponse employeeReject(
            Long applicationId,
            String employeeUsername,
            String remark) {

        User employee =
                userRepository
                        .findByUsername(employeeUsername)
                        .or(() ->
                                userRepository.findByEmail(
                                        employeeUsername))
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Employee not found."));

        AccountApplication application =
                accountApplicationRepository
                        .findById(applicationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found."));

        if (application.getStatus()
                != ApplicationStatus.PENDING_EMPLOYEE) {

            throw new BadRequestException(
                    "Application is not pending for employee verification.");
        }

        application.setEmployee(employee);

        application.setEmployeeRemark(remark);

        application.setEmployeeVerifiedAt(
                LocalDateTime.now());

        application.setStatus(
                ApplicationStatus.EMPLOYEE_REJECTED);

        application.setUpdatedAt(
                LocalDateTime.now());

        accountApplicationRepository.save(
                application);

        return map(application);
    }

    /* =====================================================
                    ADMIN
       ===================================================== */

    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getPendingAdminApplications() {

        return accountApplicationRepository
                .findByStatus(
                        ApplicationStatus.PENDING_ADMIN)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getAdminApprovedApplications() {

        return accountApplicationRepository
                .findByStatus(
                        ApplicationStatus.ACCOUNT_CREATED)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getAdminRejectedApplications() {

        return accountApplicationRepository
                .findByStatus(
                        ApplicationStatus.ADMIN_REJECTED)
                .stream()
                .map(this::map)
                .toList();
    }
    
    @Override
    public AccountApplicationResponse adminApprove(
            Long applicationId,
            String adminUsername,
            String remark) {

        User admin =
                userRepository
                        .findByUsername(adminUsername)
                        .or(() ->
                                userRepository.findByEmail(
                                        adminUsername))
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Admin not found."));

        AccountApplication application =
                accountApplicationRepository
                        .findById(applicationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found."));

        if (application.getStatus()
                != ApplicationStatus.PENDING_ADMIN) {

            throw new BadRequestException(
                    "Application is not pending for admin approval.");
        }

        application.setAdmin(admin);

        application.setAdminRemark(
                remark);

        application.setAdminApprovedAt(
                LocalDateTime.now());

        application.setStatus(
                ApplicationStatus.ACCOUNT_CREATED);

        application.setUpdatedAt(
                LocalDateTime.now());

        accountApplicationRepository.save(
                application);

        /*
         * Automatically create Bank Account
         */
        accountService.createAccount(
                application.getId(),
                adminUsername);

        return map(application);
    }

    @Override
    public AccountApplicationResponse adminReject(
            Long applicationId,
            String adminUsername,
            String remark) {

        User admin =
                userRepository
                        .findByUsername(adminUsername)
                        .or(() ->
                                userRepository.findByEmail(
                                        adminUsername))
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Admin not found."));

        AccountApplication application =
                accountApplicationRepository
                        .findById(applicationId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Application not found."));

        if (application.getStatus()
                != ApplicationStatus.PENDING_ADMIN) {

            throw new BadRequestException(
                    "Application is not pending for admin approval.");
        }

        application.setAdmin(admin);

        application.setAdminRemark(
                remark);

        application.setAdminApprovedAt(
                LocalDateTime.now());

        application.setStatus(
                ApplicationStatus.ADMIN_REJECTED);

        application.setUpdatedAt(
                LocalDateTime.now());

        accountApplicationRepository.save(
                application);

        return map(application);
    }

    /* =====================================================
                    COMMON
       ===================================================== */
    
    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getAllApplications() {

        return accountApplicationRepository
                .findAll()
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<AccountApplicationResponse>
    getApplicationsByBranch(
            String branchCode) {

        Branch branch =
                branchRepository
                        .findByBranchCode(branchCode)
                        .orElseThrow(() ->
                                new ResourceNotFoundException(
                                        "Branch not found."));

        return accountApplicationRepository
                .findByBranch(branch)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public Object getStatistics() {

        java.util.Map<String, Object> statistics =
                new java.util.HashMap<>();

        statistics.put(
                "totalApplications",
                accountApplicationRepository.count());

        statistics.put(
                "pendingEmployee",
                accountApplicationRepository
                        .countByStatus(
                                ApplicationStatus.PENDING_EMPLOYEE));

        statistics.put(
                "pendingAdmin",
                accountApplicationRepository
                        .countByStatus(
                                ApplicationStatus.PENDING_ADMIN));

        statistics.put(
                "employeeRejected",
                accountApplicationRepository
                        .countByStatus(
                                ApplicationStatus.EMPLOYEE_REJECTED));

        statistics.put(
                "adminRejected",
                accountApplicationRepository
                        .countByStatus(
                                ApplicationStatus.ADMIN_REJECTED));

        statistics.put(
                "approved",
                accountApplicationRepository
                        .countByStatus(
                                ApplicationStatus.ACCOUNT_CREATED));

        return statistics;
    }

    /* =====================================================
                    ENTITY → DTO
       ===================================================== */

    private AccountApplicationResponse map(
            AccountApplication application) {

        AccountApplicationResponse response =
                new AccountApplicationResponse();

        response.setId(
                application.getId());

        response.setApplicationNumber(
                application.getApplicationNumber());

        response.setAccountType(
                application.getAccountType());

        response.setStatus(
                application.getStatus());

        response.setApplicationDate(
                application.getApplicationDate());
        
        /* =====================================================
        CUSTOMER
===================================================== */

if (application.getCustomerProfile() != null) {

response.setCustomerId(
    application.getCustomerProfile().getId());

if (application.getCustomerProfile().getUser() != null) {

User customer =
        application.getCustomerProfile()
                .getUser();

response.setCustomerName(
        customer.getFullName());

response.setCustomerEmail(
        customer.getEmail());

response.setCustomerMobile(
        customer.getMobileNumber());
}
}

/* =====================================================
        BRANCH
===================================================== */

if (application.getBranch() != null) {

response.setBranchId(
    application.getBranch().getId());

response.setBranchCode(
    application.getBranch().getBranchCode());

response.setBranchName(
    application.getBranch().getBranchName());
}

/* =====================================================
        OCCUPATION & INCOME
===================================================== */

response.setOccupation(
application.getOccupation());

response.setOccupationType(
application.getOccupationType());

response.setIncomeRange(
application.getIncomeRange());

response.setAnnualIncome(
application.getAnnualIncome());

response.setSourceOfIncome(
application.getSourceOfIncome());

/* =====================================================
        NOMINEE
===================================================== */

response.setNomineeName(
application.getNomineeName());

response.setNomineeRelation(
application.getNomineeRelation());

response.setNomineeMobile(
application.getNomineeMobile());

/* =====================================================
        DEPOSIT
===================================================== */

response.setInitialDeposit(
application.getInitialDeposit());

response.setRemarks(
application.getRemarks());

/* =====================================================
EMPLOYEE VERIFICATION
===================================================== */

if (application.getEmployee() != null) {

response.setEmployeeId(
application.getEmployee().getId());

response.setEmployeeName(
application.getEmployee().getFullName());
}

response.setEmployeeVerifiedAt(
application.getEmployeeVerifiedAt());

response.setEmployeeRemark(
application.getEmployeeRemark());

/* =====================================================
ADMIN APPROVAL
===================================================== */

if (application.getAdmin() != null) {

response.setAdminId(
application.getAdmin().getId());

response.setAdminName(
application.getAdmin().getFullName());
}

response.setAdminApprovedAt(
application.getAdminApprovedAt());

response.setAdminRemark(
application.getAdminRemark());

/* =====================================================
AUDIT
===================================================== */

response.setCreatedAt(
application.getCreatedAt());

response.setUpdatedAt(
application.getUpdatedAt());

return response;
}

}