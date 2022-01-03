import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const Input = ({
    value,
    onChangeText,
    placeholder,
    keyboardType,
    maxLength,
    multiline,
    secureTextEntry,
}) => {
    const { inputStyle } = styles;
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                maxLength={maxLength}
                multiline={multiline}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        borderRadius: 10,
        margin: 12,
        borderColor: "rgba(222,33,33,0.4)",
        borderWidth: 2,
        padding: 10,
        color: "rgba(222,33,33,0.4)",
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        fontWeight: "bold",
    },
});

// export default Input;
export { Input };
