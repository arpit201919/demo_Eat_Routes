import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import { styles } from "./styles";
import EDIT from '../../assets/edit.png';
import FILTER from '../../assets/filter.png';

const CustomHeader = ({ style, showBack, titleText, onBackPress, showEdit, showFilter, onFilterPress, showIcon, filterTitle }) => {
    return (
        <View
            //edges={["right", "left"]}
            style={styles.container}
        >
            <View style={[styles.mainView, style]}>
                <View style={styles.backIconCont}>
                    {showBack ?
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
                        </TouchableOpacity> : null}
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
                {showFilter ?
                    <TouchableOpacity
                        onPress={onFilterPress}
                    >
                        {showIcon ?
                            <Image
                                source={FILTER}
                                resizeMode="contain"
                                style={styles.filterIcon}
                            /> :
                            <Text style={styles.filterTitleText}>{filterTitle}</Text>}
                    </TouchableOpacity> : null}
            </View>
        </View>
    )
}

export default CustomHeader;