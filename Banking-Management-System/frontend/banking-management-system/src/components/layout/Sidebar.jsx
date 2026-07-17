import { NavLink } from "react-router-dom";
import { useMemo } from "react";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {

    const { user } = useAuth();

    const role = user?.role;

    const panelTitle = useMemo(() => {

        switch (role) {

            case "ROLE_ADMIN":
                return "Administrator";

            case "ROLE_EMPLOYEE":
                return "Employee";

            case "ROLE_CUSTOMER":
                return "Customer";

            default:
                return "Banking System";

        }

    }, [role]);

    const menuItems = useMemo(() => {

        switch (role) {

            /* ==============================
                    ADMIN
            ============================== */

            case "ROLE_ADMIN":

                return [

                    {
                        title: "Dashboard",
                        path: "/admin/dashboard",
                        icon: "bi-speedometer2",
                    },

                    {
                        title: "Users",
                        path: "/admin/users",
                        icon: "bi-people",
                    },

                    {
                        title: "Customers",
                        path: "/admin/customers",
                        icon: "bi-person-badge",
                    },

                    {
                        title: "Employees",
                        path: "/admin/employees",
                        icon: "bi-person-workspace",
                    },

                    {
                        title: "Accounts",
                        path: "/admin/accounts",
                        icon: "bi-wallet2",
                    },

                    {
                        title: "Transactions",
                        path: "/admin/transactions",
                        icon: "bi-arrow-left-right",
                    },

                    {
                        title: "Loans",
                        path: "/admin/loans",
                        icon: "bi-bank",
                    },

                    {
                        title: "Cards",
                        path: "/admin/cards",
                        icon: "bi-credit-card-2-front",
                    },

                    {
                        title: "Reports",
                        path: "/admin/reports",
                        icon: "bi-file-earmark-bar-graph",
                    },

                    {
                        title: "Analytics",
                        path: "/admin/analytics",
                        icon: "bi-graph-up-arrow",
                    },

                    

                ];

            /* ==============================
                    EMPLOYEE
            ============================== */

            case "ROLE_EMPLOYEE":

                return [

                    {
                        title: "Dashboard",
                        path: "/employee/dashboard",
                        icon: "bi-speedometer2",
                    },

                    {
                        title: "Customer Verification",
                        path: "/employee/customer-verification",
                        icon: "bi-person-check",
                    },

                    {
                        title: "KYC Verification",
                        path: "/employee/kyc-verification",
                        icon: "bi-file-earmark-check",
                    },


                    {
                        title: "Account Approval",
                        path: "/employee/account-approval",
                        icon: "bi-patch-check",
                    },

                    {
                        title: "Loan Approval",
                        path: "/employee/loan-approval",
                        icon: "bi-bank",
                    },

                    {
                        title: "Transactions",
                        path: "/employee/transactions",
                        icon: "bi-arrow-left-right",
                    },

                ];

            /* ==============================
                    CUSTOMER
            ============================== */

            case "ROLE_CUSTOMER":

                return [

                    {
                        title: "Dashboard",
                        path: "/customer/dashboard",
                        icon: "bi-speedometer2",
                    },

                    {
                        title: "Accounts",
                        path: "/customer/accounts",
                        icon: "bi-wallet2",
                    },

                    {
                        title: "Transfer Money",
                        path: "/customer/transfer-money",
                        icon: "bi-send",
                    },

                    {
                        title: "Beneficiaries",
                        path: "/customer/beneficiaries",
                        icon: "bi-people-fill",
                    },

                    {
                        title: "Cards",
                        path: "/customer/cards",
                        icon: "bi-credit-card",
                    },

                    {
                        title: "Loans",
                        path: "/customer/loans",
                        icon: "bi-bank",
                    },

                    {
                        title: "Transaction History",
                        path: "/customer/transaction-history",
                        icon: "bi-clock-history",
                    },

                    {
                        title: "Passbook",
                        path: "/customer/passbook",
                        icon: "bi-journal-bookmark",
                    },


                ];

            default:

                return [];

        }

    }, [role]);

    return (

        <aside
            className="bg-dark text-white shadow position-sticky top-0"
            style={{
                width: "260px",
                height: "calc(100vh - 72px)",
                overflowY: "auto",
            }}
        >

            {/* Header */}

            <div className="p-4 border-bottom border-secondary text-center">

                <div
                    className="rounded-circle bg-primary d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                        width: "60px",
                        height: "60px",
                    }}
                >

                    <i className="bi bi-person-fill fs-3 text-white"></i>

                </div>

                <h5 className="fw-bold mb-1">

                    {panelTitle}

                </h5>

                <small className="text-light">

                    {user?.fullName}

                </small>

            </div>

            {/* Menu */}

            <nav className="py-3">

                {

                    menuItems.map(item => (

                        <NavLink

                            key={item.path}

                            to={item.path}

                            end

                            className={({ isActive }) =>

                                `d-flex align-items-center px-4 py-3 text-decoration-none border-start border-4 ${
                                    isActive
                                        ? "bg-primary border-white text-white"
                                        : "border-transparent text-light"
                                }`

                            }

                        >

                            <i
                                className={`bi ${item.icon} me-3 fs-5`}
                            ></i>

                            <span>

                                {item.title}

                            </span>

                        </NavLink>

                    ))

                }

            </nav>

        </aside>

    );

};

export default Sidebar;