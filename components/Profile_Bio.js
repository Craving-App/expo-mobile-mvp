import React, {useState} from "react";
import {Text, StyleSheet, Picker, View, TouchableOpacity} from 'react-native';
import { Ionicons, Entypo} from '@expo/vector-icons';

const Bio = (props) => {
  return (
          <View>
            <Text style={styles.name}>
                  props.name, props.age
            </Text>

            <View style={styles.container}>
              <Ionicons name="md-heart-sharp" size={16} color="pink" />
              <Text style={styles.gender}>
                  props.gender
              </Text>
              <View style={styles.verticleLine}></View>
              <Entypo name="location-pin" size={20} color="pink" />
              <Text style={styles.location}>
                  props.location
              </Text>
            </View>
                
            <View style={styles.container}>
              <Ionicons name="ios-hand-left-outline" size={18} color="black" />
              <Text style={styles.bioInfo}>
                    props.info
              </Text>
            </View>
          </View>
          
        )};

const styles = StyleSheet.create({
    
    container:{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
          paddingBottom: 15,
          justifyContent: 'center'
    },
    
    name:{
            paddingTop: 20,
            paddingBottom: 20,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold'
    },
    
    gender: {
          paddingLeft: 3,
          fontSize: 16,
          textAlign: 'center'
    },
    
    location: {
          paddingLeft: 3,
          fontSize: 16,
          textAlign: 'center'
    },
    
    bioInfo: {
          textAlign: 'center',
          fontSize: 18,
          paddingLeft: 3,
    },
    
    verticleLine: {
          height: '100%',
          marginLeft: 10,
          marginRight: 10,
          width: 1,
          backgroundColor: 'black',
    }
    
});

export {Bio};
