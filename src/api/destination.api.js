import api from "./api.js";

export async function getAll() {
    const response = await api.get("/destinations")

    return response.data;
};