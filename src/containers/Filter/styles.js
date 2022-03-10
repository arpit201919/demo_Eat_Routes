import { StyleSheet } from "react-native";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import typography from "../../utils/theme/typography";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    mainView: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: scaledSize(24),
        borderTopRightRadius: scaledSize(24),
        paddingHorizontal: "5%"
    },
    list: {
        borderBottomWidth: 1,
        height: scaledSize(65),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.borderColor
    },
    imageCont: {
        height: scaledSize(45),
        width: scaledSize(45),
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center"
    },
    listName: {
        fontSize: 18,
        fontFamily: typography.regular,
        marginLeft: scaledSize(12)
    }
})