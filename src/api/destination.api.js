import { Alert } from "react-native";
import { api } from "./api.js";
import { getErrorMessage } from "../utils/error.util.js";

export async function getAll() {
    try {
        const result = await api.get("/destinations")

        return result.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function getByContinentId(continentId) {
    try {
        const result = await api.get(`/destinations?continent_id=eq.${continentId}`);
        return result.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function getById(id) {
    try {
        const result = await api.get(`/destinations?id=eq.${id}`);
        return result.data[0];
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };
};

export async function getTopDestinations() {

    try {
        const result = await api.get("/destinations?order=rating.desc.nullslast,name.asc&limit=5");
        return result.data;
    } catch (error) {
        Alert.alert(getErrorMessage(error));
    };

};