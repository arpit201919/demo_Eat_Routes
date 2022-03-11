import React, { useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, ActivityIndicator } from "react-native";
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

const LoginCustomer = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    console.log("---->>>", email, password);

    const onLoginPress = async () => {
        setLoading(true);
        const data = {
            username: email,
            password: password
        }
        const response = await authApi(data);
        setLoading(false)
        if (response?.data.statusCode === 400) {
            console.log("hh");
            showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850
            })
        }
        console.log("authResponse-->>", response.data);
        // messaging()
        //     .getToken()
        //     .then((token) => {
        //         if (token) {
        //             console.log(`device token id  ${Platform.OS} ` + token);
        //         }
        //     })
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