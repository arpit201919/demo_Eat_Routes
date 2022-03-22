import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomHeader from "../../../components/CustomHeader";
import { getVendorProductList } from "../../../store/eatRoutesSlice";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorProductListing = ({ navigation }) => {
    const { vendorProductList } = useSelector((state) => state.eatRoutes);
    const dispatch = useDispatch()
    const [data, setData] = useState(vendorProductList);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getVendorProductList());
    }, []);

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