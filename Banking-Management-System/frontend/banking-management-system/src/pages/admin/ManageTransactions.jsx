import { useMemo, useState } from "react";
import {
    Badge,
    Button,
    Card,
    Col,
    Form,
    InputGroup,
    Modal,
    Row,
    Table,
} from "react-bootstrap";

const ManageTransactions = () => {

    const [showDetails, setShowDetails] = useState(false);

    const [search, setSearch] = useState("");

    const [transactions] = useState([

        {
            id: "TXN100001",
            account: "SB1002345",
            customer: "Rahul Patil",
            type: "Deposit",
            amount: 25000,
            status: "SUCCESS",
            date: "13 Jul 2026",
        },

        {
            id: "TXN100002",
            account: "SB1005678",
            customer: "Amit Sharma",
            type: "Withdrawal",
            amount: 10000,
            status: "SUCCESS",
            date: "13 Jul 2026",
        },

        {
            id: "TXN100003",
            account: "SB1008899",
            customer: "Priya Singh",
            type: "Transfer",
            amount: 5500,
            status: "PENDING",
            date: "12 Jul 2026",
        },

        {
            id: "TXN100004",
            account: "SB1004567",
            customer: "Dinesh Jagadale",
            type: "Deposit",
            amount: 45000,
            status: "FAILED",
            date: "11 Jul 2026",
        },

    ]);

    const filteredTransactions = useMemo(() => {

        return transactions.filter(transaction =>

            transaction.customer
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            transaction.account
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            transaction.id
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [transactions, search]);

    return (

        <>

            <Row className="mb-4">

                <Col>

                    <h2 className="fw-bold">

                        Transaction Management

                    </h2>

                    <p className="text-muted">

                        View and monitor all banking transactions.

                    </p>

                </Col>

                <Col
                    xs="auto"
                    className="align-self-center"
                >

                    <Button>

                        <i className="bi bi-download me-2"></i>

                        Export

                    </Button>

                </Col>

            </Row>

            <Card className="shadow-sm border-0">

                <Card.Body>

                    <InputGroup className="mb-4">

                        <InputGroup.Text>

                            <i className="bi bi-search"></i>

                        </InputGroup.Text>

                        <Form.Control
                            placeholder="Search Transaction..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </InputGroup>

                    <Table
                        bordered
                        hover
                        responsive
                        className="align-middle"
                    >

                        <thead className="table-primary">

                            <tr>

                                <th>Transaction ID</th>

                                <th>Account</th>

                                <th>Customer</th>

                                <th>Type</th>

                                <th>Amount</th>

                                <th>Status</th>

                                <th>Date</th>

                                <th width="170">

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>
                                                    {

                            filteredTransactions.map((transaction) => (

                                <tr key={transaction.id}>

                                    <td>

                                        {transaction.id}

                                    </td>

                                    <td>

                                        {transaction.account}

                                    </td>

                                    <td>

                                        {transaction.customer}

                                    </td>

                                    <td>

                                        <Badge
                                            bg={
                                                transaction.type === "Deposit"
                                                    ? "success"
                                                    : transaction.type === "Withdrawal"
                                                    ? "warning"
                                                    : "primary"
                                            }
                                        >

                                            {transaction.type}

                                        </Badge>

                                    </td>

                                    <td>

                                        ₹ {transaction.amount.toLocaleString()}

                                    </td>

                                    <td>

                                        <Badge
                                            bg={
                                                transaction.status === "SUCCESS"
                                                    ? "success"
                                                    : transaction.status === "FAILED"
                                                    ? "danger"
                                                    : "warning"
                                            }
                                        >

                                            {transaction.status}

                                        </Badge>

                                    </td>

                                    <td>

                                        {transaction.date}

                                    </td>

                                    <td>

                                        <div className="d-flex gap-2">

                                            <Button
                                                size="sm"
                                                variant="primary"
                                                onClick={() =>
                                                    setShowDetails(true)
                                                }
                                            >

                                                <i className="bi bi-eye"></i>

                                            </Button>

                                            <Button
                                                size="sm"
                                                variant="warning"
                                            >

                                                <i className="bi bi-arrow-counterclockwise"></i>

                                            </Button>

                                            <Button
                                                size="sm"
                                                variant="danger"
                                            >

                                                <i className="bi bi-trash"></i>

                                            </Button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                        </tbody>

                    </Table>

                </Card.Body>

            </Card>

            {/* ====================================
                    Transaction Details Modal
            ==================================== */}

            <Modal
                show={showDetails}
                onHide={() => setShowDetails(false)}
                centered
                size="lg"
            >

                <Modal.Header closeButton>

                    <Modal.Title>

                        Transaction Details

                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Row>

                        <Col md={6}>

                            <p>

                                <strong>Transaction ID :</strong>

                                TXN100001

                            </p>

                        </Col>

                        <Col md={6}>

                            <p>

                                <strong>Account :</strong>

                                SB1002345

                            </p>

                        </Col>

                        <Col md={6}>

                            <p>

                                <strong>Customer :</strong>

                                Rahul Patil

                            </p>

                        </Col>

                        <Col md={6}>

                            <p>

                                <strong>Transaction Type :</strong>

                                Deposit

                            </p>

                        </Col>

                        <Col md={6}>

                            <p>

                                <strong>Amount :</strong>

                                ₹25,000

                            </p>

                        </Col>

                        <Col md={6}>

                            <p>

                                <strong>Status :</strong>

                                <Badge bg="success">

                                    SUCCESS

                                </Badge>

                            </p>

                        </Col>

                        <Col md={12}>

                            <p>

                                <strong>Description :</strong>

                                Cash Deposit completed successfully.

                            </p>

                        </Col>

                    </Row>

                </Modal.Body>

                                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setShowDetails(false)
                        }
                    >

                        Close

                    </Button>

                    <Button
                        variant="primary"
                    >

                        <i className="bi bi-printer me-2"></i>

                        Print Receipt

                    </Button>

                </Modal.Footer>

            </Modal>

        </>

    );

};

export default ManageTransactions;