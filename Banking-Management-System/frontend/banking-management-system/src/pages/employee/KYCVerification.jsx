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

const KYCVerification = () => {

    /* ==========================================
            Page State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("PENDING");

    /* ==========================================
            KYC Queue
    ========================================== */

    const [kycRequests, setKycRequests] = useState([]);

    useEffect(() => {

        const loadRequests = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await employeeService.getPendingKyc();

                setKycRequests(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve,800)
                );

                setKycRequests([

                    {

                        id:1,

                        customerId:"CUS10045",

                        customerName:"Amit Sharma",

                        aadhaarStatus:"Uploaded",

                        panStatus:"Uploaded",

                        addressStatus:"Uploaded",

                        selfieStatus:"Uploaded",

                        submittedOn:"10 Jul 2026",

                        status:"PENDING"

                    },

                    {

                        id:2,

                        customerId:"CUS10046",

                        customerName:"Sneha Patil",

                        aadhaarStatus:"Uploaded",

                        panStatus:"Uploaded",

                        addressStatus:"Uploaded",

                        selfieStatus:"Uploaded",

                        submittedOn:"11 Jul 2026",

                        status:"PENDING"

                    },

                    {

                        id:3,

                        customerId:"CUS10047",

                        customerName:"Rahul Jadhav",

                        aadhaarStatus:"Verified",

                        panStatus:"Verified",

                        addressStatus:"Verified",

                        selfieStatus:"Verified",

                        submittedOn:"09 Jul 2026",

                        status:"VERIFIED"

                    }

                ]);

            }

            catch{

                setError("Unable to load KYC requests.");

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

        return kycRequests.filter(request=>{

            const matchesSearch=

                request.customerName
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                request.customerId
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesStatus=

                statusFilter==="ALL"

                ||

                request.status===statusFilter;

            return matchesSearch && matchesStatus;

        });

    },[
        kycRequests,
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

            

                <Container className="py-5 text-center">

                    <Spinner animation="border"/>

                    <h5 className="mt-3">

                        Loading KYC Requests...

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

                            KYC Verification

                        </h2>

                        <p className="text-muted">

                            Verify Aadhaar, PAN, Address Proof and Customer Identity documents.

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
                        KYC Verification Queue
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Pending KYC Verification

                                </h5>

                                <small>

                                    Total Requests : {filteredRequests.length}

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

                            filteredRequests.length === 0 ?

                            (

                                <div className="text-center py-5">

                                    <i
                                        className="bi bi-folder-x"
                                        style={{
                                            fontSize: "4rem",
                                            color: "#adb5bd"
                                        }}
                                    ></i>

                                    <h4 className="mt-4">

                                        No Pending KYC Requests

                                    </h4>

                                    <p className="text-muted">

                                        No records found for the selected filters.

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

                                                <th>Aadhaar</th>

                                                <th>PAN</th>

                                                <th>Address</th>

                                                <th>Selfie</th>

                                                <th>OCR</th>

                                                <th>Status</th>

                                                <th>Submitted</th>

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

                                                            <div>

                                                                <strong>

                                                                    {request.customerName}

                                                                </strong>

                                                                <br/>

                                                                <small className="text-muted">

                                                                    {request.customerId}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            <Badge bg="success">

                                                                {request.aadhaarStatus}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <Badge bg="success">

                                                                {request.panStatus}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <Badge bg="success">

                                                                {request.addressStatus}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <Badge bg="success">

                                                                {request.selfieStatus}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            <Badge bg="info">

                                                                Matched

                                                            </Badge>

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

                                                            {request.submittedOn}

                                                        </td>

                                                        <td>

                                                            <div className="d-flex flex-wrap gap-2 justify-content-center">

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-primary"
                                                                >

                                                                    <i className="bi bi-file-earmark-text-fill me-1"></i>

                                                                    Documents

                                                                </Button>

                                                                <Button
                                                                    size="sm"
                                                                    variant="outline-info"
                                                                >

                                                                    <i className="bi bi-person-badge-fill me-1"></i>

                                                                    Preview

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
                        Quick Actions
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="success"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-check2-all me-2"></i>

                            Verify All

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
                            variant="danger"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-x-octagon me-2"></i>

                            Reject Selected

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        KYC Summary Dashboard
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-files text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {kycRequests.length}

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
                                        kycRequests.filter(
                                            item => item.status === "PENDING"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Pending Verification

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
                                        kycRequests.filter(
                                            item => item.status === "VERIFIED"
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
                                    className="bi bi-person-check-fill text-info"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    98%

                                </h3>

                                <p className="text-muted mb-0">

                                    OCR Accuracy

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Compliance & Remarks
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    RBI KYC Compliance

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify original identity documents before approval.

                                    </li>

                                    <li className="mb-3">

                                        Ensure Aadhaar and PAN belong to the same customer.

                                    </li>

                                    <li className="mb-3">

                                        Validate address proof as per RBI guidelines.

                                    </li>

                                    <li className="mb-3">

                                        Reject forged or altered documents immediately.

                                    </li>

                                    <li>

                                        Record verification remarks for every decision.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Employee Verification Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Identity verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Aadhaar verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="PAN verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    checked
                                    readOnly
                                    label="Address proof verified"
                                />

                                <Form.Check
                                    className="mb-3"
                                    label="Face matched with customer"

                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Employee Remarks

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter verification remarks..."
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

                                    Digital KYC Verification Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Complete customer identity verification in
                                    accordance with RBI regulations. Every
                                    verification is securely logged for audit,
                                    compliance, and fraud prevention.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-file-earmark-check-fill text-success me-2"></i>

                                        Aadhaar Verification

                                    </span>

                                    <span>

                                        <i className="bi bi-credit-card-2-front-fill text-primary me-2"></i>

                                        PAN Validation

                                    </span>

                                    <span>

                                        <i className="bi bi-camera-fill text-warning me-2"></i>

                                        Face Verification

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

export default KYCVerification;