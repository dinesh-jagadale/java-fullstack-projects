import { Badge, Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-5"
            style={{
                backgroundColor: "#f8f9fa",
            }}
        >
            <Container>

                {/* Heading */}

                <Row className="mb-5 text-center">

                    <Col lg={8} className="mx-auto">

                        <Badge
                            bg="primary"
                            className="px-3 py-2 fs-6 mb-3"
                        >
                            Contact Us
                        </Badge>

                        <h2 className="display-5 fw-bold">
                            We're Here To Help
                        </h2>

                        <p
                            className="text-muted mt-3"
                            style={{
                                maxWidth: "760px",
                                margin: "0 auto",
                            }}
                        >
                            Have questions about banking services, account
                            opening, loans or digital banking? Our support
                            team is ready to assist you.
                        </p>

                    </Col>

                </Row>

                <Row className="g-5">

                    {/* Contact Information */}

                    <Col lg={5}>

                        <Card className="border-0 shadow-sm h-100">

                            <Card.Body className="p-4">

                                <h3 className="fw-bold mb-4">
                                    Contact Information
                                </h3>

                                <div className="d-flex mb-4">

                                    <div className="me-3">
                                        <i className="bi bi-geo-alt-fill fs-3 text-primary"></i>
                                    </div>

                                    <div>
                                        <h5>Head Office</h5>
                                        <p className="text-muted mb-0">
                                            Banking Management System
                                            <br />
                                            Pune, Maharashtra, India
                                        </p>
                                    </div>

                                </div>

                                <div className="d-flex mb-4">

                                    <div className="me-3">
                                        <i className="bi bi-envelope-fill fs-3 text-success"></i>
                                    </div>

                                    <div>
                                        <h5>Email</h5>
                                        <p className="text-muted mb-0">
                                            support@bankingmanagement.com
                                        </p>
                                    </div>

                                </div>

                                <div className="d-flex mb-4">

                                    <div className="me-3">
                                        <i className="bi bi-telephone-fill fs-3 text-danger"></i>
                                    </div>

                                    <div>
                                        <h5>Customer Care</h5>
                                        <p className="text-muted mb-0">
                                            +91 1800-123-4567
                                        </p>
                                    </div>

                                </div>

                                <div className="d-flex">

                                    <div className="me-3">
                                        <i className="bi bi-clock-fill fs-3 text-warning"></i>
                                    </div>

                                    <div>
                                        <h5>Support Hours</h5>
                                        <p className="text-muted mb-0">
                                            Monday - Saturday
                                            <br />
                                            9:00 AM - 7:00 PM
                                        </p>
                                    </div>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    {/* Contact Form */}

                    <Col lg={7}>

                        <Card className="border-0 shadow-sm">

                            <Card.Body className="p-4">

                                <h3 className="fw-bold mb-4">
                                    Send Us a Message
                                </h3>

                                <Form>

                                    <Row>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                Full Name
                                            </Form.Label>

                                            <Form.Control
                                                type="text"
                                                placeholder="Enter your name"
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                Email
                                            </Form.Label>

                                            <Form.Control
                                                type="email"
                                                placeholder="Enter your email"
                                            />

                                        </Col>

                                    </Row>

                                    <Row>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                Mobile Number
                                            </Form.Label>

                                            <Form.Control
                                                type="text"
                                                placeholder="Enter mobile number"
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                Subject
                                            </Form.Label>

                                            <Form.Control
                                                type="text"
                                                placeholder="Subject"
                                            />

                                        </Col>

                                    </Row>

                                    <div className="mb-4">

                                        <Form.Label>
                                            Message
                                        </Form.Label>

                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            placeholder="Write your message..."
                                        />

                                    </div>

                                    <Button
                                        variant="primary"
                                        size="lg"
                                    >
                                        <i className="bi bi-send-fill me-2"></i>
                                        Send Message
                                    </Button>

                                </Form>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default ContactSection;