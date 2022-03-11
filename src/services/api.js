import axios from "axios";
import { BaseUrl } from "../utils/constants";

const instance = axios.create({
    baseURL: `${BaseUrl}api`
})

export default instance;