import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginMenu from "../containers/Auth/LoginMenu";
import LoginCustomer from "../containers/Auth/LoginCustomer";

const Stack = createNativeStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            initialRouteName={"LoginMenu"}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="LoginMenu" component={LoginMenu} />
            <Stack.Screen name="LoginCustomer" component={LoginCustomer} />

        </Stack.Navigator>
    )
}

export default NotAuthenticated;