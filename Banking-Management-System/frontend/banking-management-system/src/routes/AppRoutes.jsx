import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* ===============================
            Public Pages
================================ */

import Home from "../pages/Home";

/* ===============================
        Authentication
================================ */

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

/* ===============================
          Error Pages
================================ */

import Unauthorized from "../pages/errors/Unauthorized";
import NotFound from "../pages/errors/NotFound";

/* ===============================
            Layouts
================================ */

import AdminLayout from "../components/layout/AdminLayout";
import EmployeeLayout from "../components/layout/EmployeeLayout";
import CustomerLayout from "../components/layout/CustomerLayout";

/* ===============================
        Protected Routes
================================ */

import AdminRoute from "./AdminRoute";
import EmployeeRoute from "./EmployeeRoute";
import CustomerRoute from "./CustomerRoute";

/* ===============================
            Admin Pages
================================ */

import AdminDashboard from "../pages/admin/Dashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageCustomers from "../pages/admin/ManageCustomers";
import ManageEmployees from "../pages/admin/ManageEmployees";
import ManageAccounts from "../pages/admin/ManageAccounts";
import ManageTransactions from "../pages/admin/ManageTransactions";
import ManageLoans from "../pages/admin/ManageLoans";
import ManageCards from "../pages/admin/ManageCards";
import Reports from "../pages/admin/Reports";
import Analytics from "../pages/admin/Analytics";
import SystemSettings from "../pages/admin/SystemSettings";
import ChangePassword from "../pages/admin/ChangePassword";

/* ===============================
        Employee Pages
================================ */

import EmployeeDashboard from "../pages/employee/Dashboard";
import CustomerVerification from "../pages/employee/CustomerVerification";
import KYCVerification from "../pages/employee/KYCVerification";
import AccountApproval from "../pages/employee/AccountApproval";
import LoanApproval from "../pages/employee/LoanApproval";
import EmployeeTransactions from "../pages/employee/Transactions";
import EmployeeProfile from "../pages/employee/Profile";
import EmployeeSettings from "../pages/employee/Settings";
import EmployeeChangePassword from "../pages/employee/ChangePassword";

/* ===============================
        Customer Pages
================================ */

import CustomerDashboard from "../pages/customer/Dashboard";
import CustomerProfile from "../pages/customer/Profile";
import CustomerAccounts from "../pages/customer/Accounts";
import TransferMoney from "../pages/customer/TransferMoney";
import Beneficiaries from "../pages/customer/Beneficiaries";
import CustomerCards from "../pages/customer/Cards";
import CustomerLoans from "../pages/customer/Loans";
import TransactionHistory from "../pages/customer/TransactionHistory";
import Passbook from "../pages/customer/Passbook";
import CustomerSettings from "../pages/customer/Settings";
import CustomerChangePassword from "../pages/customer/ChangePassword";

const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>

                {/* =================================
                        PUBLIC ROUTES
                ================================= */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                />

                <Route
                    path="/reset-password"
                    element={<ResetPassword />}
                />

                {/* =================================
                        ADMIN MODULE
                ================================= */}

                <Route

                    path="/admin"

                    element={

                        <AdminRoute>

                            <AdminLayout />

                        </AdminRoute>

                    }

                >

                    <Route

                        index

                        element={

                            <Navigate

                                to="dashboard"

                                replace

                            />

                        }

                    />

                    <Route

                        path="dashboard"

                        element={<AdminDashboard />}

                    />

                    <Route

                        path="users"

                        element={<ManageUsers />}

                    />

                    <Route

                        path="customers"

                        element={<ManageCustomers />}

                    />

                    <Route

                        path="employees"

                        element={<ManageEmployees />}

                    />

                    <Route

                        path="accounts"

                        element={<ManageAccounts />}

                    />

                    <Route

                        path="transactions"

                        element={<ManageTransactions />}

                    />
                                        <Route

                        path="loans"

                        element={<ManageLoans />}

                    />

                    <Route

                        path="cards"

                        element={<ManageCards />}

                    />

                    <Route

                        path="reports"

                        element={<Reports />}

                    />

                    <Route

                        path="analytics"

                        element={<Analytics />}

                    />

                    <Route

                        path="settings"

                        element={<SystemSettings />}

                    />

                    <Route
                        path="change-password"
                        element={<ChangePassword />}
                    />

                </Route>

                {/* =================================
                        EMPLOYEE MODULE
                ================================= */}

                <Route

                    path="/employee"

                    element={

                        <EmployeeRoute>

                            <EmployeeLayout />

                        </EmployeeRoute>

                    }

                >

                    <Route

                        index

                        element={

                            <Navigate

                                to="dashboard"

                                replace

                            />

                        }

                    />

                    <Route

                        path="dashboard"

                        element={<EmployeeDashboard />}

                    />

                    <Route

                        path="customer-verification"

                        element={<CustomerVerification />}

                    />
                    <Route
                         path="/employee/kyc-verification"
                        element={
                        
                            <KYCVerification />
                         }
                    />

                    <Route

                        path="account-approval"

                        element={<AccountApproval />}

                    />

                    <Route

                        path="loan-approval"

                        element={<LoanApproval />}

                    />

                    <Route

                        path="transactions"

                        element={<EmployeeTransactions />}

                    />

                    <Route

                        path="profile"

                        element={<EmployeeProfile />}

                    />

                    <Route
                        path="settings"
                        element={<EmployeeSettings />}
                    />

                    <Route
                        path="change-password"
                        element={<EmployeeChangePassword />}
                    />

                </Route>
                
                {/* =================================
                        CUSTOMER MODULE
                ================================= */}

                <Route

                    path="/customer"

                    element={

                        <CustomerRoute>

                            <CustomerLayout />

                        </CustomerRoute>

                    }

                >

                    <Route

                        index

                        element={

                            <Navigate

                                to="dashboard"

                                replace

                            />

                        }

                    />

                    <Route

                        path="dashboard"

                        element={<CustomerDashboard />}

                    />

                    <Route

                        path="profile"

                        element={<CustomerProfile />}

                    />

                    <Route

                        path="accounts"

                        element={<CustomerAccounts />}

                    />

                    <Route

                        path="transfer-money"

                        element={<TransferMoney />}

                    />

                    <Route

                        path="beneficiaries"

                        element={<Beneficiaries />}

                    />

                    <Route

                        path="cards"

                        element={<CustomerCards />}

                    />

                    <Route

                        path="loans"

                        element={<CustomerLoans />}

                    />

                    <Route

                        path="transaction-history"

                        element={<TransactionHistory />}

                    />

                    <Route

                        path="passbook"

                        element={<Passbook />}

                    />

                    <Route

                        path="settings"

                        element={<CustomerSettings />}

                    />

                    <Route
                        path="change-password"
                        element={<CustomerChangePassword />}
                    />

                </Route>

                {/* =================================
                        ERROR ROUTES
                ================================= */}

                <Route

                    path="/403"

                    element={<Unauthorized />}

                />

                <Route

                    path="*"

                    element={<NotFound />}

                />

            </Routes>

        </BrowserRouter>

    );

};

export default AppRoutes;