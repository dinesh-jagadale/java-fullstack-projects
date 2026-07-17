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
    Spinner,
} from "react-bootstrap";

import EmployeeLayout from "../../components/layout/EmployeeLayout";
import { formatCurrency } from "../../utils/currencyFormatter";

// Future
// import employeeService from "../../services/employeeService";

const LoanApproval = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("PENDING");

    /* ==========================================
            Loan Requests
    ========================================== */

    const [loanRequests, setLoanRequests] = useState([]);

    useEffect(() => {

        const loadLoanRequests = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await employeeService.getPendingLoans();

                setLoanRequests(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setLoanRequests([

                    {
                        id: 1,
                        applicationId: "LN-100245",
                        customerId: "CUS10045",
                        customerName: "Amit Sharma",
                        loanType: "Home Loan",
                        amount: 2500000,
                        tenure: "20 Years",
                        monthlyIncome: 85000,
                        creditScore: 792,
                        risk: "LOW",
                        submittedDate: "10 Jul 2026",
                        status: "PENDING",
                    },

                    {
                        id: 2,
                        applicationId: "LN-100246",
                        customerId: "CUS10046",
                        customerName: "Sneha Patil",
                        loanType: "Car Loan",
                        amount: 850000,
                        tenure: "5 Years",
                        monthlyIncome: 60000,
                        creditScore: 731,
                        risk: "MEDIUM",
                        submittedDate: "11 Jul 2026",
                        status: "PENDING",
                    },

                    {
                        id: 3,
                        applicationId: "LN-100247",
                        customerId: "CUS10047",
                        customerName: "Rahul Jadhav",
                        loanType: "Education Loan",
                        amount: 450000,
                        tenure: "7 Years",
                        monthlyIncome: 45000,
                        creditScore: 812,
                        risk: "LOW",
                        submittedDate: "09 Jul 2026",
                        status: "APPROVED",
                    },

                ]);

            }
            catch {

                setError(
                    "Unable to load loan applications."
                );

            }
            finally {

                setLoading(false);

            }

        };

        loadLoanRequests();

    }, []);

    /* ==========================================
            Search
    ========================================== */

    const filteredRequests = useMemo(() => {

        return loanRequests.filter(request => {

            const matchesSearch =

                request.customerName
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                request.customerId
                    .toLowerCase()
                    .includes(search.toLowerCase())

                ||

                request.applicationId
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =

                statusFilter === "ALL"

                ||

                request.status === statusFilter;

            return (
                matchesSearch &&
                matchesStatus
            );

        });

    }, [
        loanRequests,
        search,
        statusFilter,
    ]);

    const getStatusBadge = (status) => {

        switch (status) {

            case "APPROVED":
                return "success";

            case "REJECTED":
                return "danger";

            case "PENDING":
                return "warning";

            default:
                return "secondary";

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

                        Loading Loan Applications...

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

                            Loan Approval

                        </h2>

                        <p className="text-muted">

                            Review customer loan applications before forwarding
                            them for final approval.

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
                                placeholder="Search Loan Application..."
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
                                setStatusFilter(e.target.value)
                            }
                        >

                            <option value="ALL">

                                All Status

                            </option>

                            <option value="PENDING">

                                Pending

                            </option>

                            <option value="APPROVED">

                                Approved

                            </option>

                            <option value="REJECTED">

                                Rejected

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Loan Approval Queue
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Pending Loan Applications

                                </h5>

                                <small>

                                    Total Applications :
                                    {" "}
                                    {filteredRequests.length}

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

                            filteredRequests.length === 0 ?

                            (

                                <div className="text-center py-5">

                                    <i
                                        className="bi bi-cash-stack"
                                        style={{
                                            fontSize: "4rem",
                                            color: "#adb5bd",
                                        }}
                                    ></i>

                                    <h4 className="mt-4">

                                        No Loan Applications

                                    </h4>

                                    <p className="text-muted">

                                        No loan applications match the selected filters.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-light">

                                            <tr>

                                                <th>Application</th>

                                                <th>Customer</th>

                                                <th>Loan Type</th>

                                                <th>Amount</th>

                                                <th>Income</th>

                                                <th>Credit Score</th>

                                                <th>Risk</th>

                                                <th>Status</th>

                                                <th className="text-center">

                                                    Actions

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {

                                                filteredRequests.map(request => (

                                                    <tr key={request.id}>

                                                        <td>

                                                            <strong>

                                                                {request.applicationId}

                                                            </strong>

                                                            <br />

                                                            <small className="text-muted">

                                                                {request.submittedDate}

                                                            </small>

                                                        </td>

                                                        <td>

                                                            <div>

                                                                <strong>

                                                                    {request.customerName}

                                                                </strong>

                                                                <br />

                                                                <small className="text-muted">

                                                                    {request.customerId}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            <div>

                                                                <strong>

                                                                    {request.loanType}

                                                                </strong>

                                                                <br />

                                                                <small className="text-muted">

                                                                    {request.tenure}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            <strong>

                                                                {formatCurrency(
                                                                    request.amount
                                                                )}

                                                            </strong>

                                                        </td>

                                                        <td>

                                                            {formatCurrency(
                                                                request.monthlyIncome
                                                            )}

                                                            <br />

                                                            <small className="text-muted">

                                                                Monthly

                                                            </small>

                                                        </td>

                                                        <td>

                                                            <Badge bg="info">

                                                                {request.creditScore}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getRiskBadge(
                                                                        request.risk
                                                                    )
                                                                }
                                                            >

                                                                {request.risk}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getStatusBadge(
                                                                        request.status
                                                                    )
                                                                }
                                                            >

                                                                {request.status}

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

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-success"
                                                                    disabled={
                                                                        request.status !== "PENDING"
                                                                    }
                                                                >

                                                                    <i className="bi bi-check-circle-fill me-1"></i>

                                                                    Approve

                                                                </Button>

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-danger"
                                                                    disabled={
                                                                        request.status !== "PENDING"
                                                                    }
                                                                >

                                                                    <i className="bi bi-x-circle-fill me-1"></i>

                                                                    Reject

                                                                </Button>

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-warning"
                                                                    disabled={
                                                                        request.status !== "PENDING"
                                                                    }
                                                                >

                                                                    <i className="bi bi-send-fill me-1"></i>

                                                                    Forward

                                                                </Button>

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
                        Quick Loan Actions
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="success"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-check2-all me-2"></i>

                            Approve Selected

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="danger"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-x-octagon me-2"></i>

                            Reject Selected

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="warning"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-send-fill me-2"></i>

                            Forward to Admin

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="primary"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-file-earmark-text me-2"></i>

                            View Documents

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Loan Summary Dashboard
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

                                    {loanRequests.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Applications

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-hourglass-split text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        loanRequests.filter(
                                            loan => loan.status === "PENDING"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Pending

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
                                        loanRequests.filter(
                                            loan => loan.status === "APPROVED"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Approved

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-graph-up-arrow text-info"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    94%

                                </h3>

                                <p className="text-muted mb-0">

                                    Approval Rate

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Risk Analysis & Checklist
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Loan Approval Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify customer KYC before loan approval.

                                    </li>

                                    <li className="mb-3">

                                        Validate income documents and salary slips.

                                    </li>

                                    <li className="mb-3">

                                        Check CIBIL/Credit Score before approval.

                                    </li>

                                    <li className="mb-3">

                                        Review repayment capacity and liabilities.

                                    </li>

                                    <li>

                                        Forward eligible applications to Admin for final approval.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Employee Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="KYC Verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Income Verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Credit Score Checked"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Risk Assessment Completed"
                                />

                                <Form.Check
                                    className="mb-3"
                                    label="Collateral Verified"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Loan Officer Remarks

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter loan verification remarks..."
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

                                    Loan Processing Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Review loan applications carefully using
                                    customer KYC, income verification, credit
                                    history, repayment capacity and internal
                                    banking policies before forwarding for
                                    final approval.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-cash-stack text-success me-2"></i>

                                        Loan Assessment

                                    </span>

                                    <span>

                                        <i className="bi bi-graph-up-arrow text-primary me-2"></i>

                                        Credit Analysis

                                    </span>

                                    <span>

                                        <i className="bi bi-file-earmark-check-fill text-warning me-2"></i>

                                        Income Verification

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        RBI Compliant

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default LoanApproval;