import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import LOGO from "../../../assets/logo_white.png";
import FloatingTextInput from "../../../components/FloatingTextInput/styles";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const LoginCustomer = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>

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
                        <View style={{ marginTop: scaledSize(20) }}>
                            <Text style={styles.title}>Login to your portal</Text>
                            <Text style={styles.subText}>Please select one option to proceed</Text>
                        </View>
                        <FloatingTextInput
                            placeholder={"ggg"}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>

        </View>
    )
}

export default LoginCustomer