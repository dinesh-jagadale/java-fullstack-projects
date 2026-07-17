const appConfig = {
    app: {
        name: "Banking Management System",
        version: "1.0.0",
        company: "Open Banking Solutions",
    },

    api: {
        baseUrl:
            import.meta.env.VITE_API_BASE_URL ||
            "http://localhost:8080/api",

        timeout: 10000,
    },

    auth: {
        loginUrl: "/login",

        registerUrl: "/register",

        forgotPasswordUrl: "/forgot-password",

        resetPasswordUrl: "/reset-password",

        accessTokenKey: "accessToken",

        refreshTokenKey: "refreshToken",

        userKey: "user",
    },

    roles: {
        ADMIN: "ROLE_ADMIN",

        EMPLOYEE: "ROLE_EMPLOYEE",

        CUSTOMER: "ROLE_CUSTOMER",
    },

    dashboard: {
        admin: "/admin/dashboard",

        employee: "/employee/dashboard",

        customer: "/customer/dashboard",
    },

    pagination: {
        defaultPage: 0,

        defaultSize: 10,

        pageSizeOptions: [10, 20, 50, 100],
    },

    date: {
        locale: "en-IN",

        timeZone: "Asia/Kolkata",
    },

    currency: {
        locale: "en-IN",

        currency: "INR",
    },
};

export default appConfig;