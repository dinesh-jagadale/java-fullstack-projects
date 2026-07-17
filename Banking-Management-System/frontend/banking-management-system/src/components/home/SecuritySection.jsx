import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const SecuritySection = () => {
    const securityFeatures = [
        {
            id: 1,
            icon: "bi bi-shield-lock-fill",
            title: "JWT Authentication",
            description:
                "Secure authentication using JSON Web Tokens with role-based access control.",
        },
        {
            id: 2,
            icon: "bi bi-lock-fill",
            title: "Password Encryption",
            description:
                "User passwords are encrypted using BCrypt before being stored in the database.",
        },
        {
            id: 3,
            icon: "bi bi-person-check-fill",
            title: "Role Based Authorization",
            description:
                "Separate access for Admin, Employee and Customer with Spring Security.",
        },
        {
            id: 4,
            icon: "bi bi-arrow-left-right",
            title: "Secure Transactions",
            description:
                "Every transaction is validated and securely recorded with complete audit history.",
        },
        {
            id: 5,
            icon: "bi bi-database-lock",
            title: "Protected Database",
            description:
                "MySQL database with JPA, Hibernate and relational integrity for banking data.",
        },
        {
            id: 6,
            icon: "bi bi-cloud-check-fill",
            title: "Enterprise Architecture",
            description:
                "Designed using Spring Boot, React and layered architecture for scalability.",
        },
    ];

    return (
        <section
            id="security"
            className="py-5 bg-light"
        >
            <Container>

                <Row className="mb-5 text-center">

                    <Col lg={8} className="mx-auto">

                        <Badge
                            bg="primary"
                            className="px-3 py-2 fs-6 mb-3"
                        >
                            Banking Security
                        </Badge>

                        <h2 className="display-5 fw-bold">
                            Enterprise Security
                        </h2>

                        <p
                            className="text-muted mt-3"
                            style={{
                                maxWidth: "720px",
                                margin: "0 auto",
                            }}
                        >
                            Security is the foundation of our Banking
                            Management System. Every feature is built with
                            authentication, authorization and data protection
                            in mind.
                        </p>

                    </Col>

                </Row>

                <Row className="g-4">

                    {securityFeatures.map((feature) => (

                        <Col
                            lg={4}
                            md={6}
                            key={feature.id}
                        >

                            <Card className="border-0 shadow-sm h-100">

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

                <Row className="mt-5">

                    <Col>

                        <div
                            className="rounded-4 p-5 text-center text-white"
                            style={{
                                background:
                                    "linear-gradient(135deg,#0d47a1,#1976d2)",
                            }}
                        >

                            <h3 className="fw-bold mb-3">
                                Your Security Is Our Priority
                            </h3>

                            <p
                                className="mb-0"
                                style={{
                                    maxWidth: "900px",
                                    margin: "0 auto",
                                }}
                            >
                                Our platform is developed using Java 21,
                                Spring Boot, Spring Security, JWT,
                                Hibernate, React and MySQL following
                                enterprise software development standards.
                            </p>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default SecuritySection;