import React, {useState, useRef } from "react";
import { View, Text, TextInput, ScrollView,
         TouchableOpacity, StyleSheet}
    from "react-native";

import {LinearGradient} from 'expo-linear-gradient';

export default function Profile({ navigation }) {
    const [user, setUser] = useState({
        age: '29',
        height: "5'7",
        ethnicity: "African American",
        sign: 'Virgo',
        religion: 'Christian',
        bodyType: 'Fit',
        diet: 'Vegan',
        smoke: 'No',
        drink: 'No',
        drugs: 'Never'
    });

    const COLORS = {
        primary: "#ffc3a9",
        secondary: "white",
        third: "transparent"
    };

    const Box = (props) => {
        let boxStyle1, boxStyle2, boxStyle3, comStyle;
        if (props.common === "true") {
            boxStyle1 = COLORS.primary
            boxStyle2 = COLORS.secondary
            boxStyle3 = COLORS.primary
            comStyle = styles.common
        } else {
            boxStyle1 = boxStyle2 = boxStyle3 = COLORS.third
        }

        return (
            <TouchableOpacity>
                <LinearGradient style={[styles.touchOpa, comStyle]} colors={[boxStyle1, boxStyle2, boxStyle3]}>
                    <Text style={{fontSize: 16, paddingTop: 45, paddingBottom: 45,
                        paddingRight: 15,  paddingLeft: 15, fontWeight: 'bold'}}>
                        {props.name}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView>
            <View style={{padding: 30, flex: 1}}>
                <Text style={{fontSize: 20, textAlign: 'left'}}>INFO</Text>

                <View style={{display: 'flex'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 17, marginLeft: 35, marginRight: 35}}>Age</Text>
                        <TextInput style={{marginRight: 100}}
                                   onChangeText={setUser}
                                   value={user.age}
                                   keyboardType="numeric"/>

                        <Text style={{fontSize: 17, marginRight: 30}}>Body Type</Text>
                        <TextInput onChangeText={setUser}
                                   value={user.bodyType}/>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 17, marginLeft: 15, marginRight: 35}}>Height</Text>
                        <TextInput style={{marginRight: 90}}
                                   onChangeText={setUser}
                                   value={user.height}/>

                        <Text style={{fontSize: 17, marginLeft: 55, marginRight: 30}}>Diet</Text>
                        <TextInput onChangeText={setUser}
                                   value={user.diet}/>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 17, marginRight: 20}}>Ethnicity</Text>
                        <TextInput style={{marginRight: 35, marginLeft: 15}}
                                   onChangeText={setUser}
                                   value={user.ethnicity}/>

                        <Text style={{fontSize: 17, marginRight: 30}}>Smoke</Text>
                        <TextInput onChangeText={setUser}
                                   value={user.smoke}/>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 17, marginLeft: 33}}>Sign</Text>
                        <TextInput style={{marginRight: 120, marginLeft: 35}}
                                   onChangeText={setUser}
                                   value={user.sign}/>

                        <Text style={{fontSize: 17, marginRight: 32}}>Drink</Text>
                        <TextInput onChangeText={setUser}
                                   value={user.drink}/>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 17, marginRight: 35, marginLeft: 5}}>Religion</Text>
                        <TextInput style={{marginRight: 95}}
                                   onChangeText={setUser}
                                   value={user.religion}/>

                        <Text style={{fontSize: 17, marginRight: 30}}>Drugs</Text>
                        <TextInput onChangeText={setUser}
                                   value={user.drugs}/>
                    </View>
                </View>
            </View>

            <View style={{padding: 30, flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{paddingRight: 200, fontSize: 20, textAlign: 'left'}}>QUIZZES</Text>
                    <Text style={{fontSize: 15}}>2 in common</Text>
                </View>

                <Text style={{fontSize: 15, color: "gray", fontWeight: 'bold'}} onPress={() => alert("click!")}>
                    Click to view and compare answers!
                </Text>

                <View style={{flexDirection: 'row', justifyContent: 'center', padding: 10}}>
                    <Box name="Film Quiz" common="true" />
                    <Box name="Political Quiz" common="true" />
                    <Box name="Music Quiz" />
                </View>

                <Text style={{fontSize: 15, color: "gray",
                            alignSelf: 'center', padding: 5, fontWeight: 'bold'}}
                      onPress={() => alert("see more!")}>
                    See More
                </Text>

            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create ({
    touchOpa: {
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderColor: "darkgreen",
        resizeMode: 'contain'
    },
    common: {
        elevation: 10,
        alignSelf: 'center',
    },
})