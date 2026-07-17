package com.bank.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.entity.AccountApplication;
import com.bank.entity.ApplicationDocument;
import com.bank.entity.User;
import com.bank.enums.DocumentType;
import com.bank.enums.VerificationStatus;

@Repository
public interface ApplicationDocumentRepository
        extends JpaRepository<ApplicationDocument, Long> {

    /**
     * Find all documents for an account application
     */
    List<ApplicationDocument> findByApplication(
            AccountApplication application
    );

    /**
     * Find documents by document type
     */
    List<ApplicationDocument> findByDocumentType(
            DocumentType documentType
    );

    /**
     * Find document by application and type
     */
    Optional<ApplicationDocument> findByApplicationAndDocumentType(
            AccountApplication application,
            DocumentType documentType
    );

    /**
     * Find all pending verification documents
     */
    List<ApplicationDocument> findByVerificationStatus(
            VerificationStatus verificationStatus
    );

    /**
     * Find all documents verified by employee
     */
    List<ApplicationDocument> findByVerifiedBy(
            User verifiedBy
    );

    /**
     * Find documents by application and verification status
     */
    List<ApplicationDocument> findByApplicationAndVerificationStatus(
            AccountApplication application,
            VerificationStatus verificationStatus
    );

    /**
     * Check whether a document already exists
     */
    boolean existsByApplicationAndDocumentType(
            AccountApplication application,
            DocumentType documentType
    );

    /**
     * Find document by stored filename
     */
    Optional<ApplicationDocument> findByStoredFileName(
            String storedFileName
    );

}