import { Card, Col, Container, Row } from "react-bootstrap";

const modules = [
    {
        icon: "bi-shield-lock-fill",
        color: "primary",
        title: "Authentication & Authorization",
        description:
            "Secure login, registration, JWT authentication, role-based authorization, forgot password, reset password and logout.",
    },
    {
        icon: "bi-person-vcard-fill",
        color: "success",
        title: "Customer Management",
        description:
            "Customer registration, KYC verification, profile management, Aadhaar, PAN and address management.",
    },
    {
        icon: "bi-bank",
        color: "warning",
        title: "Account Management",
        description:
            "Savings and current accounts, balance inquiry, account activation, freeze, close and multiple accounts.",
    },
    {
        icon: "bi-arrow-left-right",
        color: "info",
        title: "Transaction Management",
        description:
            "Deposit, withdrawal, fund transfer, UPI transfer simulation, transaction history and mini statement.",
    },
    {
        icon: "bi-cash-stack",
        color: "danger",
        title: "Loan Management",
        description:
            "Loan application, EMI calculation, loan approval, rejection, status tracking and repayment management.",
    },
    {
        icon: "bi-credit-card-2-front-fill",
        color: "secondary",
        title: "Card Management",
        description:
            "Debit cards, credit cards, PIN generation, card blocking, unblocking and PIN management.",
    },
    {
        icon: "bi-person-workspace",
        color: "dark",
        title: "Employee Management",
        description:
            "Customer verification, KYC approval, account approval, loan verification and customer support.",
    },
    {
        icon: "bi-person-gear",
        color: "primary",
        title: "Admin Management",
        description:
            "Manage customers, employees, accounts, loans, reports, analytics and complete system administration.",
    },
    {
        icon: "bi-bell-fill",
        color: "success",
        title: "Notification Module",
        description:
            "Email notifications, OTP verification, transaction alerts, welcome emails and loan status updates.",
    },
    {
        icon: "bi-bar-chart-fill",
        color: "warning",
        title: "Reports & Analytics",
        description:
            "Dashboard analytics, PDF statements, Excel export, charts, reports and banking statistics.",
    },
];

const ModulesSection = () => {
    return (
        <section
            id="modules"
            className="py-5"
            style={{
                background: "#ffffff",
            }}
        >
            <Container>

                {/* Section Heading */}

                <Row className="mb-5 text-center">

                    <Col lg={8} className="mx-auto">

                        <h2 className="fw-bold">
                            Banking Modules
                        </h2>

                        <p className="text-muted fs-5 mt-3">
                            Our Banking Management System is divided into
                            enterprise modules that automate every major banking
                            operation from authentication to reports and
                            analytics.
                        </p>

                    </Col>

                </Row>

                {/* Module Cards */}

                <Row className="g-4">

                    {modules.map((module) => (
                        <Col
                            lg={4}
                            md={6}
                            key={module.title}
                        >
                            <Card
                                className="border-0 shadow-sm h-100"
                                style={{
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <Card.Body className="p-4">

                                    <div
                                        className={`bg-${module.color} text-white rounded-circle d-flex justify-content-center align-items-center mb-4`}
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                        }}
                                    >
                                        <i
                                            className={`bi ${module.icon} fs-2`}
                                        ></i>
                                    </div>

                                    <h5 className="fw-bold">
                                        {module.title}
                                    </h5>

                                    <p className="text-muted mt-3">
                                        {module.description}
                                    </p>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>

            </Container>
        </section>
    );
};

export default ModulesSection;