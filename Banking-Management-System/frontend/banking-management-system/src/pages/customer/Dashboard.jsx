import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";

import CustomerLayout from "../../components/layout/CustomerLayout";

import WelcomeCard from "../../components/dashboard/WelcomeCard";
import StatisticsCards from "../../components/dashboard/StatisticsCards";
import AccountSummaryCard from "../../components/dashboard/AccountSummaryCard";
import QuickActions from "../../components/dashboard/QuickActions";
import DashboardChart from "../../components/dashboard/DashboardChart";
import RecentTransactionTable from "../../components/dashboard/RecentTransactionTable";
import NotificationCard from "../../components/dashboard/NotificationCard";

// Future Backend Service
// import dashboardService from "../../services/dashboardService";

const Dashboard = () => {

    /* ===========================================
            Page States
    ============================================ */

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [selectedPeriod, setSelectedPeriod] =
        useState("monthly");

    /* ===========================================
            Customer Details
    ============================================ */

    const [customer, setCustomer] = useState({

        customerName: "Dinesh Jagadale",

        customerId: "CUS100001",

        accountType: "Savings Account",

        lastLogin: "Today, 09:15 AM",

        profileCompletion: 95,

        kycStatus: "VERIFIED",

    });

    /* ===========================================
            Statistics
    ============================================ */

    const [statistics, setStatistics] = useState({

        totalBalance: 245860,

        totalTransactions: 148,

        activeBeneficiaries: 8,

        activeLoans: 1,

    });

    /* ===========================================
            Primary Account
    ============================================ */

    const [account, setAccount] = useState({

        accountHolder: "Dinesh Jagadale",

        accountNumber: "XXXX XXXX 4589",

        accountType: "Savings",

        branchName: "Baramati Branch",

        availableBalance: 245860,

        ledgerBalance: 245860,

        ifscCode: "SBIN0004589",

        status: "ACTIVE",

        lastUpdated: "Today",

    });

    /* ===========================================
            Dashboard Chart
    ============================================ */

    const [chartData, setChartData] = useState({

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
        ],

        deposits: [
            45000,
            38000,
            56000,
            42000,
            61000,
            58000,
        ],

        withdrawals: [
            18000,
            12000,
            20000,
            16000,
            24000,
            19000,
        ],

        transfers: [
            12000,
            15000,
            18000,
            17000,
            22000,
            26000,
        ],

    });

    /* ===========================================
            Recent Transactions
    ============================================ */

    const [transactions, setTransactions] =
        useState([

            {

                id: 1,

                referenceNo: "TXN983421",

                type: "DEPOSIT",

                description: "Salary Credited",

                amount: 55000,

                status: "SUCCESS",

                transactionDate: "2026-07-05",

            },

            {

                id: 2,

                referenceNo: "TXN983422",

                type: "TRANSFER",

                description: "Transfer to Rahul",

                amount: 3500,

                status: "SUCCESS",

                transactionDate: "2026-07-07",

            },

            {

                id: 3,

                referenceNo: "TXN983423",

                type: "WITHDRAW",

                description: "ATM Withdrawal",

                amount: 5000,

                status: "SUCCESS",

                transactionDate: "2026-07-09",

            },

        ]);

    /* ===========================================
            Notifications
    ============================================ */

    const [notifications, setNotifications] =
        useState([

            {

                id: 1,

                title: "Salary Credited",

                message:
                    "₹55,000 credited successfully.",

                type: "SUCCESS",

                time: "10 min ago",

                read: false,

            },

            {

                id: 2,

                title: "Debit Card Issued",

                message:
                    "Your debit card has been dispatched.",

                type: "INFO",

                time: "Yesterday",

                read: true,

            },

            {

                id: 3,

                title: "EMI Reminder",

                message:
                    "Home Loan EMI due on 15 July.",

                type: "WARNING",

                time: "2 days ago",

                read: false,

            },

        ]);

    /* ===========================================
            Future Backend API
    ============================================ */

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                setLoading(true);

                /*
                const response =
                    await dashboardService.getDashboard();

                setCustomer(response.customer);
                setStatistics(response.statistics);
                setAccount(response.account);
                setChartData(response.chart);
                setTransactions(response.transactions);
                setNotifications(response.notifications);
                */

                await new Promise(resolve =>
                    setTimeout(resolve, 1000)
                );

            }
            catch (err) {

                setError(
                    "Unable to load dashboard."
                );

            }
            finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

        /* ===========================================
            Event Handlers
    ============================================ */

    const handlePeriodChange = (period) => {
        setSelectedPeriod(period);

        // Future Backend Integration
        // dashboardService.getChartData(period);
    };

    const handleQuickAction = (action) => {
        console.log("Selected Action :", action.title);

        // Future:
        // Navigate or call backend APIs
    };

    /* ===========================================
            Loading Screen
    ============================================ */

    if (loading) {
        return (

                <Container className="py-5">

                    <div
                        className="d-flex flex-column justify-content-center align-items-center"
                        style={{
                            minHeight: "70vh",
                        }}
                    >
                        <Spinner
                            animation="border"
                            variant="primary"
                            style={{
                                width: "4rem",
                                height: "4rem",
                            }}
                        />

                        <h4 className="mt-4">
                            Loading Dashboard...
                        </h4>

                        <p className="text-muted">
                            Please wait while we fetch your banking data.
                        </p>

                    </div>

                </Container>

        );
    }

    /* ===========================================
            Error Screen
    ============================================ */

    if (error) {
        return (

                <Container className="py-5">

                    <Alert variant="danger">

                        <Alert.Heading>
                            Unable to Load Dashboard
                        </Alert.Heading>

                        <p className="mb-0">
                            {error}
                        </p>

                    </Alert>

                </Container>

        );
    }

    /* ===========================================
            Dashboard UI
    ============================================ */

    return (


            <Container fluid className="py-4">

                {/* Welcome Card */}

                <Row className="mb-4">

                    <Col>

                        <WelcomeCard
                            customerName={customer.customerName}
                            customerId={customer.customerId}
                            accountType={customer.accountType}
                            lastLogin={customer.lastLogin}
                            profileCompletion={customer.profileCompletion}
                            kycStatus={customer.kycStatus}
                        />

                    </Col>

                </Row>

                {/* Statistics */}

                <Row className="mb-4">

                    <Col>

                        <StatisticsCards
                            totalBalance={statistics.totalBalance}
                            totalTransactions={statistics.totalTransactions}
                            activeBeneficiaries={statistics.activeBeneficiaries}
                            activeLoans={statistics.activeLoans}
                        />

                    </Col>

                </Row>

                {/* Account Summary + Notifications */}

                <Row className="g-4 mb-4">

                    <Col lg={8}>

                        <AccountSummaryCard
                            accountHolder={account.accountHolder}
                            accountNumber={account.accountNumber}
                            accountType={account.accountType}
                            branchName={account.branchName}
                            availableBalance={account.availableBalance}
                            ledgerBalance={account.ledgerBalance}
                            ifscCode={account.ifscCode}
                            status={account.status}
                            lastUpdated={account.lastUpdated}
                        />

                    </Col>

                    <Col lg={4}>

                        <NotificationCard
                            notifications={notifications}
                        />

                    </Col>

                </Row>

                {/* Quick Banking Services */}

                <Row className="mb-4">

                    <Col>

                        <QuickActions
                            onActionClick={handleQuickAction}
                        />

                    </Col>

                </Row>

                {/* Banking Analytics */}

                <Row className="mb-4">

                    <Col>

                        <DashboardChart
                            labels={chartData.labels}
                            deposits={chartData.deposits}
                            withdrawals={chartData.withdrawals}
                            transfers={chartData.transfers}
                            selectedPeriod={selectedPeriod}
                            onPeriodChange={handlePeriodChange}
                        />

                    </Col>

                </Row>

                                {/* ===========================================
                        Recent Transactions
                ============================================ */}

                <Row className="mb-4">

                    <Col>

                        <RecentTransactionTable
                            transactions={transactions}
                        />

                    </Col>

                </Row>

                {/* ===========================================
                        Footer Information
                ============================================ */}

                <Row>

                    <Col>

                        <div
                            className="bg-white rounded-4 shadow-sm p-4 text-center"
                        >

                            <h5 className="fw-bold mb-3">

                                Banking Management System

                            </h5>

                            <p className="text-muted mb-2">

                                Secure Digital Banking Platform

                            </p>

                            <div className="d-flex justify-content-center flex-wrap gap-4 mt-3">

                                <div>

                                    <i className="bi bi-shield-check text-success me-2"></i>

                                    Secure Banking

                                </div>

                                <div>

                                    <i className="bi bi-lock-fill text-primary me-2"></i>

                                    JWT Authentication

                                </div>

                                <div>

                                    <i className="bi bi-bank2 text-warning me-2"></i>

                                    RBI Guidelines Ready

                                </div>

                                <div>

                                    <i className="bi bi-clock-history text-danger me-2"></i>

                                    Real-Time Transactions

                                </div>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>


    );

};

export default Dashboard;