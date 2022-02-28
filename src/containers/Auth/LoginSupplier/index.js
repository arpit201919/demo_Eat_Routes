import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";
import LOGO from '../../../assets/logo_1.png';

const LoginSupplier = ({ navigation }) => {
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
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
}

export default LoginSupplier;