import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const QuickActions = ({ onActionClick }) => {
    const navigate = useNavigate();

    const actions = [
        {
            id: 1,
            title: "Transfer Money",
            subtitle: "NEFT / RTGS / IMPS",
            icon: "bi bi-arrow-left-right",
            color: "primary",
            route: "/customer/transfer-money",
        },
        {
            id: 2,
            title: "Deposit",
            subtitle: "Cash Deposit",
            icon: "bi bi-wallet2",
            color: "success",
            route: "/customer/deposit",
        },
        {
            id: 3,
            title: "Withdraw",
            subtitle: "Withdraw Funds",
            icon: "bi bi-cash-stack",
            color: "danger",
            route: "/customer/withdraw",
        },
        {
            id: 4,
            title: "Beneficiaries",
            subtitle: "Manage Payees",
            icon: "bi bi-people-fill",
            color: "warning",
            route: "/customer/beneficiaries",
        },
        {
            id: 5,
            title: "Mini Statement",
            subtitle: "Recent Transactions",
            icon: "bi bi-receipt-cutoff",
            color: "info",
            route: "/customer/transactions",
        },
        {
            id: 6,
            title: "Debit Cards",
            subtitle: "Manage Cards",
            icon: "bi bi-credit-card-2-front-fill",
            color: "secondary",
            route: "/customer/cards",
        },
        {
            id: 7,
            title: "Loans",
            subtitle: "Apply & Track",
            icon: "bi bi-bank2",
            color: "dark",
            route: "/customer/loans",
        },
        {
            id: 8,
            title: "Profile",
            subtitle: "KYC & Settings",
            icon: "bi bi-person-circle",
            color: "primary",
            route: "/customer/profile",
        },
    ];

    const handleClick = (action) => {
        if (onActionClick) {
            onActionClick(action);
        }

        navigate(action.route);
    };

    return (
        <Card className="border-0 shadow-sm rounded-4">

            <Card.Header className="bg-white border-0 py-3">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h4 className="fw-bold mb-1">
                            Quick Banking Services
                        </h4>

                        <small className="text-muted">
                            Frequently Used Banking Operations
                        </small>

                    </div>

                    <i className="bi bi-grid-3x3-gap-fill text-primary fs-3"></i>

                </div>

            </Card.Header>

            <Card.Body>

                <Row className="g-4">

                    {actions.map((action) => (

                        <Col
                            xl={3}
                            lg={4}
                            md={6}
                            sm={6}
                            xs={12}
                            key={action.id}
                        >

                            <Card
                                className="border h-100 text-center cursor-pointer"
                                style={{
                                    borderRadius: "16px",
                                    cursor: "pointer",
                                    transition: "all .3s ease",
                                }}
                                onClick={() => handleClick(action)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(-6px)";
                                    e.currentTarget.style.boxShadow =
                                        "0 12px 25px rgba(0,0,0,.12)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform =
                                        "translateY(0)";
                                    e.currentTarget.style.boxShadow = "";
                                }}
                            >

                                <Card.Body className="py-4">

                                    <div
                                        className={`bg-${action.color} bg-opacity-10 rounded-circle d-inline-flex justify-content-center align-items-center mb-3`}
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                        }}
                                    >

                                        <i
                                            className={`${action.icon} text-${action.color}`}
                                            style={{
                                                fontSize: "2rem",
                                            }}
                                        ></i>

                                    </div>

                                    <h6 className="fw-bold">
                                        {action.title}
                                    </h6>

                                    <small className="text-muted">
                                        {action.subtitle}
                                    </small>

                                </Card.Body>

                            </Card>

                        </Col>

                    ))}

                </Row>

            </Card.Body>

        </Card>
    );
};

QuickActions.propTypes = {
    onActionClick: PropTypes.func,
};

QuickActions.defaultProps = {
    onActionClick: null,
};

export default QuickActions;