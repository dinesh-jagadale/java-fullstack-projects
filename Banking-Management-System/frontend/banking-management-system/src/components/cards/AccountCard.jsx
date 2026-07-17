import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";

const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
    }).format(amount);
};

const AccountCard = ({
    accountNumber,
    accountHolder,
    accountType,
    availableBalance,
    branchName,
    ifscCode,
    status,
    onView,
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
                transition: "all .3s ease",
            }}
        >
            <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">

                <span className="fw-bold">
                    {accountType}
                </span>

                <Badge bg={getStatusVariant()}>
                    {status}
                </Badge>

            </Card.Header>

            <Card.Body>

                <div className="mb-3">

                    <small className="text-muted">
                        Account Holder
                    </small>

                    <h5 className="fw-bold mb-0">
                        {accountHolder}
                    </h5>

                </div>

                <div className="mb-3">

                    <small className="text-muted">
                        Account Number
                    </small>

                    <div className="fw-semibold">
                        {accountNumber}
                    </div>

                </div>

                <div className="mb-3">

                    <small className="text-muted">
                        Branch
                    </small>

                    <div>
                        {branchName}
                    </div>

                </div>

                <div className="mb-3">

                    <small className="text-muted">
                        IFSC Code
                    </small>

                    <div>
                        {ifscCode}
                    </div>

                </div>

                <div className="mb-4">

                    <small className="text-muted">
                        Available Balance
                    </small>

                    <h4 className="fw-bold text-success mt-1">
                        {formatCurrency(availableBalance)}
                    </h4>

                </div>

                <div className="d-grid">

                    <Button
                        variant="outline-primary"
                        onClick={onView}
                    >
                        View Details
                    </Button>

                </div>

            </Card.Body>
        </Card>
    );
};

AccountCard.propTypes = {
    accountNumber: PropTypes.string.isRequired,
    accountHolder: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    availableBalance: PropTypes.number.isRequired,
    branchName: PropTypes.string.isRequired,
    ifscCode: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
        "ACTIVE",
        "PENDING",
        "BLOCKED",
        "CLOSED",
    ]).isRequired,
    onView: PropTypes.func,
};

AccountCard.defaultProps = {
    onView: () => {},
};

export default AccountCard;