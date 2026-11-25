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

const addToken = (config) => {
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
};

api.interceptors.request.use(addToken);
storage.interceptors.request.use(addToken);