import React, { useRef, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, Platform, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";
import LOGO from '../../../assets/logo_1.png';
import typography from "../../../utils/theme/typography";
import { Button } from "react-native-elements";
import { authApi } from "../../../services/auth";
import { showMessage } from "react-native-flash-message";
import { setData } from "../../../utils/asyncStorage";
import messaging from "@react-native-firebase/messaging";
import { addDeviceTokenApi } from "../../../services/common";
import { CommonActions } from "@react-navigation/native";

const LoginSupplier = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignUp = async () => {
        setLoading(true);
        const data = {
            username: email,
            password,
            role: "supplier"
        }
        const response = await authApi(data);

        console.log("suppRes-->>", response.data);
        if (response.data.statusCode != 200) {
            setLoading(false)
            showMessage({
                message: response.data.errorMessage,
                duration: 1850,
                backgroundColor: colors.primary
            })
        } else {
            await setData("userType", "supplier")
            await setData("token", response.data.data.token);
            await setData("userId", JSON.stringify(response.data.data.user.id));
            getDeviceToken();
            setLoading(false);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: "AuthStack",
                            params: {
                                type: "supplier",
                                temp_password: response.data.data.user.temp_password,
                            }
                        }
                    ]
                })
            )
        }
    }

    const getDeviceToken = () => {
        messaging()
            .getToken()
            .then((token) => {
                addDeviceToken(token)
            })
    };

    const addDeviceToken = async (deviceToken) => {
        await setData("deviceToken", deviceToken)
        const data = {
            device_id: deviceToken,
            platform: Platform.OS === 'android' ? 'android' : "ios",
            last_used: Math.floor(Date.now() / 1000)
        }
        const response = await addDeviceTokenApi(data);
        console.log("addTokenSup-->>", response);
        if (response.data.statusCode != 200) {
            setLoading(false)
            response != "logout" ? showMessage({
                message: response.data.errorMessage,
                duration: 1850,
                backgroundColor: colors.primary
            }) : null
        }
    }

    return (
        <View style={styles.containers}>
            <SafeAreaView
                edges={["top", "left", "right"]}
                style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={colors.primary}
                    barStyle="dark-content"
                />
                <CustomHeader
                    titleText="Login as Supplier"
                    showBack={true}
                    onBackPress={() => navigation.goBack()}
                />
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.primary }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.mainView}>
                        {loading ? <ActivityIndicator
                            size={"large"}
                            color={colors.primary}
                        /> : null}
                        <View style={styles.imageCont}>
                            <Image
                                source={LOGO}
                                resizeMode="contain"
                                style={styles.imageStyle}
                            />
                        </View>
                        <FloatingTextInput
                            label="Email"
                            ref={emailRef}
                            value={email}
                            autoCapitalize="none"
                            onChangeText={(text) => setEmail(text)}
                            onSubmitEditing={() => passwordRef.current.focus()}
                        />
                        <FloatingTextInput
                            label="Password"
                            secureTextEntry
                            ref={passwordRef}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity style={styles.forgotContainer}>
                            <Text style={styles.forgotText}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <Button
                            title={"Login"}
                            TouchableComponent={TouchableOpacity}
                            containerStyle={styles.buttonCont}
                            titleStyle={styles.loginText}
                            buttonStyle={{
                                backgroundColor: colors.primary, height: scaledSize(45)
                            }}
                            onPress={() => handleSignUp()}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
}

export default LoginSupplier;