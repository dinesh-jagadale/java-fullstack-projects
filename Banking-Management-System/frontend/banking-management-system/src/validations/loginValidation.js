/**
 * ==========================================
 * Banking Management System
 * Login Form Validation Rules
 * ==========================================
 */

export const loginValidation = {
    email: {
        required: "Email address is required.",

        pattern: {
            value:
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,

            message: "Please enter a valid email address.",
        },
    },

    password: {
        required: "Password is required.",

        minLength: {
            value: 8,

            message:
                "Password must contain at least 8 characters.",
        },

        maxLength: {
            value: 30,

            message:
                "Password cannot exceed 30 characters.",
        },
    },
};

export default loginValidation;