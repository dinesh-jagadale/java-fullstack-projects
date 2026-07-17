import api from "./api";

const AUTH_URL = "/auth";

const authApi = {
    register(data) {
        return api.post(`${AUTH_URL}/register`, data);
    },

    login(data) {
        return api.post(`${AUTH_URL}/login`, data);
    },

    forgotPassword(data) {
        return api.post(`${AUTH_URL}/forgot-password`, data);
    },

    resetPassword(data) {
        return api.post(`${AUTH_URL}/reset-password`, data);
    },

    getProfile() {
        return api.get(`${AUTH_URL}/profile`);
    },

    refreshToken(refreshToken) {
        return api.post(`${AUTH_URL}/refresh-token`, {
            refreshToken,
        });
    },

    logout() {
        return api.post(`${AUTH_URL}/logout`);
    },
};

export default authApi;