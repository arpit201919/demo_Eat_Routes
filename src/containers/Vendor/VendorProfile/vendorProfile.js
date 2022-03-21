import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import { getUserDetailService } from "../../../services/user";
import { getData } from "../../../utils/asyncStorage";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorProfile = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            callGetUserDetailApi();
        });
        return unsubscribe;
    }, [navigation]);

    const callGetUserDetailApi = async () => {
        const value = await getData("userId")
        console.log("value", value);
        setLoading(true)
        const response = await getUserDetailService(value)
        console.log("vresponse-->>", response.data);
        setLoading(false)
        if (response.data.statusCode != 200) {
            setLoading(false)
            response != "logout" ? showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850,
                backgroundColor: colors.primary
            }) : null
        } else {
            setData(response.data.data)
            setLoading(false)
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
                    titleText="Profile"
                />
                <View style={styles.viewStyle}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                        color={colors.primary}
                    /> : null}
                    <Text>first name-{data?.first_name}</Text>
                    <Text>last name-{data?.last_name}</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default VendorProfile;