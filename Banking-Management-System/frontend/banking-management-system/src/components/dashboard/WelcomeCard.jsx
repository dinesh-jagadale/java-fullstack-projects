import PropTypes from "prop-types";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const WelcomeCard = ({
    customerName,
    customerId,
    accountType,
    lastLogin,
    profileCompletion,
    kycStatus,
}) => {
    const getGreeting = () => {
        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning";
        if (hour < 17) return "Good Afternoon";
        return "Good Evening";
    };

    const getKycVariant = () => {
        switch (kycStatus) {
            case "VERIFIED":
                return "success";

            case "PENDING":
                return "warning";

            case "REJECTED":
                return "danger";

            default:
                return "secondary";
        }
    };

    return (
        <Card
            className="border-0 shadow rounded-4 overflow-hidden"
            style={{
                background:
                    "linear-gradient(135deg,#0d6efd,#0b5ed7,#084298)",
            }}
        >
            <Card.Body className="text-white p-4">

                <Row className="align-items-center">

                    {/* Left Section */}

                    <Col lg={8}>

                        <small className="text-light">
                            {getGreeting()}
                        </small>

                        <h2 className="fw-bold mt-2">
                            {customerName}
                        </h2>

                        <p className="mb-4 text-light">

                            Welcome to your Digital Banking Dashboard.

                            Manage your accounts, transfer money,
                            monitor transactions and access banking
                            services securely.

                        </p>

                        <Row>

                            <Col md={4} className="mb-3">

                                <small className="d-block text-light">
                                    Customer ID
                                </small>

                                <strong>
                                    {customerId}
                                </strong>

                            </Col>

                            <Col md={4} className="mb-3">

                                <small className="d-block text-light">
                                    Account Type
                                </small>

                                <strong>
                                    {accountType}
                                </strong>

                            </Col>

                            <Col md={4} className="mb-3">

                                <small className="d-block text-light">
                                    Last Login
                                </small>

                                <strong>
                                    {lastLogin}
                                </strong>

                            </Col>

                        </Row>

                        <div className="mt-4 d-flex flex-wrap gap-2">

                            <Button
                                as={Link}
                                to="/customer/profile"
                                variant="light"
                            >
                                <i className="bi bi-person-circle me-2"></i>

                                My Profile
                            </Button>

                            <Button
                                as={Link}
                                to="/customer/transactions"
                                variant="outline-light"
                            >
                                <i className="bi bi-clock-history me-2"></i>

                                Transactions
                            </Button>

                        </div>

                    </Col>

                    {/* Right Section */}

                    <Col
                        lg={4}
                        className="text-center mt-4 mt-lg-0"
                    >

                        <div
                            className="bg-white text-dark rounded-circle d-inline-flex justify-content-center align-items-center shadow"
                            style={{
                                width: "120px",
                                height: "120px",
                            }}
                        >
                            <i
                                className="bi bi-person-fill"
                                style={{
                                    fontSize: "4rem",
                                    color: "#0d6efd",
                                }}
                            ></i>
                        </div>

                        <h5 className="mt-4">
                            Profile Completion
                        </h5>

                        <div
                            className="progress"
                            style={{
                                height: "10px",
                            }}
                        >

                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{
                                    width: `${profileCompletion}%`,
                                }}
                            ></div>

                        </div>

                        <strong className="d-block mt-2">
                            {profileCompletion}%
                        </strong>

                        <Badge
                            bg={getKycVariant()}
                            className="mt-3 px-3 py-2"
                        >
                            KYC {kycStatus}
                        </Badge>

                    </Col>

                </Row>

            </Card.Body>
        </Card>
    );
};

WelcomeCard.propTypes = {
    customerName: PropTypes.string.isRequired,
    customerId: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    lastLogin: PropTypes.string.isRequired,
    profileCompletion: PropTypes.number,
    kycStatus: PropTypes.string,
};

WelcomeCard.defaultProps = {
    profileCompletion: 100,
    kycStatus: "VERIFIED",
};

export default WelcomeCard;