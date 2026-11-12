import api from "./api.js";

export async function getAll() {
    const response = await api.get("/destinations")

    return response.data;
};

export async function getByContinentId(continentId) {
    const response = await api.get(`/destinations?continent_id=eq.${continentId}`);
    return response.data;
};

export async function getById(id) {
    const response = await api.get(`/destinations?id=eq.${id}`);
    return response.data[0];
};

export async function getTopDestinations() {
    const result = await api.get("/destinations?order=rating.desc.nullslast,name.asc&limit=5");

    return result.data;
}