import React from "react";
import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../components/CustomHeader";
import colors from "../../utils/theme/colors";
import { styles } from "./styles"

const Contact = () => {
    return (
        <View style={styles.containers}>
            <StatusBar
                backgroundColor={colors.primary}
                barStyle={"dark-content"}
            />
            <SafeAreaView
                style={{ flex: 1 }}
                edges={['left', 'right', 'top']}
            >
                <CustomHeader
                    titleText={"Contact"}
                    onBackPress={() => navigation.goBack()}
                />
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    <Text>gg</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Contact;