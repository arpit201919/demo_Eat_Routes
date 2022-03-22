import { createSlice } from "@reduxjs/toolkit";
import { Platform } from "react-native";
import { showMessage } from "react-native-flash-message";
import { authApi, changePasswordService } from "../services/auth";
import { addDeviceTokenApi, addNewProductApi, getBrandDetailService, getBrandsService, getCategoriesApi, getSupplierProductListService } from "../services/common";
import colors from "../utils/theme/colors";
import messaging from "@react-native-firebase/messaging";
import { setData } from "../utils/asyncStorage";
import { getUserDetailService } from "../services/user";

export const initialState = {
    loading: false,
    hasError: false,
    role: "",
    token: "",
    userType: "",
    userId: "",
    staffId: "",
    temp_password: "",
    brandList: [],
    brandDetail: null,
    myProfle: null,
    contactDetails: null,
    filterCategoryList: [],
    vendorProductList: [],
    vendorProductDetails: null,
    vendorProfile: null
}

const eatRoutesSlice = createSlice({
    name: "eatRoutes",
    initialState: initialState,
    reducers: {
        getBrandList: (state, action) => {
            state.brandList = action.payload;
        },
        onLogin: (state, action) => {
            console.log("action", action.payload.user.role);
            state.userType = action.payload.user.role;
            state.userId = action.payload.user.id;
            state.staffId = action.payload.user.staff_id;
        },
        getBrandDetails: (state, action) => {
            state.brandDetail = action.payload;
        },
        getProfileData: (state, action) => {
            state.myProfle = action.payload
        },
        getContactDetails: (state, action) => {
            console.log("action-->>", action);
            state.contactDetails = action.payload
        },
        getFilterList: (state, action) => {
            console.log("action-->>", action);
            state.filterCategoryList = action.payload
        },
        getProductList: (state, action) => {
            console.log("action-->>", action);
            state.vendorProductList = action.payload
        },
        getProductDetails: (state, action) => {
            console.log("action-->>", action);
            state.vendorProductDetails = action.payload
        },
        getVendorProfile: (state, action) => {
            console.log("action-->>", action);
            state.vendorProfile = action.payload
        },
    }
})

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
                await setData("token", response.data.data.token);
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

export const fetchBrand = () => {
    return async dispatch => {
        try {
            const response = await getBrandsService();
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response.data.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getBrandList(response?.data?.data))
            }

        } catch (error) {
            alert(error)
        }
    }
}

export const fetchBrandDetails = (data) => {
    return async dispatch => {
        try {
            const response = await getBrandDetailService(data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getBrandDetails(response?.data?.data))
            }

        } catch (error) {
            alert(error)
        }
    }
}

export const callMyProfileApi = (data) => {
    console.log("callMyProfileApi", data);
    return async dispatch => {
        try {
            const response = await getUserDetailService(data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getProfileData(response?.data?.data))
            }

        } catch (error) {
            alert(error)
        }
    }
}

export const callContactDetailsApi = (data) => {
    console.log("callContactDetailsApi", data);
    return async dispatch => {
        try {
            const response = await getUserDetailService(data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getContactDetails(response.data?.data))
            }

        } catch (error) {
            alert(error)
        }
    }
}

export const onPasswordChange = (data) => {
    return async dispatch => {
        try {
            const response = await changePasswordService(data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {

            }

        } catch (error) {
            alert(error)
        }
    }
}

export const callFilterCategoryApi = () => {
    return async dispatch => {
        try {
            const response = await getCategoriesApi();
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getFilterList(response.data?.data))
            }
        } catch (error) {
            alert(error)
        }
    }
}

export const getVendorProductList = () => {
    return async dispatch => {
        try {
            const response = await getSupplierProductListService();
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getProductList(response.data?.data))
            }
        } catch (error) {
            alert(error)
        }
    }
}

export const getVendorProductDetails = (data) => {
    return async dispatch => {
        try {
            const response = await getBrandDetailService(data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getProductDetails(response.data?.data))
            }
        } catch (error) {
            alert(error)
        }
    }
}

export const callVendorAddNewProduct = (data) => {
    return async dispatch => {
        try {
            const response = await addNewProductApi(data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {

            }
        } catch (error) {
            alert(error)
        }
    }
}

export const callVendorProfileApi = (data) => {
    return async dispatch => {
        try {
            const response = await getUserDetailService(data);
            console.log("callVendorProfileApi-->>", response.data);
            if (response?.data?.statusCode !== 200) {
                response !== 'logout' ? showMessage({
                    message: response?.data?.errorMessage,
                    type: "info",
                    duration: 1850,
                    backgroundColor: colors.primary
                }) : null;
            } else {
                dispatch(getVendorProfile(response.data.data))
            }
        } catch (error) {
            alert(error)
        }
    }
}


export const {
    getBrandList,
    onLogin,
    getBrandDetails,
    getProfileData,
    getContactDetails,
    getFilterList,
    getProductList,
    getProductDetails,
    getVendorProfile
}
    = eatRoutesSlice.actions;

export default eatRoutesSlice.reducer;