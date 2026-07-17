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

import CustomerLayout from "../../components/layout/CustomerLayout";
import { formatCurrency } from "../../utils/currencyFormatter";

// Future
// import loanService from "../../services/loanService";

const Loans = () => {

    /* ==========================================
            Page State
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
                    await loanService.getCustomerLoans();

                setLoans(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setLoans([

                    {
                        id: 1,
                        loanNumber: "LN100245",
                        loanType: "Home Loan",
                        amount: 2500000,
                        emi: 24500,
                        tenure: "20 Years",
                        balance: 1835000,
                        interestRate: "8.45%",
                        status: "ACTIVE",
                    },

                    {
                        id: 2,
                        loanNumber: "LN100512",
                        loanType: "Education Loan",
                        amount: 450000,
                        emi: 8200,
                        tenure: "7 Years",
                        balance: 245000,
                        interestRate: "9.10%",
                        status: "ACTIVE",
                    },

                    {
                        id: 3,
                        loanNumber: "LN100840",
                        loanType: "Car Loan",
                        amount: 850000,
                        emi: 15600,
                        tenure: "5 Years",
                        balance: 0,
                        interestRate: "8.95%",
                        status: "CLOSED",
                    },

                ]);

            }
            catch {

                setError(
                    "Unable to load loan information."
                );

            }
            finally {

                setLoading(false);

            }

        };

        loadLoans();

    }, []);

    /* ==========================================
            Search & Filter
    ========================================== */

    const filteredLoans = useMemo(() => {

        return loans.filter((loan) => {

            const matchesSearch =

                loan.loanNumber
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                loan.loanType
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =

                statusFilter === "ALL" ||

                loan.status === statusFilter;

            return (
                matchesSearch &&
                matchesStatus
            );

        });

    }, [loans, search, statusFilter]);

    const getStatusBadge = (status) => {

        switch (status) {

            case "ACTIVE":
                return "success";

            case "PENDING":
                return "warning";

            case "REJECTED":
                return "danger";

            case "CLOSED":
                return "secondary";

            default:
                return "secondary";

        }

    };

    if (loading) {

        return (

            

                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">

                        Loading Loans...

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

                            My Loans

                        </h2>

                        <p className="text-muted">

                            View your active loans, EMI details and repayment status.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Button variant="primary">

                            <i className="bi bi-bank2 me-2"></i>

                            Apply Loan

                        </Button>

                    </Col>

                </Row>

                {/* Search & Filter */}

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
                                setStatusFilter(e.target.value)
                            }
                        >

                            <option value="ALL">
                                All Loans
                            </option>

                            <option value="ACTIVE">
                                Active
                            </option>

                            <option value="PENDING">
                                Pending
                            </option>

                            <option value="CLOSED">
                                Closed
                            </option>

                            <option value="REJECTED">
                                Rejected
                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Loan Cards
                ========================================== */}

                <Row className="g-4">

                    {filteredLoans.length === 0 ? (

                        <Col>

                            <Card className="border-0 shadow-sm rounded-4">

                                <Card.Body className="text-center py-5">

                                    <i
                                        className="bi bi-bank"
                                        style={{
                                            fontSize: "4rem",
                                            color: "#adb5bd",
                                        }}
                                    ></i>

                                    <h4 className="mt-4">

                                        No Loans Found

                                    </h4>

                                    <p className="text-muted">

                                        No loan matches your search criteria.

                                    </p>

                                </Card.Body>

                            </Card>

                        </Col>

                    ) : (

                        filteredLoans.map((loan) => (

                            <Col
                                xl={6}
                                lg={6}
                                md={12}
                                key={loan.id}
                            >

                                <Card className="border-0 shadow-sm rounded-4 h-100">

                                    {/* Loan Header */}

                                    <Card.Header className="bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <div>

                                                <h5 className="mb-1">

                                                    {loan.loanType}

                                                </h5>

                                                <small>

                                                    {loan.loanNumber}

                                                </small>

                                            </div>

                                            <i className="bi bi-cash-coin fs-2"></i>

                                        </div>

                                    </Card.Header>

                                    {/* Loan Body */}

                                    <Card.Body>

                                        <div
                                            className="bg-light rounded-4 p-4 mb-4"
                                        >

                                            <small className="text-muted">

                                                Outstanding Balance

                                            </small>

                                            <h2 className="fw-bold text-danger mt-2">

                                                {formatCurrency(loan.balance)}

                                            </h2>

                                        </div>

                                        <Row>

                                            <Col xs={6} className="mb-3">

                                                <small className="text-muted d-block">

                                                    Loan Amount

                                                </small>

                                                <strong>

                                                    {formatCurrency(loan.amount)}

                                                </strong>

                                            </Col>

                                            <Col xs={6} className="mb-3">

                                                <small className="text-muted d-block">

                                                    Monthly EMI

                                                </small>

                                                <strong>

                                                    {formatCurrency(loan.emi)}

                                                </strong>

                                            </Col>

                                            <Col xs={6} className="mb-3">

                                                <small className="text-muted d-block">

                                                    Interest Rate

                                                </small>

                                                <strong>

                                                    {loan.interestRate}

                                                </strong>

                                            </Col>

                                            <Col xs={6} className="mb-3">

                                                <small className="text-muted d-block">

                                                    Tenure

                                                </small>

                                                <strong>

                                                    {loan.tenure}

                                                </strong>

                                            </Col>

                                        </Row>

                                        <div className="mt-2">

                                            <small className="text-muted d-block">

                                                Status

                                            </small>

                                            <Badge
                                                bg={getStatusBadge(
                                                    loan.status
                                                )}
                                            >

                                                {loan.status}

                                            </Badge>

                                        </div>

                                    </Card.Body>

                                    {/* Loan Footer */}

                                    <Card.Footer className="bg-white">

                                        <div className="d-flex flex-wrap gap-2">

                                            <Button
                                                variant="primary"
                                                className="flex-fill"
                                            >

                                                <i className="bi bi-eye me-2"></i>

                                                Details

                                            </Button>

                                            <Button
                                                variant="success"
                                                className="flex-fill"
                                                disabled={
                                                    loan.status !== "ACTIVE"
                                                }
                                            >

                                                <i className="bi bi-credit-card me-2"></i>

                                                Pay EMI

                                            </Button>

                                        </div>

                                    </Card.Footer>

                                </Card>

                            </Col>

                        ))

                    )}

                </Row>

                                {/* ==========================================
                        Loan Summary
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-bank2 text-primary"
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
                                            loan => loan.status === "ACTIVE"
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
                                    className="bi bi-currency-rupee text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    {formatCurrency(

                                        loans.reduce(

                                            (sum, loan) =>
                                                sum + loan.balance,

                                            0

                                        )

                                    )}

                                </h4>

                                <p className="text-muted mb-0">

                                    Outstanding Balance

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-search text-info"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {filteredLoans.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Search Results

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        EMI Reminder & Loan Information
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    <i className="bi bi-alarm me-2"></i>

                                    EMI Reminder

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <h5 className="fw-bold">

                                    Next EMI Due

                                </h5>

                                <h2 className="text-danger">

                                    15 July 2026

                                </h2>

                                <p className="text-muted">

                                    Make your EMI payment before the due date
                                    to avoid late payment charges and maintain
                                    a healthy credit history.

                                </p>

                                <Button variant="success">

                                    <i className="bi bi-credit-card me-2"></i>

                                    Pay EMI

                                </Button>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-info-circle-fill me-2"></i>

                                    Loan Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Prepayment is available based on your
                                        loan agreement.

                                    </li>

                                    <li className="mb-3">

                                        EMI schedules can be downloaded after
                                        loan approval.

                                    </li>

                                    <li className="mb-3">

                                        Interest certificates are available
                                        annually for tax purposes.

                                    </li>

                                    <li>

                                        Contact your relationship manager for
                                        restructuring or foreclosure requests.

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

                                    Loan Management Services

                                </h5>

                                <p className="text-muted mb-4">

                                    Track your loans, monitor repayments,
                                    download statements, and manage EMI
                                    schedules through one secure dashboard.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-shield-check text-success me-2"></i>

                                        Secure Processing

                                    </span>

                                    <span>

                                        <i className="bi bi-calendar-check text-primary me-2"></i>

                                        EMI Tracking

                                    </span>

                                    <span>

                                        <i className="bi bi-file-earmark-text text-warning me-2"></i>

                                        Loan Statements

                                    </span>

                                    <span>

                                        <i className="bi bi-graph-up-arrow text-danger me-2"></i>

                                        Credit Monitoring

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default Loans;