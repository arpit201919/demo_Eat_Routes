import React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";

const Brands = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.primary }}>
            <SafeAreaView
                style={{ flex: 1 }}
                edges={["left", "right", "top"]}
            >
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={colors.primary}
                />
                <CustomHeader
                    titleText={"View Brands"}
                    showFilter
                    style={{ paddingHorizontal: "5%" }}
                />
                <View style={{ borderTopRightRadius: scaledSize(24), borderTopLeftRadius: scaledSize(24), flex: 1, backgroundColor: colors.white, paddingHorizontal: scaledSize(15) }}>
                    <Text>hh</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Brands