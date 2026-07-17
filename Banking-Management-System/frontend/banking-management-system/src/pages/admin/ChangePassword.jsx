import { useState } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
    Alert,
} from "react-bootstrap";

const ChangePassword = () => {

    const [formData, setFormData] = useState({

        currentPassword: "",

        newPassword: "",

        confirmPassword: "",

    });

    const [success, setSuccess] = useState("");

    const [error, setError] = useState("");

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData(previous => ({

            ...previous,

            [name]: value,

        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        setSuccess("");

        setError("");

        if (
            formData.newPassword !==
            formData.confirmPassword
        ) {

            setError(
                "New Password and Confirm Password do not match."
            );

            return;

        }

        setSuccess(
            "Password changed successfully."
        );

        setFormData({

            currentPassword: "",

            newPassword: "",

            confirmPassword: "",

        });

    };

    return (

        <Container fluid>

            <Row className="justify-content-center">

                <Col
                    xl={6}
                    lg={7}
                    md={9}
                >

                    <Card className="shadow-sm border-0">

                        <Card.Header className="bg-primary text-white">

                            <h3 className="mb-0">

                                <i className="bi bi-key-fill me-2"></i>

                                Change Password

                            </h3>

                        </Card.Header>

                        <Card.Body className="p-4">

                            <p className="text-muted">

                                Update your administrator account password.

                            </p>

                            {

                                success && (

                                    <Alert variant="success">

                                        {success}

                                    </Alert>

                                )

                            }

                            {

                                error && (

                                    <Alert variant="danger">

                                        {error}

                                    </Alert>

                                )

                            }

                            <Form
                                onSubmit={handleSubmit}
                            >

                                                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Current Password

                                    </Form.Label>

                                    <Form.Control

                                        type="password"

                                        name="currentPassword"

                                        value={formData.currentPassword}

                                        onChange={handleChange}

                                        placeholder="Enter current password"

                                        required

                                    />

                                </Form.Group>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        New Password

                                    </Form.Label>

                                    <Form.Control

                                        type="password"

                                        name="newPassword"

                                        value={formData.newPassword}

                                        onChange={handleChange}

                                        placeholder="Enter new password"

                                        required

                                    />

                                    <Form.Text className="text-muted">

                                        Password should contain at least
                                        8 characters including uppercase,
                                        lowercase, number and special
                                        character.

                                    </Form.Text>

                                </Form.Group>

                                <Form.Group className="mb-4">

                                    <Form.Label>

                                        Confirm Password

                                    </Form.Label>

                                    <Form.Control

                                        type="password"

                                        name="confirmPassword"

                                        value={formData.confirmPassword}

                                        onChange={handleChange}

                                        placeholder="Confirm new password"

                                        required

                                    />

                                </Form.Group>

                                <div className="d-flex justify-content-between">

                                    <Button
                                        variant="secondary"
                                        type="reset"
                                        onClick={() =>
                                            setFormData({

                                                currentPassword: "",

                                                newPassword: "",

                                                confirmPassword: "",

                                            })
                                        }
                                    >

                                        <i className="bi bi-arrow-counterclockwise me-2"></i>

                                        Reset

                                    </Button>

                                    <Button
                                        type="submit"
                                        variant="primary"
                                    >

                                        <i className="bi bi-check-circle me-2"></i>

                                        Update Password

                                    </Button>

                                </div>

                            </Form>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

                    </Container>

    );

};

export default ChangePassword;