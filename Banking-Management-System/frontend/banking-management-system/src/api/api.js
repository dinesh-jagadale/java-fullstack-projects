import axios from "axios";

import appConfig from "../config/appConfig";
import tokenStorage from "../utils/tokenStorage";

const api = axios.create({
    baseURL: appConfig.api.baseUrl,
    timeout: appConfig.api.timeout,
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * ============================================
 * Request Interceptor
 * ============================================
 */
api.interceptors.request.use(
    (config) => {
        const accessToken = tokenStorage.getAccessToken();

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

/**
 * ============================================
 * Response Interceptor
 * ============================================
 */
api.interceptors.response.use(
    (response) => response,

    async (error) => {
        const originalRequest = error.config;

        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            tokenStorage.clear();

            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;