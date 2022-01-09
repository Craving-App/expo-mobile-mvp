import React from "react";
import { View, StyleSheet } from "react-native";
import Pills from "../components/Pills";

const Interests = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Pills name="Hiking" />
            <Pills name="Running" />
            <Pills name="Gaming" />
            <Pills name="Cooking" />
            <Pills name="Cycling" />
            <Pills name="Netflix" />
            <Pills name="Fashion" />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
export default Interests;
