import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { getData } from "../../utils/asyncStorage"
import { getUserDetailService } from "../../services/user";
import { styles } from "./styles";
import CustomHeader from "../../components/CustomHeader";
import colors from "../../utils/theme/colors";

const StaffDetails = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState()

    useEffect(() => {
        getStaffDetails();
    }, []);

    const getStaffDetails = async () => {
        const value = await getData("staffId")
        setLoading(true);

        const response = await getUserDetailService(value)
        console.log("staffResponse-->>", response.data);

        if (response.data.statusCode != 200) {
            setLoading(false)
            response != "logout" ? showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850,
                backgroundColor: colors.primary
            }) : null;
        } else {
            setData(response.data.data);
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
                    <Text>{data?.first_name}</Text>
                    <Text>{data?.last_name}</Text>
                    <Text>{data?.phone}</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default StaffDetails;