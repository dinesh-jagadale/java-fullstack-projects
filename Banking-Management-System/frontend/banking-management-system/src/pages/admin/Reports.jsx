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
    Table
} from "react-bootstrap";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Cell
} from "recharts";

import AdminLayout from "../../components/layout/AdminLayout";
import { formatCurrency } from "../../utils/currencyFormatter";

// Future
// import adminService from "../../services/adminService";

const Reports = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [reportType, setReportType] =
        useState("MONTHLY");

    const [branch, setBranch] =
        useState("ALL");

    /* ==========================================
            Summary Data
    ========================================== */

    const [summary, setSummary] = useState({

        totalTransactions: 248521,

        totalCustomers: 15426,

        totalLoans: 2648,

        totalAccounts: 18752,

        totalDeposits: 985450000,

        totalWithdrawals: 785240000,

        bankRevenue: 14250000,

        profit: 6845000

    });

    /* ==========================================
            Monthly Report
    ========================================== */

    const [monthlyReport] = useState([

        {
            month: "Jan",
            deposits: 52,
            withdrawals: 41
        },

        {
            month: "Feb",
            deposits: 61,
            withdrawals: 45
        },

        {
            month: "Mar",
            deposits: 73,
            withdrawals: 58
        },

        {
            month: "Apr",
            deposits: 82,
            withdrawals: 64
        },

        {
            month: "May",
            deposits: 94,
            withdrawals: 75
        },

        {
            month: "Jun",
            deposits: 106,
            withdrawals: 86
        }

    ]);

    /* ==========================================
            Loan Distribution
    ========================================== */

    const [loanDistribution] = useState([

        {
            name: "Home",
            value: 42
        },

        {
            name: "Car",
            value: 24
        },

        {
            name: "Business",
            value: 18
        },

        {
            name: "Education",
            value: 16
        }

    ]);

    const COLORS = [

        "#0d6efd",
        "#198754",
        "#ffc107",
        "#dc3545"

    ];

    /* ==========================================
            Branch Reports
    ========================================== */

    const [branchReports] = useState([

        {

            branch: "Pune",

            customers: 4256,

            deposits: 285000000,

            loans: 742

        },

        {

            branch: "Mumbai",

            customers: 3980,

            deposits: 241000000,

            loans: 618

        },

        {

            branch: "Baramati",

            customers: 2741,

            deposits: 145000000,

            loans: 412

        },

        {

            branch: "Nashik",

            customers: 2145,

            deposits: 98000000,

            loans: 306

        }

    ]);

    useEffect(() => {

        const loadReports = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await adminService.getReports();

                setSummary(response.data.summary);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800));

            }

            catch {

                setError(
                    "Unable to load reports."
                );

            }

            finally {

                setLoading(false);

            }

        };

        loadReports();

    }, []);

    if (loading) {

        return (

            

                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">

                        Loading Banking Reports...

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

                            Banking Reports

                        </h2>

                        <p className="text-muted">

                            Generate financial, customer,
                            transaction and branch reports.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Button variant="success">

                            <i className="bi bi-download me-2"></i>

                            Export Report

                        </Button>

                    </Col>

                </Row>

                {/* ==========================================
                        Filters
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={4}>

                        <Form.Select
                            value={reportType}
                            onChange={(e)=>
                                setReportType(
                                    e.target.value
                                )
                            }
                        >

                            <option value="DAILY">

                                Daily Report

                            </option>

                            <option value="MONTHLY">

                                Monthly Report

                            </option>

                            <option value="YEARLY">

                                Yearly Report

                            </option>

                        </Form.Select>

                    </Col>

                    <Col lg={4}>

                        <Form.Select
                            value={branch}
                            onChange={(e)=>
                                setBranch(
                                    e.target.value
                                )
                            }
                        >

                            <option value="ALL">

                                All Branches

                            </option>

                            <option>

                                Pune

                            </option>

                            <option>

                                Mumbai

                            </option>

                            <option>

                                Baramati

                            </option>

                            <option>

                                Nashik

                            </option>

                        </Form.Select>

                    </Col>

                    <Col lg={4}>

                        <Button
                            className="w-100"
                            variant="primary"
                        >

                            Generate Report

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Executive KPI Cards
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Total Customers

                                </small>

                                <h2 className="fw-bold mt-2">

                                    {summary.totalCustomers.toLocaleString()}

                                </h2>

                                <Badge bg="primary">

                                    Customer Base

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Total Accounts

                                </small>

                                <h2 className="fw-bold mt-2">

                                    {summary.totalAccounts.toLocaleString()}

                                </h2>

                                <Badge bg="success">

                                    Active Banking

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Total Transactions

                                </small>

                                <h2 className="fw-bold mt-2">

                                    {summary.totalTransactions.toLocaleString()}

                                </h2>

                                <Badge bg="warning">

                                    Financial Activity

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Total Loans

                                </small>

                                <h2 className="fw-bold mt-2">

                                    {summary.totalLoans.toLocaleString()}

                                </h2>

                                <Badge bg="danger">

                                    Credit Portfolio

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Financial Summary
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-success text-white">

                                Total Deposits

                            </Card.Header>

                            <Card.Body>

                                <h3 className="fw-bold text-success">

                                    {formatCurrency(summary.totalDeposits)}

                                </h3>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-danger text-white">

                                Total Withdrawals

                            </Card.Header>

                            <Card.Body>

                                <h3 className="fw-bold text-danger">

                                    {formatCurrency(summary.totalWithdrawals)}

                                </h3>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-primary text-white">

                                Net Profit

                            </Card.Header>

                            <Card.Body>

                                <h3 className="fw-bold text-primary">

                                    {formatCurrency(summary.profit)}

                                </h3>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Charts
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                Monthly Deposit vs Withdrawal

                            </Card.Header>

                            <Card.Body>

                                <ResponsiveContainer
                                    width="100%"
                                    height={350}
                                >

                                    <BarChart
                                        data={monthlyReport}
                                    >

                                        <CartesianGrid strokeDasharray="3 3"/>

                                        <XAxis dataKey="month"/>

                                        <YAxis/>

                                        <Tooltip/>

                                        <Legend/>

                                        <Bar
                                            dataKey="deposits"
                                            fill="#198754"
                                        />

                                        <Bar
                                            dataKey="withdrawals"
                                            fill="#dc3545"
                                        />

                                    </BarChart>

                                </ResponsiveContainer>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-warning">

                                Loan Distribution

                            </Card.Header>

                            <Card.Body>

                                <ResponsiveContainer
                                    width="100%"
                                    height={350}
                                >

                                    <PieChart>

                                        <Pie
                                            data={loanDistribution}
                                            dataKey="value"
                                            nameKey="name"
                                            outerRadius={110}
                                            label
                                        >

                                            {

                                                loanDistribution.map(
                                                    (entry,index)=>(

                                                        <Cell
                                                            key={index}
                                                            fill={
                                                                COLORS[index]
                                                            }
                                                        />

                                                    )
                                                )

                                            }

                                        </Pie>

                                        <Tooltip/>

                                        <Legend/>

                                    </PieChart>

                                </ResponsiveContainer>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Branch Performance
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-dark text-white">

                        Branch Performance Report

                    </Card.Header>

                    <Card.Body>

                        <Table
                            responsive
                            hover
                            className="align-middle"
                        >

                            <thead>

                                <tr>

                                    <th>Branch</th>

                                    <th>Customers</th>

                                    <th>Total Deposits</th>

                                    <th>Total Loans</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    branchReports.map((branch,index)=>(

                                        <tr key={index}>

                                            <td>

                                                <strong>

                                                    {branch.branch}

                                                </strong>

                                            </td>

                                            <td>

                                                {branch.customers.toLocaleString()}

                                            </td>

                                            <td>

                                                {formatCurrency(
                                                    branch.deposits
                                                )}

                                            </td>

                                            <td>

                                                {branch.loans}

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </Table>

                    </Card.Body>

                </Card>

                                {/* ==========================================
                        Report Summary Dashboard
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-file-earmark-bar-graph-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {reportType}

                                </h3>

                                <p className="text-muted mb-0">

                                    Current Report

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-building text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {branch === "ALL" ? "All" : branch}

                                </h3>

                                <p className="text-muted mb-0">

                                    Selected Branch

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-currency-rupee text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    {formatCurrency(summary.bankRevenue)}

                                </h4>

                                <p className="text-muted mb-0">

                                    Bank Revenue

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-graph-up-arrow text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    +18%

                                </h3>

                                <p className="text-muted mb-0">

                                    Growth Rate

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Export Center & Guidelines
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Export Report

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <div className="d-grid gap-3">

                                    <Button variant="outline-danger">

                                        <i className="bi bi-file-earmark-pdf-fill me-2"></i>

                                        Export PDF

                                    </Button>

                                    <Button variant="outline-success">

                                        <i className="bi bi-file-earmark-excel-fill me-2"></i>

                                        Export Excel

                                    </Button>

                                    <Button variant="outline-primary">

                                        <i className="bi bi-filetype-csv me-2"></i>

                                        Export CSV

                                    </Button>

                                    <Button variant="outline-dark">

                                        <i className="bi bi-printer-fill me-2"></i>

                                        Print Report

                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Reporting Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify report filters before exporting.

                                    </li>

                                    <li className="mb-3">

                                        Ensure confidential customer data is protected.

                                    </li>

                                    <li className="mb-3">

                                        Share reports only with authorized users.

                                    </li>

                                    <li className="mb-3">

                                        Reconcile financial reports before publication.

                                    </li>

                                    <li>

                                        Follow RBI reporting and audit policies.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Administrator Checklist
                ========================================== */}

                <Row>

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-info text-white">

                                <h5 className="mb-0">

                                    Administrator Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Report data verified"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Branch information validated"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Financial calculations confirmed"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Audit compliance completed"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Administrator Notes

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter report remarks..."
                                    />

                                </Form.Group>

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

                                    Banking Reporting Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Generate accurate banking reports,
                                    monitor financial performance,
                                    analyze branch operations and support
                                    executive decision-making with secure,
                                    audit-ready reporting.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-bar-chart-fill text-primary me-2"></i>

                                        Financial Reports

                                    </span>

                                    <span>

                                        <i className="bi bi-building text-success me-2"></i>

                                        Branch Analytics

                                    </span>

                                    <span>

                                        <i className="bi bi-file-earmark-check-fill text-warning me-2"></i>

                                        Audit Ready

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

export default Reports;