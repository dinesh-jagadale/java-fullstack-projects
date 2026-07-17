import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/common/Loader";

const AdminRoute = ({ children }) => {
    const { loading, isAuthenticated, user } = useAuth();

    if (loading) {
        return <Loader message="Loading..." />;
    }

    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    if (!user?.roles?.includes("ROLE_ADMIN")) {
        return <Navigate to="/403" replace />;
    }

    return children;
};

export default AdminRoute;