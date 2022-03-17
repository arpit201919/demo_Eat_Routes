import { StyleSheet } from "react-native";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary
    },
    viewStyle: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: scaledSize(16)
    },
    quantityCont: {
        width: scaledSize(100),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        height: scaledSize(40),
        marginRight: scaledSize(8)
    },
    sizeCont: {
        width: scaledSize(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        height: scaledSize(40),
        marginRight: scaledSize(8)
    }
})