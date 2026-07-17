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
    Spinner
} from "react-bootstrap";

import EmployeeLayout from "../../components/layout/EmployeeLayout";

// Future
// import employeeService from "../../services/employeeService";

const CustomerVerification = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("PENDING");

    /* ==========================================
            Verification Queue
    ========================================== */

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        const loadCustomers = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await employeeService.getPendingCustomers();

                setCustomers(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 800)
                );

                setCustomers([

                    {

                        id:1,

                        customerId:"CUS10045",

                        name:"Amit Sharma",

                        accountType:"Savings",

                        aadhaar:"XXXX XXXX 2548",

                        pan:"ABCDE4521Q",

                        mobile:"9876543210",

                        email:"amit@gmail.com",

                        submittedDate:"10 Jul 2026",

                        status:"PENDING"

                    },

                    {

                        id:2,

                        customerId:"CUS10046",

                        name:"Sneha Patil",

                        accountType:"Current",

                        aadhaar:"XXXX XXXX 9654",

                        pan:"PQWER8745A",

                        mobile:"9988776655",

                        email:"sneha@gmail.com",

                        submittedDate:"11 Jul 2026",

                        status:"PENDING"

                    },

                    {

                        id:3,

                        customerId:"CUS10047",

                        name:"Rahul Jadhav",

                        accountType:"Savings",

                        aadhaar:"XXXX XXXX 5489",

                        pan:"ZXCVB8521R",

                        mobile:"9123456789",

                        email:"rahul@gmail.com",

                        submittedDate:"11 Jul 2026",

                        status:"VERIFIED"

                    }

                ]);

            }

            catch{

                setError("Unable to load customer verification queue.");

            }

            finally{

                setLoading(false);

            }

        };

        loadCustomers();

    },[]);

    /* ==========================================
            Search
    ========================================== */

    const filteredCustomers = useMemo(()=>{

        return customers.filter(customer=>{

            const matchesSearch=

                customer.customerId
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                customer.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesStatus=

                statusFilter==="ALL"

                ||

                customer.status===statusFilter;

            return matchesSearch && matchesStatus;

        });

    },[
        customers,
        search,
        statusFilter
    ]);

    const getStatusBadge=(status)=>{

        switch(status){

            case "VERIFIED":
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

            <EmployeeLayout>

                <Container className="py-5 text-center">

                    <Spinner animation="border"/>

                    <h5 className="mt-3">

                        Loading Verification Queue...

                    </h5>

                </Container>

            </EmployeeLayout>

        );

    }

    if(error){

        return(

            <EmployeeLayout>

                <Container className="py-5">

                    <Alert variant="danger">

                        {error}

                    </Alert>

                </Container>

            </EmployeeLayout>

        );

    }

    return(

        

            <Container fluid className="py-4">

                {/* Header */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <h2 className="fw-bold">

                            Customer Verification

                        </h2>

                        <p className="text-muted">

                            Verify customer identity and KYC documents before account approval.

                        </p>

                    </Col>

                </Row>

                {/* Search */}

                <Row className="mb-4">

                    <Col lg={8}>

                        <InputGroup>

                            <InputGroup.Text>

                                <i className="bi bi-search"></i>

                            </InputGroup.Text>

                            <Form.Control
                                placeholder="Search Customer..."
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

                            <option value="VERIFIED">

                                Verified

                            </option>

                            <option value="REJECTED">

                                Rejected

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Customer Verification Queue
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Pending Customer Verification

                                </h5>

                                <small>

                                    Total Records : {filteredCustomers.length}

                                </small>

                            </div>

                            <Button
                                variant="light"
                                size="sm"
                            >

                                Refresh

                            </Button>

                        </div>

                    </Card.Header>

                    <Card.Body className="p-0">

                        {

                            filteredCustomers.length===0 ?

                            (

                                <div className="text-center py-5">

                                    <i
                                        className="bi bi-people"
                                        style={{
                                            fontSize:"4rem",
                                            color:"#adb5bd"
                                        }}
                                    ></i>

                                    <h4 className="mt-4">

                                        No Customer Found

                                    </h4>

                                    <p className="text-muted">

                                        No customer matches your search criteria.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-light">

                                            <tr>

                                                <th>Customer ID</th>

                                                <th>Name</th>

                                                <th>Account</th>

                                                <th>Mobile</th>

                                                <th>Email</th>

                                                <th>Submitted</th>

                                                <th>Status</th>

                                                <th className="text-center">

                                                    Actions

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {

                                                filteredCustomers.map(customer=>(

                                                    <tr key={customer.id}>

                                                        <td>

                                                            <strong>

                                                                {customer.customerId}

                                                            </strong>

                                                        </td>

                                                        <td>

                                                            <div>

                                                                <div className="fw-semibold">

                                                                    {customer.name}

                                                                </div>

                                                                <small className="text-muted">

                                                                    PAN :
                                                                    {" "}
                                                                    {customer.pan}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            {customer.accountType}

                                                        </td>

                                                        <td>

                                                            {customer.mobile}

                                                        </td>

                                                        <td>

                                                            {customer.email}

                                                        </td>

                                                        <td>

                                                            {customer.submittedDate}

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getStatusBadge(
                                                                        customer.status
                                                                    )
                                                                }
                                                            >

                                                                {customer.status}

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
                                                                >

                                                                    <i className="bi bi-check-circle-fill me-1"></i>

                                                                    Approve

                                                                </Button>

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-danger"
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
                        Quick Verification Actions
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={4} className="mb-3">

                        <Button
                            variant="success"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-check2-all me-2"></i>

                            Approve Selected

                        </Button>

                    </Col>

                    <Col lg={4} className="mb-3">

                        <Button
                            variant="danger"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-x-octagon me-2"></i>

                            Reject Selected

                        </Button>

                    </Col>

                    <Col lg={4} className="mb-3">

                        <Button
                            variant="warning"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-chat-left-text me-2"></i>

                            Add Remarks

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Verification Summary
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

                                    {customers.length}

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
                                        customers.filter(
                                            customer =>
                                                customer.status === "PENDING"
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
                                        customers.filter(
                                            customer =>
                                                customer.status === "VERIFIED"
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
                                    className="bi bi-x-circle-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        customers.filter(
                                            customer =>
                                                customer.status === "REJECTED"
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
                        RBI Guidelines
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    RBI KYC Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify Aadhaar and PAN details before approval.

                                    </li>

                                    <li className="mb-3">

                                        Ensure customer photograph matches submitted documents.

                                    </li>

                                    <li className="mb-3">

                                        Verify mobile number and email address.

                                    </li>

                                    <li className="mb-3">

                                        Reject incomplete or fraudulent applications.

                                    </li>

                                    <li>

                                        Record remarks for every verification decision.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-info text-white">

                                <h5 className="mb-0">

                                    Verification Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    type="checkbox"
                                    label="Identity verified"
                                    checked
                                    readOnly
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="PAN verified"
                                    checked
                                    readOnly
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="Aadhaar verified"
                                    checked
                                    readOnly
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="Address verified"
                                    checked
                                    readOnly
                                    className="mb-3"
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="Customer interview completed"
                                    className="mb-0"
                                />

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

                                    Customer Verification Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Ensure every customer application complies
                                    with RBI KYC regulations before approving
                                    account creation. Maintain accurate records
                                    for all verification decisions.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-person-check-fill text-success me-2"></i>

                                        Identity Verification

                                    </span>

                                    <span>

                                        <i className="bi bi-file-earmark-check-fill text-primary me-2"></i>

                                        Document Validation

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-warning me-2"></i>

                                        RBI Compliance

                                    </span>

                                    <span>

                                        <i className="bi bi-bank2 text-danger me-2"></i>

                                        Secure Banking

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

       

    );

};

export default CustomerVerification;