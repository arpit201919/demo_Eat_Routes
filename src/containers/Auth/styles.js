import { StyleSheet } from "react-native";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import typography from "../../utils/theme/typography";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        paddingHorizontal: "5%"
    },
    iconContainers: {
        alignSelf: "center",
        width: "60%",
        aspectRatio: 600 / 350,
        marginTop: "20%"
    },
    logoStyles: {
        height: "100%",
        width: "100%"
    },
    content: {
        flex: 1,
        marginVertical: 20,
    },
    block: {
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
    buttonContainer: {
        marginVertical: 10,
    },
    buttonStyle: {
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
    noAcContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginStart: 10,
        marginEnd: 10
    },
    noAcText: {
        marginEnd: 20,
        color: colors.white,
        fontSize: scaledSize(13),
        fontFamily: typography.regular,
    },
    sigupText: {
        color: colors.text_yellow,
        fontSize: scaledSize(14),
        fontFamily: typography.regular,
    },
})