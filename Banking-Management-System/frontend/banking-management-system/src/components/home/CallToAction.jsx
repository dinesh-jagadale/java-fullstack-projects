import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section
            className="py-5"
            style={{
                background:
                    "linear-gradient(135deg, #0b3d91 0%, #1565c0 50%, #1976d2 100%)",
            }}
        >
            <Container>

                <Row className="justify-content-center">

                    <Col lg={10} xl={9}>

                        <div className="bg-white rounded-4 shadow-lg p-5 text-center">

                            <span className="badge bg-primary px-3 py-2 fs-6 mb-3">
                                Start Your Banking Journey
                            </span>

                            <h2 className="display-5 fw-bold mb-3">
                                Experience Secure Digital Banking
                            </h2>

                            <p
                                className="text-muted mx-auto mb-5"
                                style={{
                                    maxWidth: "720px",
                                    fontSize: "1.05rem",
                                }}
                            >
                                Open your account online, transfer money,
                                manage beneficiaries, apply for loans,
                                monitor transactions and access banking
                                services through a secure enterprise-grade
                                Banking Management System.
                            </p>

                            <Row className="g-4 mb-5">

                                <Col md={4}>

                                    <div className="border rounded-4 p-4 h-100">

                                        <i className="bi bi-person-plus-fill display-5 text-primary"></i>

                                        <h5 className="fw-bold mt-3">
                                            Open Account
                                        </h5>

                                        <p className="text-muted small mb-0">
                                            Register and create your
                                            banking profile in just a
                                            few minutes.
                                        </p>

                                    </div>

                                </Col>

                                <Col md={4}>

                                    <div className="border rounded-4 p-4 h-100">

                                        <i className="bi bi-shield-lock-fill display-5 text-success"></i>

                                        <h5 className="fw-bold mt-3">
                                            Secure Login
                                        </h5>

                                        <p className="text-muted small mb-0">
                                            Access your dashboard using
                                            JWT-based authentication
                                            and role-based security.
                                        </p>

                                    </div>

                                </Col>

                                <Col md={4}>

                                    <div className="border rounded-4 p-4 h-100">

                                        <i className="bi bi-bank2 display-5 text-warning"></i>

                                        <h5 className="fw-bold mt-3">
                                            Digital Banking
                                        </h5>

                                        <p className="text-muted small mb-0">
                                            Banking services available
                                            24×7 from anywhere using
                                            your web browser.
                                        </p>

                                    </div>

                                </Col>

                            </Row>

                            <div className="d-flex flex-wrap justify-content-center gap-3">

                                <Button
                                    as={Link}
                                    to="/register"
                                    size="lg"
                                    variant="primary"
                                >
                                    <i className="bi bi-person-plus-fill me-2"></i>
                                    Create New Account
                                </Button>

                                <Button
                                    as={Link}
                                    to="/login"
                                    size="lg"
                                    variant="outline-primary"
                                >
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    Login to Banking
                                </Button>

                            </div>

                            <hr className="my-5" />

                            <Row className="text-center">

                                <Col md={3} sm={6} className="mb-3">

                                    <i className="bi bi-patch-check-fill text-success fs-2"></i>

                                    <h6 className="mt-2 fw-bold">
                                        Secure Platform
                                    </h6>

                                </Col>

                                <Col md={3} sm={6} className="mb-3">

                                    <i className="bi bi-lightning-charge-fill text-warning fs-2"></i>

                                    <h6 className="mt-2 fw-bold">
                                        Fast Transactions
                                    </h6>

                                </Col>

                                <Col md={3} sm={6} className="mb-3">

                                    <i className="bi bi-phone-fill text-primary fs-2"></i>

                                    <h6 className="mt-2 fw-bold">
                                        Responsive UI
                                    </h6>

                                </Col>

                                <Col md={3} sm={6} className="mb-3">

                                    <i className="bi bi-headset text-danger fs-2"></i>

                                    <h6 className="mt-2 fw-bold">
                                        Customer Support
                                    </h6>

                                </Col>

                            </Row>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default CallToAction;