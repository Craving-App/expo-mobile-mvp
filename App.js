import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);
const Stack = createNativeStackNavigator();
import Message from "./Screens/Message";
import ChatList from "./Screens/ChatList";
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
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
          name="Message"
          component={Message}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{ title: "ChatList", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
