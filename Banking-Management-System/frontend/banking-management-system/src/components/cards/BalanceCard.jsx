import PropTypes from "prop-types";
import { Badge, Card } from "react-bootstrap";
import { formatCurrency } from "../../utils/currencyFormatter";

const BalanceCard = ({
    title,
    balance,
    accountNumber,
    accountType,
    status = "ACTIVE",
    icon = "bi bi-wallet2",
    onClick,
}) => {
    const getStatusVariant = () => {
        switch (status) {
            case "ACTIVE":
                return "success";

            case "PENDING":
                return "warning";

            case "BLOCKED":
                return "danger";

            case "CLOSED":
                return "secondary";

            default:
                return "secondary";
        }
    };

    return (
        <Card
            className="border-0 shadow-sm h-100"
            style={{
                cursor: onClick ? "pointer" : "default",
                transition: "all 0.3s ease",
            }}
            onClick={onClick}
        >
            <Card.Body>

                <div className="d-flex justify-content-between align-items-start">

                    <div className="flex-grow-1">

                        <p className="text-muted mb-1">
                            {title}
                        </p>

                        <h3 className="fw-bold text-success mb-3">
                            {formatCurrency(balance)}
                        </h3>

                        <div className="mb-2">
                            <small className="text-muted d-block">
                                Account Number
                            </small>

                            <span className="fw-semibold">
                                {accountNumber}
                            </span>
                        </div>

                        <div className="d-flex gap-2 mt-3">

                            <Badge bg="primary">
                                {accountType}
                            </Badge>

                            <Badge bg={getStatusVariant()}>
                                {status}
                            </Badge>

                        </div>

                    </div>

                    <div
                        className="bg-success rounded-circle d-flex justify-content-center align-items-center text-white ms-3"
                        style={{
                            width: "60px",
                            height: "60px",
                            flexShrink: 0,
                        }}
                    >
                        <i className={`${icon} fs-3`} />
                    </div>

                </div>

            </Card.Body>
        </Card>
    );
};

BalanceCard.propTypes = {
    title: PropTypes.string.isRequired,

    balance: PropTypes.number.isRequired,

    accountNumber: PropTypes.string.isRequired,

    accountType: PropTypes.string.isRequired,

    status: PropTypes.oneOf([
        "ACTIVE",
        "PENDING",
        "BLOCKED",
        "CLOSED",
    ]),

    icon: PropTypes.string,

    onClick: PropTypes.func,
};

BalanceCard.defaultProps = {
    status: "ACTIVE",
    icon: "bi bi-wallet2",
    onClick: undefined,
};

export default BalanceCard;