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

import AdminLayout from "../../components/layout/AdminLayout";

// Future
// import adminService from "../../services/adminService";

const ManageCustomers = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("ALL");

    const [customers, setCustomers] = useState([]);

    /* ==========================================
            Load Customers
    ========================================== */

    useEffect(() => {

        const loadCustomers = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await adminService.getAllCustomers();

                setCustomers(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve,800)
                );

                setCustomers([

                    {

                        id:1,

                        customerId:"CUS10045",

                        fullName:"Amit Sharma",

                        email:"amit@gmail.com",

                        mobile:"+91 9876543210",

                        accountType:"Savings",

                        accountNumber:"234589654123",

                        branch:"Baramati",

                        kycStatus:"VERIFIED",

                        status:"ACTIVE",

                        balance:85420,

                        joinedOn:"12 Jul 2026"

                    },

                    {

                        id:2,

                        customerId:"CUS10046",

                        fullName:"Sneha Patil",

                        email:"sneha@gmail.com",

                        mobile:"+91 9988776655",

                        accountType:"Current",

                        accountNumber:"452145896523",

                        branch:"Pune",

                        kycStatus:"PENDING",

                        status:"ACTIVE",

                        balance:152300,

                        joinedOn:"11 Jul 2026"

                    },

                    {

                        id:3,

                        customerId:"CUS10047",

                        fullName:"Rahul Jadhav",

                        email:"rahul@gmail.com",

                        mobile:"+91 9123456789",

                        accountType:"Savings",

                        accountNumber:"784512365489",

                        branch:"Mumbai",

                        kycStatus:"VERIFIED",

                        status:"BLOCKED",

                        balance:2500,

                        joinedOn:"10 Jul 2026"

                    }

                ]);

            }

            catch{

                setError(
                    "Unable to load customers."
                );

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

                customer.fullName
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                customer.customerId
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                customer.accountNumber
                .includes(search);

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

            case "ACTIVE":
                return "success";

            case "BLOCKED":
                return "danger";

            case "INACTIVE":
                return "secondary";

            default:
                return "warning";

        }

    };

    const getKycBadge=(status)=>{

        switch(status){

            case "VERIFIED":
                return "success";

            case "PENDING":
                return "warning";

            case "REJECTED":
                return "danger";

            default:
                return "secondary";

        }

    };

    if(loading){

        return(

          

                <Container className="py-5 text-center">

                    <Spinner animation="border"/>

                    <h5 className="mt-3">

                        Loading Customers...

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

                            Customer Management

                        </h2>

                        <p className="text-muted">

                            Manage all customers, KYC, account status and banking information.

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

                            <option value="ACTIVE">

                                Active

                            </option>

                            <option value="BLOCKED">

                                Blocked

                            </option>

                            <option value="INACTIVE">

                                Inactive

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Customer Management Table
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Customer Directory

                                </h5>

                                <small>

                                    Total Customers :
                                    {" "}
                                    {filteredCustomers.length}

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

                                    <h4 className="mt-3">

                                        No Customers Found

                                    </h4>

                                    <p className="text-muted">

                                        No customer matches the selected filters.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-light">

                                            <tr>

                                                <th>Customer</th>

                                                <th>Account</th>

                                                <th>Type</th>

                                                <th>Branch</th>

                                                <th>Balance</th>

                                                <th>KYC</th>

                                                <th>Status</th>

                                                <th>Joined</th>

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

                                                            <div>

                                                                <strong>

                                                                    {customer.fullName}

                                                                </strong>

                                                                <br/>

                                                                <small className="text-muted">

                                                                    {customer.customerId}

                                                                </small>

                                                                <br/>

                                                                <small>

                                                                    {customer.email}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            <strong>

                                                                {customer.accountNumber}

                                                            </strong>

                                                        </td>

                                                        <td>

                                                            <Badge bg="primary">

                                                                {customer.accountType}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            {customer.branch}

                                                        </td>

                                                        <td>

                                                            ₹ {customer.balance.toLocaleString()}

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getKycBadge(
                                                                        customer.kycStatus
                                                                    )
                                                                }
                                                            >

                                                                {customer.kycStatus}

                                                            </Badge>

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

                                                            {customer.joinedOn}

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

                                                                    <i className="bi bi-pencil-square me-1"></i>

                                                                    Edit

                                                                </Button>

                                                                {

                                                                    customer.status==="ACTIVE"

                                                                    ?

                                                                    (

                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline-warning"
                                                                        >

                                                                            <i className="bi bi-lock-fill me-1"></i>

                                                                            Block

                                                                        </Button>

                                                                    )

                                                                    :

                                                                    (

                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline-info"
                                                                        >

                                                                            <i className="bi bi-unlock-fill me-1"></i>

                                                                            Unblock

                                                                        </Button>

                                                                    )

                                                                }

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-danger"
                                                                >

                                                                    <i className="bi bi-trash-fill me-1"></i>

                                                                    Delete

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
                        Quick Admin Actions
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="success"
                        >

                            <i className="bi bi-person-plus-fill me-2"></i>

                            Add Customer

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="primary"
                        >

                            <i className="bi bi-file-earmark-check-fill me-2"></i>

                            Verify KYC

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="warning"
                        >

                            <i className="bi bi-lock-fill me-2"></i>

                            Block Selected

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="danger"
                        >

                            <i className="bi bi-trash-fill me-2"></i>

                            Delete Selected

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Customer Statistics
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

                                    Total Customers

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
                                                customer.status === "ACTIVE"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Active Customers

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-file-earmark-check-fill text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        customers.filter(
                                            customer =>
                                                customer.kycStatus === "VERIFIED"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    KYC Verified

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-bank2 text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    ₹
                                    {" "}
                                    {customers
                                        .reduce(
                                            (sum, customer) =>
                                                sum + customer.balance,
                                            0
                                        )
                                        .toLocaleString()}

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Customer Balance

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

                                    Customer Management Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify customer identity before approving any request.

                                    </li>

                                    <li className="mb-3">

                                        Ensure KYC is completed before activating accounts.

                                    </li>

                                    <li className="mb-3">

                                        Block suspicious or fraudulent customer accounts immediately.

                                    </li>

                                    <li className="mb-3">

                                        Maintain complete audit logs for every modification.

                                    </li>

                                    <li>

                                        Follow RBI and bank compliance policies.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Administrator Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Customer profile verified"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="KYC completed"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Account status validated"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Customer documents verified"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Administrative Remarks

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter remarks..."
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

                                    Customer Management Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Manage customer accounts, KYC verification,
                                    banking services and account security from a
                                    centralized administrative dashboard.
                                    Ensure compliance with RBI regulations and
                                    internal banking policies.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-people-fill text-primary me-2"></i>

                                        Customer Management

                                    </span>

                                    <span>

                                        <i className="bi bi-bank2 text-success me-2"></i>

                                        Account Monitoring

                                    </span>

                                    <span>

                                        <i className="bi bi-file-earmark-check-fill text-warning me-2"></i>

                                        KYC Compliance

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        Secure Administration

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

       

    );

};

export default ManageCustomers;