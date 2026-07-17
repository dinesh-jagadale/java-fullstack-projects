import PropTypes from "prop-types";
import { Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({
    icon,
    title,
    subtitle,
    features,
    buttonText = "Apply Now",
    buttonVariant = "primary",
    route = "/register",
    recommended = false,
}) => {
    return (
        <Card
            className="border-0 shadow-sm h-100 position-relative"
            style={{
                borderRadius: "18px",
                transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                    "0 18px 45px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
            }}
        >
            {recommended && (
                <Badge
                    bg="warning"
                    text="dark"
                    className="position-absolute top-0 end-0 m-3"
                >
                    Most Popular
                </Badge>
            )}

            <Card.Body className="p-4">

                <div
                    className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mb-4"
                    style={{
                        width: "80px",
                        height: "80px",
                    }}
                >
                    <i
                        className={`${icon} text-primary`}
                        style={{
                            fontSize: "2rem",
                        }}
                    />
                </div>

                <h3 className="fw-bold mb-2">
                    {title}
                </h3>

                <p className="text-muted mb-4">
                    {subtitle}
                </p>

                <ul className="list-unstyled mb-4">

                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="mb-2"
                        >
                            <i className="bi bi-check-circle-fill text-success me-2"></i>

                            {feature}
                        </li>
                    ))}

                </ul>

                <div className="d-grid">

                    <Button
                        as={Link}
                        to={route}
                        variant={buttonVariant}
                    >
                        {buttonText}
                    </Button>

                </div>

            </Card.Body>
        </Card>
    );
};

ProductCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired,
    buttonText: PropTypes.string,
    buttonVariant: PropTypes.string,
    route: PropTypes.string,
    recommended: PropTypes.bool,
};

ProductCard.defaultProps = {
    buttonText: "Apply Now",
    buttonVariant: "primary",
    route: "/register",
    recommended: false,
};

export default ProductCard;