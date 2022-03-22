import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import CustomHeader from "../../../components/CustomHeader";
import { deleteDeviceTokenApi } from "../../../services/common";
import { getUserDetailService } from "../../../services/user";
import { callMyProfileApi } from "../../../store/eatRoutesSlice";
import { getData } from "../../../utils/asyncStorage";
import colors from "../../../utils/theme/colors";

const ClientMyProfile = ({ navigation }) => {
    const { userId } = useSelector((state) => state.eatRoutes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callMyProfileApi(userId));
    }, [])

    const [loading, setLoading] = useState(false);

    const getUserDetail = async () => {
        const value = await getData("userId")
        setLoading(true)
        const response = await getUserDetailService(value);
        console.log("profileResponse-->>", response.data);
        if (response?.data?.statusCode != 200) {
            setLoading(false);
            response !== 'logout' ? showMessage({
                message: response?.data?.errorMessage,
                type: "info",
                duration: 1850,
                backgroundColor: colors.primary
            }) : null
        } else {
        }
    }

    const logOut = async () => {
        const deviceToken = await getData("deviceToken");
        console.log("deviceToken--->>>", deviceToken);
        const response = await deleteDeviceTokenApi(deviceToken);

        console.log("deleteResponse-->>", response);
        //await removeData("userType");
    }



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
                    titleText={"My profile"}
                    onBackPress={() => navigation.goBack()}
                    showEdit={true}
                    onEditPress={() => navigation.navigate("EditClientMyProfile")}
                />
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                    /> : null}
                    <Text>Profile</Text>
                    <Button
                        title={"Logout"}
                        onPress={() => logOut()}
                    />

                    <Button
                        title={"Change Password"}
                        onPress={() => navigation.navigate("ChangePassword")}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: colors.primary
    }
})

export default ClientMyProfile;