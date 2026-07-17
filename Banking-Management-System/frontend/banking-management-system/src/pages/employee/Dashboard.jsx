import { useEffect, useState } from "react";
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Row,
    Spinner
} from "react-bootstrap";

import EmployeeLayout from "../../components/layout/EmployeeLayout";

// Future
// import employeeService from "../../services/employeeService";

const Dashboard = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    /* ==========================================
            Dashboard Statistics
    ========================================== */

    const [dashboard, setDashboard] = useState({

        employeeName: "Rahul Patil",

        employeeId: "EMP1001",

        branchName: "Baramati Branch",

        pendingKyc: 18,

        pendingAccounts: 12,

        pendingLoans: 9,

        approvedToday: 21,

        rejectedToday: 3,

        totalCustomers: 524,

    });

    /* ==========================================
            Recent Activities
    ========================================== */

    const [activities, setActivities] = useState([]);

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await employeeService.getDashboard();

                setDashboard(response.dashboard);
                setActivities(response.activities);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setActivities([

                    {
                        id: 1,
                        action: "KYC Approved",
                        customer: "Amit Sharma",
                        time: "10 Minutes Ago"
                    },

                    {
                        id: 2,
                        action: "Savings Account Approved",
                        customer: "Sneha Patil",
                        time: "45 Minutes Ago"
                    },

                    {
                        id: 3,
                        action: "Home Loan Verified",
                        customer: "Rahul Jadhav",
                        time: "1 Hour Ago"
                    },

                    {
                        id: 4,
                        action: "Customer Documents Verified",
                        customer: "Priya Kulkarni",
                        time: "2 Hours Ago"
                    }

                ]);

            }
            catch {

                setError(
                    "Unable to load dashboard."
                );

            }
            finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

    if (loading) {

        return (


                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">

                        Loading Employee Dashboard...

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
                        Welcome
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <h2 className="fw-bold">

                            Employee Dashboard

                        </h2>

                        <p className="text-muted">

                            Welcome,
                            <strong> {dashboard.employeeName}</strong>

                            &nbsp;|&nbsp;

                            Employee ID :
                            <strong> {dashboard.employeeId}</strong>

                            &nbsp;|&nbsp;

                            Branch :
                            <strong> {dashboard.branchName}</strong>

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Button variant="primary">

                            <i className="bi bi-person-check-fill me-2"></i>

                            Verify Customer

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Dashboard Statistics
                ========================================== */}

                <Row className="g-4 mb-4">

                    <Col xl={2} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-person-vcard-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h2 className="fw-bold mt-3">

                                    {dashboard.pendingKyc}

                                </h2>

                                <p className="text-muted mb-0">

                                    Pending KYC

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={2} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-bank2 text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h2 className="fw-bold mt-3">

                                    {dashboard.pendingAccounts}

                                </h2>

                                <p className="text-muted mb-0">

                                    Pending Accounts

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={2} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-cash-stack text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h2 className="fw-bold mt-3">

                                    {dashboard.pendingLoans}

                                </h2>

                                <p className="text-muted mb-0">

                                    Pending Loans

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={2} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-check-circle-fill text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h2 className="fw-bold mt-3">

                                    {dashboard.approvedToday}

                                </h2>

                                <p className="text-muted mb-0">

                                    Approved Today

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={2} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-x-circle-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h2 className="fw-bold mt-3">

                                    {dashboard.rejectedToday}

                                </h2>

                                <p className="text-muted mb-0">

                                    Rejected Today

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={2} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-people-fill text-info"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h2 className="fw-bold mt-3">

                                    {dashboard.totalCustomers}

                                </h2>

                                <p className="text-muted mb-0">

                                    Customers

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Quick Actions
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={4} className="mb-3">

                        <Button
                            variant="primary"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-person-vcard-fill me-2"></i>

                            Verify KYC

                        </Button>

                    </Col>

                    <Col lg={4} className="mb-3">

                        <Button
                            variant="success"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-bank2 me-2"></i>

                            Approve Accounts

                        </Button>

                    </Col>

                    <Col lg={4} className="mb-3">

                        <Button
                            variant="warning"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-cash-stack me-2"></i>

                            Review Loans

                        </Button>

                    </Col>

                </Row>

                {/* ==========================================
                        Recent Activities
                ========================================== */}

                <Row>

                    <Col lg={8} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Recent Employee Activities

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                {activities.map((activity) => (

                                    <div
                                        key={activity.id}
                                        className="d-flex justify-content-between align-items-center border-bottom py-3"
                                    >

                                        <div>

                                            <h6 className="mb-1">

                                                {activity.action}

                                            </h6>

                                            <small className="text-muted">

                                                Customer :
                                                {" "}
                                                {activity.customer}

                                            </small>

                                        </div>

                                        <small className="text-muted">

                                            {activity.time}

                                        </small>

                                    </div>

                                ))}

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Today's Performance

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <div className="mb-4">

                                    <small className="text-muted">

                                        Approval Rate

                                    </small>

                                    <h3 className="text-success fw-bold">

                                        87%

                                    </h3>

                                </div>

                                <div className="mb-4">

                                    <small className="text-muted">

                                        Average Processing Time

                                    </small>

                                    <h4>

                                        12 Minutes

                                    </h4>

                                </div>

                                <div>

                                    <small className="text-muted">

                                        Tasks Completed

                                    </small>

                                    <h4>

                                        24

                                    </h4>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                                {/* ==========================================
                        Pending Approvals
                ========================================== */}

                <Row className="mb-4">

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-dark text-white">

                                <div className="d-flex justify-content-between align-items-center">

                                    <h5 className="mb-0">

                                        Pending Approval Queue

                                    </h5>

                                    <Button
                                        variant="light"
                                        size="sm"
                                    >
                                        View All
                                    </Button>

                                </div>

                            </Card.Header>

                            <Card.Body className="p-0">

                                <table className="table table-hover align-middle mb-0">

                                    <thead className="table-light">

                                        <tr>

                                            <th>Request ID</th>

                                            <th>Customer</th>

                                            <th>Request</th>

                                            <th>Priority</th>

                                            <th>Status</th>

                                            <th>Action</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>

                                            <td>REQ10021</td>

                                            <td>Amit Sharma</td>

                                            <td>KYC Verification</td>

                                            <td>

                                                <span className="badge bg-warning">
                                                    Medium
                                                </span>

                                            </td>

                                            <td>

                                                <span className="badge bg-primary">
                                                    Pending
                                                </span>

                                            </td>

                                            <td>

                                                <Button
                                                    size="sm"
                                                    variant="outline-primary"
                                                >
                                                    Review
                                                </Button>

                                            </td>

                                        </tr>

                                        <tr>

                                            <td>REQ10022</td>

                                            <td>Sneha Patil</td>

                                            <td>Account Opening</td>

                                            <td>

                                                <span className="badge bg-danger">
                                                    High
                                                </span>

                                            </td>

                                            <td>

                                                <span className="badge bg-warning">
                                                    Waiting
                                                </span>

                                            </td>

                                            <td>

                                                <Button
                                                    size="sm"
                                                    variant="outline-success"
                                                >
                                                    Approve
                                                </Button>

                                            </td>

                                        </tr>

                                        <tr>

                                            <td>REQ10023</td>

                                            <td>Rahul Jadhav</td>

                                            <td>Home Loan</td>

                                            <td>

                                                <span className="badge bg-danger">
                                                    High
                                                </span>

                                            </td>

                                            <td>

                                                <span className="badge bg-primary">
                                                    Verification
                                                </span>

                                            </td>

                                            <td>

                                                <Button
                                                    size="sm"
                                                    variant="outline-warning"
                                                >
                                                    Review
                                                </Button>

                                            </td>

                                        </tr>

                                    </tbody>

                                </table>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Notices & Responsibilities
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Banking Notices

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">
                                        Verify customer documents before
                                        approving any account.
                                    </li>

                                    <li className="mb-3">
                                        Follow RBI KYC guidelines during
                                        verification.
                                    </li>

                                    <li className="mb-3">
                                        Escalate suspicious applications
                                        immediately.
                                    </li>

                                    <li>
                                        Record every approval and rejection
                                        with remarks.
                                    </li>

                                </ul>

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

                                <div className="mb-3">

                                    <strong>

                                        Customer Verification

                                    </strong>

                                    <p className="text-muted mb-0">

                                        Validate customer identity and
                                        submitted documents.

                                    </p>

                                </div>

                                <div className="mb-3">

                                    <strong>

                                        Account Approval

                                    </strong>

                                    <p className="text-muted mb-0">

                                        Review account opening requests
                                        before activation.

                                    </p>

                                </div>

                                <div>

                                    <strong>

                                        Loan Processing

                                    </strong>

                                    <p className="text-muted mb-0">

                                        Verify income and supporting
                                        documents before forwarding to
                                        Admin.

                                    </p>

                                </div>

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

                                    Process customer requests securely,
                                    maintain compliance with banking
                                    regulations and deliver excellent
                                    customer service.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-person-check-fill text-success me-2"></i>

                                        Customer Verification

                                    </span>

                                    <span>

                                        <i className="bi bi-bank2 text-primary me-2"></i>

                                        Account Approval

                                    </span>

                                    <span>

                                        <i className="bi bi-cash-stack text-warning me-2"></i>

                                        Loan Processing

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        RBI Compliance

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

       

    );

};

export default Dashboard;
