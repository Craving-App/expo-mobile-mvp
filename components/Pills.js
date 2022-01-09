import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Pills = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        alignItems: "center",
        height: 30,
        width: 110,
        padding: 5,
        backgroundColor: "#e36d71",
        borderRadius: 19,
        margin: 5,
    },
    text: {
        color: "#ffffff",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    },
});

export default Pills;
