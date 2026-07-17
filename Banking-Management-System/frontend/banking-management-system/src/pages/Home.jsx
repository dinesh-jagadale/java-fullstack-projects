import "./Home.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import ProductsSection from "../components/home/ProductsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import SecuritySection from "../components/home/SecuritySection";
import PartnerBanks from "../components/home/PartnerBanks";
import StatisticsSection from "../components/home/StatisticsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsSection from "../components/home/NewsSection";
import FaqSection from "../components/home/FaqSection";
import DownloadAppSection from "../components/home/DownloadAppSection";
import ContactSection from "../components/home/ContactSection";
import CallToAction from "../components/home/CallToAction";
import FloatingSupportButton from "../components/home/FloatingSupportButton";

const Home = () => {
    return (
        <>
        {/* ==========================
                Navbar Section
            ========================== */}

                <Navbar />

            {/* ==========================
                Hero Section
            ========================== */}

            <HeroSection />

            {/* ==========================
                Quick Actions
            ========================== */}

            <section className="py-5 bg-light">
                <Container>

                    <Row className="g-4">

                        <Col lg={4} md={6}>

                            <div className="bg-white shadow-sm rounded-4 p-4 h-100 text-center">

                                <i className="bi bi-person-plus-fill display-4 text-primary"></i>

                                <h4 className="fw-bold mt-3">
                                    Open New Account
                                </h4>

                                <p className="text-muted">
                                    Register online and open your savings or
                                    current account in just a few minutes.
                                </p>

                                <Button
                                    as={Link}
                                    to="/register"
                                    variant="primary"
                                >
                                    Register Now
                                </Button>

                            </div>

                        </Col>

                        <Col lg={4} md={6}>

                            <div className="bg-white shadow-sm rounded-4 p-4 h-100 text-center">

                                <i className="bi bi-shield-lock-fill display-4 text-success"></i>

                                <h4 className="fw-bold mt-3">
                                    Secure Login
                                </h4>

                                <p className="text-muted">
                                    Access your banking dashboard securely using
                                    JWT-based authentication.
                                </p>

                                <Button
                                    as={Link}
                                    to="/login"
                                    variant="success"
                                >
                                    Login
                                </Button>

                            </div>

                        </Col>

                        <Col lg={4} md={12}>

                            <div className="bg-white shadow-sm rounded-4 p-4 h-100 text-center">

                                <i className="bi bi-phone-fill display-4 text-warning"></i>

                                <h4 className="fw-bold mt-3">
                                    Digital Banking
                                </h4>

                                <p className="text-muted">
                                    Transfer money, manage accounts, pay bills,
                                    apply for loans, and monitor transactions
                                    anytime.
                                </p>

                                <Button
                                    variant="warning"
                                    className="text-dark"
                                >
                                    Learn More
                                </Button>

                            </div>

                        </Col>

                    </Row>

                </Container>
            </section>

            {/* ==========================
                Banking Services
            ========================== */}

            <ServicesSection />

            {/* ==========================
                Banking Products
            ========================== */}

            <ProductsSection />

            {/* ==========================
                Why Choose Us
            ========================== */}

            <WhyChooseUs />

            {/* ==========================
                Statistics
            ========================== */}

            <StatisticsSection />

            {/* ==========================
                CTA
            ========================== */}

            <CallToAction />

            {/* ==========================
                Footer
            ========================== */}

            <Footer />

            {/* ==========================
                FloatingSupportButton
            ========================== */}

            <FloatingSupportButton />
        </>
    );
};

export default Home;