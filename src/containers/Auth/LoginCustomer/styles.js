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
    }
})