import api from "./api";

export const authApi = (data) => api.post("/authenticate", data);