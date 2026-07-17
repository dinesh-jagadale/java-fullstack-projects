import { Outlet } from "react-router-dom";

import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";
import CustomerSidebar from "../sidebar/CustomerSidebar";


import "./Layout.css";

const CustomerLayout = () => {

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

                    <CustomerSidebar />

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

export default CustomerLayout;