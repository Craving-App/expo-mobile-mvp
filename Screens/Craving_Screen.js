import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import {Button} from '../components/Button';
import {MenuOptions} from '../components/Dropdown';

// Make the dropdown in the center adnd button in 75% of the screen

export default function Craving ({navigation}) {
    var answers = ["Long term Relationship", "Hookups", "Casual Dates", "I'm not sure yet"]
  return (
    <View style={styles.container}>
        <Text style={styles.question}>Who are you craving ?  </Text>
        <View style={styles.container2}>
          <MenuOptions arr={answers}></MenuOptions>
        </View>
          <View style={styles.container3}>
            <Button onPress={() => navigation.navigate("Value")}>
              Continue
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

