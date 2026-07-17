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
    Spinner,
} from "react-bootstrap";

import CustomerLayout from "../../components/layout/CustomerLayout";

// Future
// import customerService from "../../services/customerService";

const Profile = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [editing, setEditing] = useState(false);

    /* ==========================================
            Customer Profile
    ========================================== */

    const [profile, setProfile] = useState({

        customerId: "CUS100001",

        firstName: "Dinesh",

        lastName: "Jagadale",

        email: "dinesh@example.com",

        mobile: "+91 9876543210",

        gender: "Male",

        dateOfBirth: "2004-06-10",

        aadhaar: "XXXX XXXX 4589",

        pan: "ABCDE1234F",

        address: "Malegaon (Bk), Baramati",

        city: "Pune",

        state: "Maharashtra",

        pincode: "413115",

        occupation: "Student",

        annualIncome: "500000",

        accountStatus: "ACTIVE",

        kycStatus: "VERIFIED"

    });

    useEffect(() => {

        const loadProfile = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await customerService.getProfile();

                setProfile(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 700)
                );

            }
            catch {

                setError(
                    "Unable to load profile."
                );

            }
            finally {

                setLoading(false);

            }

        };

        loadProfile();

    }, []);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setProfile(previous => ({

            ...previous,

            [name]: value,

        }));

    };

    const handleSave = () => {

        /*
        customerService.updateProfile(profile);
        */

        setEditing(false);

        alert("Profile Updated Successfully.");

    };

    if (loading) {

        return (


                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">

                        Loading Profile...

                    </h5>

                </Container>

            

        );

    }

    if (error) {

        return (

            

                <Container className="py-5">

                    <Alert variant="danger">

                        {error}

                    </Alert>

                </Container>

            

        );

    }

    return (

        

            <Container fluid className="py-4">

                {/* Header */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <h2 className="fw-bold">

                            My Profile

                        </h2>

                        <p className="text-muted">

                            Manage your personal information and KYC details.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        {editing ? (

                            <Button
                                variant="success"
                                onClick={handleSave}
                            >

                                <i className="bi bi-check-circle me-2"></i>

                                Save Profile

                            </Button>

                        ) : (

                            <Button
                                variant="primary"
                                onClick={() =>
                                    setEditing(true)
                                }
                            >

                                <i className="bi bi-pencil-square me-2"></i>

                                Edit Profile

                            </Button>

                        )}

                    </Col>

                </Row>

                                <Row>

                    {/* ==========================================
                            Profile Information
                    ========================================== */}

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Body className="text-center">

                                <div
                                    className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center"
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        fontSize: "3rem",
                                    }}
                                >

                                    <i className="bi bi-person-fill"></i>

                                </div>

                                <h4 className="mt-4">

                                    {profile.firstName} {profile.lastName}

                                </h4>

                                <p className="text-muted">

                                    Customer ID : {profile.customerId}

                                </p>

                                <Badge
                                    bg={
                                        profile.accountStatus === "ACTIVE"
                                            ? "success"
                                            : "secondary"
                                    }
                                    className="me-2"
                                >
                                    {profile.accountStatus}
                                </Badge>

                                <Badge
                                    bg={
                                        profile.kycStatus === "VERIFIED"
                                            ? "primary"
                                            : "warning"
                                    }
                                >
                                    {profile.kycStatus}
                                </Badge>

                                <hr />

                                <div className="d-grid gap-2">

                                    <Button
                                        variant="outline-primary"
                                    >

                                        <i className="bi bi-camera me-2"></i>

                                        Upload Photo

                                    </Button>

                                    <Button
                                        variant="outline-secondary"
                                    >

                                        <i className="bi bi-file-earmark-arrow-up me-2"></i>

                                        Upload Documents

                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    {/* ==========================================
                            Personal Information
                    ========================================== */}

                    <Col lg={8}>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Personal Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form>

                                    <Row>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                First Name

                                            </Form.Label>

                                            <Form.Control
                                                name="firstName"
                                                value={profile.firstName}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Last Name

                                            </Form.Label>

                                            <Form.Control
                                                name="lastName"
                                                value={profile.lastName}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Email

                                            </Form.Label>

                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={profile.email}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Mobile Number

                                            </Form.Label>

                                            <Form.Control
                                                name="mobile"
                                                value={profile.mobile}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Gender

                                            </Form.Label>

                                            <Form.Select
                                                name="gender"
                                                value={profile.gender}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            >

                                                <option>Male</option>

                                                <option>Female</option>

                                                <option>Other</option>

                                            </Form.Select>

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Date of Birth

                                            </Form.Label>

                                            <Form.Control
                                                type="date"
                                                name="dateOfBirth"
                                                value={profile.dateOfBirth}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                    </Row>

                                </Form>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Address & KYC
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Address Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form>

                                    <Form.Group className="mb-3">

                                        <Form.Label>

                                            Address

                                        </Form.Label>

                                        <Form.Control
                                            name="address"
                                            value={profile.address}
                                            onChange={handleChange}
                                            disabled={!editing}
                                        />

                                    </Form.Group>

                                    <Row>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>

                                                    City

                                                </Form.Label>

                                                <Form.Control
                                                    name="city"
                                                    value={profile.city}
                                                    onChange={handleChange}
                                                    disabled={!editing}
                                                />

                                            </Form.Group>

                                        </Col>

                                        <Col md={6}>

                                            <Form.Group className="mb-3">

                                                <Form.Label>

                                                    State

                                                </Form.Label>

                                                <Form.Control
                                                    name="state"
                                                    value={profile.state}
                                                    onChange={handleChange}
                                                    disabled={!editing}
                                                />

                                            </Form.Group>

                                        </Col>

                                    </Row>

                                    <Form.Group>

                                        <Form.Label>

                                            PIN Code

                                        </Form.Label>

                                        <Form.Control
                                            name="pincode"
                                            value={profile.pincode}
                                            onChange={handleChange}
                                            disabled={!editing}
                                        />

                                    </Form.Group>

                                </Form>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    KYC Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Row>

                                    <Col md={6} className="mb-3">

                                        <strong>

                                            Aadhaar

                                        </strong>

                                        <p className="text-muted">

                                            {profile.aadhaar}

                                        </p>

                                    </Col>

                                    <Col md={6} className="mb-3">

                                        <strong>

                                            PAN Number

                                        </strong>

                                        <p className="text-muted">

                                            {profile.pan}

                                        </p>

                                    </Col>

                                    <Col md={6}>

                                        <strong>

                                            Occupation

                                        </strong>

                                        <p className="text-muted">

                                            {profile.occupation}

                                        </p>

                                    </Col>

                                    <Col md={6}>

                                        <strong>

                                            Annual Income

                                        </strong>

                                        <p className="text-muted">

                                            ₹ {profile.annualIncome}

                                        </p>

                                    </Col>

                                </Row>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                                {/* ==========================================
                        Account Summary
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-person-badge-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h5 className="fw-bold mt-3">
                                    {profile.customerId}
                                </h5>

                                <p className="text-muted mb-0">
                                    Customer ID
                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-patch-check-fill text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h5 className="fw-bold mt-3">

                                    {profile.kycStatus}

                                </h5>

                                <p className="text-muted mb-0">

                                    KYC Status

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-bank2 text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h5 className="fw-bold mt-3">

                                    {profile.accountStatus}

                                </h5>

                                <p className="text-muted mb-0">

                                    Account Status

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-envelope-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h6 className="fw-bold mt-3">

                                    {profile.email}

                                </h6>

                                <p className="text-muted mb-0">

                                    Registered Email

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Security Settings
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-danger text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-shield-lock-fill me-2"></i>

                                    Security Settings

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <div className="d-grid gap-3">

                                    <Button variant="outline-primary">

                                        <i className="bi bi-key-fill me-2"></i>

                                        Change Password

                                    </Button>

                                    <Button variant="outline-warning">

                                        <i className="bi bi-phone-fill me-2"></i>

                                        Enable Two-Factor Authentication

                                    </Button>

                                    <Button variant="outline-success">

                                        <i className="bi bi-envelope-check-fill me-2"></i>

                                        Verify Email

                                    </Button>

                                    <Button variant="outline-danger">

                                        <i className="bi bi-box-arrow-right me-2"></i>

                                        Logout From All Devices

                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    {/* ==========================================
                            Banking Preferences
                    ========================================== */}

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-sliders me-2"></i>

                                    Banking Preferences

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    type="switch"
                                    label="Email Notifications"
                                    defaultChecked
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="switch"
                                    label="SMS Alerts"
                                    defaultChecked
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="switch"
                                    label="UPI Notifications"
                                    defaultChecked
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="switch"
                                    label="Marketing Offers"
                                />

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Footer
                ========================================== */}

                <Row>

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Body className="text-center">

                                <h5 className="fw-bold">

                                    Customer Profile Management

                                </h5>

                                <p className="text-muted mb-4">

                                    Keep your profile and KYC information up to
                                    date to enjoy uninterrupted banking
                                    services, secure transactions and faster
                                    customer support.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-person-check-fill text-success me-2"></i>

                                        Verified Identity

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-lock-fill text-primary me-2"></i>

                                        Secure Account

                                    </span>

                                    <span>

                                        <i className="bi bi-bell-fill text-warning me-2"></i>

                                        Smart Alerts

                                    </span>

                                    <span>

                                        <i className="bi bi-cloud-check-fill text-info me-2"></i>

                                        Digital Banking

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default Profile;