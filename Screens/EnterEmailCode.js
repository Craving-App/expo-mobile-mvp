import React from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import Button from "../components/Button";

const EnterEmailCode = ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);

    const onPress = () => {
        alert("pressed");
    };
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter the 6-digit code"
                keyboardType="numeric"
            />
            <Button text="Submit" onPress={onPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        height: 40,
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

export default EnterEmailCode;
