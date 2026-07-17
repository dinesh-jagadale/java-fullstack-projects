import { Navigate } from "react-router-dom";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

import { useAuth } from "../../context/AuthContext";
import LoginForm from "../../components/forms/LoginForm";



const Login = () => {
    const { isAuthenticated, user } = useAuth();

    if (isAuthenticated()) {
        const role = user?.roles?.[0];

        switch (role) {
            case "ROLE_ADMIN":
                return <Navigate to="/admin/dashboard" replace />;

            case "ROLE_EMPLOYEE":
                return <Navigate to="/employee/dashboard" replace />;

            case "ROLE_CUSTOMER":
                return <Navigate to="/customer/dashboard" replace />;

            default:
                return <Navigate to="/" replace />;
        }
    }

    return (
        <div
            className="min-vh-100 d-flex align-items-center"
            style={{
                background:
                    "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)",
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col lg={5} md={8} sm={10}>
                        <Card className="shadow-lg border-0">
                            <Card.Body className="p-5">
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-primary">
                                        Banking Management System
                                    </h2>

                                    <p className="text-muted mb-0">
                                        Sign in to continue
                                    </p>
                                </div>

                                <Alert variant="info" className="small">
                                    Login using your registered credentials.
                                </Alert>

                                <LoginForm />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;


//----------------------------------------------


// import { Navigate } from "react-router-dom";
// import { Alert, Card, Col, Container, Row } from "react-bootstrap";

// import { useAuth } from "../../context/AuthContext";
// import LoginForm from "../../components/forms/LoginForm";

// const Login = () => {

//     const { isAuthenticated, user } = useAuth();

//     if (isAuthenticated()) {

//         switch (user?.role) {

//             case "ROLE_ADMIN":
//                 return <Navigate to="/admin/dashboard" replace />;

//             case "ROLE_EMPLOYEE":
//                 return <Navigate to="/employee/dashboard" replace />;

//             case "ROLE_CUSTOMER":
//                 return <Navigate to="/customer/dashboard" replace />;

//             default:
//                 return <Navigate to="/" replace />;

//         }

//     }

//     return (

//         <div
//             className="min-vh-100 d-flex align-items-center"
//             style={{
//                 background:
//                     "linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)",
//             }}
//         >

//             <Container>

//                 <Row className="justify-content-center">

//                     <Col lg={5} md={8} sm={10}>

//                         <Card className="shadow-lg border-0">

//                             <Card.Body className="p-5">

//                                 <div className="text-center mb-4">

//                                     <h2 className="fw-bold text-primary">

//                                         Banking Management System

//                                     </h2>

//                                     <p className="text-muted mb-0">

//                                         Sign in to continue

//                                     </p>

//                                 </div>

//                                 <Alert
//                                     variant="info"
//                                     className="small"
//                                 >

//                                     Login using your registered credentials.

//                                 </Alert>

//                                 <LoginForm />

//                             </Card.Body>

//                         </Card>

//                     </Col>

//                 </Row>

//             </Container>

//         </div>

//     );

// };

// export default Login;