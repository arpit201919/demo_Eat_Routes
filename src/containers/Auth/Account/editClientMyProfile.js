import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { putUpdateClientService } from "../../../services/common";
import { scaledSize } from "../../../utils";
import { getData } from "../../../utils/asyncStorage";
import colors from "../../../utils/theme/colors";

const EditClientMyProfile = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [phone, setPhone] = useState("");

    const onSave = async () => {
        setLoading(true)
        const data = {
            firstName,
            lastName,
            company,
            streetAddress: address,
            country,
            city,
            postalCode: postalCode,
            emailAddress,
            phone,
        }

        const response = await putUpdateClientService(
            //id,
            data
        )

        if (response.data.statusCode != 200) {
            setLoading(false)
            response != "logout" ? showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850,
                backgroundColor: colors.primary
            }) : null
        } else {
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
                    titleText="Edit Profile"
                    showBack={true}
                    onBackPress={() => navigation.goBack()}
                />
                <KeyboardAwareScrollView style={styles.viewStyle}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                        color={colors.primary}
                    /> : null}

                    <FloatingTextInput
                        label="First Name"
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                    />
                    <FloatingTextInput
                        label="Last Name"
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                    />
                    <FloatingTextInput
                        label="Company"
                        value={company}
                        onChangeText={(text) => setCompany(text)}
                    />
                    <FloatingTextInput
                        label="Street Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <FloatingTextInput
                        label="Country"
                        value={country}
                        onChangeText={(text) => setCountry(text)}
                    />
                    <FloatingTextInput
                        label="City"
                        value={city}
                        onChangeText={(text) => setCity(text)}
                    />
                    <FloatingTextInput
                        label="Postal Code"
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                    />
                    <FloatingTextInput
                        label="Email Address"
                        value={emailAddress}
                        onChangeText={(text) => setEmailAddress(text)}
                    />
                    <FloatingTextInput
                        label="Phone"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                    <Button
                        title={"Save"}
                        onPress={() => onSave()}
                    />
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    viewStyle: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: scaledSize(16)
    },
    itemStyle: {
        backgroundColor: colors.black_faded,
        marginTop: scaledSize(12),
        height: scaledSize(30)
    }
})

export default EditClientMyProfile;