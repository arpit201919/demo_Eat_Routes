import React from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import { styles } from "./styles";

const LoginSupplier = ({ navigation }) => {
    return (
        <View style={styles.containers}>
            <SafeAreaView>
                <KeyboardAwareScrollView>
                    <CustomHeader
                        titleText={"Login as supplier"}
                        onBackPress={() => navigation.goBack()}
                    />
                </KeyboardAwareScrollView>
            </SafeAreaView>

        </View>
    )
}

export default LoginSupplier;