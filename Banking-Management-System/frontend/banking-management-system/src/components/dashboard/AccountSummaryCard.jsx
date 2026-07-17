import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currencyFormatter";

const AccountSummaryCard = ({
    accountHolder,
    accountNumber,
    accountType,
    branchName,
    availableBalance,
    ledgerBalance,
    ifscCode,
    status,
    lastUpdated,
}) => {
    const getStatusVariant = () => {
        switch (status) {
            case "ACTIVE":
                return "success";

            case "PENDING":
                return "warning";

            case "BLOCKED":
                return "danger";

            case "FROZEN":
                return "secondary";

            default:
                return "secondary";
        }
    };

    return (
        <Card className="border-0 shadow-sm rounded-4 h-100">

            <Card.Header className="bg-primary text-white border-0 rounded-top-4">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h4 className="fw-bold mb-1">
                            Primary Account
                        </h4>

                        <small>
                            Account Summary
                        </small>

                    </div>

                    <i className="bi bi-bank2 fs-2"></i>

                </div>

            </Card.Header>

            <Card.Body className="p-4">

                {/* Account Holder */}

                <div className="mb-4">

                    <small className="text-muted">
                        Account Holder
                    </small>

                    <h5 className="fw-bold mb-0">
                        {accountHolder}
                    </h5>

                </div>

                {/* Balance */}

                <div
                    className="bg-light rounded-4 p-4 mb-4"
                >

                    <small className="text-muted">
                        Available Balance
                    </small>

                    <h2 className="fw-bold text-success mt-2">
                        {formatCurrency(availableBalance)}
                    </h2>

                    <small className="text-muted">
                        Ledger Balance :
                        {" "}
                        {formatCurrency(ledgerBalance)}
                    </small>

                </div>

                {/* Account Details */}

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <small className="text-muted d-block">
                            Account Number
                        </small>

                        <strong>
                            {accountNumber}
                        </strong>

                    </div>

                    <div className="col-md-6 mb-3">

                        <small className="text-muted d-block">
                            Account Type
                        </small>

                        <strong>
                            {accountType}
                        </strong>

                    </div>

                    <div className="col-md-6 mb-3">

                        <small className="text-muted d-block">
                            IFSC Code
                        </small>

                        <strong>
                            {ifscCode}
                        </strong>

                    </div>

                    <div className="col-md-6 mb-3">

                        <small className="text-muted d-block">
                            Branch
                        </small>

                        <strong>
                            {branchName}
                        </strong>

                    </div>

                </div>

                {/* Status */}

                <div className="d-flex justify-content-between align-items-center mt-3">

                    <div>

                        <small className="text-muted d-block">
                            Account Status
                        </small>

                        <Badge bg={getStatusVariant()}>
                            {status}
                        </Badge>

                    </div>

                    <div className="text-end">

                        <small className="text-muted d-block">
                            Last Updated
                        </small>

                        <strong>
                            {lastUpdated}
                        </strong>

                    </div>

                </div>

            </Card.Body>

            <Card.Footer className="bg-white border-0 rounded-bottom-4">

                <div className="d-flex flex-wrap gap-2">

                    <Button
                        as={Link}
                        to="/customer/transactions"
                        variant="primary"
                    >
                        <i className="bi bi-clock-history me-2"></i>

                        Transactions
                    </Button>

                    <Button
                        as={Link}
                        to="/customer/transfer-money"
                        variant="success"
                    >
                        <i className="bi bi-arrow-left-right me-2"></i>

                        Transfer
                    </Button>

                    <Button
                        as={Link}
                        to="/customer/accounts"
                        variant="outline-primary"
                    >
                        <i className="bi bi-bank me-2"></i>

                        Accounts
                    </Button>

                </div>

            </Card.Footer>

        </Card>
    );
};

AccountSummaryCard.propTypes = {
    accountHolder: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    accountType: PropTypes.string.isRequired,
    branchName: PropTypes.string.isRequired,
    availableBalance: PropTypes.number.isRequired,
    ledgerBalance: PropTypes.number.isRequired,
    ifscCode: PropTypes.string.isRequired,
    status: PropTypes.string,
    lastUpdated: PropTypes.string.isRequired,
};

AccountSummaryCard.defaultProps = {
    status: "ACTIVE",
};

export default AccountSummaryCard;