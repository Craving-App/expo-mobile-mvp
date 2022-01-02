import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import componets from local files
import {Button} from '../components/Button';
import {Checkbox} from '../components/Checkbox';

export default function Orientation ({ navigation }) {
    
    return (
            <View style={styles.container}>
                <Text style={styles.question}> What is your sexual orientation ? </Text>
                <Checkbox answer = 'Straight'/>
                <Checkbox answer = 'Gay'/>
                <Checkbox answer = 'Lesbian'/>
                <Checkbox answer = "Bisexual"/>
                <Checkbox answer = "Asexual"/>
                <Checkbox answer = "Pansexual"/>
                <Checkbox answer = "Queer"/>
            <View style={styles.containerButton}>
                <Button onPress={() => navigation.navigate("Match")}>
                Continue
                </Button>
            </View>
            </View>
            );
}


// Style sheet for screen
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
