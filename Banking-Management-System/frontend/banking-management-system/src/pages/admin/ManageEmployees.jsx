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

const ManageEmployees = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("ALL");

    /* ==========================================
            Employee Data
    ========================================== */

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        const loadEmployees = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await adminService.getEmployees();

                setEmployees(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve,800)
                );

                setEmployees([

                    {

                        id:1,

                        employeeId:"EMP1001",

                        fullName:"Rahul Patil",

                        email:"rahul@bank.com",

                        mobile:"+91 9876543210",

                        designation:"Assistant Manager",

                        department:"Operations",

                        branch:"Baramati",

                        joiningDate:"15 Jan 2022",

                        salary:62000,

                        status:"ACTIVE"

                    },

                    {

                        id:2,

                        employeeId:"EMP1002",

                        fullName:"Sneha Kulkarni",

                        email:"sneha@bank.com",

                        mobile:"+91 9988776655",

                        designation:"Loan Officer",

                        department:"Loans",

                        branch:"Pune",

                        joiningDate:"02 Aug 2021",

                        salary:71000,

                        status:"ACTIVE"

                    },

                    {

                        id:3,

                        employeeId:"EMP1003",

                        fullName:"Amit Deshmukh",

                        email:"amit@bank.com",

                        mobile:"+91 9123456789",

                        designation:"Cashier",

                        department:"Cash",

                        branch:"Mumbai",

                        joiningDate:"12 Mar 2023",

                        salary:45000,

                        status:"INACTIVE"

                    }

                ]);

            }

            catch{

                setError(
                    "Unable to load employees."
                );

            }

            finally{

                setLoading(false);

            }

        };

        loadEmployees();

    },[]);

    /* ==========================================
            Search
    ========================================== */

    const filteredEmployees = useMemo(()=>{

        return employees.filter(employee=>{

            const matchesSearch=

                employee.fullName
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                employee.employeeId
                .toLowerCase()
                .includes(search.toLowerCase())

                ||

                employee.branch
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesStatus=

                statusFilter==="ALL"

                ||

                employee.status===statusFilter;

            return matchesSearch && matchesStatus;

        });

    },[
        employees,
        search,
        statusFilter
    ]);

    const getStatusBadge=(status)=>{

        switch(status){

            case "ACTIVE":
                return "success";

            case "INACTIVE":
                return "secondary";

            case "SUSPENDED":
                return "danger";

            default:
                return "warning";

        }

    };

    if(loading){

        return(

            

                <Container className="py-5 text-center">

                    <Spinner animation="border"/>

                    <h5 className="mt-3">

                        Loading Employees...

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

                            Employee Management

                        </h2>

                        <p className="text-muted">

                            Manage bank employees, roles, branches, departments and permissions.

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
                                placeholder="Search Employee..."
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

                            <option value="INACTIVE">

                                Inactive

                            </option>

                            <option value="SUSPENDED">

                                Suspended

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Employee Management Table
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">

                                    Employee Directory

                                </h5>

                                <small>

                                    Total Employees :
                                    {" "}
                                    {filteredEmployees.length}

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

                            filteredEmployees.length===0 ?

                            (

                                <div className="text-center py-5">

                                    <i
                                        className="bi bi-person-workspace"
                                        style={{
                                            fontSize:"4rem",
                                            color:"#adb5bd"
                                        }}
                                    ></i>

                                    <h4 className="mt-3">

                                        No Employees Found

                                    </h4>

                                    <p className="text-muted">

                                        No employees match the selected criteria.

                                    </p>

                                </div>

                            )

                            :

                            (

                                <div className="table-responsive">

                                    <table className="table table-hover align-middle mb-0">

                                        <thead className="table-light">

                                            <tr>

                                                <th>Employee</th>

                                                <th>Designation</th>

                                                <th>Department</th>

                                                <th>Branch</th>

                                                <th>Salary</th>

                                                <th>Status</th>

                                                <th>Joining Date</th>

                                                <th className="text-center">

                                                    Actions

                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            {

                                                filteredEmployees.map(employee=>(

                                                    <tr key={employee.id}>

                                                        <td>

                                                            <div>

                                                                <strong>

                                                                    {employee.fullName}

                                                                </strong>

                                                                <br/>

                                                                <small className="text-muted">

                                                                    {employee.employeeId}

                                                                </small>

                                                                <br/>

                                                                <small>

                                                                    {employee.email}

                                                                </small>

                                                            </div>

                                                        </td>

                                                        <td>

                                                            {employee.designation}

                                                        </td>

                                                        <td>

                                                            <Badge bg="primary">

                                                                {employee.department}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            {employee.branch}

                                                        </td>

                                                        <td>

                                                            ₹ {employee.salary.toLocaleString()}

                                                        </td>

                                                        <td>

                                                            <Badge
                                                                bg={
                                                                    getStatusBadge(
                                                                        employee.status
                                                                    )
                                                                }
                                                            >

                                                                {employee.status}

                                                            </Badge>

                                                        </td>

                                                        <td>

                                                            {employee.joiningDate}

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

                                                                    employee.status==="ACTIVE"

                                                                    ?

                                                                    (

                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline-warning"
                                                                        >

                                                                            <i className="bi bi-pause-circle-fill me-1"></i>

                                                                            Deactivate

                                                                        </Button>

                                                                    )

                                                                    :

                                                                    (

                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline-info"
                                                                        >

                                                                            <i className="bi bi-play-circle-fill me-1"></i>

                                                                            Activate

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

                            Add Employee

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="primary"
                        >

                            <i className="bi bi-person-gear me-2"></i>

                            Assign Role

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="warning"
                        >

                            <i className="bi bi-building me-2"></i>

                            Transfer Branch

                        </Button>

                    </Col>

                    <Col lg={3} className="mb-3">

                        <Button
                            className="w-100 py-3"
                            variant="danger"
                        >

                            <i className="bi bi-trash-fill me-2"></i>

                            Remove Employee

                        </Button>

                    </Col>

                </Row>

                                {/* ==========================================
                        Employee Statistics
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

                                    {employees.length}

                                </h3>

                                <p className="text-muted mb-0">

                                    Total Employees

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
                                        employees.filter(
                                            employee =>
                                                employee.status === "ACTIVE"
                                        ).length
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Active Employees

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-building text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    {
                                        new Set(
                                            employees.map(
                                                employee => employee.branch
                                            )
                                        ).size
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Branches

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

                                    ₹
                                    {
                                        employees
                                            .reduce(
                                                (
                                                    total,
                                                    employee
                                                ) =>
                                                    total +
                                                    employee.salary,
                                                0
                                            )
                                            .toLocaleString()
                                    }

                                </h3>

                                <p className="text-muted mb-0">

                                    Monthly Payroll

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        HR Guidelines & Checklist
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    HR & Employee Guidelines

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Assign employees according to branch requirements.

                                    </li>

                                    <li className="mb-3">

                                        Review employee performance regularly.

                                    </li>

                                    <li className="mb-3">

                                        Update employee roles and permissions carefully.

                                    </li>

                                    <li className="mb-3">

                                        Suspend employees only after proper authorization.

                                    </li>

                                    <li>

                                        Maintain complete HR audit records.

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
                                    label="Employee identity verified"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Role assigned"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Branch assigned"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Permissions configured"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        HR Remarks

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter administrator remarks..."
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

                                    Employee Management Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Efficiently manage employees, departments,
                                    branches, permissions and HR operations
                                    while maintaining secure banking standards,
                                    compliance and organizational efficiency.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-people-fill text-primary me-2"></i>

                                        Employee Management

                                    </span>

                                    <span>

                                        <i className="bi bi-building text-success me-2"></i>

                                        Branch Operations

                                    </span>

                                    <span>

                                        <i className="bi bi-person-badge-fill text-warning me-2"></i>

                                        Role Administration

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        Secure HR

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default ManageEmployees;