import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import AdminSidebar from "../sidebar/AdminSidebar";
import "./Layout.css";

const AdminLayout = () => {

    return (

        <div className="app-layout">

            {/* ==========================
                    Top Navbar
            ========================== */}

            <UserNavbar />

            {/* ==========================
                    Body
            ========================== */}

            <div className="app-body">

                {/* Sidebar */}

                <aside className="app-sidebar">

                    <AdminSidebar />

                </aside>

                {/* Main Content */}

                <main className="app-content">

                    <Outlet />

                </main>

            </div>

            {/* ==========================
                    Footer
            ========================== */}

            <footer className="app-footer">

                <UserFooter />

            </footer>

        </div>

    );

};

export default AdminLayout;