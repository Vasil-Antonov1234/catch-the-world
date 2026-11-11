import axios from "axios";

const base = axios.create({
    baseURL: "https://iditotwwexxyrjtgiozf.supabase.co",
    headers: {
        "apikey": "sb_publishable_g783WSA85wFw1effdB1Arg_xoDmPqiu",
        "Content-Type": "application/json"
    }
});

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
})

export default api;