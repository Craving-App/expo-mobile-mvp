import React, {useState} from "react";
import { View, Text, SafeAreaView, TextInput, ScrollView, FlatList } from "react-native";

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
    })

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={{padding: 30}}>
                    <Text style={{textTransform: 'uppercase', fontSize: 20, textAlign: 'left'}}>Info</Text>
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
            </ScrollView>
        </SafeAreaView>
    );
}