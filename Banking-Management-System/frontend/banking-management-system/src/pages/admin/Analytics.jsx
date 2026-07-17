import { useEffect, useState } from "react";
import {
    Alert,
    Badge,
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
    Spinner
} from "react-bootstrap";

import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

import AdminLayout from "../../components/layout/AdminLayout";
import { formatCurrency } from "../../utils/currencyFormatter";

// Future
// import adminService from "../../services/adminService";

const Analytics = () => {

    /* ==========================================
            State
    ========================================== */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [period, setPeriod] =
        useState("MONTHLY");

    /* ==========================================
            KPI Data
    ========================================== */

    const [analytics, setAnalytics] = useState({

        totalRevenue: 14250000,

        totalProfit: 6845000,

        customerGrowth: 18.4,

        transactionGrowth: 24.8,

        loanGrowth: 12.7,

        depositGrowth: 16.5,

        activeCustomers: 15426,

        activeAccounts: 18752

    });

    /* ==========================================
            Revenue Trend
    ========================================== */

    const [revenueTrend] = useState([

        { month:"Jan", revenue:42, profit:18 },

        { month:"Feb", revenue:48, profit:22 },

        { month:"Mar", revenue:55, profit:28 },

        { month:"Apr", revenue:63, profit:35 },

        { month:"May", revenue:72, profit:41 },

        { month:"Jun", revenue:84, profit:48 }

    ]);

    /* ==========================================
            Customer Growth
    ========================================== */

    const [customerGrowth] = useState([

        { month:"Jan", customers:11200 },

        { month:"Feb", customers:11840 },

        { month:"Mar", customers:12620 },

        { month:"Apr", customers:13480 },

        { month:"May", customers:14590 },

        { month:"Jun", customers:15426 }

    ]);

    /* ==========================================
            Branch Performance
    ========================================== */

    const [branchPerformance] = useState([

        { name:"Pune", value:31 },

        { name:"Mumbai", value:26 },

        { name:"Baramati", value:22 },

        { name:"Nashik", value:21 }

    ]);

    const COLORS = [

        "#0d6efd",

        "#198754",

        "#ffc107",

        "#dc3545"

    ];

    useEffect(() => {

        const loadAnalytics = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await adminService.getAnalytics();

                setAnalytics(response.data);
                */

                await new Promise(resolve =>
                    setTimeout(resolve,800));

            }

            catch {

                setError(
                    "Unable to load analytics."
                );

            }

            finally {

                setLoading(false);

            }

        };

        loadAnalytics();

    },[]);

    if(loading){

        return(

         

                <Container className="py-5 text-center">

                    <Spinner animation="border"/>

                    <h5 className="mt-3">

                        Loading Analytics Dashboard...

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

                            Banking Analytics

                        </h2>

                        <p className="text-muted">

                            Executive business intelligence dashboard
                            for customer growth, revenue,
                            transactions and branch performance.

                        </p>

                    </Col>

                    <Col
                        lg={4}
                        className="text-lg-end"
                    >

                        <Form.Select
                            value={period}
                            onChange={(e)=>
                                setPeriod(
                                    e.target.value
                                )
                            }
                        >

                            <option value="WEEKLY">

                                Weekly

                            </option>

                            <option value="MONTHLY">

                                Monthly

                            </option>

                            <option value="YEARLY">

                                Yearly

                            </option>

                        </Form.Select>

                    </Col>

                </Row>

                                {/* ==========================================
                        Executive KPI Cards
                ========================================== */}

                <Row className="mb-4">

                    <Col xl={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Total Revenue

                                </small>

                                <h2 className="fw-bold text-success mt-2">

                                    {formatCurrency(
                                        analytics.totalRevenue
                                    )}

                                </h2>

                                <Badge bg="success">

                                    +{analytics.depositGrowth}%

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Net Profit

                                </small>

                                <h2 className="fw-bold text-primary mt-2">

                                    {formatCurrency(
                                        analytics.totalProfit
                                    )}

                                </h2>

                                <Badge bg="primary">

                                    +18%

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Customer Growth

                                </small>

                                <h2 className="fw-bold mt-2">

                                    {analytics.customerGrowth}%

                                </h2>

                                <Badge bg="warning">

                                    Growing

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col xl={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body>

                                <small className="text-muted">

                                    Transaction Growth

                                </small>

                                <h2 className="fw-bold mt-2">

                                    {analytics.transactionGrowth}%

                                </h2>

                                <Badge bg="danger">

                                    High Volume

                                </Badge>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Growth Cards
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-success text-white">

                                Active Customers

                            </Card.Header>

                            <Card.Body>

                                <h2 className="fw-bold">

                                    {analytics.activeCustomers.toLocaleString()}

                                </h2>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-primary text-white">

                                Active Accounts

                            </Card.Header>

                            <Card.Body>

                                <h2 className="fw-bold">

                                    {analytics.activeAccounts.toLocaleString()}

                                </h2>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow rounded-4">

                            <Card.Header className="bg-warning">

                                Loan Growth

                            </Card.Header>

                            <Card.Body>

                                <h2 className="fw-bold">

                                    {analytics.loanGrowth}%

                                </h2>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Revenue Trend
                ========================================== */}

                <Row className="mb-4">

                    <Col lg={8} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                Revenue & Profit Trend

                            </Card.Header>

                            <Card.Body>

                                <ResponsiveContainer
                                    width="100%"
                                    height={350}
                                >

                                    <AreaChart
                                        data={revenueTrend}
                                    >

                                        <CartesianGrid
                                            strokeDasharray="3 3"
                                        />

                                        <XAxis
                                            dataKey="month"
                                        />

                                        <YAxis />

                                        <Tooltip />

                                        <Legend />

                                        <Area
                                            type="monotone"
                                            dataKey="revenue"
                                            stroke="#198754"
                                            fill="#198754"
                                        />

                                        <Area
                                            type="monotone"
                                            dataKey="profit"
                                            stroke="#0d6efd"
                                            fill="#0d6efd"
                                        />

                                    </AreaChart>

                                </ResponsiveContainer>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={4} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-warning">

                                Branch Contribution

                            </Card.Header>

                            <Card.Body>

                                <ResponsiveContainer
                                    width="100%"
                                    height={350}
                                >

                                    <PieChart>

                                        <Pie
                                            data={branchPerformance}
                                            dataKey="value"
                                            nameKey="name"
                                            outerRadius={110}
                                            label
                                        >

                                            {

                                                branchPerformance.map(

                                                    (entry,index)=>(

                                                        <Cell
                                                            key={index}
                                                            fill={
                                                                COLORS[index]
                                                            }
                                                        />

                                                    )

                                                )

                                            }

                                        </Pie>

                                        <Tooltip/>

                                        <Legend/>

                                    </PieChart>

                                </ResponsiveContainer>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Customer Growth
                ========================================== */}

                <Card className="border-0 shadow-sm rounded-4">

                    <Card.Header className="bg-dark text-white">

                        Customer Growth Analysis

                    </Card.Header>

                    <Card.Body>

                        <ResponsiveContainer
                            width="100%"
                            height={350}
                        >

                            <LineChart
                                data={customerGrowth}
                            >

                                <CartesianGrid
                                    strokeDasharray="3 3"
                                />

                                <XAxis
                                    dataKey="month"
                                />

                                <YAxis />

                                <Tooltip />

                                <Legend />

                                <Line
                                    type="monotone"
                                    dataKey="customers"
                                    stroke="#0d6efd"
                                    strokeWidth={3}
                                />

                            </LineChart>

                        </ResponsiveContainer>

                    </Card.Body>

                </Card>

                                {/* ==========================================
                        Executive Business Intelligence
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-graph-up-arrow text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    18.4%

                                </h3>

                                <p className="text-muted mb-0">

                                    Overall Growth

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-people-fill text-primary"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    94%

                                </h3>

                                <p className="text-muted mb-0">

                                    Customer Retention

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-bank2 text-warning"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    18

                                </h3>

                                <p className="text-muted mb-0">

                                    Active Branches

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={3} md={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Body className="text-center">

                                <i
                                    className="bi bi-award-fill text-danger"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="fw-bold mt-3">

                                    AAA

                                </h3>

                                <p className="text-muted mb-0">

                                    Financial Rating

                                </p>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Business Recommendations
                ========================================== */}

                <Row>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Executive Insights

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Customer acquisition increased by 18% this period.

                                    </li>

                                    <li className="mb-3">

                                        Loan portfolio continues to grow steadily.

                                    </li>

                                    <li className="mb-3">

                                        Deposit growth exceeds withdrawal growth.

                                    </li>

                                    <li className="mb-3">

                                        Pune branch remains the highest-performing branch.

                                    </li>

                                    <li>

                                        Overall bank profitability is improving consistently.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    Strategic Recommendations

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">

                                        Increase marketing in low-growth branches.

                                    </li>

                                    <li className="mb-3">

                                        Reduce NPA through proactive recovery.

                                    </li>

                                    <li className="mb-3">

                                        Expand digital banking adoption.

                                    </li>

                                    <li className="mb-3">

                                        Improve customer retention programs.

                                    </li>

                                    <li>

                                        Strengthen fraud detection and compliance monitoring.

                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Administrator Checklist
                ========================================== */}

                <Row>

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-info text-white">

                                <h5 className="mb-0">

                                    Analytics Review Checklist

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Revenue verified"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Profit analysis completed"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Branch performance reviewed"
                                />

                                <Form.Check
                                    checked
                                    readOnly
                                    className="mb-3"
                                    label="Business KPIs validated"
                                />

                                <Form.Group className="mt-4">

                                    <Form.Label>

                                        Executive Notes

                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Enter business insights..."
                                    />

                                </Form.Group>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Footer
                ========================================== */}

                <Row className="mt-4">

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Body className="text-center">

                                <h5 className="fw-bold">

                                    Executive Analytics Portal

                                </h5>

                                <p className="text-muted mb-4">

                                    Analyze financial performance, customer
                                    growth, branch productivity and strategic
                                    business metrics to support executive
                                    decision-making and sustainable banking
                                    growth.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-graph-up-arrow text-success me-2"></i>

                                        Growth Analytics

                                    </span>

                                    <span>

                                        <i className="bi bi-bar-chart-fill text-primary me-2"></i>

                                        Business Intelligence

                                    </span>

                                    <span>

                                        <i className="bi bi-bank2 text-warning me-2"></i>

                                        Executive Dashboard

                                    </span>

                                    <span>

                                        <i className="bi bi-shield-check text-danger me-2"></i>

                                        Strategic Decisions

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default Analytics;