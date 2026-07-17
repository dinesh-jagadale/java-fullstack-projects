import { useEffect, useState } from "react";
import {
    Alert,
    Badge,
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
    Spinner
} from "react-bootstrap";

import AdminLayout from "../../components/layout/AdminLayout";

// Future
// import adminService from "../../services/adminService";

const SystemSettings = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [settings, setSettings] = useState({

        bankName: "Secure Bank Ltd.",

        branchCode: "SB001",

        supportEmail: "support@securebank.com",

        supportPhone: "+91 1800-123-456",

        minimumBalance: 5000,

        maximumTransferLimit: 500000,

        maintenanceMode: false,

        smsNotification: true,

        emailNotification: true,

        twoFactorAuthentication: true

    });

    useEffect(() => {

        const loadSettings = async () => {

            try{

                setLoading(true);

                /*
                const response =
                    await adminService.getSystemSettings();

                setSettings(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve,800));

            }

            catch{

                setError(
                    "Unable to load system settings."
                );

            }

            finally{

                setLoading(false);

            }

        };

        loadSettings();

    },[]);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setSettings(previous => ({

            ...previous,

            [name]:

                type === "checkbox"

                ? checked

                : value

        }));

    };

    const saveSettings = () => {

        // Future API Call

        alert("Settings saved successfully.");

    };

    if(loading){

        return(

          

                <Container className="py-5 text-center">

                    <Spinner animation="border"/>

                    <h5 className="mt-3">

                        Loading System Settings...

                    </h5>

                </Container>

           

        );

    }

    if(error){

        return(

            

                <Container className="py-5">

                    <Alert variant="danger">

                        {error}

                    </Alert>

                </Container>

           

        );

    }

    return(

        

            <Container fluid className="py-4">

                {/* ==========================================
                        Header
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <h2 className="fw-bold">

                            System Settings

                        </h2>

                        <p className="text-muted">

                            Configure banking system,
                            notifications, security,
                            transaction limits and
                            application preferences.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Badge
                            bg="success"
                            className="fs-6"
                        >

                            System Online

                        </Badge>

                    </Col>

                </Row>

                                {/* ==========================================
                        Bank Information
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Bank Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Bank Name

                                    </Form.Label>

                                    <Form.Control
                                        name="bankName"
                                        value={settings.bankName}
                                        onChange={handleChange}
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Branch Code

                                    </Form.Label>

                                    <Form.Control
                                        name="branchCode"
                                        value={settings.branchCode}
                                        onChange={handleChange}
                                    />

                                </Form.Group>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Support Email

                                    </Form.Label>

                                    <Form.Control
                                        type="email"
                                        name="supportEmail"
                                        value={settings.supportEmail}
                                        onChange={handleChange}
                                    />

                                </Form.Group>

                                <Form.Group>

                                    <Form.Label>

                                        Support Phone

                                    </Form.Label>

                                    <Form.Control
                                        name="supportPhone"
                                        value={settings.supportPhone}
                                        onChange={handleChange}
                                    />

                                </Form.Group>

                            </Card.Body>

                        </Card>

                    </Col>

                    {/* ==========================================
                            Transaction Settings
                    ========================================== */}

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Transaction Settings

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Group className="mb-3">

                                    <Form.Label>

                                        Minimum Balance (₹)

                                    </Form.Label>

                                    <Form.Control
                                        type="number"
                                        name="minimumBalance"
                                        value={settings.minimumBalance}
                                        onChange={handleChange}
                                    />

                                </Form.Group>

                                <Form.Group>

                                    <Form.Label>

                                        Maximum Transfer Limit (₹)

                                    </Form.Label>

                                    <Form.Control
                                        type="number"
                                        name="maximumTransferLimit"
                                        value={settings.maximumTransferLimit}
                                        onChange={handleChange}
                                    />

                                </Form.Group>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Notification Settings
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Notification Settings

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    type="switch"
                                    id="smsNotification"
                                    name="smsNotification"
                                    label="Enable SMS Notifications"
                                    checked={settings.smsNotification}
                                    onChange={handleChange}
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="switch"
                                    id="emailNotification"
                                    name="emailNotification"
                                    label="Enable Email Notifications"
                                    checked={settings.emailNotification}
                                    onChange={handleChange}
                                />

                            </Card.Body>

                        </Card>

                    </Col>

                    {/* ==========================================
                            Security Settings
                    ========================================== */}

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-danger text-white">

                                <h5 className="mb-0">

                                    Security Settings

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    type="switch"
                                    id="twoFactorAuthentication"
                                    name="twoFactorAuthentication"
                                    label="Enable Two-Factor Authentication"
                                    checked={settings.twoFactorAuthentication}
                                    onChange={handleChange}
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="switch"
                                    id="maintenanceMode"
                                    name="maintenanceMode"
                                    label="Maintenance Mode"
                                    checked={settings.maintenanceMode}
                                    onChange={handleChange}
                                />

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Save Button
                ========================================== */}

                <Row className="mb-4">

                    <Col className="text-end">

                        <Button
                            variant="primary"
                            size="lg"
                            onClick={saveSettings}
                        >

                            <i className="bi bi-save me-2"></i>

                            Save Settings

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        System Health Dashboard
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-cpu-fill text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    Online

                                </h4>

                                <p className="text-muted mb-0">

                                    Server Status

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-database-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    Healthy

                                </h4>

                                <p className="text-muted mb-0">

                                    Database

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-shield-lock-fill text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    Enabled

                                </h4>

                                <p className="text-muted mb-0">

                                    Security

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-clock-history text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    99.98%

                                </h4>

                                <p className="text-muted mb-0">

                                    System Uptime

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Security Guidelines
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Security Recommendations

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Enable Two-Factor Authentication for all administrators.

                                    </li>

                                    <li className="mb-3">

                                        Rotate administrator passwords regularly.

                                    </li>

                                    <li className="mb-3">

                                        Review failed login attempts daily.

                                    </li>

                                    <li className="mb-3">

                                        Perform database backups regularly.

                                    </li>

                                    <li>

                                        Keep application dependencies updated.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Administrator Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Settings verified"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Security policies updated"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Backup completed"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Audit logs reviewed"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Administrator Notes

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter administrative notes..."
                                    />

                                </Form.Group>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        System Information
                ========================================== */}

                <Row>

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-info text-white">

                                <h5 className="mb-0">

                                    Application Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Row>

                                    <Col md={6}>

                                        <p>

                                            <strong>

                                                Application

                                            </strong>

                                            <br/>

                                            Banking Management System

                                        </p>

                                        <p>

                                            <strong>

                                                Frontend

                                            </strong>

                                            <br/>

                                            React + Bootstrap

                                        </p>

                                        <p>

                                            <strong>

                                                Backend

                                            </strong>

                                            <br/>

                                            Spring Boot + Spring Security

                                        </p>

                                    </Col>

                                    <Col md={6}>

                                        <p>

                                            <strong>

                                                Database

                                            </strong>

                                            <br/>

                                            MySQL

                                        </p>

                                        <p>

                                            <strong>

                                                Version

                                            </strong>

                                            <br/>

                                            v1.0.0

                                        </p>

                                        <p>

                                            <strong>

                                                Environment

                                            </strong>

                                            <br/>

                                            Production Ready

                                        </p>

                                    </Col>

                                </Row>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Footer
                ========================================== */}

                <Row className="mt-4">

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Body className="text-center">

                                <h5 className="fw-bold">

                                    Banking System Administration

                                </h5>

                                <p className="text-muted mb-4">

                                    Manage application configuration,
                                    security policies, notifications,
                                    banking preferences and operational
                                    settings from one centralized
                                    administration console.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-gear-fill text-primary me-2"></i>

                                        Configuration

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-lock-fill text-success me-2"></i>

                                        Security

                                    </span>

                                    <span>

                                        <i className="bi bi-database-fill text-warning me-2"></i>

                                        Database

                                    </span>

                                    <span>

                                        <i className="bi bi-cpu-fill text-danger me-2"></i>

                                        System Health

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

     

    );

};

export default SystemSettings;