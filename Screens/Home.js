import React from "react";
import { View, Text } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Page</Text>
      <Text onPress={() => navigation.navigate("Orientation")}>
        Click me to view profile
      </Text>
    </View>
  );
}
