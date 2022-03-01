import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import VendorProductListing from "../containers/Vendor/VendorProductListing";
import VendorProductDetail from "../containers/Vendor/VendorProductDetail";
import CustomerBrands from '../assets/customerBrandsTab.png';
import User from '../assets/user.png';
import Password from '../assets/passwordTab.png';
import Call from '../assets/customerContactTab.png';
import { Image, Text } from "react-native";
import colors from "../utils/theme/colors";
import typography from "../utils/theme/typography";
import Brands from "../containers/Brands";

const Tab = createBottomTabNavigator();

const AuthTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="VendorProductListing"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary
            }}
        >
            <Tab.Screen
                name="Brands"
                component={Brands}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={CustomerBrands}
                            style={{ tintColor: color }}
                            resizeMode="contain"
                        />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: color, fontFamily: typography.medium }}
                        >Brands</Text>
                    )
                }}
            />
            <Tab.Screen
                name="VendorProductDetail"
                component={VendorProductDetail}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={User}
                            style={{ tintColor: color }}
                            resizeMode="contain"
                        />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: color, fontFamily: typography.medium }}
                        >Profile</Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default AuthTabs;