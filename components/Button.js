import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const FlatButton = ({ text, onPress }) => {
    const { button, buttonText } = styles;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={button}>
                <Text style={buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        margin: 10,
        backgroundColor: "#e36d71",
    },
    buttonText: {
        color: "#ffffff",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    },
});

export default FlatButton;
