import { Alert } from "react-native";
import { auth } from "./api.js";
import { getErrorMessage } from "../utils/error.util.js";

export async function register(email, password, fullName) {

    try {
        const result = await auth.post("/signup", {
            email,
            password,
            displayName: fullName
        });

        return result.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function login(email, password) {

    try {
        const result = await auth.post("/token?grant_type=password", {
            email,
            password
        });

        return result.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function logout(token) {

    try {
        await auth.post("/logout", null, { headers: { Authorization: `Bearer ${token}` } });
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
}