import * as React from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MatchPreference from "./Screens/Match_Gender";
import Login from "./Screens/Login";

import SplashScreen from "./Screens/SplashScreen";
import OnBoarding from "./Screens/OnBoarding";
import MainContainer from "./Navigation/MainContainer";

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
                    name="EnterEmail"
                    component={EnterEmail}
                    options={{ title: "Enter Email" }}
                />
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
                    name="MainContainer"
                    component={MainContainer}
                    options={{title: "MainContainer"}}
                />
                <Stack.Screen
                    name="MatchPreference"
                    component={MatchPreference}
                    options={{ title: "MatchPreference" }}
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
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{ title: "About" }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ title: "Profile" }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;
