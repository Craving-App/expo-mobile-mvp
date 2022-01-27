import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


import {Button} from '../components/Button';
import {Checkbox} from '../components/CheckBox';

export default function Orientation ({ navigation }) {
    
    return (
            <View style={styles.container}>
                <Text style={styles.question}> What is your sexual orientation ? </Text>
            <View style={styles.containerMenu}>
                <MenuOptions arr={choices}/>
            </View>
            <View style={styles.containerButton}>
                <Button onPress={() => navigation.navigate("Match_Gender")}>
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
    paddingTop: 30,
  },
  question: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  },
containerButton: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
   }
})
