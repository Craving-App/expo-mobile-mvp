import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "../Navigation/Screens/Home"
import Profile from "../Navigation/Screens/Profile"
import Message from "../Navigation/Screens/Message"
import Match from "../Navigation/Screens/Match"
import Setting from "../Navigation/Screens/Setting"

// Screen Names
const homeName = 'Home'
const messName = 'Messages'
const matchName = 'Matches'
const setName = 'Settings'
const profName = 'Profile'

const Tab = createMaterialBottomTabNavigator();

const MainContainer = ({navigation}) => {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            inactiveColor="#e47d6a"
            barStyle={{backgroundColor: 'white'}}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === messName) {
                        iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
                    } else if (rn === matchName) {
                        iconName = focused ? 'copy' : 'copy-outline'
                    } else if (rn === setName) {
                        iconName = focused ? 'cog' : 'cog-outline'
                    } else if (rn === profName) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                    }

                    return <Ionicons name={iconName} size={25} color={"#e47d6a"}/>
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Messages" component={Message} />
            <Tab.Screen name={matchName} component={Match}/>
            <Tab.Screen name={setName} component={Setting}/>
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default MainContainer;