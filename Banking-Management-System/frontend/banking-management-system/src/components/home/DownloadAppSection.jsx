import { Badge, Button, Col, Container, Row } from "react-bootstrap";

const DownloadAppSection = () => {
    return (
        <section
            className="py-5"
            style={{
                background:
                    "linear-gradient(135deg,#0d47a1,#1565c0,#1976d2)",
            }}
        >
            <Container>

                <Row className="align-items-center gy-5">

                    {/* Left Section */}

                    <Col lg={6}>

                        <Badge
                            bg="light"
                            text="primary"
                            className="px-3 py-2 fs-6 mb-3"
                        >
                            Mobile Banking
                        </Badge>

                        <h2
                            className="display-4 fw-bold text-white mb-4"
                        >
                            Banking In Your Pocket
                        </h2>

                        <p
                            className="text-white-50 fs-5 mb-4"
                        >
                            Access your bank account anytime, anywhere.
                            Perform secure transactions, monitor account
                            balances, transfer funds, manage beneficiaries,
                            pay bills and receive instant notifications
                            directly from your mobile device.
                        </p>

                        <Row className="g-3 mb-4">

                            <Col sm={6}>

                                <div className="d-flex align-items-center">

                                    <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>

                                    <span className="text-white">
                                        Instant Fund Transfer
                                    </span>

                                </div>

                            </Col>

                            <Col sm={6}>

                                <div className="d-flex align-items-center">

                                    <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>

                                    <span className="text-white">
                                        Real-Time Notifications
                                    </span>

                                </div>

                            </Col>

                            <Col sm={6}>

                                <div className="d-flex align-items-center">

                                    <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>

                                    <span className="text-white">
                                        Debit Card Control
                                    </span>

                                </div>

                            </Col>

                            <Col sm={6}>

                                <div className="d-flex align-items-center">

                                    <i className="bi bi-check-circle-fill text-warning fs-4 me-3"></i>

                                    <span className="text-white">
                                        Loan Tracking
                                    </span>

                                </div>

                            </Col>

                        </Row>

                        <div className="d-flex flex-wrap gap-3">

                            <Button
                                variant="light"
                                size="lg"
                            >
                                <i className="bi bi-google-play me-2"></i>

                                Google Play
                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                            >
                                <i className="bi bi-apple me-2"></i>

                                App Store
                            </Button>

                        </div>

                    </Col>

                    {/* Right Section */}

                    <Col lg={6}>

                        <div
                            className="bg-white rounded-5 shadow-lg p-4 mx-auto"
                            style={{
                                maxWidth: "380px",
                            }}
                        >

                            {/* Phone Header */}

                            <div
                                className="rounded-4 bg-primary text-white p-4 text-center mb-4"
                            >

                                <i
                                    className="bi bi-phone-fill"
                                    style={{
                                        fontSize: "3rem",
                                    }}
                                ></i>

                                <h4 className="fw-bold mt-3 mb-1">
                                    Mobile Banking
                                </h4>

                                <small>
                                    Secure • Fast • Reliable
                                </small>

                            </div>

                            {/* Mobile Features */}

                            <div className="mb-3 d-flex align-items-center">

                                <i className="bi bi-wallet2 fs-3 text-success me-3"></i>

                                <div>

                                    <h6 className="mb-1">
                                        Account Balance
                                    </h6>

                                    <small className="text-muted">
                                        Check balance instantly
                                    </small>

                                </div>

                            </div>

                            <hr />

                            <div className="mb-3 d-flex align-items-center">

                                <i className="bi bi-arrow-left-right fs-3 text-primary me-3"></i>

                                <div>

                                    <h6 className="mb-1">
                                        Money Transfer
                                    </h6>

                                    <small className="text-muted">
                                        UPI / NEFT / RTGS
                                    </small>

                                </div>

                            </div>

                            <hr />

                            <div className="mb-3 d-flex align-items-center">

                                <i className="bi bi-credit-card-2-front fs-3 text-danger me-3"></i>

                                <div>

                                    <h6 className="mb-1">
                                        Card Management
                                    </h6>

                                    <small className="text-muted">
                                        Debit & Credit Cards
                                    </small>

                                </div>

                            </div>

                            <hr />

                            <div className="d-flex align-items-center">

                                <i className="bi bi-bell-fill fs-3 text-warning me-3"></i>

                                <div>

                                    <h6 className="mb-1">
                                        Instant Alerts
                                    </h6>

                                    <small className="text-muted">
                                        Transaction Notifications
                                    </small>

                                </div>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default DownloadAppSection;