import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { View, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import { getBrandDetailService } from "../../../services/common";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorProductDetail = ({ navigation, route }) => {
    const dataRe = route?.params?.item

    const [data, setData] = useState(dataRe);
    const [loading, setLoading] = useState(false);

    console.log("data-->>", data);

    useEffect(() => {
        getProductDetail();
    }, []);

    const getProductDetail = async () => {
        const response = await getBrandDetailService(data.id);
        console.log("response-->>", response.data);
        if (response.data.statusCode !== 200) {
            response != "logout" ? showMessage({
                message: response.data.errorMessage,
                duration: 1850,
                backgroundColor: colors.primary
            }) : null
        }
    }

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
                    <Text>Name-{data.name}</Text>
                    <Text>Description-{data.description}</Text>
                    <Text>Sku-{data.sku}</Text>
                    <Text>Brand_id-{data.brand_id}</Text>

                </View>
            </SafeAreaView>
        </View>

    )
}

export default VendorProductDetail;