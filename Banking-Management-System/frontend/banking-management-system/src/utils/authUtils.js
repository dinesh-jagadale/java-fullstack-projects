import tokenStorage from "./tokenStorage";

export const isAuthenticated = () => {
    return !!tokenStorage.getAccessToken();
};

export const getCurrentUser = () => {
    return tokenStorage.getUser();
};

export const isTokenAvailable = () => {
    return tokenStorage.getAccessToken() !== null;
};

export const logoutUser = () => {
    tokenStorage.clear();
};

export default {
    isAuthenticated,
    getCurrentUser,
    isTokenAvailable,
    logoutUser,
};