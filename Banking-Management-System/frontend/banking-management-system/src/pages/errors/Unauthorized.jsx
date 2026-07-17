import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Unauthorized = () => {
    const { user } = useAuth();

    const getDashboardUrl = () => {
        if (!user) {
            return "/login";
        }

        switch (user.role) {
            case "ROLE_ADMIN":
                return "/admin/dashboard";

            case "ROLE_EMPLOYEE":
                return "/employee/dashboard";

            case "ROLE_CUSTOMER":
                return "/customer/dashboard";

            default:
                return "/login";
        }
    };

    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{
                background: "#f8f9fa",
            }}
        >
            <Container>

                <Row className="justify-content-center">

                    <Col lg={6} md={8}>

                        <Card className="shadow border-0">

                            <Card.Body className="text-center p-5">

                                <div
                                    className="display-1 fw-bold text-warning"
                                >
                                    403
                                </div>

                                <h2 className="fw-bold mt-3">
                                    Access Denied
                                </h2>

                                <p className="text-muted mt-3">
                                    You don't have permission to access this
                                    page.
                                </p>

                                <div className="d-flex justify-content-center gap-3 mt-4">

                                    <Button
                                        as={Link}
                                        to={getDashboardUrl()}
                                        variant="primary"
                                    >
                                        Go To Dashboard
                                    </Button>

                                    <Button
                                        as={Link}
                                        to="/login"
                                        variant="outline-secondary"
                                    >
                                        Login
                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Unauthorized;