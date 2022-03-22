import React, { useEffect, useState } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, ActivityIndicator, Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomHeader from "../../components/CustomHeader";
import { fetchBrandDetails } from "../../store/eatRoutesSlice";
import colors from "../../utils/theme/colors";

const BrandDetails = ({ navigation, route }) => {
    const data = route.params.item;
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { brandDetail } = useSelector((state) => state.eatRoutes);

    console.log("brandDetail-->>", brandDetail);

    console.log("data--", data.id);

    useEffect(() => {
        dispatch(fetchBrandDetails(data.id))
    }, [])

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
                    <Text>Name-{brandDetail?.name}</Text>
                    <Text>Order form-{brandDetail?.order_form}</Text>

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