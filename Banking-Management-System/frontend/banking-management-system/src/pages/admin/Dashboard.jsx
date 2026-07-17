import { useEffect, useState } from "react";
import {
    Alert,
    Badge,
    Button,
    Card,
    Col,
    Container,
    Row,
    Spinner
} from "react-bootstrap";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import AdminLayout from "../../components/layout/AdminLayout";

// Future
// import adminService from "../../services/adminService";

const Dashboard = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    /* ==========================================
            Dashboard Statistics
    ========================================== */

    const [dashboard, setDashboard] = useState({

        totalCustomers: 15426,

        totalEmployees: 126,

        totalAccounts: 18752,

        activeAccounts: 18135,

        totalLoans: 2648,

        pendingLoans: 124,

        totalTransactions: 248521,

        pendingKyc: 87,

        totalBranches: 18,

        totalDeposits: 985450000,

        bankRevenue: 14250000,

        systemHealth: "Excellent"

    });

    /* ==========================================
            Monthly Transactions
    ========================================== */

    const [transactionChart] = useState([

        { month: "Jan", transactions: 1800 },

        { month: "Feb", transactions: 2100 },

        { month: "Mar", transactions: 2500 },

        { month: "Apr", transactions: 2800 },

        { month: "May", transactions: 3200 },

        { month: "Jun", transactions: 3900 }

    ]);

    /* ==========================================
            Monthly Deposits
    ========================================== */

    const [depositChart] = useState([

        { month: "Jan", amount: 52 },

        { month: "Feb", amount: 58 },

        { month: "Mar", amount: 63 },

        { month: "Apr", amount: 74 },

        { month: "May", amount: 88 },

        { month: "Jun", amount: 96 }

    ]);

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await adminService.getDashboard();

                setDashboard(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 900));

            }

            catch {

                setError(
                    "Unable to load admin dashboard."
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

                        Loading Admin Dashboard...

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

                            Admin Dashboard

                        </h2>

                        <p className="text-muted">

                            Banking Management System -
                            Executive Control Center

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Badge
                            bg="success"
                            className="fs-6 px-3 py-2"
                        >

                            System Health :
                            {" "}
                            {dashboard.systemHealth}

                        </Badge>

                    </Col>

                </Row>

                                {/* ==========================================
                        Executive KPI Cards
                ========================================== */}

                <Row className="g-4 mb-4">

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Total Customers

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.totalCustomers.toLocaleString()}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-people-fill text-primary"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Employees

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.totalEmployees}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-person-badge-fill text-success"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Total Accounts

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.totalAccounts.toLocaleString()}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-bank2 text-warning"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Active Accounts

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.activeAccounts.toLocaleString()}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-check-circle-fill text-info"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                <Row className="g-4 mb-4">

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Total Loans

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.totalLoans.toLocaleString()}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-cash-stack text-danger"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Pending KYC

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.pendingKyc}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-file-earmark-check-fill text-warning"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Transactions

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.totalTransactions.toLocaleString()}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-arrow-left-right text-primary"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} lg={4} md={6}>

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <div className="d-flex justify-content-between">

                                    <div>

                                        <small className="text-muted">

                                            Branches

                                        </small>

                                        <h2 className="fw-bold mt-2">

                                            {dashboard.totalBranches}

                                        </h2>

                                    </div>

                                    <i
                                        className="bi bi-building text-secondary"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Financial Statistics
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Bank Deposits

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <h2 className="fw-bold text-success">

                                    ₹ {dashboard.totalDeposits.toLocaleString()}

                                </h2>

                                <p className="text-muted mb-0">

                                    Total deposits across all branches

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Bank Revenue

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <h2 className="fw-bold text-primary">

                                    ₹ {dashboard.bankRevenue.toLocaleString()}

                                </h2>

                                <p className="text-muted mb-0">

                                    Current financial year revenue

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Admin Quick Actions
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="primary"
                        >

                            <i className="bi bi-people-fill me-2"></i>

                            Manage Customers

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="success"
                        >

                            <i className="bi bi-person-workspace me-2"></i>

                            Manage Employees

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="warning"
                        >

                            <i className="bi bi-bank2 me-2"></i>

                            Approve Accounts

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="danger"
                        >

                            <i className="bi bi-bar-chart-fill me-2"></i>

                            View Reports

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Analytics Charts
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Monthly Transactions

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ResponsiveContainer
                                    width="100%"
                                    height={320}
                                >

                                    <LineChart
                                        data={transactionChart}
                                    >

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                        />

                                        <XAxis dataKey="month" />

                                        <YAxis />

                                        <Tooltip />

                                        <Legend />

                                        <Line
                                            type="monotone"
                                            dataKey="transactions"
                                            stroke="#0d6efd"
                                            strokeWidth={3}
                                        />

                                    </LineChart>

                                </ResponsiveContainer>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Deposit Growth

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ResponsiveContainer
                                    width="100%"
                                    height={320}
                                >

                                    <BarChart
                                        data={depositChart}
                                    >

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                        />

                                        <XAxis dataKey="month" />

                                        <YAxis />

                                        <Tooltip />

                                        <Bar
                                            dataKey="amount"
                                            fill="#198754"
                                        />

                                    </BarChart>

                                </ResponsiveContainer>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Recent Activities
                ========================================== */}

                <Row>

                    <Col lg={8} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-dark text-white">

                                <h5 className="mb-0">

                                    Recent Banking Activities

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <div className="d-flex justify-content-between border-bottom py-3">

                                    <div>

                                        <strong>

                                            New Customer Registered

                                        </strong>

                                        <br/>

                                        <small className="text-muted">

                                            Amit Sharma

                                        </small>

                                    </div>

                                    <Badge bg="success">

                                        Completed

                                    </Badge>

                                </div>

                                <div className="d-flex justify-content-between border-bottom py-3">

                                    <div>

                                        <strong>

                                            Loan Approved

                                        </strong>

                                        <br/>

                                        <small className="text-muted">

                                            Home Loan

                                        </small>

                                    </div>

                                    <Badge bg="primary">

                                        Approved

                                    </Badge>

                                </div>

                                <div className="d-flex justify-content-between border-bottom py-3">

                                    <div>

                                        <strong>

                                            New Account Opened

                                        </strong>

                                        <br/>

                                        <small className="text-muted">

                                            Savings Account

                                        </small>

                                    </div>

                                    <Badge bg="info">

                                        Active

                                    </Badge>

                                </div>

                                <div className="d-flex justify-content-between py-3">

                                    <div>

                                        <strong>

                                            KYC Verified

                                        </strong>

                                        <br/>

                                        <small className="text-muted">

                                            Customer Documents Verified

                                        </small>

                                    </div>

                                    <Badge bg="warning">

                                        Verified

                                    </Badge>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-danger text-white">

                                <h5 className="mb-0">

                                    Pending Approvals

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <div className="mb-4">

                                    <small className="text-muted">

                                        Pending KYC

                                    </small>

                                    <h4>

                                        {dashboard.pendingKyc}

                                    </h4>

                                </div>

                                <div className="mb-4">

                                    <small className="text-muted">

                                        Pending Loans

                                    </small>

                                    <h4>

                                        {dashboard.pendingLoans}

                                    </h4>

                                </div>

                                <div>

                                    <small className="text-muted">

                                        Pending Accounts

                                    </small>

                                    <h4>

                                        43

                                    </h4>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Branch Performance & System
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-info text-white">

                                <h5 className="mb-0">

                                    Top Performing Branches

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <table className="table">

                                    <thead>

                                        <tr>

                                            <th>Branch</th>

                                            <th>Customers</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr>

                                            <td>Pune</td>

                                            <td>4,256</td>

                                        </tr>

                                        <tr>

                                            <td>Mumbai</td>

                                            <td>3,985</td>

                                        </tr>

                                        <tr>

                                            <td>Baramati</td>

                                            <td>2,741</td>

                                        </tr>

                                        <tr>

                                            <td>Nashik</td>

                                            <td>2,354</td>

                                        </tr>

                                    </tbody>

                                </table>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    System Monitoring

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <p>

                                    <strong>Database</strong>

                                    <Badge
                                        bg="success"
                                        className="ms-2"
                                    >

                                        Online

                                    </Badge>

                                </p>

                                <p>

                                    <strong>API Server</strong>

                                    <Badge
                                        bg="success"
                                        className="ms-2"
                                    >

                                        Running

                                    </Badge>

                                </p>

                                <p>

                                    <strong>Authentication</strong>

                                    <Badge
                                        bg="success"
                                        className="ms-2"
                                    >

                                        Secure

                                    </Badge>

                                </p>

                                <p>

                                    <strong>Backup</strong>

                                    <Badge
                                        bg="primary"
                                        className="ms-2"
                                    >

                                        Completed

                                    </Badge>

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Footer
                ========================================== */}

                <Row>

                    <Col>

                        <Card className="border-0 shadow rounded-4">

                            <Card.Body className="text-center">

                                <h5 className="fw-bold">

                                    Banking Executive Dashboard

                                </h5>

                                <p className="text-muted mb-4">

                                    Monitor every banking operation including
                                    customers, employees, accounts,
                                    transactions, loans, analytics,
                                    approvals and overall system health
                                    through one centralized dashboard.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-bank2 text-primary me-2"></i>

                                        Central Monitoring

                                    </span>

                                    <span>

                                        <i className="bi bi-bar-chart-fill text-success me-2"></i>

                                        Analytics

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        Secure Banking

                                    </span>

                                    <span>

                                        <i className="bi bi-cpu-fill text-warning me-2"></i>

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

export default Dashboard;