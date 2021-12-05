import React from "react";
import { View, StyleSheet, Alert, Button } from "react-native";
import Input from "../components/Input";
import FlatButton from "../components/Button";

const EnterEmailCode = ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);

    const onPress = () => {
        Alert.alert("pressed");
    };
    return (
        <View style={styles.view}>
            <Input
                placeholder="Enter 6 digit code"
                keyboardType="numeric"
                maxLength={6}
                value={text}
                onChangeText={onChangeText}
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

export default EnterEmailCode;
