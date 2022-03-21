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
    itemStyle: {
        backgroundColor: colors.black_faded,
        marginTop: scaledSize(12),
        height: scaledSize(30)
    }
})