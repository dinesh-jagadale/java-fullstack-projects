import { Card, Col, Container, Row } from "react-bootstrap";

const AboutSection = () => {
    const architectures = [
        {
            icon: "bi bi-display",
            title: "Presentation Layer",
            description:
                "Responsive React frontend with Bootstrap, Axios, React Router, Context API, Charts and reusable components.",
            color: "primary",
        },
        {
            icon: "bi bi-cpu",
            title: "Business Layer",
            description:
                "Spring Boot REST APIs with Spring Security, JWT Authentication, Hibernate, Validation and layered architecture.",
            color: "success",
        },
        {
            icon: "bi bi-database",
            title: "Database Layer",
            description:
                "MySQL database using Spring Data JPA, Hibernate ORM, relationships, constraints and indexing.",
            color: "warning",
        },
    ];

    const highlights = [
        {
            icon: "bi bi-shield-lock-fill",
            title: "Secure Authentication",
            description:
                "JWT authentication, BCrypt password encryption and role-based authorization.",
        },
        {
            icon: "bi bi-layers-fill",
            title: "Enterprise Architecture",
            description:
                "MVC, REST APIs, DTO Pattern, Repository Pattern, SOLID Principles and clean code.",
        },
        {
            icon: "bi bi-lightning-charge-fill",
            title: "Real Banking Features",
            description:
                "Accounts, transactions, loans, cards, notifications, reports and analytics.",
        },
        {
            icon: "bi bi-cloud-check-fill",
            title: "Production Ready",
            description:
                "Scalable, reusable and maintainable full stack enterprise application.",
        },
    ];

    return (
        <section
            className="py-5"
            style={{ backgroundColor: "#f8f9fa" }}
        >
            <Container>

                {/* Heading */}

                <Row className="mb-5 text-center">

                    <Col lg={8} className="mx-auto">

                        <h2 className="fw-bold mb-3">
                            About Banking Management System
                        </h2>

                        <p className="text-muted fs-5">
                            Banking Management System is an enterprise-grade
                            full stack banking application that digitizes
                            customer, employee and administrator operations
                            through secure REST APIs and modern web
                            technologies.
                        </p>

                    </Col>

                </Row>

                {/* Three Tier Architecture */}

                <Row className="g-4 mb-5">

                    {architectures.map((item) => (
                        <Col
                            lg={4}
                            md={6}
                            key={item.title}
                        >
                            <Card className="border-0 shadow-sm h-100">

                                <Card.Body className="text-center p-4">

                                    <div
                                        className={`bg-${item.color} text-white rounded-circle d-inline-flex justify-content-center align-items-center mb-3`}
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                        }}
                                    >
                                        <i
                                            className={`${item.icon} fs-2`}
                                        />
                                    </div>

                                    <h4 className="fw-bold mb-3">
                                        {item.title}
                                    </h4>

                                    <p className="text-muted mb-0">
                                        {item.description}
                                    </p>

                                </Card.Body>

                            </Card>
                        </Col>
                    ))}

                </Row>

                {/* Architecture Flow */}

                <Row className="mb-5">

                    <Col>

                        <Card className="border-0 shadow-sm">

                            <Card.Body className="p-4">

                                <h3 className="fw-bold text-center mb-4">
                                    Enterprise Architecture
                                </h3>

                                <Row className="text-center g-3">

                                    <Col lg={2} md={4}>
                                        <div className="p-3 bg-primary text-white rounded">
                                            React
                                        </div>
                                    </Col>

                                    <Col lg={1} className="d-none d-lg-flex align-items-center justify-content-center">
                                        <i className="bi bi-arrow-right fs-3 text-primary"></i>
                                    </Col>

                                    <Col lg={2} md={4}>
                                        <div className="p-3 bg-success text-white rounded">
                                            Axios
                                        </div>
                                    </Col>

                                    <Col lg={1} className="d-none d-lg-flex align-items-center justify-content-center">
                                        <i className="bi bi-arrow-right fs-3 text-success"></i>
                                    </Col>

                                    <Col lg={2} md={4}>
                                        <div className="p-3 bg-warning text-dark rounded">
                                            Spring Boot
                                        </div>
                                    </Col>

                                    <Col lg={1} className="d-none d-lg-flex align-items-center justify-content-center">
                                        <i className="bi bi-arrow-right fs-3 text-warning"></i>
                                    </Col>

                                    <Col lg={3}>
                                        <div className="p-3 bg-dark text-white rounded">
                                            MySQL Database
                                        </div>
                                    </Col>

                                </Row>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* Project Highlights */}

                <Row className="g-4">

                    {highlights.map((item) => (
                        <Col
                            lg={3}
                            md={6}
                            key={item.title}
                        >
                            <Card className="border-0 shadow-sm h-100">

                                <Card.Body className="text-center">

                                    <i
                                        className={`${item.icon} display-5 text-primary`}
                                    ></i>

                                    <h5 className="fw-bold mt-3">
                                        {item.title}
                                    </h5>

                                    <p className="text-muted mb-0">
                                        {item.description}
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

export default AboutSection;