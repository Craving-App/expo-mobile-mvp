import React from "react";
import { View, StyleSheet,TouchableOpacity,Text } from "react-native";

export default function Home({ navigation }) {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Page{"\n"}{"\n"}</Text>
            <Text onPress={() => navigation.navigate("Profile")}>
                Click me to view profile{"\n"}{"\n"}
            </Text>

            <Text onPress={() => navigation.navigate("EnterEmail")}>
                Click to enter email{"\n"}{"\n"}
            </Text>

            <Text onPress={() => navigation.navigate("EnterEmailCode")}>
                Click to enter email code{"\n"}{"\n"}
            </Text>

            <Text onPress={() => navigation.navigate("Values")}>
                Click to get to value screen{"\n"}{"\n"}
            </Text>

            <Text onPress={() => navigation.navigate("ChatList")}>
                Click to get to chatlist screen{"\n"}{"\n"}
            </Text>
            
        </View>
    );

}

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "orange",
//     padding: 15,
//     borderRadius: 20,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold'
//   }, 
// });