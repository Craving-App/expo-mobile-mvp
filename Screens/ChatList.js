import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Chats from "../dummydata/Chats";
import { StatusBar } from "expo-status-bar";
import tailwind from "tailwind-rn";
import newmatches from "../dummydata/Newmatches";
const ChatList = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.AndroidSafeArea}>
      {/* Newmatches */}
      <View style={tailwind("pl-1 pt-2")}>
        <Text style={tailwind("p-2 text-xl font-bold text-yellow-400")}>
          {" "}
          New Matches
        </Text>
      </View>
      <View style={tailwind("m-3")}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {newmatches.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                key={index}
                onPress={() => {
                  navigation.navigate("Message", {
                    name: item.name,
                    image: item.image,
                  });
                }}
              >
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={Styles.imagestyle}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Messages */}
      <View style={tailwind("pl-1 pt-2")}>
        <Text style={tailwind("p-2 text-xl font-bold text-black")}>
          {" "}
          Messages
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={tailwind("h-full")}
      >
        {Chats.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={index}
              onPress={() => {
                navigation.navigate("Message", {
                  name: item.name,
                  image: item.image,
                });
              }}
              style={tailwind("flex flex-row  p-3 mb-3")}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={tailwind("rounded-full h-16 w-16 mr-3")}
              />
              <View
                onPress={() => {
                  navigation.navigate("Message");
                }}
                style={tailwind("mt-2")}
              >
                <Text style={tailwind("font-bold text-base")}>{item.name}</Text>
                <Text style={tailwind("text-gray-600 mt-1")}>
                  {item.message}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default ChatList;
const Styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  imagestyle: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 40,
    borderColor: "gold",
    borderWidth: 2,
  },
});
