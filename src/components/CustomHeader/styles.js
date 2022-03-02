import { StyleSheet } from "react-native";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import typography from "../../utils/theme/typography";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },
    mainView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: scaledSize(12)
    },
    backIconCont: {
        flexDirection: "row",
        alignItems: "center",
    },
    titleStyle: {
        fontSize: scaledSize(20),
        //fontWeight: "bold",
        fontFamily: typography.semiBold,
        color: colors.white
    },
    editIcon: {
        width: scaledSize(25),
        height: scaledSize(25)
    },
    filterIcon: {
        width: scaledSize(20),
        height: scaledSize(20)
    },
    filterTitleText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: typography.medium,
        marginRight: scaledSize(4)
    },

})