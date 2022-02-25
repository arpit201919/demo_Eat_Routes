import React from "react";
import { Image, StatusBar, Text, View, TouchableOpacity, ScrollView } from "react-native";
import colors from "../../utils/theme/colors";
import { styles } from "./styles";
import LOGO from "../../assets/logo_white.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-elements";

const LoginMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor={colors.primary}
                    />
                    <View style={styles.iconContainers}>
                        <Image
                            source={LOGO}
                            resizeMode={"contain"}
                            style={styles.logoStyles}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.block}>
                            <Text style={styles.title}>Login to your portal</Text>
                            <Text style={styles.subText}>Please select one option to proceed</Text>
                        </View>
                        <Button
                            title={"I am a client"}
                            TouchableComponent={TouchableOpacity}
                            containerStyle={styles.buttonContainer}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={styles.buttonTitle}
                            onPress={() => navigation.navigate("LoginCustomer")}
                        />
                        <Button
                            title={"I am a supplier"}
                            TouchableComponent={TouchableOpacity}
                            containerStyle={styles.buttonContainer}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={styles.buttonTitle}
                            onPress={() => navigation.navigate("LoginSupplier")}
                        />
                        <Button
                            title={"I am a ff agent"}
                            TouchableComponent={TouchableOpacity}
                            containerStyle={styles.buttonContainer}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={styles.buttonTitle}
                        />
                        <Button
                            title={"I am a staff member"}
                            TouchableComponent={TouchableOpacity}
                            containerStyle={styles.buttonContainer}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={styles.buttonTitle}
                        />
                        <View style={styles.noAcContainer}>
                            <Text style={styles.noAcText}>"Don't have account ?"</Text>
                            <TouchableOpacity>
                                <Text style={styles.sigupText}>Create One Here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View >
    )
}

export default LoginMenu;