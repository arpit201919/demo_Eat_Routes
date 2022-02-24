import React from "react";
import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const LoginSupplier = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAwareScrollView>
                    <Text>gg</Text>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
}

export default LoginSupplier;