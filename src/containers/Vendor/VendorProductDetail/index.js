import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { View, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomHeader from "../../../components/CustomHeader";
import { getBrandDetailService } from "../../../services/common";
import { getVendorProductDetails } from "../../../store/eatRoutesSlice";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorProductDetail = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const { vendorProductDetails } = useSelector((state) => state.eatRoutes)
    const dataRe = route?.params?.item
    const [data, setData] = useState(dataRe);
    const [loading, setLoading] = useState(false);

    console.log("data-->>", data);

    useEffect(() => {
        dispatch(getVendorProductDetails(data.id));
    }, []);

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
                    titleText="Products"
                    showBack={true}
                    onBackPress={() => navigation.goBack()}
                />
                <View style={styles.viewStyle}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                        color={colors.primary}
                    /> : null}
                    <Text>Name-{vendorProductDetails?.name}</Text>
                    <Text>Description-{vendorProductDetails?.description}</Text>
                    <Text>Sku-{vendorProductDetails?.sku}</Text>
                    <Text>Brand_id-{vendorProductDetails?.brand_id}</Text>

                </View>
            </SafeAreaView>
        </View>

    )
}

export default VendorProductDetail;