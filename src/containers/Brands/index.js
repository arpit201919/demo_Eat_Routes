import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, FlatList, Image, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomHeader from "../../components/CustomHeader";
import { brandSearchCategories } from "../../services/common";
import { fetchBrand } from "../../store/eatRoutesSlice";
import colors from "../../utils/theme/colors";
import { styles } from "./styles";

const Brands = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, brandList } = useSelector((state) => state.eatRoutes)

    console.log("brandList==>>", brandList);



    useEffect(() => {
        dispatch(fetchBrand())
    }, []);

    const filterList = async (filteredData) => {
        console.log("hhgghghg", filteredData?.length);
        if (filteredData > 0) {
            let tempArray = [];
            for (let index = 0; index < filteredData?.length; index++) {
                console.log("index", filteredData?.[index].id);
                tempArray.push(filteredData?.[index].id)
            }
            setLoading(true);
            const data = {
                categories: tempArray
            }
            console.log("tempArray-->>", tempArray);
            const response = await brandSearchCategories(data)
            console.log("brandSearchCategories", JSON.stringify(response?.data));
            setLoading(false);
            setBrandList(JSON.stringify(response?.data?.data))
        }
    }

    return (
        <View style={styles.containers}>
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
                    showIcon
                    style={{ paddingHorizontal: "5%" }}
                    onFilterPress={() => navigation.navigate("FilterScreen", { "filterList": filterList })}
                />
                <View style={styles.mainView}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                    /> : null}
                    <FlatList
                        data={brandList}
                        numColumns={2}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("BrandDetails", { item: item })}
                                >
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ height: 100, width: 100 }}
                                    />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Brands