import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { LogOut } from "../utils";
import { BaseUrl } from "../utils/constants";

const instance = axios.create({
    baseURL: `${BaseUrl}api`
})

//Add a request interceptor
instance.interceptors.request.use(
    async function (config) {
        // Do something before request is sent
        const token = await AsyncStorage.getItem('token');
        // console.log(token);
        const updatedConfig = {
            ...config,
            headers: {
                ...config.headers,
                common: {
                    ...config.headers.common,
                    Authorization: token ? `Bearer ${token}` : '',
                },
            },
        };
        // console.log('requestParamgf'+JSON.stringify(updatedConfig));
        return updatedConfig;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // console.log('response:', response.data);
        if (response.data.statusCode === 406) {
            LogOut(response?.data?.errorMessage ?? '');
            return 'logout';
        }
        return response;
    },
    async function (error) {
        console.log('raw error', JSON.stringify(error));
        if (
            error.response.status === 401 ||
            error.response.data.statusCode === 406
        ) {
            LogOut(error.response?.data?.errorMessage ?? '');
            return 'logout';
        }
        return Promise.resolve(error);

        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
    },
);

export default instance;