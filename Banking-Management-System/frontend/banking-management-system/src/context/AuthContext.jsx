import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import authService from "../services/authService";
import tokenStorage from "../utils/tokenStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(tokenStorage.getUser());
    const [loading, setLoading] = useState(true);

    /**
     * Initialize Authentication
     */
    const initializeAuth = useCallback(async () => {
        try {
            const accessToken = tokenStorage.getAccessToken();

            if (!accessToken) {
                setUser(null);
                return;
            }

            const profile = await authService.getProfile();

            const loggedInUser = {
                id: profile.userId,
                username: profile.username,
                email: profile.email,
                firstName: profile.firstName,
                lastName: profile.lastName,
                roles: profile.roles,
};

setUser(loggedInUser);
tokenStorage.setUser(loggedInUser);

        } catch (error) {
            console.error("Authentication initialization failed.", error);

            tokenStorage.clear();
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        initializeAuth();
    }, [initializeAuth]);

    /**
     * Login
     */
    const login = async (credentials) => {

    const response = await authService.login(credentials);

    const loggedInUser = {
        id: response.userId,
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        roles: response.roles
    };

    tokenStorage.setAccessToken(response.accessToken);

    tokenStorage.setUser(loggedInUser);

    setUser(loggedInUser);

    return response;
};

    /**
     * Register
     */
    const register = async (payload) => {
        return await authService.register(payload);
    };

    /**
     * Logout
     */
    const logout = async () => {
        try {
            await authService.logout();
        } catch (error) {
            console.error(error);
        } finally {
            tokenStorage.clear();
            setUser(null);
        }
    };

    /**
     * Refresh User Profile
     */
    const refreshProfile = async () => {
        try {
            const profile = await authService.getProfile();

            tokenStorage.setUser(profile);

            setUser(profile);

            return profile;
        } catch (error) {
            console.error(error);
        }
    };

    /**
     * Authentication Status
     */
    const isAuthenticated = () => {
        return (
            !!tokenStorage.getAccessToken() &&
            !!tokenStorage.getUser()
        );
    };

    /**
     * Role Check
     */
    const hasRole = (...requiredRoles) => {

        if (!user) return false;

        return user.roles?.some(role =>
            requiredRoles.includes(role)
        );

    };

    const value = useMemo(
        () => ({
            user,
            loading,

            login,
            logout,
            register,

            refreshProfile,

            isAuthenticated,
            hasRole,
        }),
        [user, loading]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth must be used inside AuthProvider."
        );
    }

    return context;
};

export default AuthContext;



//--------------------------------------------------------------

// import {
//     createContext,
//     useCallback,
//     useContext,
//     useEffect,
//     useMemo,
//     useState,
// } from "react";

// import authService from "../services/authService";
// import demoAuthService from "../services/demoAuthService";
// import { AUTH_MODE } from "../config/authMode";
// import tokenStorage from "../utils/tokenStorage";

// const AuthContext = createContext(null);

// const authProvider =
//     AUTH_MODE === "DEMO"
//         ? demoAuthService
//         : authService;

// export const AuthProvider = ({ children }) => {

//     const [user, setUser] = useState(
//         tokenStorage.getUser()
//     );

//     const [loading, setLoading] = useState(true);

//     /**
//      * Initialize Authentication
//      */
//     const initializeAuth = useCallback(async () => {

//         try {

//             if (AUTH_MODE === "DEMO") {

//                 const savedUser =
//                     tokenStorage.getUser();

//                 if (savedUser) {
//                     setUser(savedUser);
//                 }

//                 setLoading(false);

//                 return;
//             }

//             const accessToken =
//                 tokenStorage.getAccessToken();

//             if (!accessToken) {

//                 setUser(null);
//                 setLoading(false);

//                 return;
//             }

//             const profile =
//                 await authProvider.getProfile();

//             setUser(profile);

//             tokenStorage.setUser(profile);

//         }

//         catch (error) {

//             console.error(
//                 "Authentication initialization failed.",
//                 error
//             );

//             tokenStorage.clear();

//             setUser(null);

//         }

//         finally {

//             setLoading(false);

//         }

//     }, []);

//     useEffect(() => {

//         initializeAuth();

//     }, [initializeAuth]);

//     /**
//      * Login
//      */
//     const login = async (credentials) => {

//         const response =
//             await authProvider.login(credentials);

//         tokenStorage.setAccessToken(
//             response.accessToken
//         );

//         if (response.refreshToken) {

//             tokenStorage.setRefreshToken(
//                 response.refreshToken
//             );

//         }

//         tokenStorage.setUser(response.user);

//         setUser(response.user);

//         return response;

//     };

//     /**
//      * Register
//      */
//     const register = async (payload) => {

//         return await authProvider.register(payload);

//     };

//     /**
//      * Logout
//      */
//     const logout = async () => {

//         try {

//             await authProvider.logout();

//         }

//         catch (error) {

//             console.error(error);

//         }

//         finally {

//             tokenStorage.clear();

//             setUser(null);

//         }

//     };

//     /**
//      * Refresh Profile
//      */
//     const refreshProfile = async () => {

//         try {

//             const profile =
//                 await authProvider.getProfile();

//             tokenStorage.setUser(profile);

//             setUser(profile);

//             return profile;

//         }

//         catch (error) {

//             console.error(error);

//         }

//     };

//     /**
//      * Authentication Status
//      */
//     const isAuthenticated = () => {

//         return !!tokenStorage.getAccessToken();

//     };

//     /**
//      * Role Check
//      */
//     const hasRole = (...roles) => {

//         if (!user) {

//             return false;

//         }

//         return roles.includes(user.role);

//     };

//     const value = useMemo(() => ({

//         user,

//         loading,

//         login,

//         logout,

//         register,

//         refreshProfile,

//         isAuthenticated,

//         hasRole,

//     }), [user, loading]);

//     return (

//         <AuthContext.Provider value={value}>

//             {children}

//         </AuthContext.Provider>

//     );

// };

// export const useAuth = () => {

//     const context = useContext(AuthContext);

//     if (!context) {

//         throw new Error(
//             "useAuth must be used inside AuthProvider."
//         );

//     }

//     return context;

// };

// export default AuthContext;