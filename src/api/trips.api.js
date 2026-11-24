import { Alert } from "react-native";
import { api, storage } from "./api.js";
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
};

export async function uploadImage(file, fileName) {

    try {
        const bytes = await file.arrayBuffer();

        const result = await storage.post(`/trips/${fileName}`, bytes, {
            headers: {
                "Content-Type": "image/jpeg"
            }
        })

        const publicUrl = `${storage.defaults.baseURL}/public/trips/${fileName}`;

        return publicUrl;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function getAll() {
    try {
        const result = await api.get("/trips");

        return result.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function getById(id) {
    try {
        const result = await api.get(`/trips`, {
            params: {id: `eq.${id}`}
        });

        return result.data[0] ?? null;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function deleteById(id) {
    try {
        await api.delete('/trips', {
            params: {id: `eq.${id}`}
        });
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
}