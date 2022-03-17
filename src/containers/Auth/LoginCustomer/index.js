import React, { useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, ActivityIndicator, Platform } from "react-native";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import LOGO from "../../../assets/logo_white.png";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { EmailRegExp, scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import messaging from "@react-native-firebase/messaging";
import { styles } from "./styles";
import { authApi } from "../../../services/auth";
import { showMessage, hideMessage } from "react-native-flash-message";
import { setData } from "../../../utils/asyncStorage";
import { addDeviceTokenApi } from "../../../services/common";
import { CommonActions } from "@react-navigation/native";

const LoginCustomer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    //console.log("kk", Math.floor(Date.now() / 1000));

    const onLoginPress = async () => {
        setLoading(true);
        const data = {
            username: email,
            password: password,
            role: "client"
        }
        const response = await authApi(data);
        setLoading(false)
        if (response?.data.statusCode != 200) {
            setLoading(false)
            console.log("error");
            showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850
            })
        } else {
            await setData("token", response.data.data.token);
            await setData("userType", "client");
            await setData("userId", JSON.stringify(response.data.data.user.id));
            await setData("staffId", JSON.stringify(response.data.data.user.staff_id))
            getDeviceToken();
            setLoading(false);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: "AuthStack",
                            params: {
                                type: "client",
                                temp_password: response.data.data.user.temp_password,
                            }
                        }
                    ]
                })
            )
        }
        console.log("authResponse-->>", response.data);
    }

    const getDeviceToken = async () => {
        messaging()
            .getToken()
            .then((token) => {
                if (token) {
                    addDeviceToken(token);
                }
                console.log("yoken-->>", token);
            })
    }

    const addDeviceToken = async (token) => {
        await setData('deviceToken', token);
        console.log("token--->>", token);
        const data = {
            device_id: token,
            platform: Platform.OS === "android" ? "android" : "ios",
            last_used: Math.floor(Date.now() / 1000)
        }
        const response = await addDeviceTokenApi(data);
        console.log("addR--->>", response.data);
        if (response.data.statusCode != 200) {
            showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850
            })
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={colors.primary}
                />
                {loading ? <ActivityIndicator
                    animating
                    color={colors.white}
                    size={"large"}
                /> : null}
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="always"
                >
                    <View style={styles.imageCont}>
                        <Image
                            source={LOGO}
                            style={{ height: "100%", width: "100%" }}
                            resizeMode={"contain"}
                        />
                    </View>
                    <View style={styles.view}>
                        <View style={{ marginVertical: scaledSize(20) }}>
                            <Text style={styles.title}>Login to your portal</Text>
                            <Text style={styles.subText}>Please select one option to proceed</Text>
                        </View>
                        <FloatingTextInput
                            label={"Email"}
                            tintColor={colors.white}
                            selectionColor={colors.white}
                            textColor={colors.white}
                            baseColor={colors.white}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            autoCapitalize={"none"}
                        />
                        <FloatingTextInput
                            label={"Password"}
                            secureTextEntry={true}
                            tintColor={colors.white}
                            selectionColor={colors.white}
                            textColor={colors.white}
                            baseColor={colors.white}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity
                            style={styles.forgot}
                            onPress={() => navigation.navigate("ForgotPassword")}
                        >
                            <Text
                                style={styles.forgotTxt}
                            >
                                Forgot your password?
                            </Text>
                        </TouchableOpacity>
                        <Button
                            title={"Login"}
                            TouchableComponent={TouchableOpacity}
                            containerStyle={{ marginTop: scaledSize(22) }}
                            buttonStyle={styles.loginButton}
                            titleStyle={styles.buttonTitle}
                            onPress={() => onLoginPress()}
                        />
                        <TouchableOpacity
                            style={styles.forgot}
                            onPress={() => navigation.navigate("LoginStaff")}
                        >
                            <Text
                                style={styles.forgotTxt}
                            >
                                Login as staff
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>

        </View>
    )
}

export default LoginCustomer