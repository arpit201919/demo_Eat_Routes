import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LoginMenu from "../containers/Auth/LoginMenu";
import LoginCustomer from "../containers/Auth/LoginCustomer";
import LoginSupplier from "../containers/Auth/LoginSupplier";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../utils/theme/colors";
import { Icon } from "react-native-elements";
import { scaledSize } from "../utils";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CustomHeader = ({ navigation, style, pageTitle, titleStyle }) => {
    return (
        <SafeAreaView
            edges={["left", "right", "top"]}
            style={{ backgroundColor: colors.primary }}
        >
            <View style={[style, { flexDirection: "row", alignItems: "center" }]}>
                <View
                    style={{
                        borderRadius: 30,
                        overflow: 'hidden',
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Icon
                            name="chevron-back"
                            type="ionicon"
                            color={colors.white}
                            size={scaledSize(25)}
                            style={{ padding: 12 }}
                        />
                    </TouchableOpacity>
                </View>
                <Text
                    style={[
                        {
                            color: colors.white,
                            fontSize: scaledSize(20),
                            fontWeight: 'bold',
                        },
                        titleStyle,
                    ]}>
                    {pageTitle}
                </Text>
            </View>

        </SafeAreaView>
    )
}

const navigationOptions = ({ pageTitle, textStyle = null }) => {
    return {
        header: ({ scene, navigation }) => {
            const { options } = scene.descriptor;
            return (
                <CustomHeader
                    navigation={navigation}
                    pageTitle={pageTitle}
                    style={options.headerStyle}
                    titleStyle={textStyle}
                />
            );
        },
    };
};

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            hederMode="Screen"
            //initialRouteName={"LoginSupplier"}
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                    elevation: 0
                },
                cardStyle: {
                    backgroundColor: colors.primary,
                },
            }}
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
            <Stack.Screen name="LoginSupplier"
                component={LoginSupplier}
                options={({ route }) => ({
                    ...navigationOptions({
                        pageTitle: 'Login as Supplier',
                    }),
                })}
            />
        </Stack.Navigator>
    )
}

export default NotAuthenticated;