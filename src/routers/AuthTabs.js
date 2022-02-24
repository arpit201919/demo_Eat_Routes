import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import VendorProductListing from "../containers/Vendor/VendorProductListing";
import VendorProductDetail from "../containers/Vendor/VendorProductDetail";

const Tab = createBottomTabNavigator();

const AuthTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="VendorProductListing"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="VendorProductListing" component={VendorProductListing} />
            <Tab.Screen name="VendorProductDetail" component={VendorProductDetail} />
        </Tab.Navigator>
    )
}

export default AuthTabs;