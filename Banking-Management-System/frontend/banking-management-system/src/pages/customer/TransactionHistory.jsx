import { useMemo, useState } from "react";
import {
    Badge,
    Button,
    Card,
    Col,
    Form,
    InputGroup,
    Row,
    Table,
} from "react-bootstrap";

const TransactionHistory = () => {

    const [search, setSearch] = useState("");

    const [transactions] = useState([

        {
            id: "TXN100001",
            date: "13 Jul 2026",
            description: "Cash Deposit",
            account: "SB1002345",
            type: "Credit",
            amount: 25000,
            status: "SUCCESS",
        },

        {
            id: "TXN100002",
            date: "12 Jul 2026",
            description: "ATM Withdrawal",
            account: "SB1002345",
            type: "Debit",
            amount: 5000,
            status: "SUCCESS",
        },

        {
            id: "TXN100003",
            date: "11 Jul 2026",
            description: "Fund Transfer",
            account: "SB1002345",
            type: "Debit",
            amount: 12000,
            status: "SUCCESS",
        },

        {
            id: "TXN100004",
            date: "10 Jul 2026",
            description: "Salary Credit",
            account: "SB1002345",
            type: "Credit",
            amount: 70000,
            status: "SUCCESS",
        },

        {
            id: "TXN100005",
            date: "09 Jul 2026",
            description: "Electricity Bill",
            account: "SB1002345",
            type: "Debit",
            amount: 2450,
            status: "PENDING",
        },

    ]);

    const filteredTransactions = useMemo(() => {

        return transactions.filter(transaction =>

            transaction.description
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            transaction.id
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            transaction.account
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [transactions, search]);

    return (

        <>

            <Row className="mb-4">

                <Col>

                    <h2 className="fw-bold">

                        Transaction History

                    </h2>

                    <p className="text-muted">

                        View all transactions performed from your bank accounts.

                    </p>

                </Col>

                <Col
                    xs="auto"
                    className="align-self-center"
                >

                    <Button>

                        <i className="bi bi-download me-2"></i>

                        Download Statement

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
                            placeholder="Search transaction..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                        />

                    </InputGroup>

                    <Table
                        hover
                        bordered
                        responsive
                        className="align-middle"
                    >

                        <thead className="table-primary">

                            <tr>

                                <th>Transaction ID</th>

                                <th>Date</th>

                                <th>Description</th>

                                <th>Account</th>

                                <th>Type</th>

                                <th>Amount</th>

                                <th>Status</th>

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

                                        {transaction.date}

                                    </td>

                                    <td>

                                        {transaction.description}

                                    </td>

                                    <td>

                                        {transaction.account}

                                    </td>

                                    <td>

                                        <Badge
                                            bg={
                                                transaction.type === "Credit"
                                                    ? "success"
                                                    : "danger"
                                            }
                                        >

                                            {transaction.type}

                                        </Badge>

                                    </td>

                                    <td
                                        className={
                                            transaction.type === "Credit"
                                                ? "text-success fw-bold"
                                                : "text-danger fw-bold"
                                        }
                                    >

                                        {
                                            transaction.type === "Credit"
                                                ? "+"
                                                : "-"
                                        }

                                        ₹

                                        {transaction.amount.toLocaleString()}

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

                                </tr>

                            ))

                        }

                        </tbody>

                    </Table>

                </Card.Body>

            </Card>

            <Row className="mt-4">

                <Col
                    md={4}
                    className="mb-3"
                >

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <h6 className="text-muted">

                                Total Transactions

                            </h6>

                            <h3 className="fw-bold text-primary">

                                {transactions.length}

                            </h3>

                        </Card.Body>

                    </Card>

                </Col>

                <Col
                    md={4}
                    className="mb-3"
                >

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <h6 className="text-muted">

                                Total Credits

                            </h6>

                            <h3 className="fw-bold text-success">

                                ₹95,000

                            </h3>

                        </Card.Body>

                    </Card>

                </Col>

                <Col
                    md={4}
                    className="mb-3"
                >

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <h6 className="text-muted">

                                Total Debits

                            </h6>

                            <h3 className="fw-bold text-danger">

                                ₹19,450

                            </h3>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>
                    </>

    );

};

export default TransactionHistory;