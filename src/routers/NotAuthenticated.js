import React from "react";
import LoginMenu from "../containers/Auth/LoginMenu";
import LoginCustomer from "../containers/Auth/LoginCustomer";
import { createStackNavigator } from "@react-navigation/stack";
import LoginSupplier from "../containers/Auth/LoginSupplier";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../utils/theme/colors";
import { Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { scaledSize } from "../utils";
import typography from "../utils/theme/typography";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import setHeader from "../components/CustomHeader";

const Stack = createNativeStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{ headerShown: false }}
            initialRouteName={"LoginSupplier"}
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
        </Stack.Navigator>
    )
}

export default NotAuthenticated;