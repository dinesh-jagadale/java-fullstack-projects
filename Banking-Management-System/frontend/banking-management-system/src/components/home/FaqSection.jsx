import { Accordion, Col, Container, Row } from "react-bootstrap";

const FaqSection = () => {
    const faqs = [
        {
            id: "0",
            question: "How can I open a Savings Account?",
            answer:
                "Click on 'Open Account' or 'Register', complete the registration process, submit your KYC documents, and wait for employee verification before your account is activated.",
        },
        {
            id: "1",
            question: "Which account types are available?",
            answer:
                "The Banking Management System supports Savings Accounts and Current Accounts. Additional account types can be added in future versions.",
        },
        {
            id: "2",
            question: "Is online fund transfer secure?",
            answer:
                "Yes. All banking requests are authenticated using JWT, passwords are encrypted, and role-based authorization protects access to banking resources.",
        },
        {
            id: "3",
            question: "How do I apply for a loan?",
            answer:
                "After logging in, navigate to the Loan module, choose a loan type, submit the application, and track its status from your customer dashboard.",
        },
        {
            id: "4",
            question: "Can I manage multiple bank accounts?",
            answer:
                "Yes. A customer can own multiple accounts, such as Savings and Current Accounts, and manage them from a single dashboard.",
        },
        {
            id: "5",
            question: "What banking services are available online?",
            answer:
                "Customers can check balances, transfer funds, manage beneficiaries, view transaction history, request loans, manage cards, update profiles, and receive notifications.",
        },
        {
            id: "6",
            question: "How are my transactions protected?",
            answer:
                "Every transaction is validated by the backend, recorded in the transaction history, and protected using Spring Security, JWT authentication, and encrypted communication.",
        },
        {
            id: "7",
            question: "What should I do if I forget my password?",
            answer:
                "Use the 'Forgot Password' option on the login page. After identity verification, you can securely reset your password.",
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                backgroundColor: "#f8f9fa",
            }}
        >
            <Container>

                {/* Section Header */}

                <Row className="mb-5">

                    <Col
                        lg={8}
                        className="mx-auto text-center"
                    >

                        <span className="badge bg-primary px-3 py-2 fs-6 mb-3">
                            Frequently Asked Questions
                        </span>

                        <h2 className="display-5 fw-bold">
                            Have Questions?
                        </h2>

                        <p
                            className="text-muted mt-3"
                            style={{
                                maxWidth: "720px",
                                margin: "0 auto",
                            }}
                        >
                            Find answers to common questions about account
                            opening, online banking, fund transfers, loans,
                            cards, and platform security.
                        </p>

                    </Col>

                </Row>

                {/* FAQ */}

                <Row className="justify-content-center">

                    <Col lg={9}>

                        <Accordion alwaysOpen>

                            {faqs.map((faq) => (

                                <Accordion.Item
                                    eventKey={faq.id}
                                    key={faq.id}
                                    className="mb-3 border rounded-3 shadow-sm"
                                >

                                    <Accordion.Header>

                                        <strong>
                                            {faq.question}
                                        </strong>

                                    </Accordion.Header>

                                    <Accordion.Body>

                                        {faq.answer}

                                    </Accordion.Body>

                                </Accordion.Item>

                            ))}

                        </Accordion>

                    </Col>

                </Row>

            </Container>
        </section>
    );
};

export default FaqSection;