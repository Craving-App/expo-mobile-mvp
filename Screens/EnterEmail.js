import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default function EnterEmail({ navigation }) {
    return (
        <View>
            <TextInput />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

// export default EnterEmail({ navigation});
