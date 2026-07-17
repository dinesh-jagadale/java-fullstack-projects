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

const Passbook = () => {

    const [search, setSearch] = useState("");

    const [entries] = useState([

        {
            id: 1,
            date: "13 Jul 2026",
            narration: "Cash Deposit",
            withdrawal: 0,
            deposit: 25000,
            balance: 125000,
        },

        {
            id: 2,
            date: "12 Jul 2026",
            narration: "ATM Withdrawal",
            withdrawal: 5000,
            deposit: 0,
            balance: 100000,
        },

        {
            id: 3,
            date: "11 Jul 2026",
            narration: "Salary Credit",
            withdrawal: 0,
            deposit: 70000,
            balance: 105000,
        },

        {
            id: 4,
            date: "10 Jul 2026",
            narration: "Fund Transfer",
            withdrawal: 12000,
            deposit: 0,
            balance: 35000,
        },

        {
            id: 5,
            date: "09 Jul 2026",
            narration: "Interest Credit",
            withdrawal: 0,
            deposit: 550,
            balance: 47000,
        },

    ]);

    const filteredEntries = useMemo(() => {

        return entries.filter(entry =>

            entry.narration
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            entry.date
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [entries, search]);

    return (

        <>

            <Row className="mb-4">

                <Col>

                    <h2 className="fw-bold">

                        Digital Passbook

                    </h2>

                    <p className="text-muted">

                        View your account passbook and transaction history.

                    </p>

                </Col>

                <Col
                    xs="auto"
                    className="align-self-center"
                >

                    <Button>

                        <i className="bi bi-download me-2"></i>

                        Download PDF

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
                            placeholder="Search passbook..."
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

                                <th>Date</th>

                                <th>Narration</th>

                                <th>Withdrawal</th>

                                <th>Deposit</th>

                                <th>Closing Balance</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>
                                                    {

                            filteredEntries.map((entry) => (

                                <tr key={entry.id}>

                                    <td>

                                        {entry.date}

                                    </td>

                                    <td>

                                        {entry.narration}

                                    </td>

                                    <td className="text-danger fw-semibold">

                                        {

                                            entry.withdrawal > 0

                                                ? `₹ ${entry.withdrawal.toLocaleString()}`

                                                : "-"

                                        }

                                    </td>

                                    <td className="text-success fw-semibold">

                                        {

                                            entry.deposit > 0

                                                ? `₹ ${entry.deposit.toLocaleString()}`

                                                : "-"

                                        }

                                    </td>

                                    <td className="fw-bold">

                                        ₹ {entry.balance.toLocaleString()}

                                    </td>

                                    <td>

                                        <Badge bg="success">

                                            SUCCESS

                                        </Badge>

                                    </td>

                                </tr>

                            ))

                        }

                        </tbody>

                    </Table>

                </Card.Body>

            </Card>

            {/* ==========================
                    Summary Cards
            ========================== */}

            <Row className="mt-4">

                <Col lg={4} md={6} className="mb-3">

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <i className="bi bi-wallet2 display-5 text-primary"></i>

                            <h6 className="mt-3 text-muted">

                                Current Balance

                            </h6>

                            <h3 className="fw-bold text-primary">

                                ₹ 1,25,000

                            </h3>

                        </Card.Body>

                    </Card>

                </Col>

                <Col lg={4} md={6} className="mb-3">

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <i className="bi bi-arrow-down-circle display-5 text-success"></i>

                            <h6 className="mt-3 text-muted">

                                Total Deposits

                            </h6>

                            <h3 className="fw-bold text-success">

                                ₹ 95,550

                            </h3>

                        </Card.Body>

                    </Card>

                </Col>

                <Col lg={4} md={6} className="mb-3">

                    <Card className="shadow-sm border-0">

                        <Card.Body className="text-center">

                            <i className="bi bi-arrow-up-circle display-5 text-danger"></i>

                            <h6 className="mt-3 text-muted">

                                Total Withdrawals

                            </h6>

                            <h3 className="fw-bold text-danger">

                                ₹ 17,000

                            </h3>

                        </Card.Body>

                    </Card>

                </Col>

            </Row>
                    </>

    );

};

export default Passbook;