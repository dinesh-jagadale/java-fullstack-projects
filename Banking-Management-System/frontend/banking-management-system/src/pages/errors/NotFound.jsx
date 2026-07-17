import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const NotFound = () => {
    const { user } = useAuth();

    const getHomePage = () => {
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
            className="min-vh-100 d-flex justify-content-center align-items-center"
            style={{
                background: "#f8f9fa",
            }}
        >
            <Container>

                <Row className="justify-content-center">

                    <Col lg={7} md={8} sm={12}>

                        <Card className="border-0 shadow-lg">

                            <Card.Body className="text-center p-5">

                                <div
                                    className="display-1 fw-bold text-primary"
                                >
                                    404
                                </div>

                                <h2 className="fw-bold mt-3">
                                    Page Not Found
                                </h2>

                                <p className="text-muted mt-3">
                                    Sorry, the page you are looking for does not
                                    exist or has been moved.
                                </p>

                                <div className="d-flex justify-content-center gap-3 mt-4">

                                    <Button
                                        as={Link}
                                        to={getHomePage()}
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

export default NotFound;