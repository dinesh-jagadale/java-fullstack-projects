//package com.bank.mapper;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.stereotype.Component;
//
//import com.bank.dto.response.AccountApplicationResponse;
//import com.bank.entity.AccountApplication;
//import com.bank.entity.ApplicationDocument;
//import com.bank.entity.Branch;
//import com.bank.entity.CustomerProfile;
//
//@Component
//public class AccountApplicationMapper {
//
//    public AccountApplicationResponse toResponse(AccountApplication application) {
//
//        if (application == null) {
//            return null;
//        }
//
//        AccountApplicationResponse response = new AccountApplicationResponse();
//
//        /* ==========================================
//                Application Information
//        ========================================== */
//
//        response.setId(application.getId());
//        response.setApplicationNumber(application.getApplicationNumber());
//        response.setAccountType(application.getAccountType());
//        response.setStatus(application.getStatus());
//        response.setApplicationDate(application.getApplicationDate());
//
//        /* ==========================================
//                Customer Information
//        ========================================== */
//
//        CustomerProfile customerProfile = application.getCustomerProfile();
//
//        if (customerProfile != null && customerProfile.getUser() != null) {
//
//            response.setCustomerId(customerProfile.getId());
//
//            response.setCustomerName(
//                    customerProfile.getUser().getFullName());
//
//            response.setCustomerEmail(
//                    customerProfile.getUser().getEmail());
//
//            response.setCustomerMobile(
//                    customerProfile.getUser().getMobileNumber());
//
//        }
//
//        /* ==========================================
//                Branch Information
//        ========================================== */
//
//        Branch branch = application.getBranch();
//
//        if (branch != null) {
//
//            response.setBranchCode(branch.getBranchCode());
//
//            response.setBranchName(branch.getBranchName());
//
//        }
//
//        /* ==========================================
//                Occupation Information
//        ========================================== */
//
//        response.setOccupation(application.getOccupation());
//
//        response.setOccupationType(
//                application.getOccupationType());
//
//        response.setIncomeRange(
//                application.getIncomeRange());
//
//        response.setAnnualIncome(
//                application.getAnnualIncome());
//
//        response.setSourceOfIncome(
//                application.getSourceOfIncome());
//
//        /* ==========================================
//                Nominee Information
//        ========================================== */
//
//        response.setNomineeName(
//                application.getNomineeName());
//
//        response.setNomineeRelation(
//                application.getNomineeRelation());
//
//        response.setNomineeMobile(
//                application.getNomineeMobile());
//
//        /* ==========================================
//                Deposit Information
//        ========================================== */
//
//        response.setInitialDeposit(
//                application.getInitialDeposit());
//
//        /* ==========================================
//                Employee Verification
//        ========================================== */
//
//        if (application.getEmployee() != null) {
//
//            response.setEmployeeId(
//                    application.getEmployee().getId());
//
//            response.setEmployeeName(
//                    application.getEmployee().getFullName());
//
//            response.setEmployeeVerifiedAt(
//                    application.getEmployeeVerifiedAt());
//
//            response.setEmployeeRemark(
//                    application.getEmployeeRemark());
//
//        }
//
//        /* ==========================================
//                Admin Approval
//        ========================================== */
//
//        if (application.getAdmin() != null) {
//
//            response.setAdminId(
//                    application.getAdmin().getId());
//
//            response.setAdminName(
//                    application.getAdmin().getFullName());
//
//            response.setAdminApprovedAt(
//                    application.getAdminApprovedAt());
//
//            response.setAdminRemark(
//                    application.getAdminRemark());
//
//        }
//
//        /* ==========================================
//                Uploaded Documents
//        ========================================== */
//
//        if (application.getDocuments() != null) {
//
//            List<String> uploadedDocuments = application
//                    .getDocuments()
//                    .stream()
//                    .map(ApplicationDocument::getOriginalFileName)
//                    .collect(Collectors.toList());
//
//            response.setUploadedDocuments(uploadedDocuments);
//
//        }
//
//        /* ==========================================
//                Audit Information
//        ========================================== */
//
//        response.setCreatedAt(application.getCreatedAt());
//
//        response.setUpdatedAt(application.getUpdatedAt());
//
//        return response;
//    }
//
//}