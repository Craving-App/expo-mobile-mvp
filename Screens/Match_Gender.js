import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import {Button} from '../components/Button';
import {Checkbox} from '../components/Checkbox';

export default function Gender ({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.question}> Who are you looking for ? </Text>
          <View style={styles.container2}>
            <Checkbox pad= '10' answer = 'Cis Male' description= 'born male, identifies as male'/>
            <Checkbox pad= '10'answer = 'Cis Female' description= 'born female, identifies as female'/>
            <Checkbox pad= '10'answer = 'Nonbinary' description= 'does not identify as male or female'/>
            <Checkbox pad= '10' answer = 'Queer' description= "Umbrella term for anyone else that isn't cisgender"/>
          </View>
          <View style={styles.container3}>
          <Button onPress={() => navigation.navigate("About")}>
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
    padding: 20,
  },
  question: {
    flex: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: 25
  },
container2: {
    flex: 12,
},
container3: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'

}
});
