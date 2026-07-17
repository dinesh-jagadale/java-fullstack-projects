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

// Future
// import beneficiaryService from "../../services/beneficiaryService";

const Beneficiaries = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("ALL");

    /* ==========================================
            Beneficiaries
    ========================================== */

    const [beneficiaries, setBeneficiaries] =
        useState([]);

    useEffect(() => {

        const loadBeneficiaries = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await beneficiaryService.getAll();

                setBeneficiaries(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setBeneficiaries([

                    {
                        id: 1,
                        name: "Rahul Sharma",
                        accountNumber: "XXXX XXXX 1122",
                        bank: "State Bank of India",
                        ifsc: "SBIN0001122",
                        nickname: "Brother",
                        status: "VERIFIED",
                    },

                    {
                        id: 2,
                        name: "Priya Patil",
                        accountNumber: "XXXX XXXX 8877",
                        bank: "HDFC Bank",
                        ifsc: "HDFC0008877",
                        nickname: "Friend",
                        status: "VERIFIED",
                    },

                    {
                        id: 3,
                        name: "ABC Traders",
                        accountNumber: "XXXX XXXX 9981",
                        bank: "ICICI Bank",
                        ifsc: "ICIC0009981",
                        nickname: "Business",
                        status: "PENDING",
                    },

                ]);

            }
            catch (err) {

                setError(
                    "Unable to load beneficiaries."
                );

            }
            finally {

                setLoading(false);

            }

        };

        loadBeneficiaries();

    }, []);

    /* ==========================================
            Search & Filter
    ========================================== */

    const filteredBeneficiaries =
        useMemo(() => {

            return beneficiaries.filter(person => {

                const matchesSearch =

                    person.name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||

                    person.bank
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||

                    person.nickname
                        .toLowerCase()
                        .includes(search.toLowerCase());

                const matchesStatus =

                    statusFilter === "ALL" ||

                    person.status === statusFilter;

                return (
                    matchesSearch &&
                    matchesStatus
                );

            });

        }, [
            beneficiaries,
            search,
            statusFilter,
        ]);

    const getStatusBadge = (status) => {

        switch (status) {

            case "VERIFIED":
                return "success";

            case "PENDING":
                return "warning";

            case "BLOCKED":
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

                        Loading Beneficiaries...

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

                {/* =====================================
                        Header
                ====================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <h2 className="fw-bold">

                            Beneficiaries

                        </h2>

                        <p className="text-muted">

                            Manage saved payees for quick and secure fund transfers.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Button variant="primary">

                            <i className="bi bi-person-plus-fill me-2"></i>

                            Add Beneficiary

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
                                placeholder="Search Beneficiary..."
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

                            <option value="VERIFIED">
                                Verified
                            </option>

                            <option value="PENDING">
                                Pending
                            </option>

                            <option value="BLOCKED">
                                Blocked
                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Beneficiary Cards
                ========================================== */}

                <Row className="g-4">

                    {filteredBeneficiaries.length === 0 ? (

                        <Col>

                            <Card className="border-0 shadow-sm rounded-4">

                                <Card.Body className="text-center py-5">

                                    <i
                                        className="bi bi-people"
                                        style={{
                                            fontSize: "4rem",
                                            color: "#adb5bd",
                                        }}
                                    ></i>

                                    <h4 className="mt-4">

                                        No Beneficiaries Found

                                    </h4>

                                    <p className="text-muted">

                                        Try changing the search keyword or filter.

                                    </p>

                                </Card.Body>

                            </Card>

                        </Col>

                    ) : (

                        filteredBeneficiaries.map((person) => (

                            <Col
                                xl={4}
                                lg={6}
                                md={6}
                                key={person.id}
                            >

                                <Card className="border-0 shadow-sm rounded-4 h-100">

                                    {/* Header */}

                                    <Card.Header className="bg-primary text-white">

                                        <div className="d-flex justify-content-between align-items-center">

                                            <div>

                                                <h5 className="mb-1">

                                                    {person.name}

                                                </h5>

                                                <small>

                                                    {person.nickname}

                                                </small>

                                            </div>

                                            <i className="bi bi-person-circle fs-2"></i>

                                        </div>

                                    </Card.Header>

                                    {/* Body */}

                                    <Card.Body>

                                        <div className="mb-3">

                                            <small className="text-muted d-block">

                                                Account Number

                                            </small>

                                            <strong>

                                                {person.accountNumber}

                                            </strong>

                                        </div>

                                        <div className="mb-3">

                                            <small className="text-muted d-block">

                                                Bank Name

                                            </small>

                                            <strong>

                                                {person.bank}

                                            </strong>

                                        </div>

                                        <div className="mb-3">

                                            <small className="text-muted d-block">

                                                IFSC Code

                                            </small>

                                            <strong>

                                                {person.ifsc}

                                            </strong>

                                        </div>

                                        <div>

                                            <small className="text-muted d-block">

                                                Verification Status

                                            </small>

                                            <Badge
                                                bg={getStatusBadge(person.status)}
                                            >

                                                {person.status}

                                            </Badge>

                                        </div>

                                    </Card.Body>

                                    {/* Footer */}

                                    <Card.Footer className="bg-white">

                                        <div className="d-grid gap-2">

                                            <Button
                                                variant="success"
                                            >

                                                <i className="bi bi-arrow-left-right me-2"></i>

                                                Transfer Money

                                            </Button>

                                            <div className="d-flex gap-2">

                                                <Button
                                                    variant="outline-primary"
                                                    className="flex-fill"
                                                >

                                                    <i className="bi bi-pencil-square me-2"></i>

                                                    Edit

                                                </Button>

                                                <Button
                                                    variant="outline-danger"
                                                    className="flex-fill"
                                                >

                                                    <i className="bi bi-trash me-2"></i>

                                                    Delete

                                                </Button>

                                            </div>

                                        </div>

                                    </Card.Footer>

                                </Card>

                            </Col>

                        ))

                    )}

                </Row>

                                {/* ==========================================
                        Beneficiary Summary
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-people-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">
                                    {beneficiaries.length}
                                </h3>

                                <p className="text-muted mb-0">
                                    Total Beneficiaries
                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-patch-check-fill text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        beneficiaries.filter(
                                            person =>
                                                person.status === "VERIFIED"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Verified

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
                                        beneficiaries.filter(
                                            person =>
                                                person.status === "PENDING"
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
                                    className="bi bi-search text-info"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {filteredBeneficiaries.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Search Results

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Information Section
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-shield-check me-2"></i>

                                    Safe Beneficiary Management

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">
                                        Verify the beneficiary's account
                                        number before adding them.
                                    </li>

                                    <li className="mb-3">
                                        Check the IFSC code carefully to
                                        avoid transfer failures.
                                    </li>

                                    <li className="mb-3">
                                        Newly added beneficiaries may require
                                        a cooling period before transfers.
                                    </li>

                                    <li>
                                        Remove beneficiaries that are no
                                        longer required.
                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-lightning-charge-fill me-2"></i>

                                    Quick Tips

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <div className="mb-3">

                                    <strong>
                                        IMPS
                                    </strong>

                                    <p className="text-muted mb-0">
                                        Instant fund transfer available 24×7.
                                    </p>

                                </div>

                                <div className="mb-3">

                                    <strong>
                                        NEFT
                                    </strong>

                                    <p className="text-muted mb-0">
                                        Ideal for routine bank transfers.
                                    </p>

                                </div>

                                <div>

                                    <strong>
                                        RTGS
                                    </strong>

                                    <p className="text-muted mb-0">
                                        Best suited for high-value transfers.
                                    </p>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

     

    );

};

export default Beneficiaries;