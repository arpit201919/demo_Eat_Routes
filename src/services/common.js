import api from "./api";

export const getBrandsService = () => api.get(`/brand`);

export const addDeviceTokenApi = async (data) => await api.post(`/device-token/add-device-token`, data);
export const deleteDeviceTokenApi = (deviceToken) => api.delete(`/device-token/delete-device-token/${deviceToken}`);

export const getCategoriesApi = () => api.get(`/category`);

export const brandSearchCategories = (data) => api.post(`brand/search-brands/category`, data);

export const getBrandDetailService = (id) => api.get(`/brand/${id}`);

export const getSupplierProductListService = (id) => api.get(`/product/all`);

export const addNewProductApi = (data) => api.post(`product/create-product`, data);

export const putUpdateClientService = (id, data) => api.put(`/client/${id}`, data);