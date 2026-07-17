/**
 * ==========================================================
 * Banking Management System
 * Registration Form Validation Rules
 * ==========================================================
 */

export const registerValidation = {
    firstName: {
        required: "First name is required.",

        minLength: {
            value: 2,
            message: "First name must contain at least 2 characters.",
        },

        maxLength: {
            value: 50,
            message: "First name cannot exceed 50 characters.",
        },

        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "First name can contain only alphabets.",
        },
    },

    lastName: {
        required: "Last name is required.",

        minLength: {
            value: 2,
            message: "Last name must contain at least 2 characters.",
        },

        maxLength: {
            value: 50,
            message: "Last name cannot exceed 50 characters.",
        },

        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: "Last name can contain only alphabets.",
        },
    },

    email: {
        required: "Email address is required.",

        pattern: {
            value:
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: "Please enter a valid email address.",
        },
    },

    mobileNumber: {
        required: "Mobile number is required.",

        pattern: {
            value: /^[6-9]\d{9}$/,
            message: "Please enter a valid 10-digit mobile number.",
        },
    },

    password: {
        required: "Password is required.",

        minLength: {
            value: 8,
            message: "Password must contain at least 8 characters.",
        },

        maxLength: {
            value: 30,
            message: "Password cannot exceed 30 characters.",
        },

        validate: {
            hasUpperCase: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one uppercase letter.",

            hasLowerCase: (value) =>
                /[a-z]/.test(value) ||
                "Password must contain at least one lowercase letter.",

            hasNumber: (value) =>
                /\d/.test(value) ||
                "Password must contain at least one number.",

            hasSpecialCharacter: (value) =>
                /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                "Password must contain at least one special character.",
        },
    },
};

export default registerValidation;