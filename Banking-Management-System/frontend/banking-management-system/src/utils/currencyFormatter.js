import appConfig from "../config/appConfig";

/**
 * Formats a numeric value into Indian Rupee currency.
 *
 * Example:
 * 1250000.5 -> ₹12,50,000.50
 */
export const formatCurrency = (
    amount,
    options = {}
) => {
    if (amount === null || amount === undefined || amount === "") {
        return "-";
    }

    const value = Number(amount);

    if (Number.isNaN(value)) {
        return "-";
    }

    return new Intl.NumberFormat(
        appConfig.currency.locale,
        {
            style: "currency",
            currency: appConfig.currency.currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            ...options,
        }
    ).format(value);
};

/**
 * Formats amount without currency symbol.
 *
 * Example:
 * 1250000.5 -> 12,50,000.50
 */
export const formatAmount = (
    amount,
    options = {}
) => {
    if (amount === null || amount === undefined || amount === "") {
        return "-";
    }

    const value = Number(amount);

    if (Number.isNaN(value)) {
        return "-";
    }

    return new Intl.NumberFormat(
        appConfig.currency.locale,
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            ...options,
        }
    ).format(value);
};

/**
 * Converts negative values to debit
 * and positive values to credit.
 */
export const transactionType = (amount) => {
    if (Number(amount) >= 0) {
        return "CREDIT";
    }

    return "DEBIT";
};

/**
 * Returns Bootstrap text color
 * based on transaction amount.
 */
export const amountColor = (amount) => {
    return Number(amount) >= 0
        ? "text-success"
        : "text-danger";
};

/**
 * Returns Bootstrap badge color
 * for transaction type.
 */
export const transactionBadge = (amount) => {
    return Number(amount) >= 0
        ? "success"
        : "danger";
};

export default {
    formatCurrency,
    formatAmount,
    transactionType,
    amountColor,
    transactionBadge,
};