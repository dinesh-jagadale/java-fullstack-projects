import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const DashboardCard = ({
    title,
    value,
    subtitle,
    icon,
    iconBg = "primary",
    textColor = "dark",
    onClick,
}) => {
    return (
        <Card
            className="border-0 shadow-sm h-100 dashboard-card"
            style={{
                cursor: onClick ? "pointer" : "default",
                transition: "all 0.3s ease",
            }}
            onClick={onClick}
        >
            <Card.Body>

                <div className="d-flex justify-content-between align-items-start">

                    <div>

                        <p className="text-muted mb-1 fw-semibold">
                            {title}
                        </p>

                        <h3
                            className={`fw-bold text-${textColor} mb-1`}
                        >
                            {value}
                        </h3>

                        {subtitle && (
                            <small className="text-muted">
                                {subtitle}
                            </small>
                        )}

                    </div>

                    <div
                        className={`bg-${iconBg} rounded-circle d-flex align-items-center justify-content-center text-white`}
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

DashboardCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
};

export default DashboardCard;