import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

import OnBoarding from "./OnBoarding";

export default function SplashScreen({ navigation }) {
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 20}}>Splash Screen!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}>
                <Text style={{fontSize: 20}}>Click here to move OnBoarding</Text>
            </TouchableOpacity>
        </View>
    );
}