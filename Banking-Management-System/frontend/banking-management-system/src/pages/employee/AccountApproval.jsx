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

import EmployeeLayout from "../../components/layout/EmployeeLayout";

// Future
// import employeeService from "../../services/employeeService";

const AccountApproval = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("PENDING");

    /* ==========================================
            Account Requests
    ========================================== */

    const [requests, setRequests] = useState([]);

    useEffect(() => {

        const loadRequests = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await employeeService.getPendingAccounts();

                setRequests(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setRequests([

                    {

                        id:1,

                        requestId:"ACC10021",

                        customerId:"CUS10045",

                        customerName:"Amit Sharma",

                        accountType:"Savings",

                        branch:"Baramati",

                        submittedDate:"10 Jul 2026",

                        initialDeposit:5000,

                        status:"PENDING"

                    },

                    {

                        id:2,

                        requestId:"ACC10022",

                        customerId:"CUS10046",

                        customerName:"Sneha Patil",

                        accountType:"Current",

                        branch:"Pune",

                        submittedDate:"11 Jul 2026",

                        initialDeposit:25000,

                        status:"PENDING"

                    },

                    {

                        id:3,

                        requestId:"ACC10023",

                        customerId:"CUS10047",

                        customerName:"Rahul Jadhav",

                        accountType:"Savings",

                        branch:"Mumbai",

                        submittedDate:"09 Jul 2026",

                        initialDeposit:10000,

                        status:"APPROVED"

                    }

                ]);

            }

            catch{

                setError("Unable to load account requests.");

            }

            finally{

                setLoading(false);

            }

        };

        loadRequests();

    },[]);

    /* ==========================================
            Search
    ========================================== */

    const filteredRequests = useMemo(()=>{

        return requests.filter(request=>{

            const matchesSearch =

                request.customerName
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                request.customerId
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                request.requestId
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesStatus =

                statusFilter==="ALL"

                ||

                request.status===statusFilter;

            return matchesSearch && matchesStatus;

        });

    },[
        requests,
        search,
        statusFilter
    ]);

    const getStatusBadge=(status)=>{

        switch(status){

            case "APPROVED":
                return "success";

            case "REJECTED":
                return "danger";

            case "PENDING":
                return "warning";

            default:
                return "secondary";

        }

    };

    if(loading){

        return(

            

                <Container className="py-5 text-center">

                    <Spinner animation="border"/>

                    <h5 className="mt-3">

                        Loading Account Requests...

                    </h5>

                </Container>

          

        );

    }

    if(error){

        return(

            

                <Container className="py-5">

                    <Alert variant="danger">

                        {error}

                    </Alert>

                </Container>

            

        );

    }

    return(

       

            <Container fluid className="py-4">

                {/* ==========================================
                        Header
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <h2 className="fw-bold">

                            Account Approval

                        </h2>

                        <p className="text-muted">

                            Review and approve new customer account opening requests.

                        </p>

                    </Col>

                </Row>

                {/* ==========================================
                        Search & Filter
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <InputGroup>

                            <InputGroup.Text>

                                <i className="bi bi-search"></i>

                            </InputGroup.Text>

                            <Form.Control
                                placeholder="Search Request..."
                                value={search}
                                onChange={(e)=>
                                    setSearch(e.target.value)
                                }
                            />

                        </InputGroup>

                    </Col>

                    <Col lg={4}>

                        <Form.Select
                            value={statusFilter}
                            onChange={(e)=>
                                setStatusFilter(e.target.value)
                            }
                        >

                            <option value="ALL">

                                All Status

                            </option>

                            <option value="PENDING">

                                Pending

                            </option>

                            <option value="APPROVED">

                                Approved

                            </option>

                            <option value="REJECTED">

                                Rejected

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Account Approval Queue
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Pending Account Requests

                                </h5>

                                <small>

                                    Total Requests : {filteredRequests.length}

                                </small>

                            </div>

                            <Button
                                variant="light"
                                size="sm"
                            >

                                <i className="bi bi-arrow-clockwise me-2"></i>

                                Refresh

                            </Button>

                        </div>

                    </Card.Header>

                    <Card.Body className="p-0">

                        {

                            filteredRequests.length === 0 ?

                            (

                                <div className="text-center py-5">

                                    <i
                                        className="bi bi-bank"
                                        style={{
                                            fontSize: "4rem",
                                            color: "#adb5bd"
                                        }}
                                    ></i>

                                    <h4 className="mt-4">

                                        No Account Requests

                                    </h4>

                                    <p className="text-muted">

                                        No pending account opening requests found.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-light">

                                            <tr>

                                                <th>Request ID</th>

                                                <th>Customer</th>

                                                <th>Account Type</th>

                                                <th>Branch</th>

                                                <th>Initial Deposit</th>

                                                <th>Submitted</th>

                                                <th>Status</th>

                                                <th className="text-center">

                                                    Actions

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {

                                                filteredRequests.map(request => (

                                                    <tr key={request.id}>

                                                        <td>

                                                            <strong>

                                                                {request.requestId}

                                                            </strong>

                                                        </td>

                                                        <td>

                                                            <div>

                                                                <strong>

                                                                    {request.customerName}

                                                                </strong>

                                                                <br />

                                                                <small className="text-muted">

                                                                    {request.customerId}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            <Badge bg="primary">

                                                                {request.accountType}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            {request.branch}

                                                        </td>

                                                        <td>

                                                            ₹ {request.initialDeposit.toLocaleString()}

                                                        </td>

                                                        <td>

                                                            {request.submittedDate}

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getStatusBadge(
                                                                        request.status
                                                                    )
                                                                }
                                                            >

                                                                {request.status}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <div className="d-flex flex-wrap gap-2 justify-content-center">

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-primary"
                                                                >

                                                                    <i className="bi bi-eye-fill me-1"></i>

                                                                    View

                                                                </Button>

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-success"
                                                                    disabled={
                                                                        request.status !== "PENDING"
                                                                    }
                                                                >

                                                                    <i className="bi bi-check-circle-fill me-1"></i>

                                                                    Approve

                                                                </Button>

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-danger"
                                                                    disabled={
                                                                        request.status !== "PENDING"
                                                                    }
                                                                >

                                                                    <i className="bi bi-x-circle-fill me-1"></i>

                                                                    Reject

                                                                </Button>

                                                            </div>

                                                        </td>

                                                    </tr>

                                                ))

                                            }

                                        </tbody>

                                    </table>

                                </div>

                            )

                        }

                    </Card.Body>

                </Card>

                {/* ==========================================
                        Quick Approval Actions
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="success"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-check2-all me-2"></i>

                            Approve Selected

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="danger"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-x-octagon me-2"></i>

                            Reject Selected

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="warning"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-chat-left-text me-2"></i>

                            Add Remarks

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="primary"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-file-earmark-text me-2"></i>

                            View Documents

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Approval Summary Dashboard
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

                                    {requests.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Requests

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
                                        requests.filter(
                                            request =>
                                                request.status === "PENDING"
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
                                    className="bi bi-check-circle-fill text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        requests.filter(
                                            request =>
                                                request.status === "APPROVED"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Approved

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-x-circle-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        requests.filter(
                                            request =>
                                                request.status === "REJECTED"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Rejected

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Guidelines & Checklist
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Account Approval Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Ensure customer KYC has been successfully verified.

                                    </li>

                                    <li className="mb-3">

                                        Verify the initial deposit has been received.

                                    </li>

                                    <li className="mb-3">

                                        Validate branch selection and account type.

                                    </li>

                                    <li className="mb-3">

                                        Reject duplicate or fraudulent applications.

                                    </li>

                                    <li>

                                        Record remarks for every approval or rejection.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Employee Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Customer verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="KYC completed"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Initial deposit verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Account information validated"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Approval Remarks

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter approval remarks..."
                                    />

                                </Form.Group>

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

                                    Account Approval Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Every account request must comply with
                                    banking regulations, customer KYC
                                    requirements and internal approval
                                    policies before activation.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-person-check-fill text-success me-2"></i>

                                        Customer Verified

                                    </span>

                                    <span>

                                        <i className="bi bi-bank2 text-primary me-2"></i>

                                        Account Approval

                                    </span>

                                    <span>

                                        <i className="bi bi-file-earmark-check-fill text-warning me-2"></i>

                                        Documentation Complete

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        RBI Compliant

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default AccountApproval;