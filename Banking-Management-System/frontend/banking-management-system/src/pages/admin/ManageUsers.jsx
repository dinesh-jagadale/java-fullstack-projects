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

const ManageUsers = () => {

    const [showModal, setShowModal] = useState(false);

    const [search, setSearch] = useState("");

    const [users] = useState([

        {
            id: 1,
            fullName: "Rahul Patil",
            email: "rahul@bank.com",
            role: "EMPLOYEE",
            status: "ACTIVE",
        },

        {
            id: 2,
            fullName: "Amit Sharma",
            email: "amit@bank.com",
            role: "CUSTOMER",
            status: "ACTIVE",
        },

        {
            id: 3,
            fullName: "Priya Singh",
            email: "priya@bank.com",
            role: "CUSTOMER",
            status: "BLOCKED",
        },

        {
            id: 4,
            fullName: "Admin User",
            email: "admin@bank.com",
            role: "ADMIN",
            status: "ACTIVE",
        },

    ]);

    const filteredUsers = useMemo(() => {

        return users.filter(user =>

            user.fullName
                .toLowerCase()
                .includes(search.toLowerCase())

            ||

            user.email
                .toLowerCase()
                .includes(search.toLowerCase())

        );

    }, [search, users]);

    return (

        <>

            <Row className="mb-4">

                <Col>

                    <h2 className="fw-bold">

                        User Management

                    </h2>

                    <p className="text-muted">

                        Create, update and manage system users.

                    </p>

                </Col>

                <Col
                    xs="auto"
                    className="align-self-center"
                >

                    <Button
                        onClick={() => setShowModal(true)}
                    >

                        <i className="bi bi-plus-circle me-2"></i>

                        Add User

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

                            placeholder="Search user..."

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                        />

                    </InputGroup>

                    <Table
                        hover
                        responsive
                        bordered
                        className="align-middle"
                    >

                        <thead className="table-primary">

                            <tr>

                                <th>ID</th>

                                <th>Name</th>

                                <th>Email</th>

                                <th>Role</th>

                                <th>Status</th>

                                <th width="220">

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                                                    {

                            filteredUsers.map((user) => (

                                <tr key={user.id}>

                                    <td>

                                        {user.id}

                                    </td>

                                    <td>

                                        {user.fullName}

                                    </td>

                                    <td>

                                        {user.email}

                                    </td>

                                    <td>

                                        <Badge
                                            bg={
                                                user.role === "ADMIN"
                                                    ? "danger"
                                                    : user.role === "EMPLOYEE"
                                                    ? "success"
                                                    : "primary"
                                            }
                                        >

                                            {user.role}

                                        </Badge>

                                    </td>

                                    <td>

                                        <Badge
                                            bg={
                                                user.status === "ACTIVE"
                                                    ? "success"
                                                    : "secondary"
                                            }
                                        >

                                            {user.status}

                                        </Badge>

                                    </td>

                                    <td>

                                        <div className="d-flex gap-2">

                                            <Button
                                                size="sm"
                                                variant="primary"
                                            >

                                                <i className="bi bi-pencil-square"></i>

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

            {/* ===========================
                    Add User Modal
            =========================== */}

            <Modal

                show={showModal}

                onHide={() => setShowModal(false)}

                centered

                size="lg"

            >

                <Modal.Header closeButton>

                    <Modal.Title>

                        Create New User

                    </Modal.Title>

                </Modal.Header>

                <Modal.Body>

                    <Row>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Full Name

                                </Form.Label>

                                <Form.Control
                                    placeholder="Enter Full Name"
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Email

                                </Form.Label>

                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Password

                                </Form.Label>

                                <Form.Control
                                    type="password"
                                />

                            </Form.Group>

                        </Col>

                        <Col md={6}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Role

                                </Form.Label>

                                <Form.Select>

                                    <option>

                                        ADMIN

                                    </option>

                                    <option>

                                        EMPLOYEE

                                    </option>

                                    <option>

                                        CUSTOMER

                                    </option>

                                </Form.Select>

                            </Form.Group>

                        </Col>

                                                <Col md={12}>

                            <Form.Group className="mb-3">

                                <Form.Label>

                                    Status

                                </Form.Label>

                                <Form.Select
                                    defaultValue="ACTIVE"
                                >

                                    <option value="ACTIVE">

                                        ACTIVE

                                    </option>

                                    <option value="BLOCKED">

                                        BLOCKED

                                    </option>

                                </Form.Select>

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

                        <i className="bi bi-check-circle me-2"></i>

                        Save User

                    </Button>

                </Modal.Footer>

            </Modal>

        </>

    );

};

export default ManageUsers;