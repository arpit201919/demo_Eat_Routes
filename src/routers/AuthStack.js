import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthTabs from "./AuthTabs";
import FilterScreen from "../containers/Filter";
import Brands from "../containers/Brands";
import ChangePassword from "../containers/Auth/Account/changePassword";

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
    const role = props?.route?.params
    console.log("role???-->>", role);
    return (
        <Stack.Navigator
            initialRouteName="AuthTabs"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="AuthTabs"
                component={AuthTabs}
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
            />
            {/*<Stack.Screen
                name="FilterScreen"
                component={FilterScreen}
            /> */}
        </Stack.Navigator>
    )
}

export default AuthStack;