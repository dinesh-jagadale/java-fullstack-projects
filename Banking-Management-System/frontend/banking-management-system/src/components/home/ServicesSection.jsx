import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
    const navigate = useNavigate();

    const services = [
        {
            id: 1,
            icon: "bi bi-bank2",
            title: "Savings Account",
            description:
                "Open and manage a secure savings account with online banking, passbook, mini statement and interest benefits.",
        },
        {
            id: 2,
            icon: "bi bi-wallet2",
            title: "Current Account",
            description:
                "Business-friendly current accounts with higher transaction limits and digital banking facilities.",
        },
        {
            id: 3,
            icon: "bi bi-arrow-left-right",
            title: "Fund Transfer",
            description:
                "Transfer money securely between accounts with instant transaction processing and complete history.",
        },
        {
            id: 4,
            icon: "bi bi-credit-card-2-front",
            title: "Debit & Credit Cards",
            description:
                "Manage debit and credit cards, generate PIN, block cards and monitor card transactions.",
        },
        {
            id: 5,
            icon: "bi bi-cash-stack",
            title: "Loans",
            description:
                "Apply for personal, education, vehicle and home loans with real-time approval tracking.",
        },
        {
            id: 6,
            icon: "bi bi-phone",
            title: "Digital Banking",
            description:
                "24×7 secure banking with balance enquiry, beneficiary management and online payments.",
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                backgroundColor: "#f8f9fa",
            }}
        >
            <Container>

                <Row className="mb-5">

                    <Col lg={12} className="text-center">

                        <h2 className="fw-bold display-6">
                            Banking Services
                        </h2>

                        <p
                            className="text-muted mt-3 mx-auto"
                            style={{
                                maxWidth: "750px",
                            }}
                        >
                            Experience secure, reliable and modern banking
                            services designed for customers, employees and
                            administrators.
                        </p>

                    </Col>

                </Row>

                <Row className="g-4">

                    {services.map((service) => (
                        <Col
                            key={service.id}
                            xl={4}
                            lg={4}
                            md={6}
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                buttonText="Explore"
                                buttonVariant="primary"
                                onClick={() =>
                                    navigate("/register")
                                }
                            />
                        </Col>
                    ))}

                </Row>

            </Container>
        </section>
    );
};

export default ServicesSection;