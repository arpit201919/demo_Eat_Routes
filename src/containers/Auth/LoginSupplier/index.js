import React, { useRef, useState } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, Platform, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";
import LOGO from '../../../assets/logo_1.png';
import { Button } from "react-native-elements";
import { useDispatch } from "react-redux";
import { callLoginApi } from "../../../store/eatRoutesSlice";

const LoginSupplier = ({ navigation }) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignUp = () => {
        const data = {
            username: email,
            password,
            role: "supplier"
        }

        dispatch(callLoginApi(data, role = "supplier"));
        navigation.navigate("AuthStack");
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