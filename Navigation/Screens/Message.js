import React from "react";
import { View, Text } from "react-native";

export default function Message({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Hello Message!</Text>
        </View>
    );
}