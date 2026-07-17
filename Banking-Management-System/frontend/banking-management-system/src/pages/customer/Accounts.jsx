import { useEffect, useMemo, useState } from "react";
import {
    Alert,
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

const Accounts = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("ALL");

    /* ==========================================
            Accounts
    ========================================== */

    const [accounts, setAccounts] = useState([
        {
            id: 1,
            accountNumber: "XXXX XXXX 4589",
            accountType: "Savings",
            branch: "Baramati Branch",
            ifsc: "SBIN0004589",
            balance: 245860.55,
            status: "ACTIVE",
            openedOn: "2025-01-18",
        },
        {
            id: 2,
            accountNumber: "XXXX XXXX 8215",
            accountType: "Current",
            branch: "Pune Branch",
            ifsc: "SBIN0008215",
            balance: 80550.00,
            status: "ACTIVE",
            openedOn: "2024-09-12",
        },
        {
            id: 3,
            accountNumber: "XXXX XXXX 1172",
            accountType: "Salary",
            branch: "Mumbai Branch",
            ifsc: "SBIN0001172",
            balance: 5250.30,
            status: "INACTIVE",
            openedOn: "2023-07-20",
        },
    ]);

    /* ==========================================
            Future Backend API
    ========================================== */

    useEffect(() => {

        const loadAccounts = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await accountService.getCustomerAccounts();

                setAccounts(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 700)
                );

            } catch (err) {

                setError("Unable to load accounts.");

            } finally {

                setLoading(false);

            }

        };

        loadAccounts();

    }, []);

    /* ==========================================
            Search + Filter
    ========================================== */

    const filteredAccounts = useMemo(() => {

        return accounts.filter(account => {

            const matchesSearch =
                account.accountNumber
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                account.branch
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                account.accountType
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesFilter =
                filter === "ALL" ||
                account.status === filter;

            return matchesSearch && matchesFilter;

        });

    }, [accounts, search, filter]);

    /* ==========================================
            Loading Screen
    ========================================== */

    if (loading) {

        return (

            

                <Container className="py-5 text-center">

                    <Spinner
                        animation="border"
                        variant="primary"
                    />

                    <h5 className="mt-3">
                        Loading Accounts...
                    </h5>

                </Container>

            

        );

    }

    /* ==========================================
            Error Screen
    ========================================== */

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

                {/* =====================================
                        Page Header
                ====================================== */}

                <Row className="mb-4">

                    <Col
                        md={8}
                    >

                        <h2 className="fw-bold">

                            My Bank Accounts

                        </h2>

                        <p className="text-muted">

                            View and manage all your bank accounts.

                        </p>

                    </Col>

                    <Col
                        md={4}
                        className="text-md-end"
                    >

                        <Button variant="primary">

                            <i className="bi bi-plus-circle me-2"></i>

                            Open New Account

                        </Button>

                    </Col>

                </Row>

                {/* =====================================
                        Search & Filter
                ====================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <InputGroup>

                            <InputGroup.Text>

                                <i className="bi bi-search"></i>

                            </InputGroup.Text>

                            <Form.Control
                                placeholder="Search Account..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </InputGroup>

                    </Col>

                    <Col lg={4}>

                        <Form.Select
                            value={filter}
                            onChange={(e) =>
                                setFilter(e.target.value)
                            }
                        >

                            <option value="ALL">
                                All Accounts
                            </option>

                            <option value="ACTIVE">
                                Active
                            </option>

                            <option value="INACTIVE">
                                Inactive
                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* =====================================
                        Account Cards
                ====================================== */}

                <Row className="g-4">

                    {filteredAccounts.length === 0 ? (

                        <Col>

                            <Card className="border-0 shadow-sm rounded-4">

                                <Card.Body className="text-center py-5">

                                    <i
                                        className="bi bi-bank2 text-muted"
                                        style={{
                                            fontSize: "4rem",
                                        }}
                                    ></i>

                                    <h4 className="mt-4">
                                        No Accounts Found
                                    </h4>

                                    <p className="text-muted">

                                        No account matches your search or
                                        selected filter.

                                    </p>

                                </Card.Body>

                            </Card>

                        </Col>

                    ) : (

                        filteredAccounts.map((account) => (

                            <Col
                                xl={6}
                                lg={6}
                                md={12}
                                key={account.id}
                            >

                                <Card
                                    className="border-0 shadow-sm rounded-4 h-100"
                                >

                                    {/* Card Header */}

                                    <Card.Header
                                        className="bg-primary text-white border-0 rounded-top-4"
                                    >

                                        <div className="d-flex justify-content-between align-items-center">

                                            <div>

                                                <h5 className="fw-bold mb-1">

                                                    {account.accountType}

                                                    {" "}Account

                                                </h5>

                                                <small>

                                                    {account.accountNumber}

                                                </small>

                                            </div>

                                            <i
                                                className="bi bi-bank2 fs-2"
                                            ></i>

                                        </div>

                                    </Card.Header>

                                    {/* Card Body */}

                                    <Card.Body>

                                        {/* Balance */}

                                        <div
                                            className="bg-light rounded-4 p-4 mb-4"
                                        >

                                            <small className="text-muted">

                                                Available Balance

                                            </small>

                                            <h2 className="fw-bold text-success mt-2">

                                                {formatCurrency(account.balance)}

                                            </h2>

                                        </div>

                                        {/* Details */}

                                        <Row>

                                            <Col xs={6} className="mb-3">

                                                <small className="text-muted d-block">

                                                    Branch

                                                </small>

                                                <strong>

                                                    {account.branch}

                                                </strong>

                                            </Col>

                                            <Col xs={6} className="mb-3">

                                                <small className="text-muted d-block">

                                                    IFSC

                                                </small>

                                                <strong>

                                                    {account.ifsc}

                                                </strong>

                                            </Col>

                                            <Col xs={6}>

                                                <small className="text-muted d-block">

                                                    Opened On

                                                </small>

                                                <strong>

                                                    {account.openedOn}

                                                </strong>

                                            </Col>

                                            <Col xs={6}>

                                                <small className="text-muted d-block">

                                                    Status

                                                </small>

                                                <span
                                                    className={`badge bg-${
                                                        account.status === "ACTIVE"
                                                            ? "success"
                                                            : "secondary"
                                                    }`}
                                                >

                                                    {account.status}

                                                </span>

                                            </Col>

                                        </Row>

                                    </Card.Body>

                                    {/* Footer */}

                                    <Card.Footer
                                        className="bg-white border-0 rounded-bottom-4"
                                    >

                                        <div className="d-flex flex-wrap gap-2">

                                            <Button
                                                variant="primary"
                                                size="sm"
                                            >

                                                <i className="bi bi-eye me-2"></i>

                                                View

                                            </Button>

                                            <Button
                                                variant="success"
                                                size="sm"
                                            >

                                                <i className="bi bi-arrow-left-right me-2"></i>

                                                Transfer

                                            </Button>

                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                            >

                                                <i className="bi bi-file-earmark-pdf me-2"></i>

                                                Statement

                                            </Button>

                                        </div>

                                    </Card.Footer>

                                </Card>

                            </Col>

                        ))

                    )}

                </Row>

                                {/* =====================================
                        Account Summary
                ====================================== */}

                <Row className="mt-5">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-bank2 text-primary"
                                    style={{
                                        fontSize: "2.5rem",
                                    }}
                                ></i>

                                <h3 className="fw-bold mt-3">
                                    {accounts.length}
                                </h3>

                                <p className="text-muted mb-0">
                                    Total Accounts
                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-check-circle-fill text-success"
                                    style={{
                                        fontSize: "2.5rem",
                                    }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        accounts.filter(
                                            account =>
                                                account.status === "ACTIVE"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">
                                    Active Accounts
                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-wallet2 text-warning"
                                    style={{
                                        fontSize: "2.5rem",
                                    }}
                                ></i>

                                <h4 className="fw-bold mt-3">

                                    {formatCurrency(
                                        accounts.reduce(
                                            (total, account) =>
                                                total + account.balance,
                                            0
                                        )
                                    )}

                                </h4>

                                <p className="text-muted mb-0">
                                    Total Balance
                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-arrow-left-right text-info"
                                    style={{
                                        fontSize: "2.5rem",
                                    }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        filteredAccounts.length
                                    }

                                </h3>

                                <p className="text-muted mb-0">
                                    Filter Results
                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* =====================================
                        Information Card
                ====================================== */}

                <Row className="mt-2">

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Body className="text-center py-4">

                                <h5 className="fw-bold mb-3">

                                    Banking Management System

                                </h5>

                                <p className="text-muted mb-4">

                                    Manage all your savings, current and
                                    salary accounts securely from one place.
                                    View balances, download statements,
                                    transfer money and monitor your accounts
                                    anytime.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-shield-lock-fill text-success me-2"></i>

                                        Secure Banking

                                    </span>

                                    <span>

                                        <i className="bi bi-credit-card-2-front text-primary me-2"></i>

                                        Multiple Accounts

                                    </span>

                                    <span>

                                        <i className="bi bi-file-earmark-text text-danger me-2"></i>

                                        e-Statements

                                    </span>

                                    <span>

                                        <i className="bi bi-arrow-repeat text-warning me-2"></i>

                                        Instant Transfers

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default Accounts;