import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

const CustomHeader = () => {
    return (
        <SafeAreaView
            edges={["right", "top", "left"]}
            style={styles.container}
        >

        </SafeAreaView>
    )
}

export default CustomHeader;