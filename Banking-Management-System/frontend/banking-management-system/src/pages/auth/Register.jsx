import { Navigate } from "react-router-dom";
import { Card, Col, Container, Row, Alert } from "react-bootstrap";

import { useAuth } from "../../context/AuthContext";
import RegisterForm from "../../components/forms/RegisterForm";

const Register = () => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated()) {
        return <Navigate to="/" replace />;
    }

    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{
                background:
                    "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)",
            }}
        >
            <Container>

                <Row className="justify-content-center">

                    <Col lg={7} md={10} sm={12}>

                        <Card className="shadow-lg border-0">

                            <Card.Body className="p-5">

                                <div className="text-center mb-4">

                                    <h2 className="fw-bold text-primary">
                                        Banking Management System
                                    </h2>

                                    <p className="text-muted mb-0">
                                        Create Your Account
                                    </p>

                                </div>

                                <Alert variant="info">
                                    Fill in the required information to register
                                    as a banking customer.
                                </Alert>

                                <RegisterForm />

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default Register;