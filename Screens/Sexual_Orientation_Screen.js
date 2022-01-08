import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// import componets from local files
import {Button} from '../components/Button';
import {MenuOptions} from '../components/Dropdown';

export default function Orientation ({ navigation }) {
    
    // Choices for the dropdown for this specific screen
    var choices = [ "Straight", "Gay","Lesbian", "Bisexual","Asexual", "Pansexual", "Queer"];
    return (
            <View style={styles.container}>
                <Text style={styles.question}> What is your sexual orientation ? </Text>
            <View style={styles.containerMenu}>
                <MenuOptions arr={choices}/>
            </View>
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
  containerMenu: {
     justifyContent: 'center',
     alignItems: 'center',
     flex: 4
 },
containerButton: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
   }
})
