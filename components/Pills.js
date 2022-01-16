import React from "react";
import { render } from "react-dom";
import { Text, View, StyleSheet } from "react-native";

const Pills = (props) => {
    let relatedStyles;
    if (props.common === "true") {
        relatedStyles = styles.common;
    } else {
        relatedStyles = styles.uncommon;
    }
    return (
        <View style={[styles.view, relatedStyles]}>
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
        borderRadius: 19,
        margin: 5,
        borderColor: "darkgreen",
        borderWidth: 1,
    },
    text: {
        color: "#000",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    },
    common: {
        backgroundColor: "#fa6d71",
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    uncommon: {
        backgroundColor: "transparent",
    },
});

export default Pills;
