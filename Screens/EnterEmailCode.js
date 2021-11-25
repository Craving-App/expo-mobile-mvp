import React from "react";
import { View, StyleSheet, TextInput, Alert, Button } from "react-native";

const EnterEmailCode = ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter the 6-digit code"
                keyboardType="numeric"
            />
            <Button
                color="rgba(222,33,33,0.4)"
                title="Submit"
                onPress={() => Alert.alert("Button pressed")}
            />
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
