import React from "react";
import AuthTabs from "./AuthTabs";
import NotAuthenticated from "./NotAuthenticated";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
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
                name="NotAuthenticated"
                component={NotAuthenticated}
            />
        </Stack.Navigator>
    )
}

export default RootNavigator;