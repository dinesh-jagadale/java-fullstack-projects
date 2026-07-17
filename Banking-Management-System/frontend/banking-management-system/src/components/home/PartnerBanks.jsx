import { Badge, Card, Col, Container, Row } from "react-bootstrap";

const PartnerBanks = () => {
    const partners = [
        {
            id: 1,
            name: "Secure Banking API",
            icon: "bi bi-bank2",
            description: "Core Banking Integration",
        },
        {
            id: 2,
            name: "Digital Payments",
            icon: "bi bi-credit-card-2-front-fill",
            description: "Online Payment Services",
        },
        {
            id: 3,
            name: "UPI Services",
            icon: "bi bi-phone-fill",
            description: "Instant Money Transfer",
        },
        {
            id: 4,
            name: "Loan Processing",
            icon: "bi bi-cash-stack",
            description: "Digital Loan Management",
        },
        {
            id: 5,
            name: "Cyber Security",
            icon: "bi bi-shield-lock-fill",
            description: "Enterprise Security",
        },
        {
            id: 6,
            name: "Cloud Infrastructure",
            icon: "bi bi-cloud-check-fill",
            description: "High Availability",
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                backgroundColor: "#ffffff",
            }}
        >
            <Container>

                {/* Section Header */}

                <Row className="mb-5 text-center">

                    <Col lg={8} className="mx-auto">

                        <Badge
                            bg="primary"
                            className="px-3 py-2 fs-6 mb-3"
                        >
                            Technology Ecosystem
                        </Badge>

                        <h2 className="display-5 fw-bold">
                            Built with Enterprise Technologies
                        </h2>

                        <p
                            className="text-muted mt-3"
                            style={{
                                maxWidth: "760px",
                                margin: "0 auto",
                            }}
                        >
                            Our Banking Management System is designed to
                            integrate with modern banking technologies,
                            digital payment platforms and secure enterprise
                            infrastructure.
                        </p>

                    </Col>

                </Row>

                {/* Technology Cards */}

                <Row className="g-4">

                    {partners.map((partner) => (

                        <Col
                            xl={4}
                            lg={4}
                            md={6}
                            key={partner.id}
                        >

                            <Card
                                className="border-0 shadow-sm h-100 text-center"
                                style={{
                                    borderRadius: "18px",
                                    transition: "all .3s ease",
                                }}
                            >

                                <Card.Body className="p-4">

                                    <div
                                        className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-4"
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                        }}
                                    >

                                        <i
                                            className={`${partner.icon} text-primary`}
                                            style={{
                                                fontSize: "2.5rem",
                                            }}
                                        ></i>

                                    </div>

                                    <h4 className="fw-bold">
                                        {partner.name}
                                    </h4>

                                    <p className="text-muted mb-0">
                                        {partner.description}
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
                                Enterprise Ready Banking Solution
                            </h3>

                            <p
                                className="mb-0"
                                style={{
                                    maxWidth: "900px",
                                    margin: "0 auto",
                                }}
                            >
                                Designed with scalability, security,
                                performance and maintainability in mind,
                                making it suitable for enterprise-level
                                banking applications and academic projects.
                            </p>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default PartnerBanks;