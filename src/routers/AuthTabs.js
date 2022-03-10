import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import VendorProductListing from "../containers/Vendor/VendorProductListing";
import VendorProductDetail from "../containers/Vendor/VendorProductDetail";
import CustomerBrands from '../assets/customerBrandsTab.png';
import User from '../assets/user.png';
import Password from '../assets/passwordTab.png';
import Call from '../assets/customerContactTab.png';
import Orders from '../assets/orders.png';
import { Image, Text } from "react-native";
import colors from "../utils/theme/colors";
import typography from "../utils/theme/typography";
import Brands from "../containers/Brands";
import ClientMyProfile from "../containers/Auth/Account/ClientMyProfile";
import Contact from "../containers/Contact";
import Quotes from "../containers/Quotes";
import OrderScreen from "../containers/Order";

const Tab = createBottomTabNavigator();

const AuthTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="VendorProductListing"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: { paddingTop: 5 }
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
                name="ClientMyProfile"
                component={ClientMyProfile}
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
            <Tab.Screen
                name="Contact"
                component={Contact}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={Call}
                            style={{ tintColor: color }}
                            resizeMode="contain"
                        />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: color, fontFamily: typography.medium }}
                        >Contact</Text>
                    )
                }}
            />
            <Tab.Screen
                name="Quotes"
                component={Quotes}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={Password}
                            style={{ tintColor: color }}
                            resizeMode="contain"
                        />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: color, fontFamily: typography.medium }}
                        >Quotes</Text>
                    )
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image
                            source={Orders}
                            style={{ tintColor: color }}
                            resizeMode="contain"
                        />
                    ),
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={{ color: color, fontFamily: typography.medium }}
                        >Orders</Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default AuthTabs;