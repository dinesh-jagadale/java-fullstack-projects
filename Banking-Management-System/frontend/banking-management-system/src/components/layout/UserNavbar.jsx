import { useState } from "react";
import {
    Badge,
    Container,
    Dropdown,
    Form,
    InputGroup,
    Nav,
    Navbar,
} from "react-bootstrap";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const UserNavbar = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const { user, logout } = useAuth();

    const [expanded, setExpanded] = useState(false);

    const [search, setSearch] = useState("");

    const closeMenu = () => {

        setExpanded(false);

    };

    const handleLogout = async () => {

        await logout();

        navigate("/login", {
            replace: true,
        });

    };

    const getDashboardPath = () => {

        switch (user?.role) {

            case "ROLE_ADMIN":
                return "/admin/dashboard";

            case "ROLE_EMPLOYEE":
                return "/employee/dashboard";

            case "ROLE_CUSTOMER":
                return "/customer/dashboard";

            default:
                return "/";
        }

    };

    const getProfilePath = () => {

        switch (user?.role) {

            case "ROLE_ADMIN":
                return "/admin/profile";

            case "ROLE_EMPLOYEE":
                return "/employee/profile";

            case "ROLE_CUSTOMER":
                return "/customer/profile";

            default:
                return "/";
        }

    };

    const getSettingsPath = () => {
    switch (user?.role) {
        case "ROLE_ADMIN":
            return "/admin/settings";

        case "ROLE_EMPLOYEE":
            return "/employee/settings";

        case "ROLE_CUSTOMER":
            return "/customer/settings";

        default:
            return "/";
    }
};

const getChangePasswordPath = () => {
    switch (user?.role) {
        case "ROLE_ADMIN":
            return "/admin/change-password";

        case "ROLE_EMPLOYEE":
            return "/employee/change-password";

        case "ROLE_CUSTOMER":
            return "/customer/change-password";

        default:
            return "/";
    }
};

    const getRoleName = () => {

        switch (user?.role) {

            case "ROLE_ADMIN":
                return "Administrator";

            case "ROLE_EMPLOYEE":
                return "Employee";

            case "ROLE_CUSTOMER":
                return "Customer";

            default:
                return "User";

        }

    };

    return (

        <Navbar
            bg="white"
            expand="lg"
            fixed="top"
            expanded={expanded}
            className="shadow-sm border-bottom app-navbar"
        >

            <Container fluid="xl">

                {/* ===================================
                        Logo
                ==================================== */}

                <Navbar.Brand
                    as={Link}
                    to={getDashboardPath()}
                    className="d-flex align-items-center"
                    onClick={closeMenu}
                >

                    <div
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                            width: 46,
                            height: 46,
                        }}
                    >

                        <i className="bi bi-bank2 text-white fs-4"></i>

                    </div>

                    <div>

                        <div className="fw-bold">

                            Banking Management System

                        </div>

                        <small className="text-muted">

                            Core Banking Solution

                        </small>

                    </div>

                </Navbar.Brand>

                <Navbar.Toggle
                    onClick={() =>
                        setExpanded(!expanded)
                    }
                />

                <Navbar.Collapse>

                    {/* ===================================
                            Search Box
                    ==================================== */}

                    <Form
                        className="mx-auto"
                        style={{
                            width: "420px",
                            maxWidth: "100%",
                        }}
                    >

                        <InputGroup>

                            <InputGroup.Text>

                                <i className="bi bi-search"></i>

                            </InputGroup.Text>

                            <Form.Control

                                type="search"

                                placeholder="Search customer, account, transaction..."

                                value={search}

                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }

                            />

                        </InputGroup>

                    </Form>

                    {/* Right Section Starts Here */}

                                        <Nav className="align-items-center ms-auto">

                        {/* ===================================
                                Dashboard
                        ==================================== */}

                        <Nav.Link
                            as={Link}
                            to={getDashboardPath()}
                            className={
                                location.pathname.includes("dashboard")
                                    ? "fw-bold text-primary"
                                    : ""
                            }
                            onClick={closeMenu}
                        >

                            <i className="bi bi-speedometer2 me-2"></i>

                            Dashboard

                        </Nav.Link>

                        {/* ===================================
                                Home
                        ==================================== */}

                        <Nav.Link
                            as={Link}
                            to="/"
                            onClick={closeMenu}
                        >

                            <i className="bi bi-house-door me-2"></i>

                            Home

                        </Nav.Link>

                        {/* ===================================
                                Notifications
                        ==================================== */}

                        <Nav.Link
                            className="position-relative me-2"
                        >

                            <i className="bi bi-bell fs-5"></i>

                            <Badge
                                bg="danger"
                                pill
                                className="position-absolute top-0 start-100 translate-middle"
                            >
                                3
                            </Badge>

                        </Nav.Link>

                        {/* ===================================
                                Messages
                        ==================================== */}

                        <Nav.Link
                            className="position-relative me-3"
                        >

                            <i className="bi bi-envelope fs-5"></i>

                            <Badge
                                bg="success"
                                pill
                                className="position-absolute top-0 start-100 translate-middle"
                            >
                                2
                            </Badge>

                        </Nav.Link>

                        {/* ===================================
                                Role Badge
                        ==================================== */}

                        <Badge
                            bg={
                                user?.role === "ROLE_ADMIN"
                                    ? "danger"
                                    : user?.role === "ROLE_EMPLOYEE"
                                    ? "success"
                                    : "primary"
                            }
                            className="me-3 px-3 py-2"
                        >

                            {getRoleName()}

                        </Badge>

                        {/* ===================================
                                Profile Dropdown Starts
                        ==================================== */}

                        <Dropdown align="end">
                                                        <Dropdown.Toggle
                                variant="light"
                                className="border-0 shadow-none d-flex align-items-center"
                            >

                                <i className="bi bi-person-circle fs-4 me-2"></i>

                                <div className="text-start">

                                    <div
                                        className="fw-semibold"
                                        style={{
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {user?.fullName}
                                    </div>

                                    <small className="text-muted">

                                        {getRoleName()}

                                    </small>

                                </div>

                            </Dropdown.Toggle>

                            <Dropdown.Menu className="shadow border-0">

                                <Dropdown.Header>

                                    <div className="fw-bold">

                                        {user?.fullName}

                                    </div>

                                    <small className="text-muted">

                                        {user?.email}

                                    </small>

                                </Dropdown.Header>

                                <Dropdown.Divider />


                                <Dropdown.Item
                                    as={Link}
                                    to={getProfilePath()}
                                    onClick={closeMenu}
                                >

                                    <i className="bi bi-person me-2"></i>

                                    My Profile

                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={getChangePasswordPath()}
                                    onClick={closeMenu}
                                >

                                    <i className="bi bi-key me-2"></i>

                                        Change Password

                                </Dropdown.Item>

                                <Dropdown.Item
                                    as={Link}
                                    to={getSettingsPath()}
                                    onClick={closeMenu}
                                >

                                    <i className="bi bi-gear me-2"></i>

                                        Settings

                                </Dropdown.Item>

                                <Dropdown.Divider />

                                <Dropdown.Item
                                    onClick={handleLogout}
                                    className="text-danger"
                                >

                                    <i className="bi bi-box-arrow-right me-2"></i>

                                    Logout

                                </Dropdown.Item>

                            </Dropdown.Menu>

                        </Dropdown>

                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );

};

export default UserNavbar;
                        