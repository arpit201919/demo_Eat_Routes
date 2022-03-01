import { StyleSheet } from "react-native";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";
import typography from "../../../utils/theme/typography";

export const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: colors.primary
    },
    mainView: {
        flexGrow: 1,
        backgroundColor: colors.white,
        paddingHorizontal: "5%",
        borderTopLeftRadius: scaledSize(24),
        borderTopRightRadius: scaledSize(24),
        //paddingTop: "5%"
    },
    imageCont: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1%"
    },
    imageStyle: {
        height: scaledSize(150),
        width: scaledSize(150)
    },
    instructionsText: {
        fontSize: scaledSize(16),
        fontFamily: typography.regular,
        color: colors.text_label,
        marginBottom: 20,
    },
    buttonCont: {
        borderRadius: scaledSize(22),
        marginTop: scaledSize(20)
    },
    loginText: {
        fontFamily: typography.medium,
        fontSize: scaledSize(22)
    }
})