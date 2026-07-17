import { NavLink } from "react-router-dom";

const menuItems = [
    {
        title: "Dashboard",
        path: "/customer/dashboard",
        icon: "bi-speedometer2",
    },
    {
        title: "My Profile",
        path: "/customer/profile",
        icon: "bi-person-circle",
    },
    {
        title: "My Accounts",
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
    title: "Transaction History",
    path: "/customer/transaction-history",
    icon: "bi-clock-history",
    },
    
    {
        title: "Passbook",
        path: "/customer/passbook",
        icon: "bi-book",
    },
    {
        title: "Cards",
        path: "/customer/cards",
        icon: "bi-credit-card-2-front",
    },
    {
        title: "Loans",
        path: "/customer/loans",
        icon: "bi-bank",
    },
    {
        title: "Notifications",
        path: "/customer/notifications",
        icon: "bi-bell",
    },
    
];

const CustomerSidebar = () => {
    return (
        <aside
            className="bg-dark text-white shadow"
            style={{
                width: "260px",
                minHeight: "100vh",
            }}
        >
            <div className="border-bottom border-secondary p-3">
                <h5 className="fw-bold text-center mb-0">
                    Customer Panel
                </h5>
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
                            className={`bi ${item.icon} me-3 fs-5`}
                        />

                        <span>{item.title}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default CustomerSidebar;