import React from "react";
import { Button, View, StyleSheet } from "react-native";
import Input from "../components/Input";
import FlatButton from "../components/Button";

const EnterEmail = ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);
    const onPress = () => {
        navigation.navigate("EnterEmailCode");
    };
    return (
        <View style={styles.view}>
            <Input
                maxLength={20}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter a valid email"
                keyboardType="email-address"
            />
            <FlatButton text="Submit" onPress={onPress} />
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
