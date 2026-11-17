import { Alert } from "react-native";
import { api } from "./api.js";

export async function getAll() {
    
    try {
        const response = await api.get("/continents");
    } catch (error) {
        Alert.alert(error.response?.data.msg);
    };

    return response.data;
};