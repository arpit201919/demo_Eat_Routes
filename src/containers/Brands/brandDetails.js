import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, ActivityIndicator, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { getBrandDetailService } from "../../services/common";
import colors from "../../utils/theme/colors";

const BrandDetails = ({ navigation, route }) => {
    const data = route.params.item;
    const [loading, setLoading] = useState(false);
    const [brandDetail, setBrandDetail] = useState();

    console.log("data--", data);

    useEffect(() => {
        callGetBrandDetailApi();
    }, [])

    const callGetBrandDetailApi = async () => {
        setLoading(true)
        const response = await getBrandDetailService(data.id);
        console.log("response-->>", response.data);

        if (response.data.statusCode !== 200) {
            setLoading(false)
            response !== 'logout' ? showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850,
                backgroundColor: colors.primary
            }) : null;
        } else {
            setBrandDetail(response.data.data)
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}
                edges={["left", "right", "top"]}
            >
                <StatusBar
                    barStyle={"dark-content"}
                    backgroundColor={colors.primary}
                />
                <CustomHeader
                    titleText={`${data.name} Details`}
                    showBack
                    style={{ paddingHorizontal: "5%" }}
                    onBackPress={() => navigation.goBack()}
                />
                {loading ? <ActivityIndicator
                    animating
                    color={colors.white}
                    size={"large"}
                /> : null}
                <View style={{ flex: 1, backgroundColor: "white" }}>

                </View>
            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    }
})

export default BrandDetails;