import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";

const StatisticsCard = ({
    title,
    value,
    icon,
    iconBackground = "primary",
    trend = "up",
    percentage = 0,
    description = "",
}) => {
    const getTrendVariant = () => {
        switch (trend) {
            case "up":
                return "success";
            case "down":
                return "danger";
            case "neutral":
                return "secondary";
            default:
                return "secondary";
        }
    };

    const getTrendIcon = () => {
        switch (trend) {
            case "up":
                return "bi bi-arrow-up";

            case "down":
                return "bi bi-arrow-down";

            case "neutral":
                return "bi bi-dash";

            default:
                return "bi bi-dash";
        }
    };

    return (
        <Card
            className="border-0 shadow-sm h-100"
            style={{
                transition: "all .3s ease",
            }}
        >
            <Card.Body>

                <div className="d-flex justify-content-between align-items-start">

                    <div>

                        <p className="text-muted mb-2 fw-semibold">
                            {title}
                        </p>

                        <h2 className="fw-bold mb-2">
                            {value}
                        </h2>

                        <div className="d-flex align-items-center gap-2">

                            <Badge bg={getTrendVariant()}>
                                <i
                                    className={`${getTrendIcon()} me-1`}
                                />

                                {percentage}%
                            </Badge>

                            {description && (
                                <small className="text-muted">
                                    {description}
                                </small>
                            )}

                        </div>

                    </div>

                    <div
                        className={`bg-${iconBackground} rounded-circle text-white d-flex justify-content-center align-items-center`}
                        style={{
                            width: "60px",
                            height: "60px",
                        }}
                    >
                        <i
                            className={`${icon} fs-3`}
                        />
                    </div>

                </div>

            </Card.Body>
        </Card>
    );
};

StatisticsCard.propTypes = {
    title: PropTypes.string.isRequired,

    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,

    icon: PropTypes.string.isRequired,

    iconBackground: PropTypes.string,

    trend: PropTypes.oneOf([
        "up",
        "down",
        "neutral",
    ]),

    percentage: PropTypes.number,

    description: PropTypes.string,
};

export default StatisticsCard;