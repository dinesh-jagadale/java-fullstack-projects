import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";

const StatisticsCards = ({
    totalBalance,
    totalTransactions,
    activeBeneficiaries,
    activeLoans,
}) => {
    const statistics = [
        {
            id: 1,
            title: "Available Balance",
            value: `₹ ${Number(totalBalance).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
            })}`,
            icon: "bi bi-wallet2",
            color: "success",
            subtitle: "Across All Accounts",
        },
        {
            id: 2,
            title: "Transactions",
            value: totalTransactions,
            icon: "bi bi-arrow-left-right",
            color: "primary",
            subtitle: "This Month",
        },
        {
            id: 3,
            title: "Beneficiaries",
            value: activeBeneficiaries,
            icon: "bi bi-people-fill",
            color: "warning",
            subtitle: "Registered",
        },
        {
            id: 4,
            title: "Active Loans",
            value: activeLoans,
            icon: "bi bi-bank2",
            color: "danger",
            subtitle: "Running Loans",
        },
    ];

    return (
        <Row className="g-4">

            {statistics.map((item) => (

                <Col
                    xl={3}
                    lg={6}
                    md={6}
                    sm={6}
                    xs={12}
                    key={item.id}
                >

                    <Card
                        className="border-0 shadow-sm h-100"
                        style={{
                            borderRadius: "18px",
                            transition: "all .3s ease",
                        }}
                    >

                        <Card.Body>

                            <div className="d-flex justify-content-between align-items-start">

                                <div>

                                    <small className="text-muted">
                                        {item.title}
                                    </small>

                                    <h3 className="fw-bold mt-2 mb-1">
                                        {item.value}
                                    </h3>

                                    <small className="text-muted">
                                        {item.subtitle}
                                    </small>

                                </div>

                                <div
                                    className={`bg-${item.color} bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center`}
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                    }}
                                >

                                    <i
                                        className={`${item.icon} text-${item.color}`}
                                        style={{
                                            fontSize: "1.8rem",
                                        }}
                                    ></i>

                                </div>

                            </div>

                            <hr />

                            <div className="d-flex justify-content-between align-items-center">

                                <span className="text-success small">

                                    <i className="bi bi-arrow-up-right"></i>

                                    Updated

                                </span>

                                <small className="text-muted">
                                    Just Now
                                </small>

                            </div>

                        </Card.Body>

                    </Card>

                </Col>

            ))}

        </Row>
    );
};

StatisticsCards.propTypes = {
    totalBalance: PropTypes.number,
    totalTransactions: PropTypes.number,
    activeBeneficiaries: PropTypes.number,
    activeLoans: PropTypes.number,
};

StatisticsCards.defaultProps = {
    totalBalance: 0,
    totalTransactions: 0,
    activeBeneficiaries: 0,
    activeLoans: 0,
};

export default StatisticsCards;