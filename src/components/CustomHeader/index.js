import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import { styles } from "./styles";
import EDIT from '../../assets/edit.png';
import FILTER from '../../assets/filter.png';

const CustomHeader = ({ titleText, onBackPress, showEdit }) => {
    return (
        <View
            //edges={["right", "left"]}
            style={styles.container}
        >
            <View style={styles.mainView}>
                <View style={styles.backIconCont}>
                    <TouchableOpacity
                        onPress={onBackPress}
                    >
                        <Icon
                            name="chevron-back"
                            type="ionicon"
                            color={colors.white}
                            size={scaledSize(25)}
                            style={{ paddingRight: scaledSize(12) }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>{titleText}</Text>
                </View>
                {showEdit ?
                    <TouchableOpacity>
                        <Image
                            source={EDIT}
                            resizeMode="contain"
                            style={styles.editIcon}
                        />
                    </TouchableOpacity> : null}
            </View>
        </View>
    )
}

export default CustomHeader;