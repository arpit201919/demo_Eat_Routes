import { StyleSheet } from "react-native";
import { scaledSize } from "../../../utils";
import colors from "../../../utils/theme/colors";

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
        justifyContent: "center"
    },
    imageStyle: {
        height: scaledSize(150),
        width: scaledSize(150)
    }
})