// /**
//  * Demo Authentication Service
//  *
//  * Used only when AUTH_MODE === "DEMO"
//  * Replace with authService automatically
//  * when backend integration starts.
//  */

// const DEMO_USERS = [
//     {
//         id: 1,
//         firstName: "Super",
//         lastName: "Admin",
//         fullName: "Super Admin",
//         email: "admin@bank.com",
//         password: "admin123",
//         role: "ROLE_ADMIN",
//         branch: "Head Office",
//         employeeId: "ADM001",
//         phone: "+91 9876543210",
//     },

//     {
//         id: 2,
//         firstName: "Rahul",
//         lastName: "Patil",
//         fullName: "Rahul Patil",
//         email: "employee@bank.com",
//         password: "employee123",
//         role: "ROLE_EMPLOYEE",
//         branch: "Pune Branch",
//         employeeId: "EMP001",
//         phone: "+91 9988776655",
//     },

//     {
//         id: 3,
//         firstName: "Amit",
//         lastName: "Sharma",
//         fullName: "Amit Sharma",
//         email: "customer@bank.com",
//         password: "customer123",
//         role: "ROLE_CUSTOMER",
//         customerId: "CUS001",
//         accountNumber: "123456789012",
//         phone: "+91 9123456789",
//     },
// ];

// const delay = (ms = 500) =>
//     new Promise(resolve => setTimeout(resolve, ms));

// const createResponse = (user) => {

//     const { password, ...profile } = user;

//     return {

//         accessToken: "demo-access-token",

//         refreshToken: "demo-refresh-token",

//         user: profile,
//     };
// };

// const login = async ({ email, password }) => {

//     await delay();

//     const user = DEMO_USERS.find(
//         u =>
//             u.email.toLowerCase() === email.toLowerCase() &&
//             u.password === password
//     );

//     if (!user) {
//         throw new Error(
//             "Invalid email or password."
//         );
//     }

//     return createResponse(user);
// };

// const register = async (payload) => {

//     await delay();

//     const user = {

//         id: Date.now(),

//         firstName: payload.firstName,

//         lastName: payload.lastName,

//         fullName: `${payload.firstName} ${payload.lastName}`,

//         email: payload.email,

//         role: "ROLE_CUSTOMER",

//         customerId: `CUS${Date.now()}`,

//         accountNumber: "Pending",

//         phone: payload.phone,
//     };

//     return {

//         message:
//             "Registration successful (Demo Mode).",

//         user,
//     };
// };

// const logout = async () => {

//     await delay(200);

//     return {
//         message: "Logout successful.",
//     };
// };

// const getProfile = async () => {

//     await delay(300);

//     const user = JSON.parse(
//         localStorage.getItem("user")
//     );

//     if (!user) {
//         throw new Error("User not found.");
//     }

//     return user;
// };

// const demoAuthService = {

//     login,

//     register,

//     logout,

//     getProfile,
// };

// export default demoAuthService;