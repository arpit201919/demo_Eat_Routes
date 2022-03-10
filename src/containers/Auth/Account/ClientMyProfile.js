import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import colors from "../../../utils/theme/colors";

const ClientMyProfile = () => {
    return (
        <View style={styles.containers}>
            <StatusBar
                backgroundColor={colors.primary}
                barStyle={"dark-content"}
            />
            <SafeAreaView
                style={{ flex: 1 }}
                edges={['left', 'right', 'top']}
            >
                <CustomHeader
                    titleText={"Orders"}
                    onBackPress={() => navigation.goBack()}
                />
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    <Text>orders</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: colors.primary
    }
})

export default ClientMyProfile;