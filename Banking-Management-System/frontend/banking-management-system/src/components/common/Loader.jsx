import { Spinner } from "react-bootstrap";

const Loader = ({
    message = "Loading...",
    fullScreen = true,
    size = "lg",
}) => {
    if (fullScreen) {
        return (
            <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f8f9fa",
                }}
            >
                <Spinner
                    animation="border"
                    variant="primary"
                    role="status"
                    style={{
                        width: "4rem",
                        height: "4rem",
                    }}
                />

                <h5
                    className="mt-4 text-secondary fw-semibold"
                >
                    {message}
                </h5>
            </div>
        );
    }

    return (
        <div className="text-center py-5">

            <Spinner
                animation="border"
                variant="primary"
                size={size === "sm" ? "sm" : undefined}
                role="status"
            />

            <div className="mt-3 text-muted">
                {message}
            </div>

        </div>
    );
};

export default Loader;