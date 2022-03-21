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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterScreen from "../containers/Filter";
import BrandDetails from "../containers/Brands/brandDetails";
import VendorAddNewProduct from "../containers/Vendor/VendorAddNewProduct";
import VendorQuotes from "../containers/Vendor/VendorQuotes/vendorQuotes";
import VendorProfile from "../containers/Vendor/VendorProfile/vendorProfile";
import StaffDetails from "../containers/StaffDetails/staffDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BrandStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Brands"
                component={Brands}
            />
            <Stack.Screen
                name="BrandDetails"
                component={BrandDetails}
            />
            <Stack.Screen
                name="FilterScreen"
                component={FilterScreen}
            />
        </Stack.Navigator>
    )
}

const VendorProductStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="VendorProductListing"
                component={VendorProductListing}
            />
            <Stack.Screen
                name="VendorProductDetail"
                component={VendorProductDetail}
            />

        </Stack.Navigator>
    )
}

const AuthTabs = (props) => {
    const role = props?.route?.params?.type
    if (role?.type === "client") {
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
                    name="BrandStack"
                    component={BrandStack}
                    //name="StaffDetails"
                    //component={StaffDetails}
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
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary
            }}
        >
            <Tab.Screen
                name="VendorProductStack"
                component={VendorProductStack}
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
                        >Products</Text>
                    )
                }}
            />
            <Tab.Screen
                name="VendorQuotes"
                component={VendorQuotes}
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
                        >Quotes</Text>
                    )
                }}
            />
            <Tab.Screen
                name="VendorAddNewProduct"
                component={VendorAddNewProduct}
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
                        >Add New</Text>
                    )
                }}
            />
            <Tab.Screen
                name="VendorProfile"
                component={VendorProfile}
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