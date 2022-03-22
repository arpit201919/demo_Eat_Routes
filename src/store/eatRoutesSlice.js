import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import { showMessage } from "react-native-flash-message";
import { authApi } from "../services/auth";
import { addDeviceTokenApi, getBrandsService } from "../services/common";
import colors from "../utils/theme/colors";
import messaging from "@react-native-firebase/messaging";

export const initialState = {
    loading: false,
    hasError: false,
    role: "",
    token: "",
    userType: "",
    userId: "",
    staffId: "",
    temp_password: "",
    brandList: []
}

const eatRoutesSlice = createSlice({
    name: "eatRoutes",
    initialState: initialState,
    reducers: {
        getBrandList: (state, action) => {
            state.loading = true;
            state.brandList = action.payload;
            state.loading = false;
        },
        onLogin: (state, action) => {
            console.log("action", action);
            state.token = action.payload.token;
            state.userType = action.payload;
            state.userId = action.payload.user.id;
            state.staffId = action.payload.user.staff_id;
        }
    }
})

export const fetchBrand = () => {
    return async dispatch => {
        try {
            const response = await getBrandsService();
            if (response.data.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response.data.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getBrandList(response.data.data))
            }

        } catch (error) {
            alert(error)
        }
    }
}

export const callLoginApi = (data, role) => {
    console.log("data", data, role);
    return async dispatch => {
        try {
            const response = await authApi(data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(onLogin(response.data.data, { "role": role }));
                getDeviceToken();
            }

        } catch (error) {
            alert(error)
        }
    }
}

const getDeviceToken = async () => {
    messaging()
        .getToken()
        .then((token) => {
            if (token) {
                addDeviceToken(token);
            }
            console.log("yoken-->>", token);
        })
}

// const addDeviceToken = (token) => {
//     return async dispatch => {
//         try {
//             console.log("token--->>", token);
//             const data = {
//                 device_id: token,
//                 platform: Platform.OS === "android" ? "android" : "ios",
//                 last_used: Math.floor(Date.now() / 1000)
//             }
//             const response = await addDeviceTokenApi(data);
//             console.log("addR--->>", response?.data);
//             if (response?.data?.statusCode != 200) {
//                 showMessage({
//                     message: response.data.errorMessage,
//                     type: "info",
//                     duration: 1850
//                 })
//             }
//         } catch (error) {
//             alert(error)
//         }
//     }
// }

const addDeviceToken = async (token) => {
    console.log("token--->>", token);
    const data = {
        device_id: token,
        platform: Platform.OS === "android" ? "android" : "ios",
        last_used: Math.floor(Date.now() / 1000)
    }
    const response = await addDeviceTokenApi(data);
    console.log("addR--->>", response?.data);
    if (response?.data?.statusCode != 200) {
        showMessage({
            message: response?.data?.errorMessage,
            type: "info",
            duration: 1850
        })
    }
}



export const { getBrandList, onLogin } = eatRoutesSlice.actions;
export default eatRoutesSlice.reducer;