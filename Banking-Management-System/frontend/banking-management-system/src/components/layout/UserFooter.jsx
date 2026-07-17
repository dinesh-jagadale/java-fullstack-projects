import {
    Col,
    Container,
    Row,
} from "react-bootstrap";
import {
    Link,
    NavLink,
} from "react-router-dom";

const UserFooter = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="bg-dark text-light pt-5"
        >
            <Container>

                <Row className="gy-5">

                    {/* Company */}

                    <Col lg={4} md={6}>

                        <div className="d-flex align-items-center mb-3">

                            <div
                                className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                style={{
                                    width: "55px",
                                    height: "55px",
                                }}
                            >
                                <i className="bi bi-bank2 fs-3 text-white"></i>
                            </div>

                            <div>

                                <h4 className="fw-bold mb-0">
                                    Banking Management
                                </h4>

                                <small className="text-secondary">
                                    Secure Digital Banking Platform
                                </small>

                            </div>

                        </div>

                        <p className="text-secondary">

                            Banking Management System is a modern
                            enterprise banking platform developed
                            using React, Spring Boot, Spring Security,
                            JWT Authentication and MySQL.

                        </p>

                        <div className="d-flex gap-3 mt-4">

                            <a
                                href="#"
                                className="text-white fs-4"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>

                            <a
                                href="#"
                                className="text-white fs-4"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>

                            <a
                                href="#"
                                className="text-white fs-4"
                            >
                                <i className="bi bi-linkedin"></i>
                            </a>

                            <a
                                href="#"
                                className="text-white fs-4"
                            >
                                <i className="bi bi-twitter-x"></i>
                            </a>

                        </div>

                    </Col>

                    {/* Banking */}

                    <Col lg={2} md={6}>

                        <h5 className="fw-bold mb-4">
                            Banking
                        </h5>

                        <ul className="list-unstyled">

                            <li className="mb-3">
                                <Link
                                    to="/register"
                                    className="text-secondary text-decoration-none"
                                >
                                    Open Account
                                </Link>
                            </li>

                            <li className="mb-3">
                                <a
                                    href="#products"
                                    className="text-secondary text-decoration-none"
                                >
                                    Savings Account
                                </a>
                            </li>

                            <li className="mb-3">
                                <a
                                    href="#products"
                                    className="text-secondary text-decoration-none"
                                >
                                    Current Account
                                </a>
                            </li>

                            <li className="mb-3">
                                <a
                                    href="#services"
                                    className="text-secondary text-decoration-none"
                                >
                                    Digital Banking
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#services"
                                    className="text-secondary text-decoration-none"
                                >
                                    Fund Transfer
                                </a>
                            </li>

                        </ul>

                    </Col>

                    {/* Products */}

                    <Col lg={2} md={6}>

                        <h5 className="fw-bold mb-4">
                            Products
                        </h5>

                        <ul className="list-unstyled">

                            <li className="mb-3">
                                <a
                                    href="#products"
                                    className="text-secondary text-decoration-none"
                                >
                                    Personal Loan
                                </a>
                            </li>

                            <li className="mb-3">
                                <a
                                    href="#products"
                                    className="text-secondary text-decoration-none"
                                >
                                    Home Loan
                                </a>
                            </li>

                            <li className="mb-3">
                                <a
                                    href="#products"
                                    className="text-secondary text-decoration-none"
                                >
                                    Vehicle Loan
                                </a>
                            </li>

                            <li className="mb-3">
                                <a
                                    href="#products"
                                    className="text-secondary text-decoration-none"
                                >
                                    Debit Card
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#products"
                                    className="text-secondary text-decoration-none"
                                >
                                    Credit Card
                                </a>
                            </li>

                        </ul>

                    </Col>

                    {/* Quick Links */}

                    <Col lg={2} md={6}>

                        <h5 className="fw-bold mb-4">
                            Quick Links
                        </h5>

                        <ul className="list-unstyled">

                            <li className="mb-3">
                                <NavLink
                                    to="/"
                                    className="text-secondary text-decoration-none"
                                >
                                    Home
                                </NavLink>
                            </li>
                          
                            <li className="mb-3">
                                <a
                                    href="#about"
                                    className="text-secondary text-decoration-none"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="text-secondary text-decoration-none"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </Col>

                    {/* Contact */}

                    <Col lg={2} md={12}>

                        <h5 className="fw-bold mb-4">
                            Contact
                        </h5>

                        <p className="text-secondary mb-3">

                            <i className="bi bi-geo-alt-fill me-2"></i>

                            Banking Head Office

                        </p>

                        <p className="text-secondary mb-3">

                            <i className="bi bi-envelope-fill me-2"></i>

                            support@banking.com

                        </p>

                        <p className="text-secondary">

                            <i className="bi bi-telephone-fill me-2"></i>

                            +91 1800-000-000

                        </p>

                    </Col>

                </Row>

                <hr className="border-secondary my-5" />

                <Row className="align-items-center">

                    <Col md={6}>

                        <p className="text-secondary mb-0">

                            © {currentYear} Banking Management System.
                            All Rights Reserved.

                        </p>

                    </Col>

                    <Col
                        md={6}
                        className="text-md-end mt-3 mt-md-0"
                    >

                        <span className="text-secondary">

                            Built with

                        </span>

                        <span className="fw-semibold ms-2">

                            React • Spring Boot • Spring Security • JWT • MySQL

                        </span>

                    </Col>

                </Row>

            </Container>
        </footer>
    );
};

export default UserFooter;