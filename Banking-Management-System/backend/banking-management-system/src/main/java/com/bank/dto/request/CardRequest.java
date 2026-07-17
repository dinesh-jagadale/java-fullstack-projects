package com.bank.dto.request;

import com.bank.enums.CardType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class CardRequest {

    /* =====================================================
                    ACCOUNT
       ===================================================== */

    @NotBlank(message = "Account number is required.")
    private String accountNumber;

    /* =====================================================
                    CARD DETAILS
       ===================================================== */

    @NotNull(message = "Card type is required.")
    private CardType cardType;

    @NotBlank(message = "Card variant is required.")
    @Size(max = 30)
    private String cardVariant;

    /* =====================================================
                    CARD OPTIONS
       ===================================================== */

    private Boolean contactlessEnabled = true;

    private Boolean internationalUsageEnabled = false;

    private Boolean onlineTransactionsEnabled = true;

    private Boolean atmWithdrawalEnabled = true;

    /* =====================================================
                    DELIVERY ADDRESS
       ===================================================== */

    @NotBlank(message = "Address Line 1 is required.")
    @Size(max = 200)
    private String addressLine1;

    @Size(max = 200)
    private String addressLine2;

    @NotBlank(message = "City is required.")
    @Size(max = 80)
    private String city;

    @NotBlank(message = "State is required.")
    @Size(max = 80)
    private String state;

    @NotBlank(message = "Pincode is required.")
    @Size(max = 10)
    private String pincode;

    @NotBlank(message = "Country is required.")
    @Size(max = 80)
    private String country;

    /* =====================================================
                    DECLARATION
       ===================================================== */

    @NotNull(message = "Terms acceptance is required.")
    private Boolean termsAccepted;

    @NotNull(message = "Declaration acceptance is required.")
    private Boolean declarationAccepted;

    public CardRequest() {
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public CardType getCardType() {
        return cardType;
    }

    public void setCardType(CardType cardType) {
        this.cardType = cardType;
    }

    public String getCardVariant() {
        return cardVariant;
    }

    public void setCardVariant(String cardVariant) {
        this.cardVariant = cardVariant;
    }

    public Boolean getContactlessEnabled() {
        return contactlessEnabled;
    }

    public void setContactlessEnabled(Boolean contactlessEnabled) {
        this.contactlessEnabled = contactlessEnabled;
    }

    public Boolean getInternationalUsageEnabled() {
        return internationalUsageEnabled;
    }

    public void setInternationalUsageEnabled(Boolean internationalUsageEnabled) {
        this.internationalUsageEnabled = internationalUsageEnabled;
    }

    public Boolean getOnlineTransactionsEnabled() {
        return onlineTransactionsEnabled;
    }

    public void setOnlineTransactionsEnabled(Boolean onlineTransactionsEnabled) {
        this.onlineTransactionsEnabled = onlineTransactionsEnabled;
    }

    public Boolean getAtmWithdrawalEnabled() {
        return atmWithdrawalEnabled;
    }

    public void setAtmWithdrawalEnabled(Boolean atmWithdrawalEnabled) {
        this.atmWithdrawalEnabled = atmWithdrawalEnabled;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Boolean getTermsAccepted() {
        return termsAccepted;
    }

    public void setTermsAccepted(Boolean termsAccepted) {
        this.termsAccepted = termsAccepted;
    }

    public Boolean getDeclarationAccepted() {
        return declarationAccepted;
    }

    public void setDeclarationAccepted(Boolean declarationAccepted) {
        this.declarationAccepted = declarationAccepted;
    }

}