import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Craving from "./Screens/Craving_Screen";
import Value from "./Screens/Values_Screen";
import Match from "./Screens/Match_Gender";
import Orientation from "./Screens/Sexual_Orientation_Screen";


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
}

export default App;
