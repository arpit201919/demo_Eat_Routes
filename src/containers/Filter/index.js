import React, { useState } from "react";
import { FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/theme/colors";
import { styles } from "./styles";
import CustomHeader from "../../components/CustomHeader";

const FilterScreen = () => {
    const Data = [
        { id: 1, name: "Protein" },
        { id: 2, name: "Category 2" },
        { id: 3, name: "Category 3" },
        { id: 4, name: "Category 4" },
        { id: 5, name: "Category 5" },
    ]

    const [data, setData] = useState(Data);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.list}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.imageCont}>
                        <Text>{item.name.charAt(0)}</Text>
                    </View>
                    <Text>{item.name}</Text>
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