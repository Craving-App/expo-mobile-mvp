import * as React from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Craving from "./Screens/Craving_Screen";
import Value from "./Screens/Values_Screen";
import Match from "./Screens/Match_Gender";
import Orientation from "./Screens/Sexual_Orientation_Screen";
<<<<<<< HEAD
import About from "./Screens/About_Me";

=======
import Profile from "./Screens/Profile";
import Login from "./Screens/Login";
import EnterEmail from "./Screens/EnterEmail";
import EnterEmailCode from "./Screens/EnterEmailCode";
import Message from "./Screens/Message";
import ChatList from "./Screens/ChatList";
>>>>>>> ba727a5d914b1796e984e3409262030e717f0e28

const Stack = createNativeStackNavigator();

function App() {
<<<<<<< HEAD
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
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
            name="Match"
            component={Match}
            options={{ title: "Match" }}
          />
          <Stack.Screen
            name="Orientation"
            component={Orientation}
            options={{ title: "Orientation" }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "About" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
=======
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
                    name="Match"
                    component={Match}
                    options={{ title: "Match" }}
                />
                <Stack.Screen
                    name="Orientation"
                    component={Orientation}
                    options={{ title: "Orientation" }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
>>>>>>> ba727a5d914b1796e984e3409262030e717f0e28
}

export default App;
