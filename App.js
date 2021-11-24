import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import EnterEmail from "./Screens/EnterEmail";
import EnterEmailCode from "./Screens/EnterEmailCode";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: "Home" }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: "Profile" }}
                />
                <Stack.Screen name="Enter Email" component={EnterEmail} />
                <Stack.Screen
                    name="Enter Email Code"
                    component={EnterEmailCode}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
