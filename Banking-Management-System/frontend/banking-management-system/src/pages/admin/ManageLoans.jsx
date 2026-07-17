import { useEffect, useMemo, useState } from "react";
import {
    Alert,
    Badge,
    Button,
    Card,
    Col,
    Container,
    Form,
    InputGroup,
    Row,
    Spinner
} from "react-bootstrap";

import AdminLayout from "../../components/layout/AdminLayout";
import { formatCurrency } from "../../utils/currencyFormatter";

// Future
// import adminService from "../../services/adminService";

const ManageLoans = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("ALL");

    /* ==========================================
            Loan Data
    ========================================== */

    const [loans, setLoans] = useState([]);

    useEffect(() => {

        const loadLoans = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await adminService.getAllLoans();

                setLoans(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setLoans([

                    {

                        id: 1,

                        loanId: "LN100001",

                        customerId: "CUS10045",

                        customerName: "Amit Sharma",

                        loanType: "Home Loan",

                        amount: 2500000,

                        outstanding: 2285000,

                        emi: 24560,

                        tenure: "20 Years",

                        branch: "Baramati",

                        status: "ACTIVE",

                        risk: "LOW"

                    },

                    {

                        id: 2,

                        loanId: "LN100002",

                        customerId: "CUS10046",

                        customerName: "Sneha Patil",

                        loanType: "Car Loan",

                        amount: 850000,

                        outstanding: 415000,

                        emi: 18400,

                        tenure: "5 Years",

                        branch: "Pune",

                        status: "PENDING",

                        risk: "MEDIUM"

                    },

                    {

                        id: 3,

                        loanId: "LN100003",

                        customerId: "CUS10047",

                        customerName: "Rahul Jadhav",

                        loanType: "Business Loan",

                        amount: 5000000,

                        outstanding: 4815000,

                        emi: 68500,

                        tenure: "15 Years",

                        branch: "Mumbai",

                        status: "NPA",

                        risk: "HIGH"

                    },

                    {

                        id: 4,

                        loanId: "LN100004",

                        customerId: "CUS10048",

                        customerName: "Priya Kulkarni",

                        loanType: "Education Loan",

                        amount: 650000,

                        outstanding: 512000,

                        emi: 9200,

                        tenure: "8 Years",

                        branch: "Nashik",

                        status: "ACTIVE",

                        risk: "LOW"

                    }

                ]);

            }

            catch {

                setError(
                    "Unable to load loan records."
                );

            }

            finally {

                setLoading(false);

            }

        };

        loadLoans();

    }, []);

    /* ==========================================
            Search
    ========================================== */

    const filteredLoans = useMemo(() => {

        return loans.filter(loan => {

            const matchesSearch =

                loan.customerName
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                loan.loanId
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                loan.customerId
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =

                statusFilter === "ALL"

                ||

                loan.status === statusFilter;

            return matchesSearch &&
                matchesStatus;

        });

    }, [
        loans,
        search,
        statusFilter
    ]);

    const getStatusBadge = (status) => {

        switch (status) {

            case "ACTIVE":
                return "success";

            case "PENDING":
                return "warning";

            case "CLOSED":
                return "secondary";

            case "NPA":
                return "danger";

            default:
                return "primary";

        }

    };

    const getRiskBadge = (risk) => {

        switch (risk) {

            case "LOW":
                return "success";

            case "MEDIUM":
                return "warning";

            case "HIGH":
                return "danger";

            default:
                return "secondary";

        }

    };

    if (loading) {

        return (

            

                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">

                        Loading Loan Records...

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

                            Loan Management

                        </h2>

                        <p className="text-muted">

                            Monitor loan approvals, repayments,
                            EMI schedules, outstanding balances,
                            credit risk and NPA accounts.

                        </p>

                    </Col>

                </Row>

                {/* ==========================================
                        Search & Filter
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <InputGroup>

                            <InputGroup.Text>

                                <i className="bi bi-search"></i>

                            </InputGroup.Text>

                            <Form.Control
                                placeholder="Search Loan..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </InputGroup>

                    </Col>

                    <Col lg={4}>

                        <Form.Select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(
                                    e.target.value
                                )
                            }
                        >

                            <option value="ALL">

                                All Status

                            </option>

                            <option value="ACTIVE">

                                Active

                            </option>

                            <option value="PENDING">

                                Pending

                            </option>

                            <option value="NPA">

                                NPA

                            </option>

                            <option value="CLOSED">

                                Closed

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Loan Management Table
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Loan Directory

                                </h5>

                                <small>

                                    Total Loans :
                                    {" "}
                                    {filteredLoans.length}

                                </small>

                            </div>

                            <Button
                                variant="light"
                                size="sm"
                            >

                                <i className="bi bi-arrow-clockwise me-2"></i>

                                Refresh

                            </Button>

                        </div>

                    </Card.Header>

                    <Card.Body className="p-0">

                        {

                            filteredLoans.length === 0 ?

                            (

                                <div className="text-center py-5">

                                    <i
                                        className="bi bi-cash-stack"
                                        style={{
                                            fontSize: "4rem",
                                            color: "#adb5bd"
                                        }}
                                    ></i>

                                    <h4 className="mt-3">

                                        No Loan Records Found

                                    </h4>

                                    <p className="text-muted">

                                        No loan records match the selected filters.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-light">

                                            <tr>

                                                <th>Loan ID</th>

                                                <th>Customer</th>

                                                <th>Loan Type</th>

                                                <th>Loan Amount</th>

                                                <th>Outstanding</th>

                                                <th>EMI</th>

                                                <th>Risk</th>

                                                <th>Status</th>

                                                <th className="text-center">

                                                    Actions

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {

                                                filteredLoans.map(loan => (

                                                    <tr key={loan.id}>

                                                        <td>

                                                            <strong>

                                                                {loan.loanId}

                                                            </strong>

                                                            <br />

                                                            <small className="text-muted">

                                                                {loan.tenure}

                                                            </small>

                                                        </td>

                                                        <td>

                                                            <strong>

                                                                {loan.customerName}

                                                            </strong>

                                                            <br />

                                                            <small className="text-muted">

                                                                {loan.customerId}

                                                            </small>

                                                        </td>

                                                        <td>

                                                            <Badge bg="primary">

                                                                {loan.loanType}

                                                            </Badge>

                                                            <br />

                                                            <small className="text-muted">

                                                                {loan.branch}

                                                            </small>

                                                        </td>

                                                        <td>

                                                            <strong>

                                                                {formatCurrency(
                                                                    loan.amount
                                                                )}

                                                            </strong>

                                                        </td>

                                                        <td>

                                                            {formatCurrency(
                                                                loan.outstanding
                                                            )}

                                                        </td>

                                                        <td>

                                                            {formatCurrency(
                                                                loan.emi
                                                            )}

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getRiskBadge(
                                                                        loan.risk
                                                                    )
                                                                }
                                                            >

                                                                {loan.risk}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getStatusBadge(
                                                                        loan.status
                                                                    )
                                                                }
                                                            >

                                                                {loan.status}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <div className="d-flex flex-wrap gap-2 justify-content-center">

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-primary"
                                                                >

                                                                    <i className="bi bi-eye-fill me-1"></i>

                                                                    View

                                                                </Button>

                                                                {

                                                                    loan.status === "PENDING" &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-success"
                                                                    >

                                                                        <i className="bi bi-check-circle-fill me-1"></i>

                                                                        Approve

                                                                    </Button>

                                                                }

                                                                {

                                                                    loan.status === "PENDING" &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-danger"
                                                                    >

                                                                        <i className="bi bi-x-circle-fill me-1"></i>

                                                                        Reject

                                                                    </Button>

                                                                }

                                                                {

                                                                    loan.status === "ACTIVE" &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-warning"
                                                                    >

                                                                        <i className="bi bi-exclamation-triangle-fill me-1"></i>

                                                                        Mark NPA

                                                                    </Button>

                                                                }

                                                                {

                                                                    loan.status === "ACTIVE" &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-secondary"
                                                                    >

                                                                        <i className="bi bi-x-octagon-fill me-1"></i>

                                                                        Close

                                                                    </Button>

                                                                }

                                                            </div>

                                                        </td>

                                                    </tr>

                                                ))

                                            }

                                        </tbody>

                                    </table>

                                </div>

                            )

                        }

                    </Card.Body>

                </Card>

                {/* ==========================================
                        Quick Admin Actions
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="success"
                        >

                            <i className="bi bi-check2-circle me-2"></i>

                            Approve Loans

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="warning"
                        >

                            <i className="bi bi-exclamation-triangle-fill me-2"></i>

                            Manage NPA

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="primary"
                        >

                            <i className="bi bi-cash-coin me-2"></i>

                            EMI Monitoring

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="danger"
                        >

                            <i className="bi bi-x-octagon-fill me-2"></i>

                            Close Loans

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Loan Statistics Dashboard
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-cash-stack text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {loans.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Loans

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-check-circle-fill text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        loans.filter(
                                            loan =>
                                                loan.status === "ACTIVE"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Active Loans

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-exclamation-triangle-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        loans.filter(
                                            loan =>
                                                loan.status === "NPA"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    NPA Accounts

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

                                    {

                                        formatCurrency(

                                            loans.reduce(

                                                (sum, loan) =>

                                                    sum +
                                                    loan.outstanding,

                                                0

                                            )

                                        )

                                    }

                                </h4>

                                <p className="text-muted mb-0">

                                    Outstanding Portfolio

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Loan Administration Guidelines
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Loan Administration Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify all loan documents before approval.

                                    </li>

                                    <li className="mb-3">

                                        Monitor EMI payments regularly.

                                    </li>

                                    <li className="mb-3">

                                        Flag overdue accounts for recovery review.

                                    </li>

                                    <li className="mb-3">

                                        Mark loans as NPA only after policy verification.

                                    </li>

                                    <li>

                                        Follow RBI lending and recovery guidelines.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Loan Administrator Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Customer KYC verified"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Income documents verified"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Credit score evaluated"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Collateral verified"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Administrator Remarks

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter remarks..."
                                    />

                                </Form.Group>

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

                                    Loan Administration Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Monitor loan portfolios, approve loan
                                    applications, track repayments,
                                    manage NPAs and ensure every lending
                                    operation complies with RBI guidelines
                                    and internal banking policies.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-cash-stack text-primary me-2"></i>

                                        Loan Portfolio

                                    </span>

                                    <span>

                                        <i className="bi bi-credit-card-2-front-fill text-success me-2"></i>

                                        EMI Monitoring

                                    </span>

                                    <span>

                                        <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>

                                        NPA Management

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

export default ManageLoans;