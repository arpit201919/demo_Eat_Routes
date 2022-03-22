import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors, { colorArray } from "../../utils/theme/colors";
import { styles } from "./styles";
import CustomHeader from "../../components/CustomHeader";
import typography from "../../utils/theme/typography";
import { scaledSize } from "../../utils";
import { Button, CheckBox } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { callFilterCategoryApi } from "../../store/eatRoutesSlice";

const FilterScreen = ({ navigation, route }) => {
    const { filterCategoryList } = useSelector((state) => state.eatRoutes);
    const dispatch = useDispatch();
    const [data, setData] = useState(filterCategoryList);

    useEffect(() => {
        dispatch(callFilterCategoryApi())
    }, [])

    const onItemPress = (id) => {
        const array = [...data];
        for (let data of array) {
            console.log("data-->>", data, id);
            if (data.id == id) {
                data.isSelected = (data?.isSelected == null) ? true : false;
            }
        }
        setData(array);
    }

    const onApplyFilter = () => {
        tempArray = []
        const filteredData = data.filter((value) => value.isSelected === true)
        console.log("filteredData-->>", filteredData);
        route.params.filterList(filteredData);
        navigation.goBack();
    }

    const renderItem = ({ item, index }) => {
        const colors = colorArray[Math.floor(Math.random() * colorArray.length)]
        return (
            <TouchableOpacity
                style={styles.list}
                onPress={() => onItemPress(item.id)}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.imageCont, { backgroundColor: colors }]}>
                        <Text>{item.name.charAt(0)}</Text>
                    </View>
                    <Text style={styles.listName}>{item.name}</Text>
                </View>
                <CheckBox
                    checked={item.isSelected}
                    onPress={() => onItemPress(item.id)}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={colors.primary}
            />
            <SafeAreaView
                style={{ flex: 1 }}
                edges={['left', 'top', 'right']}
            >
                <CustomHeader
                    titleText={"Filter"}
                    showBack
                    showFilter={true}
                    onBackPress={() => navigation.goBack()}
                    filterTitle={"Clear filters"}
                />
                <View style={styles.mainView}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
                    <Button
                        TouchableComponent={TouchableOpacity}
                        title={"Appply Filters"}
                        containerStyle={{ borderRadius: 28, marginBottom: scaledSize(18) }}
                        buttonStyle={{ backgroundColor: colors.primary, height: scaledSize(48) }}
                        titleStyle={{ fontSize: 22, fontFamily: typography.regular, fontWeight: "800" }}
                        onPress={() => onApplyFilter()}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default FilterScreen;