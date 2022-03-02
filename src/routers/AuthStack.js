import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthTabs from "./AuthTabs";
import FilterScreen from "../containers/Filter";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="NotAuthenticated"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="AuthTabs"
                component={AuthTabs}
            />
            <Stack.Screen
                name="FilterScreen"
                component={FilterScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;