import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import { getSupplierProductListService } from "../../../services/common";
import { getData } from "../../../utils/asyncStorage";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorProductListing = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getVendorProductList();
    }, []);

    const getVendorProductList = async () => {
        setLoading(true);
        //const value = await getData("userId")
        const response = await getSupplierProductListService()
        console.log("response-->>", response.data);
        if (response.data.statusCode != 200) {
            setLoading(false);
            response != "logout" ? showMessage({
                message: response.data.errorMessage,
                duration: 1850,
                backgroundColor: colors.primary
            }) : null
        } else {
            setData(response.data.data);
            setLoading(false);
        }
    }

    const onItemClick = (item) => {
        navigation.navigate("VendorProductDetail", { item: item })
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
                />
                <View style={styles.viewStyle}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                        color={colors.primary}
                    /> : null}

                    <FlatList
                        data={data}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.itemStyle}
                                    onPress={() => onItemClick(item)}
                                >
                                    <Text>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        </View>

    )
}

export default VendorProductListing;