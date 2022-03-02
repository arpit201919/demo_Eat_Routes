import React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import { styles } from "./styles";

const Brands = ({ navigation }) => {
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
                    onFilterPress={() => navigation.navigate("FilterScreen")}
                />
                <View style={styles.mainView}>
                    <Text>hh</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Brands