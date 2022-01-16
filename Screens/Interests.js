import React from "react";
import { View, StyleSheet } from "react-native";
import Pills from "../components/Pills";

const Interests = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Pills name="Hiking" common="true" />
            <Pills name="Running" common="true" />
            <Pills name="Gaming" common="true" />
            <Pills name="Cooking" common="false" />
            <Pills name="Cycling" common="false" />
            <Pills name="Netflix" common="false" />
            <Pills name="Fashion" common="false" />
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
