import { Col, Container, Row } from "react-bootstrap";

import ProductCard from "./ProductCard";

const ProductsSection = () => {
    const bankingProducts = [
        {
            id: 1,
            icon: "bi bi-piggy-bank",
            title: "Savings Account",
            subtitle:
                "Designed for individuals to save money securely while earning interest.",
            features: [
                "High Interest Rate",
                "Internet Banking",
                "Mobile Banking",
                "UPI Enabled",
                "Debit Card",
            ],
            recommended: true,
        },
        {
            id: 2,
            icon: "bi bi-briefcase-fill",
            title: "Current Account",
            subtitle:
                "Ideal for businesses, startups and professionals with unlimited transactions.",
            features: [
                "Unlimited Transactions",
                "Business Banking",
                "Cheque Book",
                "Online Banking",
                "NEFT / RTGS",
            ],
            recommended: false,
        },
        {
            id: 3,
            icon: "bi bi-house-door-fill",
            title: "Loan Services",
            subtitle:
                "Quick loan approval with flexible repayment options and competitive interest rates.",
            features: [
                "Personal Loan",
                "Home Loan",
                "Education Loan",
                "Vehicle Loan",
                "EMI Calculator",
            ],
            recommended: false,
        },
    ];

    return (
        <section
            className="py-5"
            style={{
                backgroundColor: "#ffffff",
            }}
        >
            <Container>

                {/* Section Heading */}

                <Row className="mb-5">

                    <Col lg={12} className="text-center">

                        <span className="badge bg-primary px-3 py-2 fs-6 mb-3">
                            Banking Products
                        </span>

                        <h2 className="display-5 fw-bold">
                            Products Designed For Everyone
                        </h2>

                        <p
                            className="text-muted mt-3 mx-auto"
                            style={{
                                maxWidth: "760px",
                            }}
                        >
                            Whether you're an individual, student,
                            salaried professional, entrepreneur,
                            or business owner, our banking products
                            provide secure, flexible and digital
                            financial solutions.
                        </p>

                    </Col>

                </Row>

                {/* Product Cards */}

                <Row className="g-4">

                    {bankingProducts.map((product) => (
                        <Col
                            xl={4}
                            lg={4}
                            md={6}
                            key={product.id}
                        >
                            <ProductCard
                                icon={product.icon}
                                title={product.title}
                                subtitle={product.subtitle}
                                features={product.features}
                                recommended={product.recommended}
                                buttonText="Apply Now"
                                route="/register"
                            />
                        </Col>
                    ))}

                </Row>

            </Container>
        </section>
    );
};

export default ProductsSection;