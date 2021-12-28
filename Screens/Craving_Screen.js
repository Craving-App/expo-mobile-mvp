import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import {Button} from '../components/Button';
import {Checkbox} from '../components/Checkbox'';

export default function Craving ({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.question}> What are you craving ?  </Text>
        <View style={styles.container2}>
          <Checkbox answer = 'Long term Relationship'/>
          <Checkbox answer = 'Hookups'/>
          <Checkbox answer = 'Casual Dates'/>
          <Checkbox answer = "I'm not sure yet"/>
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
    fontSize: 25,
    paddingBottom: 20
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

