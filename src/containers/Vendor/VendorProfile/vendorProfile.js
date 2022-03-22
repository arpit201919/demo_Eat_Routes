import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomHeader from "../../../components/CustomHeader";
import { callVendorProfileApi } from "../../../store/eatRoutesSlice";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const { userId, vendorProfile } = useSelector((state) => state.eatRoutes);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            callGetUserDetailApi();
        });
        return unsubscribe;
    }, [navigation]);

    const callGetUserDetailApi = () => {
        dispatch(callVendorProfileApi(userId));
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
                    <Text>first name-{vendorProfile?.first_name}</Text>
                    <Text>last name-{vendorProfile?.last_name}</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default VendorProfile;