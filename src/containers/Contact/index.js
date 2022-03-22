import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Linking, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { callContactDetailsApi } from "../../store/eatRoutesSlice";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import typography from "../../utils/theme/typography";
import { styles } from "./styles"

const Contact = () => {
    const { staffId, contactDetails } = useSelector((state) => state.eatRoutes)
    const dispatch = useDispatch();
    console.log("staffId-->>", staffId);

    useEffect(() => {
        dispatch(callContactDetailsApi(staffId))
    }, [])

    const [info, setInfo] = useState();
    const [loading, setLoading] = useState();

    const onCallButtonPressed = (number) => {
        Platform.OS === "android" ? Linking.openURL(`tel:${number}`) : Linking.openURL(`telprompt:${number}`);
    }

    const onMessageButtonPressed = (number) => {
        Platform.OS === "android" ? Linking.openURL(`sms:${number}`) : Linking.openURL(`sms:${number}`);
    }

    const onMailPress = (mail) => {
        Linking.openURL(`mailto:${mail}`)
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
                    titleText={"Contact"}
                    onBackPress={() => navigation.goBack()}
                    showFilter
                />
                <View style={styles.mainView}>
                    <View style={styles.avatarCont}>
                        <TouchableOpacity
                            style={styles.callContainer}
                            onPress={() => onCallButtonPressed("+918989961364")}
                        >

                        </TouchableOpacity>
                        <View
                            style={styles.avatar}

                        >

                        </View>
                        <TouchableOpacity
                            style={styles.callContainer}
                            onPress={() => onMessageButtonPressed("+918989961364")}
                        >

                        </TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: "center", marginVertical: scaledSize(20), fontSize: 22, fontFamily: typography.light }}>{"Hani Vidhrani"}</Text>
                    <View>
                        <Text style={styles.labelStyle} >{"First Name"}</Text>
                        <Text style={styles.textStyle}>{contactDetails?.first_name}</Text>
                        <Text style={styles.labelStyle}>{"Last Name"}</Text>
                        <Text style={styles.textStyle}>{contactDetails?.last_name}</Text>
                        <Text style={styles.labelStyle} >{"Phone Number"}</Text>
                        <Text style={styles.textStyle}>{contactDetails?.phone}</Text>
                        <Text style={styles.labelStyle}>{"Email Address"}</Text>
                        <TouchableOpacity
                            onPress={() => onMailPress("test@example.com")}
                        >
                            <Text style={styles.textStyle}>{contactDetails?.email}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Contact;