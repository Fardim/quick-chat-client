import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5010",
    headers: {
        "authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
    }
});

export default api;