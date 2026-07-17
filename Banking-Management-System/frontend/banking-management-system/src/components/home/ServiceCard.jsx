import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const ServiceCard = ({
    icon,
    title,
    description,
    buttonText = "Learn More",
    buttonVariant = "primary",
    onClick,
}) => {
    return (
        <Card
            className="border-0 shadow-sm h-100"
            style={{
                transition: "all 0.3s ease",
                borderRadius: "16px",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
            }}
        >
            <Card.Body className="text-center p-4">

                <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 mb-4"
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

                <Card.Title
                    className="fw-bold mb-3"
                    style={{
                        fontSize: "1.3rem",
                    }}
                >
                    {title}
                </Card.Title>

                <Card.Text
                    className="text-muted mb-4"
                    style={{
                        minHeight: "72px",
                    }}
                >
                    {description}
                </Card.Text>

                <Button
                    variant={buttonVariant}
                    onClick={onClick}
                >
                    {buttonText}
                </Button>

            </Card.Body>
        </Card>
    );
};

ServiceCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonVariant: PropTypes.string,
    onClick: PropTypes.func,
};

ServiceCard.defaultProps = {
    buttonText: "Learn More",
    buttonVariant: "primary",
    onClick: () => {},
};

export default ServiceCard;