import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";
import { registerValidation } from "../../validations/registerValidation";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { register: registerUser } = useAuth();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onTouched",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            password: "",
            confirmPassword: "",
        },
    });

    const password = watch("password");

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const payload = {
                firstName: data.firstName.trim(),
                lastName: data.lastName.trim(),
                fullName: `${data.firstName.trim()} ${data.lastName.trim()}`,
                email: data.email.trim().toLowerCase(),
                mobileNumber: data.mobileNumber.trim(),
                password: data.password,
            };

            await registerUser(payload);

            toast.success(
                "Registration completed successfully. Please login."
            );

            navigate("/login", { replace: true });
        } catch (error) {
            toast.error(
                error.message || "Registration failed."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>

            <Row>

                <Col md={6}>
                    <Form.Group className="mb-3">

                        <Form.Label>First Name</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            isInvalid={!!errors.firstName}
                            {...register(
                                "firstName",
                                registerValidation.firstName
                            )}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                        </Form.Control.Feedback>

                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-3">

                        <Form.Label>Last Name</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            isInvalid={!!errors.lastName}
                            {...register(
                                "lastName",
                                registerValidation.lastName
                            )}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.lastName?.message}
                        </Form.Control.Feedback>

                    </Form.Group>
                </Col>

            </Row>

            <Form.Group className="mb-3">

                <Form.Label>Email Address</Form.Label>

                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    isInvalid={!!errors.email}
                    {...register(
                        "email",
                        registerValidation.email
                    )}
                />

                <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group className="mb-3">

                <Form.Label>Mobile Number</Form.Label>

                <Form.Control
                    type="tel"
                    placeholder="Enter mobile number"
                    isInvalid={!!errors.mobileNumber}
                    {...register(
                        "mobileNumber",
                        registerValidation.mobileNumber
                    )}
                />

                <Form.Control.Feedback type="invalid">
                    {errors.mobileNumber?.message}
                </Form.Control.Feedback>

            </Form.Group>

            <Row>

                <Col md={6}>
                    <Form.Group className="mb-3">

                        <Form.Label>Password</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            isInvalid={!!errors.password}
                            {...register(
                                "password",
                                registerValidation.password
                            )}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.password?.message}
                        </Form.Control.Feedback>

                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group className="mb-4">

                        <Form.Label>Confirm Password</Form.Label>

                        <Form.Control
                            type="password"
                            placeholder="Confirm password"
                            isInvalid={!!errors.confirmPassword}
                            {...register("confirmPassword", {
                                required:
                                    "Confirm Password is required.",

                                validate: (value) =>
                                    value === password ||
                                    "Passwords do not match.",
                            })}
                        />

                        <Form.Control.Feedback type="invalid">
                            {errors.confirmPassword?.message}
                        </Form.Control.Feedback>

                    </Form.Group>
                </Col>

            </Row>

            <div className="d-grid">

                <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Spinner
                                animation="border"
                                size="sm"
                                className="me-2"
                            />
                            Creating Account...
                        </>
                    ) : (
                        "Register"
                    )}
                </Button>

            </div>

            <div className="text-center mt-4">

                <span className="text-muted">
                    Already have an account?
                </span>

                <Button
                    variant="link"
                    className="text-decoration-none"
                    onClick={() => navigate("/login")}
                >
                    Login
                </Button>

            </div>

        </Form>
    );
};

export default RegisterForm;