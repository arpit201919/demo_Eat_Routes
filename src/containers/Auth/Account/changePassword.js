import React, { useRef, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../../../components/CustomHeader";
import colors from "../../../utils/theme/colors";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { scaledSize } from "../../../utils";
import { validatePathConfig } from "@react-navigation/native";
import { changePasswordService } from "../../../services/auth";

const ChangePassword = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const oldPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [oldPasswordErr, setOldPasswordErr] = useState("");
    const [newPasswordErr, setNewPasswordErr] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("");

    const onChangePassword = () => {
        const valid = onValidate();

        console.log("valid-->>", valid);
        if (!valid) {
            return
        }

        //callChangePasswordApi();
    }

    const onValidate = () => {
        let oldPasswordError = null;
        let newPasswordError = null;
        let confirmPasswordError = null;

        const op = oldPassword.trim()
        setOldPassword(op);
        if (op == "") {
            oldPasswordError = "old password is required."
        }

        const np = newPassword.trim()
        setNewPassword(np);
        if (newPassword === "") {
            newPasswordError = "please enter new password first."
        } else if (np.length < 6) {
            newPasswordError = "New password length must be greater than 6 characters"
        }

        if (confirmPassword === "") {
            confirmPasswordError = "please confirm new password"
        }

        if (newPassword === oldPassword && newPassword !== '') {
            newPasswordErr =
                'Your new password must be different from your current password';
        }
        if (newPassword !== confirmPassword && newPassword !== '') {
            confirmPasswordErr = 'Confirm new password & new password must be same.';
        }

        if (!oldPasswordError && !newPasswordError && !confirmPasswordError) {
            return true
        }

        setOldPasswordErr(oldPasswordError);
        setNewPasswordErr(newPasswordError);
        setConfirmPasswordErr(confirmPasswordError);

        return false
    }

    const callChangePasswordApi = async () => {
        const data = {
            old_password: oldPassword,
            password: newPassword,
            password_confirmation: confirmPassword,
        };

        const response = await changePasswordService(data)
        if (response.data.statusCode !== 200) {
            response !== 'logout' ? showMessage({
                message: response.data.errorMessage,
                type: "info",
                duration: 1850,
                backgroundColor: colors.primary
            }) : null;
        }
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
                    titleText={"Change Password"}
                    showBack
                    onBackPress={() => navigation.goBack()}
                />
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    {loading ?
                        <ActivityIndicator
                            size={"large"}
                        />
                        :
                        null}
                    <View style={{ paddingHorizontal: scaledSize(16) }}>
                        <FloatingTextInput
                            label={"Old Password"}
                            ref={oldPasswordRef}
                            value={oldPassword}
                            onChangeText={(text) => setOldPassword(text)}
                            onSubmitEditing={() => newPasswordRef.current.focus()}
                            error={oldPasswordErr}
                            errorColor={colors.primary}
                        />
                        <FloatingTextInput
                            label={"New Password"}
                            ref={newPasswordRef}
                            value={newPassword}
                            onChangeText={(text) => setNewPassword(text)}
                            onSubmitEditing={() => confirmPasswordRef.current.focus()}
                            error={newPasswordErr}
                            errorColor={colors.primary}
                        />
                        <FloatingTextInput
                            label={"Confirm Password"}
                            ref={confirmPasswordRef}
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            error={confirmPasswordErr}
                            errorColor={colors.primary}
                        />

                        <Button
                            title={"Change Password"}
                            onPress={() => onChangePassword()}
                        />
                    </View>
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

export default ChangePassword;