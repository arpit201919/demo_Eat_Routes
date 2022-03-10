import React, { useState } from "react";
import { FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors, { colorArray } from "../../utils/theme/colors";
import { styles } from "./styles";
import CustomHeader from "../../components/CustomHeader";
import typography from "../../utils/theme/typography";
import { scaledSize } from "../../utils";

const FilterScreen = ({ navigation }) => {
    const Data = [
        { id: 1, name: "Protein" },
        { id: 2, name: "Category 2" },
        { id: 3, name: "Category 3" },
        { id: 4, name: "Category 4" },
        { id: 5, name: "Category 5" },
    ]

    const [data, setData] = useState(Data);

    const renderItem = ({ item, index }) => {
        const colors = colorArray[Math.floor(Math.random() * colorArray.length)]
        return (
            <TouchableOpacity style={styles.list}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.imageCont, { backgroundColor: colors }]}>
                        <Text>{item.name.charAt(0)}</Text>
                    </View>
                    <Text style={styles.listName}>{item.name}</Text>
                </View>
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
                </View>
            </SafeAreaView>
        </View>
    )
}

export default FilterScreen;