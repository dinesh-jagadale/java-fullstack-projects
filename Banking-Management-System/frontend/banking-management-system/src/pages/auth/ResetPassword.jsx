import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Form,
    InputGroup,
    Row,
    Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";

import authService from "../../services/authService";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const token = searchParams.get("token");

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            await authService.resetPassword({
                token,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            });

            toast.success("Password has been reset successfully.");

            navigate("/login", { replace: true });
        } catch (error) {
            toast.error(
                error.message || "Unable to reset password."
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
                                        Reset Password
                                    </h2>

                                    <p className="text-muted">
                                        Create a new password for your account.
                                    </p>

                                </div>

                                {!token && (
                                    <Alert variant="danger">
                                        Invalid or expired password reset link.
                                    </Alert>
                                )}

                                <Form
                                    onSubmit={handleSubmit}
                                >

                                    <Form.Group className="mb-3">

                                        <Form.Label>
                                            New Password
                                        </Form.Label>

                                        <InputGroup>

                                            <Form.Control
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name="password"
                                                placeholder="Enter new password"
                                                value={
                                                    formData.password
                                                }
                                                onChange={handleChange}
                                                required
                                                disabled={!token}
                                            />

                                        </InputGroup>

                                    </Form.Group>

                                    <Form.Group className="mb-4">

                                        <Form.Label>
                                            Confirm Password
                                        </Form.Label>

                                        <Form.Control
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="confirmPassword"
                                            placeholder="Confirm new password"
                                            value={
                                                formData.confirmPassword
                                            }
                                            onChange={handleChange}
                                            required
                                            disabled={!token}
                                        />

                                    </Form.Group>

                                    <Form.Check
                                        className="mb-4"
                                        type="checkbox"
                                        label="Show Password"
                                        checked={showPassword}
                                        onChange={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                    />

                                    <div className="d-grid">

                                        <Button
                                            variant="primary"
                                            type="submit"
                                            disabled={
                                                loading || !token
                                            }
                                        >
                                            {loading ? (
                                                <>
                                                    <Spinner
                                                        animation="border"
                                                        size="sm"
                                                        className="me-2"
                                                    />
                                                    Updating...
                                                </>
                                            ) : (
                                                "Reset Password"
                                            )}
                                        </Button>

                                    </div>

                                </Form>

                                <div className="text-center mt-4">

                                    <Link
                                        to="/login"
                                        className="text-decoration-none"
                                    >
                                        Back to Login
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

export default ResetPassword;