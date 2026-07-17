import authApi from "../api/authApi";
import tokenStorage from "../utils/tokenStorage";

class AuthService {
    /**
     * Register Customer
     */
    async register(registerRequest) {
        const response = await authApi.register(registerRequest);
        return response.data;
    }

    /**
     * Login User
     */
    async login(loginRequest) {
        const response = await authApi.login(loginRequest);

        const data = response.data;

        tokenStorage.setAccessToken(data.accessToken);

        if (data.refreshToken) {
            tokenStorage.setRefreshToken(data.refreshToken);
        }

        return data;
    }

    /**
     * Logout User
     */
    async logout() {
        try {
            await authApi.logout();
        } catch (error) {
            // Ignore server logout failure.
            // Local cleanup must always happen.
            console.error(error);
        } finally {
            tokenStorage.clear();
        }
    }

    /**
     * Get Logged-in User Profile
     */
    async getProfile() {
        const response = await authApi.getProfile();

        const user = response.data;

        tokenStorage.setUser(user);

        return user;
    }

    /**
     * Forgot Password
     */
    async forgotPassword(request) {
        const response = await authApi.forgotPassword(request);
        return response.data;
    }

    /**
     * Reset Password
     */
    async resetPassword(request) {
        const response = await authApi.resetPassword(request);
        return response.data;
    }

    /**
     * Refresh JWT Token
     */
    async refreshToken() {
        const refreshToken = tokenStorage.getRefreshToken();

        if (!refreshToken) {
            throw new Error("Refresh token not found.");
        }

        const response = await authApi.refreshToken(refreshToken);

        const data = response.data;

        tokenStorage.setAccessToken(data.accessToken);

        if (data.refreshToken) {
            tokenStorage.setRefreshToken(data.refreshToken);
        }

        return data.accessToken;
    }

    /**
     * Current User
     */
    getCurrentUser() {
        return tokenStorage.getUser();
    }

    /**
     * Access Token
     */
    getAccessToken() {
        return tokenStorage.getAccessToken();
    }

    /**
     * Authentication Status
     */
    isAuthenticated() {
        return !!tokenStorage.getAccessToken();
    }

    /**
     * Clear Authentication Data
     */
    clearAuthentication() {
        tokenStorage.clear();
    }
}

const authService = new AuthService();

export default authService;