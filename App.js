import * as React from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Craving from "./Screens/Craving_Screen";
import Value from "./Screens/Values_Screen";
import MatchPreference from "./Screens/Match_Gender";
import Orientation from "./Screens/Sexual_Orientation_Screen";
import About from "./Screens/About_Me";
import Profile from "./Screens/Profile";
import Login from "./Screens/Login";
import EnterEmail from "./Screens/EnterEmail";
import EnterEmailCode from "./Screens/EnterEmailCode";
import Message from "./Screens/Message";
import ChatList from "./Screens/ChatList";
import NameQuestion from "./Screens/NameQuestion";
import GenderQuestion from "./Screens/GenderQuestion";
import AgeQuestion from "./Screens/AgeQuestion";

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
                    name="EnterEmailCode"
                    component={EnterEmailCode}
                    options={{ title: "Enter 6-digit code" }}
                />
                <Stack.Screen
                    name="Message"
                    component={Message}
                    options={({ route }) => ({ title: route.params.name })}
                />
                <Stack.Screen
                    name="ChatList"
                    component={ChatList}
                    options={{ title: "ChatList", headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login", headerShown: false }}
                />
                <Stack.Screen
                    name="Craving"
                    component={Craving}
                    options={{ title: "Craving" }}
                />
                <Stack.Screen
                    name="Value"
                    component={Value}
                    options={{ title: "Value" }}
                />
                <Stack.Screen
                    name="Orientation"
                    component={Orientation}
                    options={{ title: "Orientation" }}
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
