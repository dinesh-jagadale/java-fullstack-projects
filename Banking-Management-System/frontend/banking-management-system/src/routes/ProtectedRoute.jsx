//C:\Java-FullStack-Projects\Banking-Management-System\frontend\banking-management-system\src\routes\ProtectedRoute.jsx

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles = [] }) => {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    if (!isAuthenticated()) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        );
    }

    if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(user?.role)
    ) {
        return (
            <Navigate
                to="/403"
                replace
            />
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;