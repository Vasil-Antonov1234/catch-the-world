import { Alert } from "react-native";
import { auth } from "./api.js";

export async function register(email, password, fullName) {

    try {

        const result = await auth.post("/signup", {
            email,
            password,
            displayName: fullName
        });

        return result.data;
    } catch (error) {
        Alert.alert(error.response?.data.msg);
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
        Alert.alert(error.response?.data.msg);
    };
};