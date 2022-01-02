//import * as React from 'react';
import { SafeAreaView,ScrollView, Text, View, StyleSheet } from 'react-native';
import React, { useState } from "react";
// You can import from local files
import {Button} from '../components/Button';
import {MenuOptions} from '../components/Dropdown';
import {Checkbox} from '../components/CheckBox';

// Make the dropdown in the center adnd button in 75% of the screen

export default function Craving ({navigation}) {
  
  //  var answers = ["Long term Relationship", "Hookups", "Casual Dates", "I'm not sure yet"]
  //  const {selectedLang1,selectedLang2,selectedLang3,selectedLang4} = this.state

   // const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.question}>Who are you craving ?</Text>
          <Checkbox answer = 'Long Term Relationship'/>
          <Checkbox answer = 'Hookups'/>
          <Checkbox answer = 'Casual Dates'/>
          <Checkbox answer = "I'm not sure yet"/>
          <View style={styles.containerButton}>
          <Button onPress={() => navigation.navigate("Home")}>
              Continue
          </Button>
          </View>
        </ScrollView>
    </SafeAreaView>
    
  
  );

  //   <View style={styles.container}>
  //       <Text style={styles.question}>Who are you craving ?  </Text>
  //       <View style={styles.container2}>
  //         <MenuOptions arr={answers}></MenuOptions>
  //       </View>
  //         <View style={styles.container3}>
  //           <Button onPress={() => navigation.navigate("Value")}>
  //             Continue
  //           </Button>
  //         </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC3A9',
    paddingTop: 65,
  },
  question: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
 container2: {
   flex: 20,
   justifyContent: 'center',
   alignItems: 'center'
},
container3: {
  flex: 20,
  justifyContent: 'center',
  alignItems: 'center'
},
});

