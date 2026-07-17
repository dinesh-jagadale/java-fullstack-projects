import { useState } from "react";
import {
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false);

    const closeMenu = () => setExpanded(false);

    return (
        <Navbar
            bg="white"
            expand="lg"
            fixed="top"
            expanded={expanded}
            className="shadow-sm border-bottom"
            style={{
                height: "72px",
                zIndex: 1050,
            }}
        >
            <Container fluid="xl">

                {/* ===========================
                    Brand
                ============================ */}

                <Navbar.Brand
                    as={Link}
                    to="/"
                    onClick={closeMenu}
                    className="d-flex align-items-center"
                >

                    <div
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                            width: "46px",
                            height: "46px",
                        }}
                    >
                        <i className="bi bi-bank2 text-white fs-4"></i>
                    </div>

                    <div>

                        <div
                            className="fw-bold text-dark"
                            style={{
                                fontSize: "1.15rem",
                            }}
                        >
                            Banking Management System
                        </div>

                        <small className="text-muted">
                            Secure Digital Banking
                        </small>

                    </div>

                </Navbar.Brand>

                <Navbar.Toggle
                    onClick={() =>
                        setExpanded(!expanded)
                    }
                />

                <Navbar.Collapse>

                    {/* ===========================
                        Center Menu
                    ============================ */}

                    <Nav className="mx-auto">

                        <Nav.Link
                            as={NavLink}
                            to="/"
                            onClick={closeMenu}
                        >
                            Home
                        </Nav.Link>

                        <NavDropdown
                            title="Personal Banking"
                            id="personal-menu"
                        >

                            <NavDropdown.Item>
                                Savings Account
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Current Account
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Fixed Deposit
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Recurring Deposit
                            </NavDropdown.Item>

                        </NavDropdown>

                        <NavDropdown
                            title="Loans"
                            id="loan-menu"
                        >

                            <NavDropdown.Item>
                                Home Loan
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Education Loan
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Personal Loan
                            </NavDropdown.Item>

                            <NavDropdown.Item>
                                Vehicle Loan
                            </NavDropdown.Item>

                        </NavDropdown>

                        <Nav.Link>
                            Digital Banking
                        </Nav.Link>

                        <Nav.Link>
                            Services
                        </Nav.Link>

                        <Nav.Link>
                            Contact
                        </Nav.Link>

                    </Nav>

                    {/* ===========================
                        Right Side
                    ============================ */}

                    <div className="d-flex align-items-center gap-2">

                        <Button
                            as={Link}
                            to="/login"
                            variant="outline-primary"
                            onClick={closeMenu}
                        >
                            <i className="bi bi-box-arrow-in-right me-2"></i>

                            Login
                        </Button>

                        <Button
                            as={Link}
                            to="/register"
                            variant="primary"
                            onClick={closeMenu}
                        >
                            <i className="bi bi-person-plus me-2"></i>

                            Open Account
                        </Button>

                    </div>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
};

export default NavigationBar;