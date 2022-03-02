import { StyleSheet } from "react-native";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";

export const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: colors.primary
    },
    mainView: {
        borderTopRightRadius: scaledSize(24),
        borderTopLeftRadius: scaledSize(24),
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: scaledSize(15)
    }
})