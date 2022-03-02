import { StyleSheet } from "react-native";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";

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
        backgroundColor: "skyblue",
        borderBottomWidth: 1,
        height: scaledSize(65),
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    imageCont: {
        backgroundColor: "yellow",
        height: scaledSize(40),
        width: scaledSize(40),
        borderRadius: 20
    }
})