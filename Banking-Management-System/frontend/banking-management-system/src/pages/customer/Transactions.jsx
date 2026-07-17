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
    Table,
} from "react-bootstrap";

import CustomerLayout from "../../components/layout/CustomerLayout";
import { formatCurrency } from "../../utils/currencyFormatter";
import { formatDate } from "../../utils/dateUtils";

// Future
// import transactionService from "../../services/transactionService";

const Transactions = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [typeFilter, setTypeFilter] = useState("ALL");

    const [statusFilter, setStatusFilter] = useState("ALL");

    /* ==========================================
            Transactions
    ========================================== */

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        const loadTransactions = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await transactionService.getTransactions();

                setTransactions(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setTransactions([

                    {
                        id: 1,
                        referenceNo: "TXN983421",
                        type: "DEPOSIT",
                        description: "Salary Credited",
                        amount: 55000,
                        status: "SUCCESS",
                        transactionDate: "2026-07-05",
                    },

                    {
                        id: 2,
                        referenceNo: "TXN983422",
                        type: "TRANSFER",
                        description: "Rahul Sharma",
                        amount: 3500,
                        status: "SUCCESS",
                        transactionDate: "2026-07-07",
                    },

                    {
                        id: 3,
                        referenceNo: "TXN983423",
                        type: "WITHDRAW",
                        description: "ATM Withdrawal",
                        amount: 5000,
                        status: "SUCCESS",
                        transactionDate: "2026-07-09",
                    },

                    {
                        id: 4,
                        referenceNo: "TXN983424",
                        type: "UPI",
                        description: "Amazon Payment",
                        amount: 2499,
                        status: "SUCCESS",
                        transactionDate: "2026-07-10",
                    },

                    {
                        id: 5,
                        referenceNo: "TXN983425",
                        type: "TRANSFER",
                        description: "Rent Payment",
                        amount: 15000,
                        status: "PENDING",
                        transactionDate: "2026-07-11",
                    },

                ]);

            }
            catch (err) {

                setError("Unable to load transactions.");

            }
            finally {

                setLoading(false);

            }

        };

        loadTransactions();

    }, []);

    /* ==========================================
            Search & Filter
    ========================================== */

    const filteredTransactions = useMemo(() => {

        return transactions.filter((transaction) => {

            const matchesSearch =

                transaction.referenceNo
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                transaction.description
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesType =
                typeFilter === "ALL" ||
                transaction.type === typeFilter;

            const matchesStatus =
                statusFilter === "ALL" ||
                transaction.status === statusFilter;

            return (
                matchesSearch &&
                matchesType &&
                matchesStatus
            );

        });

    }, [
        transactions,
        search,
        typeFilter,
        statusFilter,
    ]);

    const getTypeBadge = (type) => {

        switch (type) {

            case "DEPOSIT":
                return "success";

            case "WITHDRAW":
                return "danger";

            case "TRANSFER":
                return "primary";

            case "UPI":
                return "info";

            default:
                return "secondary";

        }

    };

    const getStatusBadge = (status) => {

        switch (status) {

            case "SUCCESS":
                return "success";

            case "FAILED":
                return "danger";

            case "PENDING":
                return "warning";

            default:
                return "secondary";

        }

    };

    if (loading) {

        return (

           
                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">
                        Loading Transactions...
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

                    <Col>

                        <h2 className="fw-bold">

                            Transaction History

                        </h2>

                        <p className="text-muted">

                            View all your banking transactions.

                        </p>

                    </Col>

                </Row>

                {/* Search & Filters */}

                <Row className="mb-4">

                    <Col lg={5}>

                        <InputGroup>

                            <InputGroup.Text>

                                <i className="bi bi-search"></i>

                            </InputGroup.Text>

                            <Form.Control
                                placeholder="Search Transaction"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </InputGroup>

                    </Col>

                    <Col lg={3}>

                        <Form.Select
                            value={typeFilter}
                            onChange={(e) =>
                                setTypeFilter(e.target.value)
                            }
                        >

                            <option value="ALL">
                                All Types
                            </option>

                            <option value="DEPOSIT">
                                Deposit
                            </option>

                            <option value="WITHDRAW">
                                Withdraw
                            </option>

                            <option value="TRANSFER">
                                Transfer
                            </option>

                            <option value="UPI">
                                UPI
                            </option>

                        </Form.Select>

                    </Col>

                    <Col lg={2}>

                        <Form.Select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                        >

                            <option value="ALL">
                                All Status
                            </option>

                            <option value="SUCCESS">
                                Success
                            </option>

                            <option value="PENDING">
                                Pending
                            </option>

                            <option value="FAILED">
                                Failed
                            </option>

                        </Form.Select>

                    </Col>

                    <Col lg={2}>

                        <Button
                            variant="outline-primary"
                            className="w-100"
                        >

                            <i className="bi bi-download me-2"></i>

                            Export

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Transaction History Table
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Recent Transactions

                                </h5>

                                <small>

                                    Showing {filteredTransactions.length} transaction(s)

                                </small>

                            </div>

                            <i className="bi bi-receipt fs-3"></i>

                        </div>

                    </Card.Header>

                    <Card.Body className="p-0">

                        {filteredTransactions.length === 0 ? (

                            <div className="text-center py-5">

                                <i
                                    className="bi bi-folder-x"
                                    style={{
                                        fontSize: "4rem",
                                        color: "#adb5bd",
                                    }}
                                ></i>

                                <h4 className="mt-4">

                                    No Transactions Found

                                </h4>

                                <p className="text-muted">

                                    Try changing the search keyword or filters.

                                </p>

                            </div>

                        ) : (

                            <Table
                                hover
                                responsive
                                className="align-middle mb-0"
                            >

                                <thead className="table-light">

                                    <tr>

                                        <th>Reference No.</th>

                                        <th>Date</th>

                                        <th>Type</th>

                                        <th>Description</th>

                                        <th className="text-end">

                                            Amount

                                        </th>

                                        <th className="text-center">

                                            Status

                                        </th>

                                        <th className="text-center">

                                            Action

                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {filteredTransactions.map((transaction) => (

                                        <tr
                                            key={transaction.id}
                                        >

                                            <td>

                                                <strong>

                                                    {transaction.referenceNo}

                                                </strong>

                                            </td>

                                            <td>

                                                {formatDate(
                                                    transaction.transactionDate
                                                )}

                                            </td>

                                            <td>

                                                <Badge
                                                    bg={getTypeBadge(
                                                        transaction.type
                                                    )}
                                                >

                                                    {transaction.type}

                                                </Badge>

                                            </td>

                                            <td>

                                                {transaction.description}

                                            </td>

                                            <td
                                                className={`text-end fw-bold ${
                                                    transaction.type === "DEPOSIT"
                                                        ? "text-success"
                                                        : "text-danger"
                                                }`}
                                            >

                                                {transaction.type === "DEPOSIT"
                                                    ? "+"
                                                    : "-"}

                                                {formatCurrency(
                                                    transaction.amount
                                                )}

                                            </td>

                                            <td className="text-center">

                                                <Badge
                                                    bg={getStatusBadge(
                                                        transaction.status
                                                    )}
                                                >

                                                    {transaction.status}

                                                </Badge>

                                            </td>

                                            <td className="text-center">

                                                <Button
                                                    variant="outline-primary"
                                                    size="sm"
                                                >

                                                    <i className="bi bi-eye me-2"></i>

                                                    View

                                                </Button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </Table>

                        )}

                    </Card.Body>

                </Card>

                                {/* ==========================================
                        Transaction Summary
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-receipt-cutoff text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">
                                    {transactions.length}
                                </h3>

                                <p className="text-muted mb-0">
                                    Total Transactions
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
                                        transactions.filter(
                                            t => t.status === "SUCCESS"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Successful

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-arrow-left-right text-info"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        transactions.filter(
                                            t => t.type === "TRANSFER"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Transfers

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-wallet2 text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    {formatCurrency(

                                        transactions.reduce(

                                            (total, transaction) =>
                                                total + transaction.amount,

                                            0

                                        )

                                    )}

                                </h4>

                                <p className="text-muted mb-0">

                                    Total Amount

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Banking Information
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Transaction Security

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Every transaction is encrypted using
                                        secure banking protocols.

                                    </li>

                                    <li className="mb-3">

                                        OTP verification is required for
                                        high-value transactions.

                                    </li>

                                    <li className="mb-3">

                                        Transaction alerts are sent instantly
                                        through Email and SMS.

                                    </li>

                                    <li>

                                        Report unauthorized activity
                                        immediately.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Statement Services

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <p className="text-muted">

                                    Download your account statements in PDF
                                    or Excel format for any selected period.

                                </p>

                                <div className="d-grid gap-2">

                                    <Button variant="outline-primary">

                                        <i className="bi bi-file-earmark-pdf me-2"></i>

                                        Download PDF Statement

                                    </Button>

                                    <Button variant="outline-success">

                                        <i className="bi bi-file-earmark-excel me-2"></i>

                                        Download Excel Statement

                                    </Button>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default Transactions;