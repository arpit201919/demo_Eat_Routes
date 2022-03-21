import React, { useState } from "react";
import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorQuotes = () => {
    const [loading, setLoading] = useState(false);
    return (
        <View style={styles.container}>
            <SafeAreaView
                edges={["top", "left", "right"]}
                style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={colors.primary}
                    barStyle="dark-content"
                />
                <CustomHeader
                    titleText="Quotes"
                />
                <View
                    style={styles.viewStyle}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                        color={colors.primary}
                    /> : null}
                </View>
            </SafeAreaView>
        </View>
    )
}

export default VendorQuotes;