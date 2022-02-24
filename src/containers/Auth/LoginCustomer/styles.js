import { StyleSheet } from "react-native";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import typography from "../../../utils/theme/typography";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: "5%"
    },
    imageCont: {
        marginTop: "20%",
        width: "60%",
        alignSelf: "center",
        aspectRatio: 600 / 350,
    },
    view: {
        flex: 1,
        marginVertical: 20
    },
    title: {
        fontSize: 21,
        color: colors.white,
        fontFamily: typography.semiBold,
        textAlign: "center"
    },
    subText: {
        fontSize: 15,
        color: colors.white,
        fontFamily: typography.regular,
        textAlign: "center"
    },
    forgot: {
        alignSelf: "flex-end",
        marginTop: scaledSize(10)
    },
    forgotTxt: {
        color: colors.white,
        fontSize: scaledSize(13),
        fontFamily: typography.medium
    },
    loginButton: {
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 30,
        marginTop: 10,
        paddingVertical: scaledSize(5)
    },
    buttonTitle: {
        fontSize: 21,
        fontFamily: typography.semiBold,
        color: colors.white
    },
})