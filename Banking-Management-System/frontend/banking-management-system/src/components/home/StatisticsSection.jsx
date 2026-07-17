import { Col, Container, Row } from "react-bootstrap";

const StatisticsSection = () => {
    const statistics = [
        {
            id: 1,
            icon: "bi bi-people-fill",
            value: "1,25,000+",
            title: "Happy Customers",
            description:
                "Customers using our secure digital banking platform.",
            color: "primary",
        },
        {
            id: 2,
            icon: "bi bi-bank2",
            value: "150+",
            title: "Branches",
            description:
                "Bank branches providing seamless banking services.",
            color: "success",
        },
        {
            id: 3,
            icon: "bi bi-arrow-left-right",
            value: "25M+",
            title: "Transactions",
            description:
                "Secure transactions processed through our banking system.",
            color: "warning",
        },
        {
            id: 4,
            icon: "bi bi-cash-stack",
            value: "₹2,500 Cr+",
            title: "Loans Processed",
            description:
                "Loans approved across multiple banking products.",
            color: "danger",
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                background:
                    "linear-gradient(135deg,#0b5ed7,#084298)",
            }}
        >
            <Container>

                {/* Heading */}

                <Row className="mb-5 text-center">

                    <Col>

                        <span className="badge bg-light text-primary px-3 py-2 fs-6 mb-3">
                            Banking Statistics
                        </span>

                        <h2 className="display-5 fw-bold text-white">
                            Trusted By Thousands
                        </h2>

                        <p
                            className="text-white-50 mt-3 mx-auto"
                            style={{
                                maxWidth: "760px",
                            }}
                        >
                            Our Banking Management System is designed to
                            deliver secure, reliable and enterprise-grade
                            banking services with high availability,
                            advanced security and exceptional performance.
                        </p>

                    </Col>

                </Row>

                {/* Statistics */}

                <Row className="g-4">

                    {statistics.map((item) => (

                        <Col
                            xl={3}
                            lg={6}
                            md={6}
                            key={item.id}
                        >

                            <div
                                className="bg-white rounded-4 shadow h-100 text-center p-4"
                                style={{
                                    transition: "all .3s ease",
                                }}
                            >

                                <div
                                    className={`bg-${item.color} bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4`}
                                    style={{
                                        width: "85px",
                                        height: "85px",
                                    }}
                                >

                                    <i
                                        className={`${item.icon} text-${item.color}`}
                                        style={{
                                            fontSize: "2.3rem",
                                        }}
                                    />

                                </div>

                                <h2 className="fw-bold mb-2">
                                    {item.value}
                                </h2>

                                <h5 className="fw-semibold mb-3">
                                    {item.title}
                                </h5>

                                <p className="text-muted mb-0">
                                    {item.description}
                                </p>

                            </div>

                        </Col>

                    ))}

                </Row>

                {/* Bottom Statistics */}

                <Row className="mt-5">

                    <Col>

                        <div className="text-center text-white">

                            <Row>

                                <Col md={3} sm={6} className="mb-4">

                                    <h3 className="fw-bold">
                                        99.99%
                                    </h3>

                                    <p className="mb-0 text-white-50">
                                        System Availability
                                    </p>

                                </Col>

                                <Col md={3} sm={6} className="mb-4">

                                    <h3 className="fw-bold">
                                        256-bit
                                    </h3>

                                    <p className="mb-0 text-white-50">
                                        Data Encryption
                                    </p>

                                </Col>

                                <Col md={3} sm={6} className="mb-4">

                                    <h3 className="fw-bold">
                                        24×7
                                    </h3>

                                    <p className="mb-0 text-white-50">
                                        Banking Services
                                    </p>

                                </Col>

                                <Col md={3} sm={6} className="mb-4">

                                    <h3 className="fw-bold">
                                        100%
                                    </h3>

                                    <p className="mb-0 text-white-50">
                                        Secure Authentication
                                    </p>

                                </Col>

                            </Row>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default StatisticsSection;