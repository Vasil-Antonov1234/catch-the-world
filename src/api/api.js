import axios from "axios";

const base = axios.create({
    baseURL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    headers: {
        "apikey": process.env.EXPO_PUBLIC_SUPABASE_KEY,
        "Content-Type": "application/json"
    }
});

export const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
});

export const auth = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/auth/v1`
});

export const storage = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/storage/v1/object`
});

let accessToken = null;

export const setAccessToken = (token) => {
    accessToken = token;
};

// let breakOnce = true;

const addToken = (config) => {
    if (accessToken) {
        // config.headers.Authorization = `Bearer ${breakOnce ? "invalid" : accessToken}`;
        config.headers.Authorization = `Bearer ${accessToken}`;
        // breakOnce = false;
    }
    return config;
};

api.interceptors.request.use(addToken);
storage.interceptors.request.use(addToken);

// Refresh token 401 handling
let authHandlers = { refresh: null, onExpired: null };

export const setAuthHandlers = (handlers) => {
    authHandlers = handlers;
};

let refreshPromise = null;

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original = error.config;

        const shouldRefresh =
            error.response?.status === 401 &&
            !original._retry &&
            authHandlers.refresh;

        if (!shouldRefresh) {
            return Promise.reject(error);
        }

        original._retry = true;

        try {
            if (!refreshPromise) {
                refreshPromise = authHandlers.refresh().finally(() => {
                    refreshPromise = null;
                });
            }
            const newToken = await refreshPromise;

            original.headers.Authorization = `Bearer ${newToken}`;
            return api.request(original);
        } catch (refreshError) {
            // axios network errors have `request` but no `response`.
            // Server rejections have `response`. Our own errors have neither.
            if (refreshError.response || !refreshError.request) {
                authHandlers.onExpired?.();
            }
            return Promise.reject(error);
        }
    }
);