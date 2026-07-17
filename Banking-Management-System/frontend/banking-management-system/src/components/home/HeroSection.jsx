import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section
            className="py-5"
            style={{
                background:
                    "linear-gradient(135deg, #0d47a1 0%, #1565c0 45%, #1976d2 100%)",
                minHeight: "85vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container>

                <Row className="align-items-center gy-5">

                    {/* Left Section */}

                    <Col lg={6}>

                        <span className="badge bg-warning text-dark fs-6 px-3 py-2 mb-4">
                            Enterprise Banking Management System
                        </span>

                        <h1
                            className="display-4 fw-bold text-white mb-4"
                            style={{ lineHeight: 1.2 }}
                        >
                            Secure, Smart & Modern
                            <br />
                            Digital Banking Platform
                        </h1>

                        <p
                            className="text-white-50 fs-5 mb-4"
                        >
                            Manage your savings account, current account,
                            transactions, loans, cards and beneficiaries
                            through a secure banking platform powered by
                            Spring Boot, JWT Security and React.
                        </p>

                        <div className="d-flex flex-wrap gap-3">

                            <Button
                                as={Link}
                                to="/login"
                                size="lg"
                                variant="light"
                            >
                                <i className="bi bi-box-arrow-in-right me-2"></i>
                                Login
                            </Button>

                            <Button
                                as={Link}
                                to="/register"
                                size="lg"
                                variant="warning"
                            >
                                <i className="bi bi-person-plus-fill me-2"></i>
                                Open Account
                            </Button>

                        </div>

                        <div className="row mt-5 g-4">

                            <div className="col-4">

                                <h3 className="fw-bold text-white">
                                    25+
                                </h3>

                                <small className="text-white-50">
                                    Banking Services
                                </small>

                            </div>

                            <div className="col-4">

                                <h3 className="fw-bold text-white">
                                    24×7
                                </h3>

                                <small className="text-white-50">
                                    Digital Banking
                                </small>

                            </div>

                            <div className="col-4">

                                <h3 className="fw-bold text-white">
                                    100%
                                </h3>

                                <small className="text-white-50">
                                    Secure Access
                                </small>

                            </div>

                        </div>

                    </Col>

                    {/* Right Section */}

                    <Col lg={6}>

                        <div
                            className="bg-white rounded-4 shadow-lg p-4"
                        >

                            <div className="text-center mb-4">

                                <i
                                    className="bi bi-bank2 text-primary"
                                    style={{ fontSize: "4rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">
                                    Banking Dashboard
                                </h3>

                                <p className="text-muted">
                                    All Banking Services at One Place
                                </p>

                            </div>

                            <div className="row g-3">

                                <div className="col-6">
                                    <div className="border rounded-3 p-3 text-center">
                                        <i className="bi bi-wallet2 fs-2 text-success"></i>
                                        <h6 className="mt-2 mb-1">
                                            Accounts
                                        </h6>
                                        <small className="text-muted">
                                            Savings & Current
                                        </small>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="border rounded-3 p-3 text-center">
                                        <i className="bi bi-arrow-left-right fs-2 text-primary"></i>
                                        <h6 className="mt-2 mb-1">
                                            Transfers
                                        </h6>
                                        <small className="text-muted">
                                            Instant Payments
                                        </small>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="border rounded-3 p-3 text-center">
                                        <i className="bi bi-credit-card-2-front fs-2 text-danger"></i>
                                        <h6 className="mt-2 mb-1">
                                            Cards
                                        </h6>
                                        <small className="text-muted">
                                            Debit & Credit
                                        </small>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="border rounded-3 p-3 text-center">
                                        <i className="bi bi-cash-stack fs-2 text-warning"></i>
                                        <h6 className="mt-2 mb-1">
                                            Loans
                                        </h6>
                                        <small className="text-muted">
                                            Personal & Home
                                        </small>
                                    </div>
                                </div>

                            </div>

                            <hr />

                            <div className="d-flex justify-content-between">

                                <div>
                                    <small className="text-muted">
                                        Security
                                    </small>
                                    <div className="fw-semibold">
                                        JWT Authentication
                                    </div>
                                </div>

                                <div className="text-end">
                                    <small className="text-muted">
                                        Encryption
                                    </small>
                                    <div className="fw-semibold">
                                        256-bit Secure
                                    </div>
                                </div>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default HeroSection;