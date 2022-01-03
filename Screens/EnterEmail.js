import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input } from "../components/Input";
import { FlatButton } from "../components/FlatButton";

const EnterEmail = ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);
    const onPress = () => {
        if (text === null) {
            Alert.alert("Error! Enter email!");
            return;
        } else if (!text.trim()) {
            Alert.alert("Error! Enter email!");
            return;
        } else {
            navigation.navigate("EnterEmailCode");
        }
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
});

export default EnterEmail;
