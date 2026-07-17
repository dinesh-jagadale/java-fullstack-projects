import PropTypes from "prop-types";
import {
    Badge,
    Button,
    Card,
    Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { formatCurrency } from "../../utils/currencyFormatter";
import { formatDate } from "../../utils/dateUtils";

const RecentTransactionTable = ({
    transactions,
}) => {

    const getTypeBadge = (type) => {

        switch (type) {

            case "DEPOSIT":
                return "success";

            case "WITHDRAW":
                return "danger";

            case "TRANSFER":
                return "primary";

            case "UPI":
                return "info";

            default:
                return "secondary";

        }

    };

    const getStatusBadge = (status) => {

        switch (status) {

            case "SUCCESS":
                return "success";

            case "PENDING":
                return "warning";

            case "FAILED":
                return "danger";

            default:
                return "secondary";

        }

    };

    return (

        <Card className="border-0 shadow-sm rounded-4">

            <Card.Header className="bg-white border-0 py-3">

                <div className="d-flex justify-content-between align-items-center">

                    <div>

                        <h4 className="fw-bold mb-1">
                            Recent Transactions
                        </h4>

                        <small className="text-muted">
                            Last Banking Activities
                        </small>

                    </div>

                    <Button
                        as={Link}
                        to="/customer/transactions"
                        variant="outline-primary"
                    >
                        View All
                    </Button>

                </div>

            </Card.Header>

            <Card.Body className="p-0">

                <Table
                    hover
                    responsive
                    className="align-middle mb-0"
                >

                    <thead className="table-light">

                        <tr>

                            <th>Transaction ID</th>

                            <th>Type</th>

                            <th>Description</th>

                            <th>Date</th>

                            <th className="text-end">
                                Amount
                            </th>

                            <th className="text-center">
                                Status
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {transactions.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="text-center py-5 text-muted"
                                >

                                    No Transactions Available

                                </td>

                            </tr>

                        ) : (

                            transactions.map((transaction) => (

                                <tr key={transaction.id}>

                                    <td>

                                        <strong>
                                            {transaction.referenceNo}
                                        </strong>

                                    </td>

                                    <td>

                                        <Badge
                                            bg={getTypeBadge(transaction.type)}
                                        >
                                            {transaction.type}
                                        </Badge>

                                    </td>

                                    <td>

                                        {transaction.description}

                                    </td>

                                    <td>

                                        {formatDate(transaction.transactionDate)}

                                    </td>

                                    <td
                                        className={`text-end fw-bold ${
                                            transaction.type === "DEPOSIT"
                                                ? "text-success"
                                                : "text-danger"
                                        }`}
                                    >

                                        {transaction.type === "DEPOSIT"
                                            ? "+"
                                            : "-"}

                                        {formatCurrency(transaction.amount)}

                                    </td>

                                    <td className="text-center">

                                        <Badge
                                            bg={getStatusBadge(transaction.status)}
                                        >
                                            {transaction.status}
                                        </Badge>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </Table>

            </Card.Body>

        </Card>

    );

};

RecentTransactionTable.propTypes = {

    transactions: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]).isRequired,

            referenceNo: PropTypes.string.isRequired,

            type: PropTypes.string.isRequired,

            description: PropTypes.string.isRequired,

            amount: PropTypes.number.isRequired,

            status: PropTypes.string.isRequired,

            transactionDate: PropTypes.string.isRequired,

        })

    ),

};

RecentTransactionTable.defaultProps = {

    transactions: [],

};

export default RecentTransactionTable;