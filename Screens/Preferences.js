import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Button} from '../components/Button';
import { Chip } from 'react-native-paper';
import SelectableChips from 'react-native-chip/SelectableChips'
import { color } from 'react-native-elements/dist/helpers';
// used https://www.npmjs.com/package/react-native-chip

export default function NameQuestion({ navigation}) { 

    const [textColor, setTextColor] = useState(`#FBA200`);
    
      return (
        <View style={styles.container}>
              <Text style={styles.title}> My Preferences </Text>
              <br></br>
              <Text style={styles.subTitle} >I would like them to be between...</Text>

              <View style={styles.row}>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>20-25</Text>
                </Chip>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')} >
                  <Text style={styles.chipText}>25-30</Text>
                </Chip>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>30-35</Text>
                </Chip>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>35-40</Text>
                </Chip>
              
              </View>

              <Text style={styles.subTitle} >I would like to connect with...</Text>
              <View style={styles.row}>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>African American/Black</Text>
                </Chip>

                <Chip style={styles.chip} onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>American Indian</Text>
                </Chip>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Asian</Text>
                </Chip>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Hispanic</Text>
                </Chip>
              
                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>White</Text>
                </Chip>

              </View>

              <Text style={styles.subTitle} >Some common hobbies I wish we have... </Text>
              <View style={styles.row}>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Gaming</Text>
                </Chip>

                <Chip style={styles.chip} onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Watching Movies</Text>
                </Chip>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Crocheting</Text>
                </Chip>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Running</Text>
                </Chip>
              
                <Chip style={styles.chip} onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Painting</Text>
                </Chip>

              </View>
              <Text style={styles.subTitle} >I don't mind if my partner... </Text>
              <View style={styles.row}>

                <Chip style={styles.chip}onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Smoke</Text>
                </Chip>

                <Chip style={styles.chip} onPress={() => console.log('Pressed')}>
                  <Text style={styles.chipText}>Drinking</Text>
                </Chip>

              </View>

         
              <View style={styles.containerButton}>
                <Button >
                    Submit
                </Button>
              </View>
        
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        backgroundColor: '#FFC3A9',
        paddingTop: 40,
        paddingLeft:10,
        paddingRight:10,
      },
    textInput: {
        height: 50,
        margin: 12,
        borderWidth: .9,
        borderRadius: 12,
        borderColor: 'gray',
        paddingHorizontal: 120,
        padding: 10,
        marginBottom: 50,
        fontSize: 25,
        color: 'black',
        backgroundColor: 'rgba(255,255,255,.4)'
    },
    popupInput: {
        fontSize: 25,
        color: 'black',
    },
    containerButton: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
       },
       title: {
        textAlign: 'center',
        fontWeight: 'bold',
        textColor:"white",

        fontSize: 25,
      },    containerMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4
    }, subTitle: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12
      },
      chip: {
        backgroundColor: "#fda172",
        margin: 4
      },
      chipText: {
        color: "#ffffff"
      }
});