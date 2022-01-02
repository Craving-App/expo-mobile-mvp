import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
// You can import from local files
import {Button} from '../components/Button';
import {Checkbox} from '../components/Checkbox';

export default function Values ({navigation}) {
    
    // Make the screen scrollable
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.question}>Choose the three most important values in a relationship.</Text>
          <Checkbox answer = 'Flexibility'/>
          <Checkbox answer = 'Ambition'/>
          <Checkbox answer = 'Patience'/>
          <Checkbox answer = 'Mutual Respect and Equality'/>
          <Checkbox answer = 'Affection'/>
          <Checkbox answer = 'Humor'/>
          <Checkbox answer = 'Conflict Resolution'/>
          <Checkbox answer = 'Empathy'/>
          <View style={styles.containerButton}>
          <Button onPress={() => navigation.navigate("Home")}>
              Continue
          </Button>
          </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  paddingTop: StatusBar.currentHeight,
  backgroundColor: '#FFC3A9',
},
scrollView: {
},
/*
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC3A9',
    padding: 20,
  },
 */
  question: {
    flex: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20,
    fontSize: 25
  },
containerButton: {
    backgroundColor: '#FFC3A9',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
}
});
