import { Alert } from "react-native";
import { api } from "./api.js";

export async function getAll() {
    const response = await api.get("/destinations")

    return response.data;
};

export async function getByContinentId(continentId) {
    try {
        const response = await api.get(`/destinations?continent_id=eq.${continentId}`);
    } catch (error) {
        Alert.alert(error.response?.data.msg);
    };
    return response.data;
};

export async function getById(id) {
    try {
        const response = await api.get(`/destinations?id=eq.${id}`);
    } catch (error) {
        Alert.alert(error.response?.data.msg);
    };
    return response.data[0];
};

export async function getTopDestinations() {
    
    try {
        const result = await api.get("/destinations?order=rating.desc.nullslast,name.asc&limit=5");
    } catch (error) {
        Alert.alert(error.response?.data.msg);
    };

    return result.data;
};