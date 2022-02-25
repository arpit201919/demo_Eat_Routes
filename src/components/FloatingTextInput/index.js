import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from 'react-native-elements';
import { TextField } from 'rn-material-ui-textfield'
import { scaledSize } from "../../utils";
import colors from "../../utils/theme/colors";
import typography from "../../utils/theme/typography";

const styles = StyleSheet.create({
    inputLabel: {
        fontFamily: typography.light,
        paddingTop: 3,
    },
    inputText: {
        fontFamily: typography.regular,
        fontSize: scaledSize(14),
    },
});

const FloatingTextInput = (props, ref) => {
    const {
        label,
        value,
        onChangeText,
        error,
        onFocus,
        onBlur,
        tintColor = colors.text_label,
        baseColor = colors.text_label,
        errorColor = colors.red,
        textColor = colors.text_black,
        fontSize = scaledSize(16),
        labelFontSize = scaledSize(14),
        labelTextStyle = styles.inputLabel,
        secureTextEntry,
        returnKeyType = 'done',
        maxLength,
        ...rest
    } = props;

    const [passwordVisible, setPasswordVisible] = useState(false);

    const renderRightAccessory = React.useCallback(() => {
        return secureTextEntry ? (
            <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
            >
                <Icon
                    color={baseColor}
                    type="ionicon"
                    name={passwordVisible ? 'ios-eye-outline' : 'ios-eye-off-outline'}
                />
            </TouchableOpacity>
        ) : null;
    }, [secureTextEntry, passwordVisible])

    return (
        <TextField
            label={label}
            value={value}
            ref={ref}
            onChangeText={onChangeText}
            baseColor={baseColor}
            tintColor={tintColor}
            error={error}
            textColor={textColor}
            fontSize={fontSize}
            labelFontSize={labelFontSize}
            labelTextStyle={labelTextStyle}
            onFocus={onFocus}
            onBlur={onBlur}
            errorColor={errorColor}
            renderRightAccessory={renderRightAccessory}
            returnKeyType={returnKeyType}
            secureTextEntry={secureTextEntry && !passwordVisible}
            maxLength={maxLength}
            lineWidth={1}
            activeLineWidth={1}
            disabledLineWidth={1}
            {...rest}
        />
    )
}

export default React.forwardRef(FloatingTextInput);