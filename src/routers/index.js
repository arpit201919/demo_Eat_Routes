import React from "react";
import AuthTabs from "./AuthTabs";
import NotAuthenticated from "./NotAuthenticated";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import SplashScreen from "../containers/Splash";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        //initialRouteName={"NotAuthenticated"}
        >
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
            />
            <Stack.Screen
                name="AuthStack"
                component={AuthStack}
            />
            <Stack.Screen
                name="NotAuthenticated"
                component={NotAuthenticated}
            />
        </Stack.Navigator>
    )
}

export default RootNavigator;