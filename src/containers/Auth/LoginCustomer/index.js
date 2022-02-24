import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import LOGO from "../../../assets/logo_white.png";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const LoginCustomer = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={colors.primary}
                />
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

                        />
                        <FloatingTextInput
                            label={"Password"}
                            secureTextEntry={true}
                            tintColor={colors.white}
                            selectionColor={colors.white}
                            textColor={colors.white}
                            baseColor={colors.white}
                        />
                        <TouchableOpacity
                            style={styles.forgot}
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
                        />
                        <TouchableOpacity
                            style={styles.forgot}
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