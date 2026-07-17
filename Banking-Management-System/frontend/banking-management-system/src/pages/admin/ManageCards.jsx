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

const ManageCards = () => {

    const [showModal, setShowModal] = useState(false);

    const [search, setSearch] = useState("");

    const [cards] = useState([

        {
            id: 1,
            customer: "Rahul Patil",
            account: "SB1002345",
            cardNumber: "**** **** **** 4587",
            cardType: "Debit",
            status: "ACTIVE",
        },

        {
            id: 2,
            customer: "Amit Sharma",
            account: "SB1004589",
            cardNumber: "**** **** **** 9845",
            cardType: "Credit",
            status: "BLOCKED",
        },

        {
            id: 3,
            customer: "Priya Singh",
            account: "SB1008899",
            cardNumber: "**** **** **** 2356",
            cardType: "Debit",
            status: "ACTIVE",
        },

        {
            id: 4,
            customer: "Dinesh Jagadale",
            account: "SB1009876",
            cardNumber: "**** **** **** 7412",
            cardType: "Credit",
            status: "PENDING",
        },

    ]);

    const filteredCards = useMemo(() => {

        return cards.filter(card =>

            card.customer
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            card.account
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            card.cardNumber
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [cards, search]);

    return (

        <>

            <Row className="mb-4">

                <Col>

                    <h2 className="fw-bold">

                        Card Management

                    </h2>

                    <p className="text-muted">

                        Manage Debit Cards and Credit Cards.

                    </p>

                </Col>

                <Col
                    xs="auto"
                    className="align-self-center"
                >

                    <Button
                        onClick={() => setShowModal(true)}
                    >

                        <i className="bi bi-credit-card-2-front me-2"></i>

                        Issue New Card

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
                            placeholder="Search Card..."
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

                                <th>ID</th>

                                <th>Customer</th>

                                <th>Account</th>

                                <th>Card Number</th>

                                <th>Type</th>

                                <th>Status</th>

                                <th width="220">

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>
                                                    {

                            filteredCards.map((card) => (

                                <tr key={card.id}>

                                    <td>

                                        {card.id}

                                    </td>

                                    <td>

                                        {card.customer}

                                    </td>

                                    <td>

                                        {card.account}

                                    </td>

                                    <td>

                                        {card.cardNumber}

                                    </td>

                                    <td>

                                        <Badge
                                            bg={
                                                card.cardType === "Debit"
                                                    ? "primary"
                                                    : "warning"
                                            }
                                        >

                                            {card.cardType}

                                        </Badge>

                                    </td>

                                    <td>

                                        <Badge
                                            bg={
                                                card.status === "ACTIVE"
                                                    ? "success"
                                                    : card.status === "BLOCKED"
                                                    ? "danger"
                                                    : "warning"
                                            }
                                        >

                                            {card.status}

                                        </Badge>

                                    </td>

                                    <td>

                                        <div className="d-flex gap-2">

                                            <Button
                                                size="sm"
                                                variant="success"
                                            >

                                                <i className="bi bi-check-circle"></i>

                                            </Button>

                                            <Button
                                                size="sm"
                                                variant="warning"
                                            >

                                                <i className="bi bi-lock"></i>

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

            {/* ==================================
                    Issue New Card Modal
            =================================== */}

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                size="lg"
            >

                <Modal.Header closeButton>

                    <Modal.Title>

                        Issue New Card

                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Row>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Customer Name

                                </Form.Label>

                                <Form.Control
                                    placeholder="Enter Customer Name"
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Account Number

                                </Form.Label>

                                <Form.Control
                                    placeholder="Enter Account Number"
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Card Type

                                </Form.Label>

                                <Form.Select>

                                    <option>

                                        Debit Card

                                    </option>

                                    <option>

                                        Credit Card

                                    </option>

                                </Form.Select>

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Card Network

                                </Form.Label>

                                <Form.Select>

                                    <option>

                                        Visa

                                    </option>

                                    <option>

                                        RuPay

                                    </option>

                                    <option>

                                        MasterCard

                                    </option>

                                </Form.Select>

                            </Form.Group>

                        </Col>

                        <Col md={12}>

                            <Form.Group>

                                <Form.Label>

                                    Delivery Address

                                </Form.Label>

                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                />

                            </Form.Group>

                        </Col>

                    </Row>

                </Modal.Body>

                                <Modal.Footer>

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setShowModal(false)
                        }
                    >

                        Cancel

                    </Button>

                    <Button
                        variant="primary"
                    >

                        <i className="bi bi-credit-card-2-front me-2"></i>

                        Issue Card

                    </Button>

                </Modal.Footer>

            </Modal>

        </>

    );

};

export default ManageCards;