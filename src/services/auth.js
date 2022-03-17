import api from "./api";

export const authApi = (data) => api.post("/authenticate", data);

export const changePasswordService = (data) => api.post(`/change-password`, data);