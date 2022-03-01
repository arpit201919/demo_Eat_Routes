import React from "react";
import { View, Text, StatusBar, Image, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../utils/theme/colors";
import LOGO from "../../assets/logo_white.png";
import CHECK from "../../assets/check.png"
import typography from "../../utils/theme/typography";
import { scaledSize } from "../../utils/index";
import FloatingTextInput from "../../components/FloatingTextInput";
import { Button } from "react-native-elements";

const BrandSetup = () => {
    return (
        <View style={styles.containers}>
            <StatusBar
                backgroundColor={colors.primary}
                barStyle={"dark-content"}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}>
                    <View style={styles.imageCont}>
                        <Image
                            source={LOGO}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.titleText}>Let's get your brand setup!</Text>
                    <View style={styles.imageCont}>
                        <Image
                            source={CHECK}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </View>
                    <FloatingTextInput
                        label="Company legal name"
                        tintColor={colors.white}
                        baseColor={colors.white}
                        labelTextStyle={styles.labelTextStyle}
                    />
                    <FloatingTextInput
                        label="Company address"
                        tintColor={colors.white}
                        baseColor={colors.white}
                        labelTextStyle={styles.labelTextStyle}
                    />
                    <FloatingTextInput
                        label="Brand Name"
                        tintColor={colors.white}
                        baseColor={colors.white}
                        labelTextStyle={styles.labelTextStyle}
                    />
                    <FloatingTextInput
                        label="Brand website"
                        tintColor={colors.white}
                        baseColor={colors.white}
                        labelTextStyle={styles.labelTextStyle}
                    />
                    <FloatingTextInput
                        label="Contact Name"
                        tintColor={colors.white}
                        baseColor={colors.white}
                        labelTextStyle={styles.labelTextStyle}
                    />
                    <FloatingTextInput
                        label="Contact Phone"
                        tintColor={colors.white}
                        baseColor={colors.white}
                        labelTextStyle={styles.labelTextStyle}
                    />
                    <FloatingTextInput
                        label="Contact Email"
                        tintColor={colors.white}
                        baseColor={colors.white}
                        labelTextStyle={styles.labelTextStyle}
                    />
                    <Button
                        TouchableComponent={TouchableOpacity}
                        title={"Next"}
                        containerStyle={styles.buttonContainer}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                    />
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: "5%"
    },
    imageCont: {
        width: "60%",
        alignSelf: "center",
        aspectRatio: 600 / 350
    },
    image: {
        height: "100%",
        width: "100%"
    },
    titleText: {
        textAlign: "center",
        fontFamily: typography.light,
        fontWeight: "bold",
        fontSize: scaledSize(34),
        color: colors.white
    },
    labelTextStyle: {
        textAlign: "center",
        fontFamily: typography.medium,
        color: colors.white
    },
    buttonContainer: {
        borderRadius: scaledSize(24),
        backgroundColor: colors.primary,
        borderWidth: 2,
        marginVertical: scaledSize(17),
        borderColor: colors.white
    },
    button: {
        backgroundColor: colors.primary
    },
    buttonText: {
        fontSize: scaledSize(22),
        fontFamily: typography.medium
    }
})

export default BrandSetup;