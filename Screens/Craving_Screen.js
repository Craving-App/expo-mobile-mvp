
import { SafeAreaView,ScrollView, Text, View, StyleSheet } from 'react-native';
import React, { useState } from "react";

import {Button} from '../components/Button';
import {Checkbox} from '../components/CheckBox';

export default function Craving ({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.question}> What are you craving ?  </Text>
        <View style={styles.container2}>
          <Checkbox answer = 'Long Term Relationship'/>
          <Checkbox answer = 'Hookups'/>
          <Checkbox answer = 'Casual Dates'/>
          <Checkbox answer = "I'm not sure yet"/>
        </View>
          <View style={styles.containerButton}>
            <Button onPress={() => navigation.navigate("Value")}>Continue
            </Button>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC3A9',
    paddingTop: 65
  },
  question: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20
  },
 container2: {
   flex: 20,
   justifyContent: 'center',
   alignItems: 'center'
},
containerButton: {
  flex: 20,
  justifyContent: 'center',
  alignItems: 'center'
}
});