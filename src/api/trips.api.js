import { Alert } from "react-native";
import { api } from "./api.js";
import { getErrorMessage } from "../utils/error.util.js";

export async function create(values) {
    try {
        const response = await api.post("/trips", {
            name: values.name,
            poster: values.poster,
            location: values.location,
            rating: values.rating,
            description: values.description,
            startdate: values.startdate,
            enddate: values.enddate
        });
        return response.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
}