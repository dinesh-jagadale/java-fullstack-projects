package com.bank.repository;

import java.util.List;

import com.bank.dto.request.AccountApplicationRequest;
import com.bank.dto.response.AccountApplicationResponse;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entity.AccountApplication;
import com.bank.entity.Branch;
import com.bank.entity.CustomerProfile;
import com.bank.entity.User;
import com.bank.enums.ApplicationStatus;

@Repository
public interface AccountApplicationRepository
        extends JpaRepository<AccountApplication, Long> {

    Optional<AccountApplication> findByApplicationNumber(
            String applicationNumber);

    boolean existsByApplicationNumber(
            String applicationNumber);

    /* ===========================
            CUSTOMER
       =========================== */

    List<AccountApplication> findByCustomerProfile(
            CustomerProfile customerProfile);

    List<AccountApplication> findByCustomerProfileUser(
            User user);

    List<AccountApplication> findByCustomerProfileAndStatus(
            CustomerProfile customerProfile,
            ApplicationStatus status);

    /* ===========================
            STATUS
       =========================== */

    List<AccountApplication> findByStatus(
            ApplicationStatus status);

    /* ===========================
            EMPLOYEE
       =========================== */

    List<AccountApplication> findByEmployee(
            User employee);

    /* ===========================
            ADMIN
       =========================== */

    List<AccountApplication> findByAdmin(
            User admin);

    /* ===========================
            BRANCH
       =========================== */

    List<AccountApplication> findByBranch(
            Branch branch);

    List<AccountApplication> findByBranchAndStatus(
            Branch branch,
            ApplicationStatus status);

}