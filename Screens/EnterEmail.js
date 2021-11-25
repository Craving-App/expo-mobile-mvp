import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const EnterEmail = ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);
    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter a valid email"
                keyboardType="email-address"
            />
            <Button
                color="rgba(222,33,33,0.4)"
                title="Submit"
                onPress={() => navigation.navigate("EnterEmailCode")}
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

export default EnterEmail;
