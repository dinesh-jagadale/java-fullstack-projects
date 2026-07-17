import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsSection = () => {
    const announcements = [
        {
            id: 1,
            category: "Announcement",
            title: "Digital Banking Platform Available 24×7",
            date: "Available Now",
            icon: "bi bi-phone-fill",
            description:
                "Customers can securely access banking services, transfer funds, view transactions and manage accounts anytime.",
            badge: "primary",
        },
        {
            id: 2,
            category: "Security",
            title: "Enterprise Security for Every Transaction",
            date: "Latest",
            icon: "bi bi-shield-lock-fill",
            description:
                "JWT authentication, role-based authorization and encrypted passwords help protect customer information and banking operations.",
            badge: "success",
        },
        {
            id: 3,
            category: "Feature",
            title: "Online Loan & Card Management",
            date: "New",
            icon: "bi bi-credit-card-2-front-fill",
            description:
                "Customers can apply for loans, request debit cards and monitor approval status directly from their dashboard.",
            badge: "warning",
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                background: "#ffffff",
            }}
        >
            <Container>

                {/* Section Header */}

                <Row className="mb-5">

                    <Col
                        lg={8}
                        className="mx-auto text-center"
                    >

                        <Badge
                            bg="primary"
                            className="px-3 py-2 fs-6 mb-3"
                        >
                            Latest Updates
                        </Badge>

                        <h2 className="display-5 fw-bold">
                            Banking Announcements
                        </h2>

                        <p
                            className="text-muted mt-3"
                            style={{
                                maxWidth: "760px",
                                margin: "0 auto",
                            }}
                        >
                            Stay informed about new banking services,
                            digital banking features and important
                            platform updates.
                        </p>

                    </Col>

                </Row>

                {/* Announcement Cards */}

                <Row className="g-4">

                    {announcements.map((item) => (

                        <Col
                            lg={4}
                            md={6}
                            key={item.id}
                        >

                            <Card
                                className="border-0 shadow-sm h-100"
                                style={{
                                    borderRadius: "18px",
                                    transition: "0.3s ease",
                                }}
                            >

                                <Card.Body className="p-4">

                                    <div className="d-flex justify-content-between align-items-center mb-3">

                                        <Badge bg={item.badge}>
                                            {item.category}
                                        </Badge>

                                        <small className="text-muted">
                                            {item.date}
                                        </small>

                                    </div>

                                    <div
                                        className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4"
                                        style={{
                                            width: "75px",
                                            height: "75px",
                                        }}
                                    >

                                        <i
                                            className={`${item.icon} text-primary`}
                                            style={{
                                                fontSize: "2rem",
                                            }}
                                        ></i>

                                    </div>

                                    <h4 className="fw-bold mb-3">
                                        {item.title}
                                    </h4>

                                    <p className="text-muted">
                                        {item.description}
                                    </p>

                                    <Button
                                        as={Link}
                                        to="/login"
                                        variant="outline-primary"
                                    >
                                        Read More
                                    </Button>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Container>
        </section>
    );
};

export default NewsSection;