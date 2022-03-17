import { StyleSheet } from "react-native";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import typography from "../../utils/theme/typography";

export const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: colors.primary
    },
    mainView: {
        backgroundColor: "white",
        flex: 1,
        marginTop: scaledSize(5),
        borderTopRightRadius: scaledSize(26),
        borderTopLeftRadius: scaledSize(26),
        paddingHorizontal: scaledSize(16)
    },
    avatarCont: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: scaledSize(20)
    },
    callContainer: {
        backgroundColor: "red",
        height: scaledSize(40),
        width: scaledSize(40),
        borderRadius: scaledSize(20)
    },
    avatar: {
        backgroundColor: "red",
        height: scaledSize(120),
        width: scaledSize(120),
        marginHorizontal: scaledSize(24),
        borderRadius: scaledSize(65)
    },
    labelStyle: {
        color: colors.text_label,
        fontSize: scaledSize(16),
        fontFamily: typography.regular
    },
    textStyle: {
        fontSize: scaledSize(18),
        color: colors.black,
        fontFamily: typography.semiBold,
        marginBottom: scaledSize(20)
    }
})