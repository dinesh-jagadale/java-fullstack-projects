import PropTypes from "prop-types";
import { Badge, Card, ListGroup } from "react-bootstrap";

const NotificationCard = ({
    title = "Notifications",
    notifications = []
}) => {

    const getVariant = (type) => {

        switch (type) {

            case "success":
                return "success";

            case "warning":
                return "warning";

            case "danger":
                return "danger";

            case "primary":
                return "primary";

            case "info":
                return "info";

            default:
                return "secondary";

        }

    };

    return (

        <Card className="border-0 shadow-sm rounded-4 h-100">

            <Card.Header className="bg-primary text-white">

                <div className="d-flex justify-content-between align-items-center">

                    <h5 className="mb-0">

                        {title}

                    </h5>

                    <Badge bg="light" text="dark">

                        {notifications.length}

                    </Badge>

                </div>

            </Card.Header>

            <Card.Body className="p-0">

                {

                    notifications.length === 0 ?

                    (

                        <div className="text-center py-5">

                            <i
                                className="bi bi-bell"
                                style={{
                                    fontSize: "2.5rem",
                                    color: "#adb5bd"
                                }}
                            ></i>

                            <p className="text-muted mt-3 mb-0">

                                No notifications available.

                            </p>

                        </div>

                    )

                    :

                    (

                        <ListGroup variant="flush">

                            {

                                notifications.map((item, index) => (

                                    <ListGroup.Item
                                        key={item.id ?? index}
                                        className="py-3"
                                    >

                                        <div className="d-flex justify-content-between">

                                            <div>

                                                <div className="fw-semibold">

                                                    {item.title}

                                                </div>

                                                <small className="text-muted">

                                                    {item.message}

                                                </small>

                                            </div>

                                            <div className="text-end">

                                                <Badge
                                                    bg={getVariant(item.type)}
                                                >

                                                    {item.type ?? "info"}

                                                </Badge>

                                                <br />

                                                <small className="text-muted">

                                                    {item.time}

                                                </small>

                                            </div>

                                        </div>

                                    </ListGroup.Item>

                                ))

                            }

                        </ListGroup>

                    )

                }

            </Card.Body>

        </Card>

    );

};

NotificationCard.propTypes = {

    title: PropTypes.string,

    notifications: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]),

            title: PropTypes.string,

            message: PropTypes.string,

            type: PropTypes.string,

            time: PropTypes.string

        })

    )

};

export default NotificationCard;    