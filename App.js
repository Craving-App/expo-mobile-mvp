import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile"
import Login from "./Screens/Login";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        {/*<Stack.Screen*/}
        {/*  name="Profile"*/}
        {/*  component={Profile}*/}
        {/*  options={{ title: "Profile" }}*/}
        {/*/>*/}
        <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
