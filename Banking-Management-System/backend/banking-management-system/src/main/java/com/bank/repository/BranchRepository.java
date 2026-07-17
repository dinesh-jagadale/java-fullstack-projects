package com.bank.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entity.Branch;

@Repository
public interface BranchRepository
        extends JpaRepository<Branch, Long> {

    Optional<Branch> findByBranchCode(String branchCode);

    Optional<Branch> findByBranchName(String branchName);

    boolean existsByBranchCode(String branchCode);

}