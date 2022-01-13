import React from "react";
import { View, Text } from "react-native";
import { ReactPhotoCollage } from "react-photo-collage";

export default function Profile({ navigation }) {
  
const images = {
  width: "400px",
  height: ["300px", "170px"],
  layout: [1, 3],
  photos: [
    {
      source:
        "https://images.unsplash.com/photo-1517088455889-bfa75135412c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5548929376f93d8b1b7a21097df03bd&auto=format&fit=crop&w=749&q=80"
    },
    {
      source:
        "https://images.unsplash.com/photo-1526656892012-7b336603ed46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31c8e58b58c25dfcc18452ed29b52951&auto=format&fit=crop&w=334&q=80"
    },
    {
      source:
        "https://images.unsplash.com/photo-1521024221340-efe7d7fa239b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ad8a99d809d3fa3a9e8dff3ecc81878&auto=format&fit=crop&w=750&q=80"
    },
    {
      source:
        "https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80"
    },
    {
      source:
        "https://images.unsplash.com/photo-1523038793606-2fd28f837a85?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=919b76f4229e41416653aeb10e84e94a&auto=format&fit=crop&w=334&q=80"
    }
  ],
  showNumOfRemainingPhotos: true
};
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile</Text>
      <div  style={{ flex: 1, alignItems: "center", justifyContent: "center", borderRadius:10 }}>
      <ReactPhotoCollage {...images} />
      </div>
    </View>
  );
}







