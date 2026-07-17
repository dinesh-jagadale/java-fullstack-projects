import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
    Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";

import authService from "../../services/authService";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);

            await authService.forgotPassword({
                email: email.trim(),
            });

            setSubmitted(true);

            toast.success(
                "Password reset link has been sent to your registered email."
            );
        } catch (error) {
            toast.error(
                error.message ||
                    "Unable to process your request."
            );
        } finally {
            setLoading(false);
        }
    };

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

                    <Col lg={5} md={8}>

                        <Card className="shadow-lg border-0">

                            <Card.Body className="p-5">

                                <div className="text-center mb-4">

                                    <h2 className="fw-bold text-primary">
                                        Forgot Password
                                    </h2>

                                    <p className="text-muted">
                                        Enter your registered email address.
                                    </p>

                                </div>

                                {submitted && (
                                    <Alert variant="success">
                                        If your email exists, a password reset
                                        link has been sent.
                                    </Alert>
                                )}

                                <Form onSubmit={handleSubmit}>

                                    <Form.Group className="mb-4">

                                        <Form.Label>
                                            Email Address
                                        </Form.Label>

                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your registered email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        />

                                    </Form.Group>

                                    <div className="d-grid">

                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <Spinner
                                                        animation="border"
                                                        size="sm"
                                                        className="me-2"
                                                    />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Reset Link"
                                            )}
                                        </Button>

                                    </div>

                                </Form>

                                <div className="text-center mt-4">

                                    <Link
                                        to="/login"
                                        className="text-decoration-none"
                                    >
                                        ← Back to Login
                                    </Link>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>
        </div>
    );
};

export default ForgotPassword;