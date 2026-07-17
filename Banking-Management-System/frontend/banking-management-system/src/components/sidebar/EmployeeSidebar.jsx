import { NavLink } from "react-router-dom";

const menuItems = [

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

    {
        title: "Profile",
        path: "/employee/profile",
        icon: "bi-person-circle",
    },

];

const EmployeeSidebar = () => {
    return (
        <aside
            className="bg-dark text-white"
            style={{
                minHeight: "100vh",
                width: "260px",
            }}
        >
            <div className="p-3 border-bottom border-secondary">
                <h4 className="text-center mb-0">
                    Employee Panel
                </h4>
            </div>

            <nav className="mt-3">

                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end
                        className={({ isActive }) =>
                            `d-flex align-items-center px-3 py-3 text-decoration-none ${
                                isActive
                                    ? "bg-primary text-white"
                                    : "text-light"
                            }`
                        }
                    >
                        <i
                            className={`${item.icon} me-3 fs-5`}
                        />

                        <span>{item.title}</span>
                    </NavLink>
                ))}

            </nav>
        </aside>
    );
};

export default EmployeeSidebar;