/**
 * ==========================================
 * Date Utility Functions
 * ==========================================
 */

/**
 * Format Date
 * Example:
 * 12 Jul 2026
 */
export const formatDate = (date) => {

    if (!date) return "-";

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
        return "-";
    }

    return parsedDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

};

/**
 * Format Date & Time
 * Example:
 * 12 Jul 2026, 10:30 AM
 */
export const formatDateTime = (date) => {

    if (!date) return "-";

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
        return "-";
    }

    return parsedDate.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

};

/**
 * Format Time
 * Example:
 * 10:30 AM
 */
export const formatTime = (date) => {

    if (!date) return "-";

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
        return "-";
    }

    return parsedDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

};

/**
 * Relative Time
 * Example:
 * Today
 * Yesterday
 * 5 days ago
 */
export const getRelativeTime = (date) => {

    if (!date) return "-";

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
        return "-";
    }

    const now = new Date();

    const difference =
        now.getTime() - parsedDate.getTime();

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    if (days === 0) {
        return "Today";
    }

    if (days === 1) {
        return "Yesterday";
    }

    if (days < 30) {
        return `${days} days ago`;
    }

    if (days < 365) {

        const months = Math.floor(days / 30);

        return `${months} month${months > 1 ? "s" : ""} ago`;

    }

    const years = Math.floor(days / 365);

    return `${years} year${years > 1 ? "s" : ""} ago`;

};

/**
 * Current Date
 */
export const getCurrentDate = () => {

    return formatDate(new Date());

};

/**
 * Current Date & Time
 */
export const getCurrentDateTime = () => {

    return formatDateTime(new Date());

};

/**
 * Default Export
 */
const dateUtils = {
    formatDate,
    formatDateTime,
    formatTime,
    getRelativeTime,
    getCurrentDate,
    getCurrentDateTime
};

export default dateUtils;