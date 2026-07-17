import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminSidebar = () => {

    const { user } = useAuth();

    const menuItems = [

        {
            title: "Dashboard",
            icon: "bi-speedometer2",
            path: "/admin/dashboard",
        },

        {
            title: "Manage Users",
            icon: "bi-people",
            path: "/admin/users",
        },

        {
            title: "Customers",
            icon: "bi-person-badge",
            path: "/admin/customers",
        },

        {
            title: "Employees",
            icon: "bi-person-workspace",
            path: "/admin/employees",
        },

        {
            title: "Accounts",
            icon: "bi-wallet2",
            path: "/admin/accounts",
        },

        {
            title: "Transactions",
            icon: "bi-arrow-left-right",
            path: "/admin/transactions",
        },

        {
            title: "Loans",
            icon: "bi-bank",
            path: "/admin/loans",
        },

        {
            title: "Cards",
            icon: "bi-credit-card-2-front",
            path: "/admin/cards",
        },

        {
            title: "Reports",
            icon: "bi-file-earmark-bar-graph",
            path: "/admin/reports",
        },

        {
            title: "Analytics",
            icon: "bi-graph-up-arrow",
            path: "/admin/analytics",
        },

    ];

    return (

        <aside
            className="bg-dark text-white"
            style={{
                width: "260px",
                height: "calc(100vh - 72px)",
                position: "sticky",
                top: "72px",
                overflowY: "auto",
            }}
        >

            <div className="text-center p-4 border-bottom border-secondary">

                <div
                    className="bg-primary rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
                    style={{
                        width: "70px",
                        height: "70px",
                    }}
                >

                    <i className="bi bi-person-fill fs-2"></i>

                </div>

                <h5 className="fw-bold">

                    Administrator

                </h5>

                <small className="text-light">

                    {user?.fullName || "Admin"}

                </small>

            </div>

            <nav className="mt-3">

                {

                    menuItems.map((item) => (

                        <NavLink

                            key={item.path}

                            to={item.path}

                            end

                            className={({ isActive }) =>

                                `d-flex align-items-center px-4 py-3 text-decoration-none ${
                                    isActive
                                        ? "bg-primary text-white"
                                        : "text-light"
                                }`

                            }

                        >

                            <i
                                className={`bi ${item.icon} me-3 fs-5`}
                            ></i>

                            {item.title}

                        </NavLink>

                    ))

                }

            </nav>

        </aside>

    );

};

export default AdminSidebar;