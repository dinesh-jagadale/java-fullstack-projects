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
// import cardService from "../../services/cardService";

const Cards = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("ALL");

    /* ==========================================
            Card Data
    ========================================== */

    const [cards, setCards] = useState([]);

    useEffect(() => {

        const loadCards = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await cardService.getCustomerCards();

                setCards(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setCards([

                    {
                        id: 1,
                        cardType: "Debit Card",
                        cardNumber: "**** **** **** 4589",
                        holderName: "Dinesh Jagadale",
                        expiry: "08/30",
                        network: "Visa",
                        dailyLimit: 100000,
                        status: "ACTIVE",
                    },

                    {
                        id: 2,
                        cardType: "Credit Card",
                        cardNumber: "**** **** **** 7821",
                        holderName: "Dinesh Jagadale",
                        expiry: "12/29",
                        network: "MasterCard",
                        dailyLimit: 250000,
                        status: "ACTIVE",
                    },

                    {
                        id: 3,
                        cardType: "Virtual Card",
                        cardNumber: "**** **** **** 1198",
                        holderName: "Dinesh Jagadale",
                        expiry: "05/28",
                        network: "RuPay",
                        dailyLimit: 50000,
                        status: "BLOCKED",
                    },

                ]);

            }
            catch {

                setError(
                    "Unable to load card details."
                );

            }
            finally {

                setLoading(false);

            }

        };

        loadCards();

    }, []);

    /* ==========================================
            Search & Filter
    ========================================== */

    const filteredCards = useMemo(() => {

        return cards.filter((card) => {

            const matchesSearch =

                card.cardType
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                card.network
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                card.cardNumber
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =

                statusFilter === "ALL" ||

                card.status === statusFilter;

            return (
                matchesSearch &&
                matchesStatus
            );

        });

    }, [cards, search, statusFilter]);

    const getStatusBadge = (status) => {

        switch (status) {

            case "ACTIVE":
                return "success";

            case "BLOCKED":
                return "danger";

            case "EXPIRED":
                return "secondary";

            default:
                return "warning";

        }

    };

    if (loading) {

        return (

            
                <Container className="py-5 text-center">

                    <Spinner animation="border" />

                    <h5 className="mt-3">

                        Loading Cards...

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

                            My Cards

                        </h2>

                        <p className="text-muted">

                            Manage your debit, credit and virtual cards securely.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Button variant="primary">

                            <i className="bi bi-credit-card-2-front-fill me-2"></i>

                            Request New Card

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
                                placeholder="Search Card..."
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
                                All Cards
                            </option>

                            <option value="ACTIVE">
                                Active
                            </option>

                            <option value="BLOCKED">
                                Blocked
                            </option>

                            <option value="EXPIRED">
                                Expired
                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Banking Cards
                ========================================== */}

                <Row className="g-4">

                    {filteredCards.length === 0 ? (

                        <Col>

                            <Card className="border-0 shadow-sm rounded-4">

                                <Card.Body className="text-center py-5">

                                    <i
                                        className="bi bi-credit-card"
                                        style={{
                                            fontSize: "4rem",
                                            color: "#adb5bd",
                                        }}
                                    ></i>

                                    <h4 className="mt-4">

                                        No Cards Found

                                    </h4>

                                    <p className="text-muted">

                                        No cards match your search criteria.

                                    </p>

                                </Card.Body>

                            </Card>

                        </Col>

                    ) : (

                        filteredCards.map((card) => (

                            <Col
                                xl={6}
                                lg={6}
                                md={12}
                                key={card.id}
                            >

                                <Card className="border-0 shadow rounded-4 h-100">

                                    {/* ===============================
                                            Virtual ATM Card
                                    ================================ */}

                                    <div
                                        className="rounded-top-4 text-white p-4"
                                        style={{
                                            background:
                                                "linear-gradient(135deg,#0d6efd,#003c8f)",
                                            minHeight: "230px",
                                        }}
                                    >

                                        <div className="d-flex justify-content-between">

                                            <div>

                                                <small>

                                                    {card.cardType}

                                                </small>

                                                <h5 className="fw-bold">

                                                    {card.network}

                                                </h5>

                                            </div>

                                            <i
                                                className="bi bi-credit-card-2-front-fill"
                                                style={{
                                                    fontSize: "2.3rem",
                                                }}
                                            ></i>

                                        </div>

                                        <div className="mt-5">

                                            <h3
                                                className="fw-bold"
                                                style={{
                                                    letterSpacing: "3px",
                                                }}
                                            >

                                                {card.cardNumber}

                                            </h3>

                                        </div>

                                        <Row className="mt-4">

                                            <Col>

                                                <small>

                                                    CARD HOLDER

                                                </small>

                                                <div className="fw-semibold">

                                                    {card.holderName}

                                                </div>

                                            </Col>

                                            <Col className="text-end">

                                                <small>

                                                    EXPIRES

                                                </small>

                                                <div className="fw-semibold">

                                                    {card.expiry}

                                                </div>

                                            </Col>

                                        </Row>

                                    </div>

                                    {/* ===============================
                                            Card Details
                                    ================================ */}

                                    <Card.Body>

                                        <Row>

                                            <Col
                                                xs={6}
                                                className="mb-3"
                                            >

                                                <small className="text-muted d-block">

                                                    Daily Limit

                                                </small>

                                                <strong>

                                                    {formatCurrency(
                                                        card.dailyLimit
                                                    )}

                                                </strong>

                                            </Col>

                                            <Col
                                                xs={6}
                                                className="mb-3"
                                            >

                                                <small className="text-muted d-block">

                                                    Status

                                                </small>

                                                <Badge
                                                    bg={getStatusBadge(
                                                        card.status
                                                    )}
                                                >

                                                    {card.status}

                                                </Badge>

                                            </Col>

                                        </Row>

                                    </Card.Body>

                                    {/* ===============================
                                            Card Actions
                                    ================================ */}

                                    <Card.Footer className="bg-white">

                                        <div className="d-grid gap-2">

                                            <Button
                                                variant="primary"
                                            >

                                                <i className="bi bi-eye me-2"></i>

                                                View Details

                                            </Button>

                                            <Row>

                                                <Col>

                                                    <Button
                                                        variant="warning"
                                                        className="w-100"
                                                    >

                                                        <i className="bi bi-lock-fill me-2"></i>

                                                        Freeze

                                                    </Button>

                                                </Col>

                                                <Col>

                                                    <Button
                                                        variant="danger"
                                                        className="w-100"
                                                    >

                                                        <i className="bi bi-slash-circle me-2"></i>

                                                        Block

                                                    </Button>

                                                </Col>

                                            </Row>

                                            <Button
                                                variant="outline-success"
                                            >

                                                <i className="bi bi-shield-lock me-2"></i>

                                                Change PIN

                                            </Button>

                                        </div>

                                    </Card.Footer>

                                </Card>

                            </Col>

                        ))

                    )}

                </Row>

                                {/* ==========================================
                        Card Summary
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-credit-card-2-front-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {cards.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Cards

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
                                        cards.filter(
                                            card => card.status === "ACTIVE"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Active Cards

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-lock-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        cards.filter(
                                            card => card.status === "BLOCKED"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Blocked Cards

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

                                        cards.reduce(

                                            (sum, card) =>
                                                sum + card.dailyLimit,

                                            0

                                        )

                                    )}

                                </h4>

                                <p className="text-muted mb-0">

                                    Total Daily Limit

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Security Information
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-danger text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-shield-lock-fill me-2"></i>

                                    Card Security Tips

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Never share your Card PIN, CVV or OTP.

                                    </li>

                                    <li className="mb-3">

                                        Immediately block your card if it is
                                        lost or stolen.

                                    </li>

                                    <li className="mb-3">

                                        Enable SMS and Email alerts for every
                                        transaction.

                                    </li>

                                    <li className="mb-3">

                                        Use contactless payments only at
                                        trusted merchants.

                                    </li>

                                    <li>

                                        Monitor your card transactions
                                        regularly.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-info-circle-fill me-2"></i>

                                    Card Services

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <table className="table table-borderless mb-0">

                                    <tbody>

                                        <tr>

                                            <td>
                                                Debit Card
                                            </td>

                                            <td className="text-end">
                                                Available
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                Credit Card
                                            </td>

                                            <td className="text-end">
                                                Available
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                Virtual Card
                                            </td>

                                            <td className="text-end">
                                                Available
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                Contactless Payment
                                            </td>

                                            <td className="text-end">
                                                Enabled
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                International Usage
                                            </td>

                                            <td className="text-end">
                                                Configurable
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                Card Replacement
                                            </td>

                                            <td className="text-end">
                                                Online Request
                                            </td>

                                        </tr>

                                    </tbody>

                                </table>

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

                                    Digital Card Management

                                </h5>

                                <p className="text-muted mb-4">

                                    Manage your debit, credit and virtual
                                    cards securely. Freeze, block, replace,
                                    change PIN and monitor limits through one
                                    unified banking dashboard.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-shield-check text-success me-2"></i>

                                        Secure Cards

                                    </span>

                                    <span>

                                        <i className="bi bi-credit-card text-primary me-2"></i>

                                        Multiple Card Types

                                    </span>

                                    <span>

                                        <i className="bi bi-lock-fill text-danger me-2"></i>

                                        PIN Protection

                                    </span>

                                    <span>

                                        <i className="bi bi-phone text-warning me-2"></i>

                                        Contactless Banking

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default Cards;