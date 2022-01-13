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
                    name="MainContainer"
                    component={MainContainer}
                    options={{title: "MainContainer"}}
                />
                <Stack.Screen
                  name="MatchPreference"
                  component={MatchPreference}
                  options={{ title: "MatchPreference" }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;
