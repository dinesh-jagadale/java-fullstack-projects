import { Card, Col, Container, Row } from "react-bootstrap";

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: "bi bi-shield-lock-fill",
            title: "Enterprise Security",
            description:
                "Protect customer data with JWT authentication, encrypted passwords, secure REST APIs and role-based authorization.",
        },
        {
            id: 2,
            icon: "bi bi-lightning-charge-fill",
            title: "Fast Digital Banking",
            description:
                "Perform balance enquiries, transfers, account management and banking operations anytime through a modern web application.",
        },
        {
            id: 3,
            icon: "bi bi-phone-fill",
            title: "Responsive Experience",
            description:
                "Optimized interface that works smoothly on desktops, tablets and mobile devices using Bootstrap 5.",
        },
        {
            id: 4,
            icon: "bi bi-bank2",
            title: "Complete Banking Solution",
            description:
                "Manage customers, employees, accounts, transactions, loans, cards, reports and notifications from one platform.",
        },
        {
            id: 5,
            icon: "bi bi-bar-chart-fill",
            title: "Analytics & Reports",
            description:
                "Interactive dashboards with statistics, charts and downloadable reports for better decision making.",
        },
        {
            id: 6,
            icon: "bi bi-headset",
            title: "Customer Support",
            description:
                "Employees and administrators can verify customers, approve requests and provide banking assistance efficiently.",
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                background: "#f8f9fa",
            }}
        >
            <Container>

                {/* Section Header */}

                <Row className="mb-5 text-center">

                    <Col>

                        <span className="badge bg-success px-3 py-2 fs-6 mb-3">
                            Why Choose Us
                        </span>

                        <h2 className="display-5 fw-bold">
                            Modern Banking Built on Trust
                        </h2>

                        <p
                            className="text-muted mx-auto mt-3"
                            style={{
                                maxWidth: "760px",
                            }}
                        >
                            Our Banking Management System combines
                            enterprise-grade security, powerful banking
                            services and an intuitive user experience for
                            customers, employees and administrators.
                        </p>

                    </Col>

                </Row>

                {/* Feature Cards */}

                <Row className="g-4">

                    {features.map((feature) => (

                        <Col
                            lg={4}
                            md={6}
                            key={feature.id}
                        >

                            <Card
                                className="border-0 shadow-sm h-100"
                                style={{
                                    borderRadius: "16px",
                                    transition: "all .3s ease",
                                }}
                            >

                                <Card.Body className="p-4">

                                    <div
                                        className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mb-4"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                        }}
                                    >
                                        <i
                                            className={`${feature.icon} text-primary`}
                                            style={{
                                                fontSize: "2rem",
                                            }}
                                        />
                                    </div>

                                    <h4 className="fw-bold mb-3">
                                        {feature.title}
                                    </h4>

                                    <p className="text-muted mb-0">
                                        {feature.description}
                                    </p>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

                {/* Bottom Banner */}

                <Row className="mt-5">

                    <Col>

                        <div
                            className="rounded-4 p-5 text-center text-white"
                            style={{
                                background:
                                    "linear-gradient(135deg,#0d6efd,#084298)",
                            }}
                        >

                            <h3 className="fw-bold mb-3">
                                Secure Banking. Anytime. Anywhere.
                            </h3>

                            <p
                                className="mb-0"
                                style={{
                                    fontSize: "1.1rem",
                                }}
                            >
                                Built using Java 21, Spring Boot, Spring Security,
                                JWT, Hibernate, React, Bootstrap and MySQL to
                                deliver a secure, scalable and enterprise-grade
                                digital banking platform.
                            </p>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default WhyChooseUs;