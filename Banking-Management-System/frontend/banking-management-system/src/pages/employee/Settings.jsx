import { useState } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Row,
    Alert,
} from "react-bootstrap";

const Settings = () => {

    const [profileSettings, setProfileSettings] = useState({

        emailNotification: true,

        smsNotification: true,

        pushNotification: false,

        twoFactorAuthentication: true,

        darkMode: false,

    });

    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {

        const { name, checked } = e.target;

        setProfileSettings(previous => ({

            ...previous,

            [name]: checked,

        }));

        setSaved(false);

    };

    const handleSave = () => {

        setSaved(true);

    };

    return (

        <>

            <Row className="mb-4">

                <Col>

                    <h2 className="fw-bold">

                        Settings

                    </h2>

                    <p className="text-muted">

                        Manage your banking preferences and security settings.

                    </p>

                </Col>

            </Row>

            {

                saved && (

                    <Alert variant="success">

                        Settings saved successfully.

                    </Alert>

                )

            }

            <Row>

                <Col lg={6} className="mb-4">

                    <Card className="shadow-sm border-0">

                        <Card.Header className="fw-bold">

                            Notification Settings

                        </Card.Header>

                        <Card.Body>

                            <Form.Check

                                type="switch"

                                name="emailNotification"

                                label="Email Notifications"

                                checked={profileSettings.emailNotification}

                                onChange={handleChange}

                                className="mb-3"

                            />

                            <Form.Check

                                type="switch"

                                name="smsNotification"

                                label="SMS Notifications"

                                checked={profileSettings.smsNotification}

                                onChange={handleChange}

                                className="mb-3"

                            />

                            <Form.Check

                                type="switch"

                                name="pushNotification"

                                label="Push Notifications"

                                checked={profileSettings.pushNotification}

                                onChange={handleChange}

                            />

                        </Card.Body>

                    </Card>

                </Col>

                <Col lg={6} className="mb-4">

                    <Card className="shadow-sm border-0">

                        <Card.Header className="fw-bold">

                            Security Settings

                        </Card.Header>

                        <Card.Body>

                            <Form.Check

                                type="switch"

                                name="twoFactorAuthentication"

                                label="Enable Two-Factor Authentication"

                                checked={profileSettings.twoFactorAuthentication}

                                onChange={handleChange}

                                className="mb-3"

                            />

                            <Form.Check

                                type="switch"

                                name="darkMode"

                                label="Dark Mode"

                                checked={profileSettings.darkMode}

                                onChange={handleChange}

                            />

                        </Card.Body>

                    </Card>

                </Col>
                                {/* ==========================
                        Change Password
                ========================== */}

                <Col lg={6} className="mb-4">

                    <Card className="shadow-sm border-0">

                        <Card.Header className="fw-bold">

                            Change Password

                        </Card.Header>

                        <Card.Body>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Current Password

                                </Form.Label>

                                <Form.Control
                                    type="password"
                                    placeholder="Enter current password"
                                />

                            </Form.Group>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    New Password

                                </Form.Label>

                                <Form.Control
                                    type="password"
                                    placeholder="Enter new password"
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Label>

                                    Confirm Password

                                </Form.Label>

                                <Form.Control
                                    type="password"
                                    placeholder="Confirm password"
                                />

                            </Form.Group>

                        </Card.Body>

                    </Card>

                </Col>

                {/* ==========================
                        Login Information
                ========================== */}

                <Col lg={6} className="mb-4">

                    <Card className="shadow-sm border-0">

                        <Card.Header className="fw-bold">

                            Login Information

                        </Card.Header>

                        <Card.Body>

                            <div className="mb-3">

                                <strong>

                                    Last Login

                                </strong>

                                <br />

                                <span className="text-muted">

                                    13 July 2026, 09:45 AM

                                </span>

                            </div>

                            <div className="mb-3">

                                <strong>

                                    Last Login Device

                                </strong>

                                <br />

                                <span className="text-muted">

                                    Windows 11 • Chrome Browser

                                </span>

                            </div>

                            <div>

                                <strong>

                                    IP Address

                                </strong>

                                <br />

                                <span className="text-muted">

                                    192.168.1.101

                                </span>

                            </div>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>

            <div className="text-end">

                <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSave}
                >

                    <i className="bi bi-check-circle me-2"></i>

                    Save Settings

                </Button>

            </div>
                    </>

    );

};

export default Settings;