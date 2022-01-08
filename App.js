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

                {/*{*/}
                {/*    isLoggedIn ? (*/}
                {/*        <Stack.Screen*/}
                {/*            name="MainContainer"*/}
                {/*            component={MainContainer}*/}
                {/*            options={{title: "Home"}}*/}
                {/*        />*/}
                {/*    ) : (*/}
                {/*        <>*/}

                {/*        </>*/}
                {/*    )*/}
                {/*}*/}

                {/*<Stack.Screen*/}
                {/*    name="EnterEmail"*/}
                {/*    component={EnterEmail}*/}
                {/*    options={{ title: "Enter Email" }}*/}
                {/*/>*/}
                {/*<Stack.Screen*/}
                {/*    name="EnterEmailCode"*/}
                {/*    component={EnterEmailCode}*/}
                {/*    options={{ title: "Enter 6-digit code" }}*/}
                {/*/>*/}
                {/*<Stack.Screen*/}
                {/*    name="Message"*/}
                {/*    component={Message}*/}
                {/*    initialParams={{ name: "Message" }}*/}
                {/*    // options={({ route }) => ({ title: route.params.name })}*/}
                {/*/>*/}
                {/*<Stack.Screen*/}
                {/*    name="ChatList"*/}
                {/*    component={ChatList}*/}
                {/*    options={{ title: "ChatList", headerShown: false }}*/}
                {/*/>*/}
                {/*<Stack.Group screenOptions={{ presentation: 'modal'}}>*/}
                {/*    <Stack.Screen*/}
                {/*        name="Value"*/}
                {/*        component={Value}*/}
                {/*        options={{ title: "Value" }}*/}
                {/*    />*/}
                {/*</Stack.Group>*/}
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default App;
