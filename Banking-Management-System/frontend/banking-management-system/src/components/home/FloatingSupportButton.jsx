import { useState } from "react";
import { Button, Card } from "react-bootstrap";

const FloatingSupportButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}

            <Button
                variant="primary"
                className="rounded-circle shadow-lg position-fixed"
                onClick={() => setOpen(!open)}
                style={{
                    width: "65px",
                    height: "65px",
                    right: "25px",
                    bottom: "25px",
                    zIndex: 1055,
                }}
            >
                <i className="bi bi-headset fs-3"></i>
            </Button>

            {/* Support Card */}

            {open && (
                <Card
                    className="shadow-lg border-0 position-fixed"
                    style={{
                        width: "340px",
                        right: "25px",
                        bottom: "105px",
                        zIndex: 1055,
                        borderRadius: "18px",
                    }}
                >
                    <Card.Header className="bg-primary text-white">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h5 className="mb-0">
                                    Customer Support
                                </h5>

                                <small>
                                    Banking Help Center
                                </small>

                            </div>

                            <Button
                                size="sm"
                                variant="light"
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </Button>

                        </div>

                    </Card.Header>

                    <Card.Body>

                        <div className="mb-3">

                            <strong>
                                Hello 👋
                            </strong>

                            <p className="text-muted mt-2 mb-0">
                                How can we help you today?
                            </p>

                        </div>

                        <div className="d-grid gap-2">

                            <Button
                                variant="outline-primary"
                                className="text-start"
                            >
                                <i className="bi bi-person-plus-fill me-2"></i>

                                Open New Account
                            </Button>

                            <Button
                                variant="outline-primary"
                                className="text-start"
                            >
                                <i className="bi bi-arrow-left-right me-2"></i>

                                Fund Transfer Help
                            </Button>

                            <Button
                                variant="outline-primary"
                                className="text-start"
                            >
                                <i className="bi bi-credit-card-2-front me-2"></i>

                                Card Related Query
                            </Button>

                            <Button
                                variant="outline-primary"
                                className="text-start"
                            >
                                <i className="bi bi-cash-stack me-2"></i>

                                Loan Information
                            </Button>

                        </div>

                        <hr />

                        <div>

                            <h6 className="fw-bold">
                                Contact Support
                            </h6>

                            <p className="mb-2">
                                <i className="bi bi-telephone-fill text-primary me-2"></i>

                                1800-123-4567
                            </p>

                            <p className="mb-0">
                                <i className="bi bi-envelope-fill text-primary me-2"></i>

                                support@bankingmanagement.com
                            </p>

                        </div>

                    </Card.Body>

                </Card>
            )}
        </>
    );
};

export default FloatingSupportButton;