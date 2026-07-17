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
import { formatCurrency } from "../../utils/currencyFormatter";

// Future
// import adminService from "../../services/adminService";

const ManageAccounts = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("ALL");

    /* ==========================================
            Accounts
    ========================================== */

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {

        const loadAccounts = async () => {

            try{

                setLoading(true);

                /*
                const response =
                    await adminService.getAccounts();

                setAccounts(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve,800)
                );

                setAccounts([

                    {

                        id:1,

                        accountNumber:"100245896321",

                        customerId:"CUS10045",

                        customerName:"Amit Sharma",

                        accountType:"Savings",

                        branch:"Baramati",

                        balance:125460,

                        openedOn:"12 Jan 2024",

                        status:"ACTIVE"

                    },

                    {

                        id:2,

                        accountNumber:"100245896322",

                        customerId:"CUS10046",

                        customerName:"Sneha Patil",

                        accountType:"Current",

                        branch:"Pune",

                        balance:985000,

                        openedOn:"20 Apr 2023",

                        status:"FROZEN"

                    },

                    {

                        id:3,

                        accountNumber:"100245896323",

                        customerId:"CUS10047",

                        customerName:"Rahul Jadhav",

                        accountType:"Savings",

                        branch:"Mumbai",

                        balance:35680,

                        openedOn:"05 Feb 2025",

                        status:"ACTIVE"

                    },

                    {

                        id:4,

                        accountNumber:"100245896324",

                        customerId:"CUS10048",

                        customerName:"Priya Kulkarni",

                        accountType:"Current",

                        branch:"Nashik",

                        balance:542300,

                        openedOn:"10 Nov 2023",

                        status:"CLOSED"

                    }

                ]);

            }

            catch{

                setError(
                    "Unable to load bank accounts."
                );

            }

            finally{

                setLoading(false);

            }

        };

        loadAccounts();

    },[]);

    /* ==========================================
            Search
    ========================================== */

    const filteredAccounts = useMemo(()=>{

        return accounts.filter(account=>{

            const matchesSearch=

                account.customerName
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                account.customerId
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                account.accountNumber
                .includes(search);

            const matchesStatus=

                statusFilter==="ALL"

                ||

                account.status===statusFilter;

            return matchesSearch && matchesStatus;

        });

    },[
        accounts,
        search,
        statusFilter
    ]);

    const getStatusBadge=(status)=>{

        switch(status){

            case "ACTIVE":
                return "success";

            case "FROZEN":
                return "warning";

            case "CLOSED":
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

                        Loading Bank Accounts...

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

                            Account Management

                        </h2>

                        <p className="text-muted">

                            Manage customer bank accounts, account status, balances and branch operations.

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
                                placeholder="Search Account..."
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

                            <option value="FROZEN">

                                Frozen

                            </option>

                            <option value="CLOSED">

                                Closed

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Account Management Table
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Bank Account Directory

                                </h5>

                                <small>

                                    Total Accounts :
                                    {" "}
                                    {filteredAccounts.length}

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

                            filteredAccounts.length===0 ?

                            (

                                <div className="text-center py-5">

                                    <i
                                        className="bi bi-bank"
                                        style={{
                                            fontSize:"4rem",
                                            color:"#adb5bd"
                                        }}
                                    ></i>

                                    <h4 className="mt-3">

                                        No Accounts Found

                                    </h4>

                                    <p className="text-muted">

                                        No bank accounts match the selected filters.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-light">

                                            <tr>

                                                <th>Account Number</th>

                                                <th>Customer</th>

                                                <th>Type</th>

                                                <th>Branch</th>

                                                <th>Balance</th>

                                                <th>Status</th>

                                                <th>Opened On</th>

                                                <th className="text-center">

                                                    Actions

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {

                                                filteredAccounts.map(account=>(

                                                    <tr key={account.id}>

                                                        <td>

                                                            <strong>

                                                                {account.accountNumber}

                                                            </strong>

                                                        </td>

                                                        <td>

                                                            <div>

                                                                <strong>

                                                                    {account.customerName}

                                                                </strong>

                                                                <br/>

                                                                <small className="text-muted">

                                                                    {account.customerId}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            <Badge bg="primary">

                                                                {account.accountType}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            {account.branch}

                                                        </td>

                                                        <td>

                                                            <strong>

                                                                {formatCurrency(account.balance)}

                                                            </strong>

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getStatusBadge(
                                                                        account.status
                                                                    )
                                                                }
                                                            >

                                                                {account.status}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            {account.openedOn}

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

                                                                {

                                                                    account.status==="ACTIVE"

                                                                    &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-warning"
                                                                    >

                                                                        <i className="bi bi-lock-fill me-1"></i>

                                                                        Freeze

                                                                    </Button>

                                                                }

                                                                {

                                                                    account.status==="FROZEN"

                                                                    &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-success"
                                                                    >

                                                                        <i className="bi bi-unlock-fill me-1"></i>

                                                                        Unfreeze

                                                                    </Button>

                                                                }

                                                                {

                                                                    account.status!=="CLOSED"

                                                                    &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-danger"
                                                                    >

                                                                        <i className="bi bi-x-octagon-fill me-1"></i>

                                                                        Close

                                                                    </Button>

                                                                }

                                                                {

                                                                    account.status==="CLOSED"

                                                                    &&

                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline-info"
                                                                    >

                                                                        <i className="bi bi-arrow-repeat me-1"></i>

                                                                        Reopen

                                                                    </Button>

                                                                }

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
                            variant="success"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-bank2 me-2"></i>

                            Open Account

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="warning"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-lock-fill me-2"></i>

                            Freeze Selected

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="primary"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-unlock-fill me-2"></i>

                            Activate Accounts

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            variant="danger"
                            className="w-100 py-3"
                        >

                            <i className="bi bi-x-octagon-fill me-2"></i>

                            Close Accounts

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Account Statistics Dashboard
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

                                    {accounts.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Accounts

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

                                        accounts.filter(
                                            account =>
                                                account.status === "ACTIVE"
                                        ).length

                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Active Accounts

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-lock-fill text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {

                                        accounts.filter(
                                            account =>
                                                account.status === "FROZEN"
                                        ).length

                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Frozen Accounts

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-currency-rupee text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {

                                        formatCurrency(

                                            accounts.reduce(

                                                (total, account) =>

                                                    total + account.balance,

                                                0

                                            )

                                        )

                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Deposits

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Banking Guidelines
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Account Administration Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Verify customer identity before activating accounts.

                                    </li>

                                    <li className="mb-3">

                                        Freeze suspicious accounts immediately.

                                    </li>

                                    <li className="mb-3">

                                        Closed accounts cannot perform transactions.

                                    </li>

                                    <li className="mb-3">

                                        Maintain complete audit logs for every account action.

                                    </li>

                                    <li>

                                        Follow RBI and internal banking compliance policies.

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
                                    label="Customer verified"
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
                                    label="Account information validated"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Branch verification completed"
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

                                    Bank Account Administration Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Manage customer accounts, monitor balances,
                                    freeze or reactivate accounts, and ensure
                                    every banking operation complies with RBI
                                    regulations and internal Core Banking
                                    System (CBS) policies.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-bank2 text-primary me-2"></i>

                                        Account Management

                                    </span>

                                    <span>

                                        <i className="bi bi-currency-rupee text-success me-2"></i>

                                        Balance Monitoring

                                    </span>

                                    <span>

                                        <i className="bi bi-lock-fill text-warning me-2"></i>

                                        Account Security

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        RBI Compliance

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default ManageAccounts;