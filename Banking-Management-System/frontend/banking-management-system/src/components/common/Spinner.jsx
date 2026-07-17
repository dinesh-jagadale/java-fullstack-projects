import { Spinner as BootstrapSpinner } from "react-bootstrap";

const Spinner = ({
    animation = "border",
    variant = "primary",
    size = "md",
    message = "",
    className = "",
}) => {
    const spinnerSize =
        size === "sm"
            ? "sm"
            : undefined;

    return (
        <div
            className={`d-flex flex-column justify-content-center align-items-center ${className}`}
        >
            <BootstrapSpinner
                animation={animation}
                variant={variant}
                role="status"
                size={spinnerSize}
            >
                <span className="visually-hidden">
                    Loading...
                </span>
            </BootstrapSpinner>

            {message && (
                <p
                    className="text-muted mt-3 mb-0 text-center"
                >
                    {message}
                </p>
            )}
        </div>
    );
};

export default Spinner;