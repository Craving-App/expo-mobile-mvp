import * as React from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Craving from "./Screens/Craving_Screen";
import Value from "./Screens/Values_Screen";
import Match from "./Screens/Math_Gender";

import Profile from "./Screens/Profile";
import Login from "./Screens/Login";
import EnterEmail from "./Screens/EnterEmail";
import EnterEmailCode from "./Screens/EnterEmailCode";
import Message from "./Screens/Message";
import ChatList from "./Screens/ChatList";

import SplashScreen from "./Screens/SplashScreen";

import NameQuestion from "./Screens/NameQuestion";
import GenderQuestion from "./Screens/GenderQuestion";
import AgeQuestion from "./Screens/AgeQuestion";


import OnBoarding from "./Screens/OnBoarding";
import MainContainer from "./Navigation/MainContainer";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{title: "SplashScreen", headerShown: false}}
                />
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                    options={{title: "On Boarding", headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{title: "Login"}}
                />
                <Stack.Screen
                    name="Name"
                    component={NameQuestion}
                    options={{ title: "Name" }}
                />
                <Stack.Screen
                    name="Gender"
                    component={GenderQuestion}
                    options={{ title: "Gender" }}
                />
                <Stack.Screen
                    name="Age"
                    component={AgeQuestion}
                    options={{ title: "Age" }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;
