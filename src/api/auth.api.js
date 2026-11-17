import { Alert } from "react-native";
import { auth } from "./api.js";

export async function register(email, password, fullName) {

    const result = await auth.post("/signup", {
        email,
        password,
        displayName: fullName
    });

    return result.data;
};

export async function login(email, password) {

    const result = await auth.post("/token?grant_type=password", {
        email,
        password
    });

    return result.data;
};