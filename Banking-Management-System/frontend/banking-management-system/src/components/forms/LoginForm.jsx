import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, InputGroup, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";
import { loginValidation } from "../../validations/loginValidation";

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            usernameOrEmail: "",
            password: "",
        },
    });

    const onSubmit = async (formData) => {
        try {
            setLoading(true);

            const response = await login(formData);

            toast.success("Login successful.");

            const role = response.roles[0];

            switch (role) {
                case "ROLE_ADMIN":
                    navigate("/admin/dashboard", { replace: true });
                    break;

                case "ROLE_EMPLOYEE":
                    navigate("/employee/dashboard", { replace: true });
                    break;

                case "ROLE_CUSTOMER":
                    navigate("/customer/dashboard", { replace: true });
                    break;

                default:
                    navigate("/", { replace: true });
            }
        } catch (error) {
            toast.error(error.message || "Invalid email or password.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} noValidate>

            {/* Email */}

            <Form.Group className="mb-3">

                <Form.Label>Username or Email Address</Form.Label>

                <Form.Control
                    type="text"
                    placeholder="Enter your username or email"
                    isInvalid={!!errors.usernameOrEmail}
                    {...register("usernameOrEmail", loginValidation.usernameOrEmail)}
                />

                <Form.Control.Feedback type="invalid">
                    {errors.usernameOrEmail?.message}
                </Form.Control.Feedback>

            </Form.Group>

            {/* Password */}

            <Form.Group className="mb-3">

                <Form.Label>Password</Form.Label>

                <InputGroup>

                    <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        isInvalid={!!errors.password}
                        {...register(
                            "password",
                            loginValidation.password
                        )}
                    />

                    <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={() =>
                            setShowPassword(!showPassword)
                        }
                    >
                        {showPassword ? "Hide" : "Show"}
                    </Button>

                    <Form.Control.Feedback type="invalid">
                        {errors.password?.message}
                    </Form.Control.Feedback>

                </InputGroup>

            </Form.Group>

            <div className="d-flex justify-content-end mb-4">

                <Button
                    variant="link"
                    className="p-0 text-decoration-none"
                    onClick={() => navigate("/forgot-password")}
                >
                    Forgot Password?
                </Button>

            </div>

            <div className="d-grid">

                <Button
                    variant="primary"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Spinner
                                animation="border"
                                size="sm"
                                className="me-2"
                            />
                            Signing In...
                        </>
                    ) : (
                        "Login"
                    )}
                </Button>

            </div>

            <div className="text-center mt-4">

                <span className="text-muted">
                    Don't have an account?{" "}
                </span>

                <Button
                    variant="link"
                    className="p-0 text-decoration-none"
                    onClick={() => navigate("/register")}
                >
                    Register
                </Button>

            </div>

        </Form>
    );
};

export default LoginForm;



//-----------------------------------------------------------------


// import { useState } from "react";
// import { Alert, Button, Form } from "react-bootstrap";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const LoginForm = () => {

//     const navigate = useNavigate();

//     const location = useLocation();

//     const { login } = useAuth();

//     const [formData, setFormData] = useState({

//         email: "",

//         password: "",

//     });

//     const [loading, setLoading] = useState(false);

//     const [error, setError] = useState("");

//     const handleChange = (e) => {

//         const { name, value } = e.target;

//         setFormData(previous => ({

//             ...previous,

//             [name]: value,

//         }));

//     };

//     const navigateByRole = (role) => {

//         switch (role) {

//             case "ROLE_ADMIN":

//                 navigate("/admin/dashboard", {
//                     replace: true,
//                 });

//                 break;

//             case "ROLE_EMPLOYEE":

//                 navigate("/employee/dashboard", {
//                     replace: true,
//                 });

//                 break;

//             case "ROLE_CUSTOMER":

//                 navigate("/customer/dashboard", {
//                     replace: true,
//                 });

//                 break;

//             default:

//                 navigate("/", {
//                     replace: true,
//                 });

//         }

//     };

//     const handleSubmit = async (e) => {

//         e.preventDefault();

//         setLoading(true);

//         setError("");

//         try {

//             const response = await login(formData);

//             // Only redirect back if it wasn't the Home page or Login page

//             // const redirectPath = location.state?.from?.pathname;

//             // if (
//             //     redirectPath &&
//             //     redirectPath !== "/" &&
//             //     redirectPath !== "/login"
//             // ) {

//             //     navigate(redirectPath, {
//             //         replace: true,
//             //     });

//             // } else {

//             //     navigateByRole(response.user.role);

//             // }

//             navigateByRole(response.user.role);
//         }

//         catch (error) {

//             setError(

//                 error.message ||

//                 "Invalid email or password."

//             );

//         }

//         finally {

//             setLoading(false);

//         }

//     };

//     return (

//         <>

//             {error && (

//                 <Alert variant="danger">

//                     {error}

//                 </Alert>

//             )}

//             <Form onSubmit={handleSubmit}>

//                 <Form.Group className="mb-3">

//                     <Form.Label>

//                         Email

//                     </Form.Label>

//                     <Form.Control

//                         type="email"

//                         name="email"

//                         value={formData.email}

//                         onChange={handleChange}

//                         placeholder="Enter email"

//                         required

//                     />

//                 </Form.Group>

//                 <Form.Group className="mb-4">

//                     <Form.Label>

//                         Password

//                     </Form.Label>

//                     <Form.Control

//                         type="password"

//                         name="password"

//                         value={formData.password}

//                         onChange={handleChange}

//                         placeholder="Enter password"

//                         required

//                     />

//                 </Form.Group>

//                 <Button

//                     type="submit"

//                     variant="primary"

//                     className="w-100"

//                     disabled={loading}

//                 >

//                     {

//                         loading

//                             ? "Signing In..."

//                             : "Sign In"

//                     }

//                 </Button>

//             </Form>

//             <Alert

//                 variant="secondary"

//                 className="mt-4 mb-0"

//             >

//                 <strong>Demo Accounts</strong>

//                 <hr />

//                 <strong>Admin</strong>

//                 <br />

//                 admin@bank.com

//                 <br />

//                 admin123

//                 <hr />

//                 <strong>Employee</strong>

//                 <br />

//                 employee@bank.com

//                 <br />

//                 employee123

//                 <hr />

//                 <strong>Customer</strong>

//                 <br />

//                 customer@bank.com

//                 <br />

//                 customer123

//             </Alert>

//         </>

//     );

// };

// export default LoginForm;