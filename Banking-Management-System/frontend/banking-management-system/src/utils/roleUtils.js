export const ROLES = {
    ADMIN: "ROLE_ADMIN",
    EMPLOYEE: "ROLE_EMPLOYEE",
    CUSTOMER: "ROLE_CUSTOMER",
};

export const isAdmin = (user) =>
    user?.role === ROLES.ADMIN;

export const isEmployee = (user) =>
    user?.role === ROLES.EMPLOYEE;

export const isCustomer = (user) =>
    user?.role === ROLES.CUSTOMER;

export const getDashboardRoute = (role) => {
    switch (role) {
        case ROLES.ADMIN:
            return "/admin/dashboard";

        case ROLES.EMPLOYEE:
            return "/employee/dashboard";

        case ROLES.CUSTOMER:
            return "/customer/dashboard";

        default:
            return "/login";
    }
};

export default ROLES;