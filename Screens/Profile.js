import React from "react";
import { View} from "react-native";
import data from '../components/data';
import CarouselSlider from "../components/CarouselSlider";

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
             <CarouselSlider data={data} />
        </View>
    );
}

