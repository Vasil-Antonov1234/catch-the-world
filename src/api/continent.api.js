import { Alert } from "react-native";
import { api } from "./api.js";
import { getErrorMessage } from "../utils/error.util.js";

export async function getAll() {

    try {
        const result = await api.get("/continents");
        return result.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };

};