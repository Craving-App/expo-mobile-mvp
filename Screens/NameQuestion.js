import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Button} from '../components/Button';

export default function NameQuestion({ navigation}) { 
    const [name, setName] = useState('');
    const [haveName, setHaveName] = useState(false);

    let message = `Hi, ${name}!`;

    const onPress = () => {
        if (name.trim().length > 1 && !haveName) {
            setHaveName(true);
        } else {
            navigation.navigate("Age");
        }
    }

    const setFalse = () => {
        setHaveName(false);
    }
    
      return (
        <View style={styles.container}>
              <Text style={styles.question}> What is your name ? </Text>
            <View style={styles.containerMenu}>
            <TextInput style={styles.textInput} value={name} onChange={setFalse} onChangeText={setName}/>
           {haveName && <Text style={styles.popupInput}>{message}</Text>}
            </View>
        
           <View style={styles.containerButton}>
              <Button onPress={onPress}>Continue</Button>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFC3A9',
        paddingTop: 60,
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
       question: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
      },    containerMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4
    },
});