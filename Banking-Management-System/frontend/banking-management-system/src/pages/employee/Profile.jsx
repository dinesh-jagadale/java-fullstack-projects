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

import EmployeeLayout from "../../components/layout/EmployeeLayout";

// Future
// import employeeService from "../../services/employeeService";

const Profile = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [editing, setEditing] = useState(false);

    /* ==========================================
            Employee Profile
    ========================================== */

    const [employee, setEmployee] = useState({

        employeeId: "EMP1001",

        firstName: "Rahul",

        lastName: "Patil",

        email: "rahul.patil@bank.com",

        mobile: "+91 9876543210",

        gender: "Male",

        dob: "1998-05-18",

        designation: "Assistant Manager",

        department: "Operations",

        branch: "Baramati Branch",

        joiningDate: "12 Jun 2022",

        experience: "4 Years",

        address: "Baramati, Pune",

        city: "Pune",

        state: "Maharashtra",

        pincode: "413102",

        employeeStatus: "ACTIVE"

    });

    useEffect(() => {

        const loadProfile = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await employeeService.getProfile();

                setEmployee(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800));

            }

            catch {

                setError(
                    "Unable to load employee profile."
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

        setEmployee(previous => ({

            ...previous,

            [name]: value

        }));

    };

    const handleSave = () => {

        /*
        employeeService.updateProfile(employee);
        */

        alert("Employee profile updated successfully.");

        setEditing(false);

    };

    if (loading) {

        return (

            

                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">

                        Loading Employee Profile...

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

                {/* ==========================================
                        Header
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <h2 className="fw-bold">

                            Employee Profile

                        </h2>

                        <p className="text-muted">

                            Manage your personal information and employment details.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        {

                            editing ?

                            (

                                <Button
                                    variant="success"
                                    onClick={handleSave}
                                >

                                    <i className="bi bi-check-circle me-2"></i>

                                    Save Profile

                                </Button>

                            )

                            :

                            (

                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        setEditing(true)
                                    }
                                >

                                    <i className="bi bi-pencil-square me-2"></i>

                                    Edit Profile

                                </Button>

                            )

                        }

                    </Col>

                </Row>

                                <Row>

                    {/* ==========================================
                            Employee Profile Card
                    ========================================== */}

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Body className="text-center">

                                <div
                                    className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center"
                                    style={{
                                        width: "130px",
                                        height: "130px",
                                        fontSize: "3rem"
                                    }}
                                >

                                    <i className="bi bi-person-badge-fill"></i>

                                </div>

                                <h4 className="mt-4">

                                    {employee.firstName} {employee.lastName}

                                </h4>

                                <p className="text-muted">

                                    {employee.designation}

                                </p>

                                <Badge
                                    bg={
                                        employee.employeeStatus === "ACTIVE"
                                            ? "success"
                                            : "secondary"
                                    }
                                >

                                    {employee.employeeStatus}

                                </Badge>

                                <hr />

                                <div className="text-start">

                                    <p>

                                        <strong>Employee ID :</strong><br />

                                        {employee.employeeId}

                                    </p>

                                    <p>

                                        <strong>Department :</strong><br />

                                        {employee.department}

                                    </p>

                                    <p>

                                        <strong>Branch :</strong><br />

                                        {employee.branch}

                                    </p>

                                    <p className="mb-0">

                                        <strong>Experience :</strong><br />

                                        {employee.experience}

                                    </p>

                                </div>

                                <hr />

                                <div className="d-grid gap-2">

                                    <Button variant="outline-primary">

                                        <i className="bi bi-camera-fill me-2"></i>

                                        Upload Photo

                                    </Button>

                                    <Button variant="outline-secondary">

                                        <i className="bi bi-download me-2"></i>

                                        Download ID Card

                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    {/* ==========================================
                            Employee Information
                    ========================================== */}

                    <Col lg={8}>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Employee Information

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
                                                value={employee.firstName}
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
                                                value={employee.lastName}
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
                                                value={employee.email}
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
                                                value={employee.mobile}
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
                                                value={employee.gender}
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
                                                name="dob"
                                                value={employee.dob}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Designation

                                            </Form.Label>

                                            <Form.Control
                                                name="designation"
                                                value={employee.designation}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Department

                                            </Form.Label>

                                            <Form.Control
                                                name="department"
                                                value={employee.department}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Branch

                                            </Form.Label>

                                            <Form.Control
                                                name="branch"
                                                value={employee.branch}
                                                onChange={handleChange}
                                                disabled={!editing}
                                            />

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>

                                                Joining Date

                                            </Form.Label>

                                            <Form.Control
                                                name="joiningDate"
                                                value={employee.joiningDate}
                                                disabled
                                            />

                                        </Col>

                                    </Row>

                                </Form>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Address Information
                ========================================== */}

                <Row className="mt-4">

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Address Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Row>

                                    <Col md={6} className="mb-3">

                                        <Form.Label>

                                            Address

                                        </Form.Label>

                                        <Form.Control
                                            name="address"
                                            value={employee.address}
                                            onChange={handleChange}
                                            disabled={!editing}
                                        />

                                    </Col>

                                    <Col md={2} className="mb-3">

                                        <Form.Label>

                                            City

                                        </Form.Label>

                                        <Form.Control
                                            name="city"
                                            value={employee.city}
                                            onChange={handleChange}
                                            disabled={!editing}
                                        />

                                    </Col>

                                    <Col md={2} className="mb-3">

                                        <Form.Label>

                                            State

                                        </Form.Label>

                                        <Form.Control
                                            name="state"
                                            value={employee.state}
                                            onChange={handleChange}
                                            disabled={!editing}
                                        />

                                    </Col>

                                    <Col md={2} className="mb-3">

                                        <Form.Label>

                                            PIN Code

                                        </Form.Label>

                                        <Form.Control
                                            name="pincode"
                                            value={employee.pincode}
                                            onChange={handleChange}
                                            disabled={!editing}
                                        />

                                    </Col>

                                </Row>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                                {/* ==========================================
                        Employee Performance Summary
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-check2-circle text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    528

                                </h3>

                                <p className="text-muted mb-0">

                                    Accounts Approved

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-person-check-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    684

                                </h3>

                                <p className="text-muted mb-0">

                                    KYC Verified

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-cash-stack text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    142

                                </h3>

                                <p className="text-muted mb-0">

                                    Loans Processed

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-award-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    98%

                                </h3>

                                <p className="text-muted mb-0">

                                    Accuracy

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Security & Responsibilities
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-danger text-white">

                                <h5 className="mb-0">

                                    Security Settings

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <div className="d-grid gap-3">

                                    <Button variant="outline-primary">

                                        <i className="bi bi-key-fill me-2"></i>

                                        Change Password

                                    </Button>

                                    <Button variant="outline-success">

                                        <i className="bi bi-shield-lock-fill me-2"></i>

                                        Enable Two-Factor Authentication

                                    </Button>

                                    <Button variant="outline-warning">

                                        <i className="bi bi-phone-fill me-2"></i>

                                        Registered Devices

                                    </Button>

                                    <Button variant="outline-danger">

                                        <i className="bi bi-box-arrow-right me-2"></i>

                                        Logout All Sessions

                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-info text-white">

                                <h5 className="mb-0">

                                    Employee Responsibilities

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify customer identity and KYC documents.

                                    </li>

                                    <li className="mb-3">

                                        Approve new account opening requests.

                                    </li>

                                    <li className="mb-3">

                                        Process loan verification requests.

                                    </li>

                                    <li className="mb-3">

                                        Follow RBI banking compliance policies.

                                    </li>

                                    <li>

                                        Maintain confidentiality of customer information.

                                    </li>

                                </ul>

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

                                    Employee Banking Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Manage customer services securely while
                                    complying with RBI regulations and internal
                                    banking policies. Maintain accuracy,
                                    transparency and efficiency in every
                                    banking operation.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-person-check-fill text-success me-2"></i>

                                        Customer Services

                                    </span>

                                    <span>

                                        <i className="bi bi-bank2 text-primary me-2"></i>

                                        Banking Operations

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-warning me-2"></i>

                                        Secure Access

                                    </span>

                                    <span>

                                        <i className="bi bi-award-fill text-danger me-2"></i>

                                        Professional Excellence

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