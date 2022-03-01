import React from "react";
import LoginMenu from "../containers/Auth/LoginMenu";
import LoginCustomer from "../containers/Auth/LoginCustomer";
import LoginSupplier from "../containers/Auth/LoginSupplier";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginFF from "../containers/Auth/LoginFF";
import LoginStaff from "../containers/Auth/LoginStaff";
import ForgotPassword from "../containers/Auth/ForgotPassword";
import BrandSetup from "../containers/VendorOnboarding/BrandSetup";

const Stack = createNativeStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{ headerShown: false }}
            initialRouteName={"LoginMenu"}
        >
            <Stack.Screen
                name="LoginMenu"
                component={LoginMenu}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginCustomer"
                component={LoginCustomer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginSupplier"
                component={LoginSupplier}
            />
            <Stack.Screen
                name="LoginFFs"
                component={LoginFF}
            />
            <Stack.Screen
                name="LoginStaff"
                component={LoginStaff}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
            <Stack.Screen
                name="BrandSetup"
                component={BrandSetup}
            />
        </Stack.Navigator>
    )
}

export default NotAuthenticated;