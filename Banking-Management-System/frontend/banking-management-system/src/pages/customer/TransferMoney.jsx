import { useState } from "react";
import {
    Alert,
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
} from "react-bootstrap";

import CustomerLayout from "../../components/layout/CustomerLayout";
import { formatCurrency } from "../../utils/currencyFormatter";

const TransferMoney = () => {

    /* ==========================================
            Form State
    ========================================== */

    const [loading, setLoading] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    /* ==========================================
            Customer Accounts
    ========================================== */

    const [accounts] = useState([
        {
            id: 1,
            number: "XXXX XXXX 4589",
            type: "Savings",
            balance: 245860.55,
        },
        {
            id: 2,
            number: "XXXX XXXX 8215",
            type: "Current",
            balance: 80550.00,
        },
    ]);

    /* ==========================================
            Beneficiaries
    ========================================== */

    const [beneficiaries] = useState([
        {
            id: 1,
            name: "Rahul Sharma",
            accountNumber: "XXXX XXXX 1122",
            bank: "State Bank of India",
        },
        {
            id: 2,
            name: "Priya Patil",
            accountNumber: "XXXX XXXX 8877",
            bank: "HDFC Bank",
        },
    ]);

    /* ==========================================
            Transfer Form
    ========================================== */

    const [transfer, setTransfer] = useState({

        fromAccount: "",

        beneficiary: "",

        transferMode: "IMPS",

        amount: "",

        remarks: "",

    });

    /* ==========================================
            Handle Input
    ========================================== */

    const handleChange = (event) => {

        const { name, value } = event.target;

        setTransfer((previous) => ({
            ...previous,
            [name]: value,
        }));

    };

    /* ==========================================
            Submit
    ========================================== */

    const handleSubmit = async (event) => {

        event.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (
            !transfer.fromAccount ||
            !transfer.beneficiary ||
            !transfer.amount
        ) {

            setErrorMessage(
                "Please fill all required fields."
            );

            return;

        }

        try {

            setLoading(true);

            /*
            await transactionService.transferMoney(
                transfer
            );
            */

            await new Promise(resolve =>
                setTimeout(resolve, 1200)
            );

            setSuccessMessage(
                "Fund transferred successfully."
            );

            setTransfer({
                fromAccount: "",
                beneficiary: "",
                transferMode: "IMPS",
                amount: "",
                remarks: "",
            });

        } catch (error) {

            setErrorMessage(
                "Unable to process transaction."
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        

            <Container fluid className="py-4">

                {/* Header */}

                <Row className="mb-4">

                    <Col>

                        <h2 className="fw-bold">

                            Transfer Money

                        </h2>

                        <p className="text-muted">

                            Securely transfer money using
                            IMPS, NEFT or RTGS.

                        </p>

                    </Col>

                </Row>

                {successMessage && (

                    <Alert variant="success">

                        {successMessage}

                    </Alert>

                )}

                {errorMessage && (

                    <Alert variant="danger">

                        {errorMessage}

                    </Alert>

                )}

                <Row>

                    {/* Transfer Form */}

                    <Col lg={8}>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-primary text-white">

                                <h5 className="mb-0">

                                    Fund Transfer

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <Form onSubmit={handleSubmit}>

                                    {/* ==============================
                                            From Account
                                    ============================== */}

                                    <Row>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                From Account
                                            </Form.Label>

                                            <Form.Select
                                                name="fromAccount"
                                                value={transfer.fromAccount}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Account
                                                </option>

                                                {accounts.map((account) => (

                                                    <option
                                                        key={account.id}
                                                        value={account.number}
                                                    >
                                                        {account.type}
                                                        {" - "}
                                                        {account.number}
                                                    </option>

                                                ))}

                                            </Form.Select>

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                Beneficiary
                                            </Form.Label>

                                            <Form.Select
                                                name="beneficiary"
                                                value={transfer.beneficiary}
                                                onChange={handleChange}
                                                required
                                            >

                                                <option value="">
                                                    Select Beneficiary
                                                </option>

                                                {beneficiaries.map((person) => (

                                                    <option
                                                        key={person.id}
                                                        value={person.name}
                                                    >
                                                        {person.name}
                                                        {" - "}
                                                        {person.bank}
                                                    </option>

                                                ))}

                                            </Form.Select>

                                        </Col>

                                    </Row>

                                    {/* ==============================
                                            Transfer Mode
                                    ============================== */}

                                    <Row>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                Transfer Mode
                                            </Form.Label>

                                            <Form.Select
                                                name="transferMode"
                                                value={transfer.transferMode}
                                                onChange={handleChange}
                                            >

                                                <option value="IMPS">
                                                    IMPS
                                                </option>

                                                <option value="NEFT">
                                                    NEFT
                                                </option>

                                                <option value="RTGS">
                                                    RTGS
                                                </option>

                                                <option value="UPI">
                                                    UPI
                                                </option>

                                            </Form.Select>

                                        </Col>

                                        <Col md={6} className="mb-3">

                                            <Form.Label>
                                                Amount
                                            </Form.Label>

                                            <Form.Control
                                                type="number"
                                                name="amount"
                                                min="1"
                                                placeholder="Enter Amount"
                                                value={transfer.amount}
                                                onChange={handleChange}
                                                required
                                            />

                                        </Col>

                                    </Row>

                                    {/* ==============================
                                            Remarks
                                    ============================== */}

                                    <div className="mb-4">

                                        <Form.Label>
                                            Remarks
                                        </Form.Label>

                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="remarks"
                                            placeholder="Purpose of transfer (optional)"
                                            value={transfer.remarks}
                                            onChange={handleChange}
                                        />

                                    </div>

                                    {/* ==============================
                                            Submit Button
                                    ============================== */}

                                    <div className="d-flex justify-content-end">

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            disabled={loading}
                                        >

                                            {loading ? (
                                                <>
                                                    <span
                                                        className="spinner-border spinner-border-sm me-2"
                                                        role="status"
                                                    ></span>

                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-send-fill me-2"></i>

                                                    Transfer Money
                                                </>
                                            )}

                                        </Button>

                                    </div>

                                </Form>

                            </Card.Body>

                        </Card>

                    </Col>

                    {/* ==================================
                            Transfer Summary
                    ================================== */}

                    <Col lg={4}>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Header className="bg-success text-white">

                                <h5 className="mb-0">

                                    Transfer Summary

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <p className="text-muted">

                                    Review your transaction before submitting.

                                </p>

                                <hr />

                                <div className="mb-3">

                                    <small className="text-muted d-block">
                                        From Account
                                    </small>

                                    <strong>
                                        {transfer.fromAccount || "-"}
                                    </strong>

                                </div>

                                <div className="mb-3">

                                    <small className="text-muted d-block">
                                        Beneficiary
                                    </small>

                                    <strong>
                                        {transfer.beneficiary || "-"}
                                    </strong>

                                </div>

                                <div className="mb-3">

                                    <small className="text-muted d-block">
                                        Transfer Mode
                                    </small>

                                    <strong>
                                        {transfer.transferMode}
                                    </strong>

                                </div>

                                <div className="mb-3">

                                    <small className="text-muted d-block">
                                        Amount
                                    </small>

                                    <h4 className="text-success fw-bold">

                                        {transfer.amount
                                            ? formatCurrency(Number(transfer.amount))
                                            : "₹0.00"}

                                    </h4>

                                </div>

                                <hr />

                                <div className="d-flex justify-content-between">

                                    <span className="text-muted">
                                        Processing Fee
                                    </span>

                                    <strong>
                                        ₹0.00
                                    </strong>

                                </div>

                                <div className="d-flex justify-content-between mt-2">

                                    <span className="fw-bold">
                                        Total Debit
                                    </span>

                                    <strong className="text-danger">

                                        {transfer.amount
                                            ? formatCurrency(Number(transfer.amount))
                                            : "₹0.00"}

                                    </strong>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                                {/* ==========================================
                        Banking Information
                ========================================== */}

                <Row className="mt-4">

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-warning">

                                <h5 className="mb-0">

                                    <i className="bi bi-shield-lock-fill me-2"></i>

                                    Safe Banking Tips

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <ul className="mb-0">

                                    <li className="mb-3">
                                        Never share your OTP or banking PIN
                                        with anyone.
                                    </li>

                                    <li className="mb-3">
                                        Always verify the beneficiary details
                                        before confirming a transfer.
                                    </li>

                                    <li className="mb-3">
                                        Ensure you are using a trusted and
                                        secure internet connection.
                                    </li>

                                    <li className="mb-3">
                                        Review the transfer amount carefully
                                        before submitting.
                                    </li>

                                    <li>
                                        Contact customer support immediately
                                        if you notice any suspicious activity.
                                    </li>

                                </ul>

                            </Card.Body>

                        </Card>

                    </Col>

                    <Col lg={6} className="mb-4">

                        <Card className="border-0 shadow-sm rounded-4 h-100">

                            <Card.Header className="bg-info text-white">

                                <h5 className="mb-0">

                                    <i className="bi bi-info-circle-fill me-2"></i>

                                    Transaction Information

                                </h5>

                            </Card.Header>

                            <Card.Body>

                                <table className="table table-borderless mb-0">

                                    <tbody>

                                        <tr>

                                            <td>
                                                IMPS
                                            </td>

                                            <td className="text-end">
                                                24 × 7 Instant
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                NEFT
                                            </td>

                                            <td className="text-end">
                                                RBI Settlement
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                RTGS
                                            </td>

                                            <td className="text-end">
                                                High Value Transfer
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                UPI
                                            </td>

                                            <td className="text-end">
                                                Instant Payment
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                Daily Transfer Limit
                                            </td>

                                            <td className="text-end fw-bold">
                                                ₹10,00,000
                                            </td>

                                        </tr>

                                        <tr>

                                            <td>
                                                Processing Fee
                                            </td>

                                            <td className="text-end text-success fw-bold">
                                                FREE
                                            </td>

                                        </tr>

                                    </tbody>

                                </table>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

                {/* ==========================================
                        Footer Information
                ========================================== */}

                <Row>

                    <Col>

                        <Card className="border-0 shadow-sm rounded-4">

                            <Card.Body className="text-center">

                                <h5 className="fw-bold">

                                    Secure Digital Banking

                                </h5>

                                <p className="text-muted mb-4">

                                    Every transfer is protected using
                                    enterprise-grade authentication,
                                    encrypted communication and secure
                                    transaction validation.

                                </p>

                                <div className="d-flex justify-content-center flex-wrap gap-4">

                                    <span>

                                        <i className="bi bi-shield-check text-success me-2"></i>

                                        JWT Security

                                    </span>

                                    <span>

                                        <i className="bi bi-lock-fill text-primary me-2"></i>

                                        Encrypted Transactions

                                    </span>

                                    <span>

                                        <i className="bi bi-bank2 text-warning me-2"></i>

                                        RBI Guidelines

                                    </span>

                                    <span>

                                        <i className="bi bi-clock-history text-danger me-2"></i>

                                        Real-Time Processing

                                    </span>

                                </div>

                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>

        

    );

};

export default TransferMoney;