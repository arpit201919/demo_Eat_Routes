import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthTabs from "./AuthTabs";
import NotAuthenticated from "./NotAuthenticated";

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