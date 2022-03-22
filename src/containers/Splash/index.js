import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import LOGO from "../../assets/logo_1.png";
import { getData } from "../../utils/asyncStorage";
import colors from "../../utils/theme/colors";

const SplashScreen = ({ navigation }) => {
    const { userType } = useSelector((state) => state.eatRoutes)

    useEffect(() => {
        setTimeout(() => {
            getInfo();
        }, 2000);
    }, []);

    const getInfo = async () => {
        const token = await getData("token");
        if (token && userType) {
            navigation.navigate("AuthStack");
        } else {
            navigation.navigate("NotAuthenticated");
        }
    }

    return (
        <View style={styles.containers} >
            <Image
                source={LOGO}
                resizeMode={"contain"}
                style={styles.imageStyle}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        height: "50%",
        width: "50%"
    }
});

export default SplashScreen