import React from "react";
import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";
import LOGO from '../../../assets/logo_1.png';
import { Button } from "react-native-elements";

const ForgotPassword = ({ navigation }) => {
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
                    titleText="Forgot Password"
                    showBack={true}
                    onBackPress={() => navigation.goBack()}
                />
                <KeyboardAwareScrollView
                    contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.primary }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.mainView}>
                        <View style={styles.imageCont}>
                            <Image
                                source={LOGO}
                                resizeMode="contain"
                                style={styles.imageStyle}
                            />
                        </View>
                        <Text style={styles.instructionsText}>
                            Enter your register email below to recive password reset instructions.
                        </Text>
                        <FloatingTextInput
                            label="Email Address"
                        />
                        <Button
                            title={"Login"}
                            TouchableComponent={TouchableOpacity}
                            containerStyle={styles.buttonCont}
                            titleStyle={styles.loginText}
                            buttonStyle={{
                                backgroundColor: colors.primary, height: scaledSize(45)
                            }}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
}

export default ForgotPassword;