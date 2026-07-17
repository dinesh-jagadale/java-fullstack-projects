package com.bank.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entity.CustomerProfile;
import com.bank.entity.User;

@Repository
public interface CustomerProfileRepository
        extends JpaRepository<CustomerProfile, Long> {

    Optional<CustomerProfile> findByUser(User user);

    Optional<CustomerProfile> findByCustomerId(String customerId);

    boolean existsByCustomerId(String customerId);

}