import { Card, Col, Container, Row } from "react-bootstrap";

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rahul Sharma",
            profession: "Software Engineer",
            rating: 5,
            image: "👨",
            feedback:
                "The Banking Management System provides a clean and secure banking experience. Fund transfers and account management are fast and reliable.",
        },
        {
            id: 2,
            name: "Priya Patel",
            profession: "Business Owner",
            rating: 5,
            image: "👩",
            feedback:
                "Managing my current account, transactions and loan applications has become much easier with the digital banking services.",
        },
        {
            id: 3,
            name: "Amit Verma",
            profession: "Government Employee",
            rating: 5,
            image: "👨‍💼",
            feedback:
                "The interface is professional, responsive and secure. I especially appreciate the transaction history and account overview.",
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

                    <Col>

                        <span className="badge bg-primary px-3 py-2 fs-6 mb-3">
                            Customer Testimonials
                        </span>

                        <h2 className="display-5 fw-bold">
                            Trusted by Our Customers
                        </h2>

                        <p
                            className="text-muted mx-auto mt-3"
                            style={{
                                maxWidth: "760px",
                            }}
                        >
                            Customer satisfaction is our priority. Here are
                            some experiences shared by users of our digital
                            banking platform.
                        </p>

                    </Col>

                </Row>

                {/* Testimonial Cards */}

                <Row className="g-4">

                    {testimonials.map((customer) => (

                        <Col
                            lg={4}
                            md={6}
                            key={customer.id}
                        >

                            <Card
                                className="border-0 shadow-sm h-100"
                                style={{
                                    borderRadius: "18px",
                                    transition: "all .3s ease",
                                }}
                            >

                                <Card.Body className="p-4">

                                    {/* Customer */}

                                    <div className="d-flex align-items-center mb-4">

                                        <div
                                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                                            style={{
                                                width: "65px",
                                                height: "65px",
                                                fontSize: "1.8rem",
                                            }}
                                        >
                                            {customer.image}
                                        </div>

                                        <div>

                                            <h5 className="fw-bold mb-1">
                                                {customer.name}
                                            </h5>

                                            <small className="text-muted">
                                                {customer.profession}
                                            </small>

                                        </div>

                                    </div>

                                    {/* Rating */}

                                    <div className="mb-3">

                                        {Array.from({
                                            length: customer.rating,
                                        }).map((_, index) => (
                                            <i
                                                key={index}
                                                className="bi bi-star-fill text-warning me-1"
                                            ></i>
                                        ))}

                                    </div>

                                    {/* Feedback */}

                                    <p className="text-muted mb-0">
                                        "{customer.feedback}"
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

export default TestimonialsSection;