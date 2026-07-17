import { Outlet } from "react-router-dom";

import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import EmployeeSidebar from "../sidebar/EmployeeSidebar";

import "./Layout.css";

const EmployeeLayout = () => {

    return (

        <div className="app-layout">

            {/* ==========================
                    Top Navigation
            ========================== */}

            <UserNavbar />

            {/* ==========================
                    Main Body
            ========================== */}

            <div className="app-body">

                {/* Sidebar */}

                <aside className="app-sidebar">

                    <EmployeeSidebar />

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

export default EmployeeLayout;