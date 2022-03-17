import instance from "./api"

export const getUserDetailService = (id) => instance.get(`/user/${id}`);