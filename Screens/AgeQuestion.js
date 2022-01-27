import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from '../components/Button';

import DateTimePicker from '@react-native-community/datetimepicker';

import GenderQuestion from "./GenderQuestion";

export default function AgeQuestion({navigation}) {
    const [age, setAge] = useState(18);
    const [haveAge, setHaveAge] = useState(false); 
    const [date, setDate] = useState(new Date("December 31, 2002 00:00:00"));
    const [show, setShow] = useState(false);
    const getAge = dateInput => { //Calculates age based on input as year/month/day 
        const today = new Date();
        const birthDate = new Date(dateInput);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        
        return age;
    };
    
    const onChange = (event, selectedDate) => {
      setAge(getAge(selectedDate))
        setShow(false)
        setHaveAge(false)
    }
    const onPress = () => {
        if (haveAge) navigation.navigate("GenderQuestion");
        setHaveAge(true);
    };
 

    const showTimePicker = () => {
      if (show) {
        setShow(false)
      } else {
        setShow(true)
      }
    }
      return (
            <View style={styles.container}>
              <Text style={styles.question}>When is your Birthday?</Text>
              <View style={styles.containerMenu}>
                <Text style={styles.clickText} onPress={showTimePicker}>{`${new Date(date).getFullYear()}/${new Date(date).getDay()}/${new Date(date).getMonth()}`}</Text>
              {show && <DateTimePicker
                     testID="dateTimePicker"
         value={date}
         onChange={onChange}
         mode={date}
         maximumDate={new Date("December 31, 2002 00:00:00")}
         minimumDate={new Date("December 31, 1920 00:00:00")}
       />}
       {haveAge == true && <Text style={styles.popupInput}>{`You are ${age} years old`}</Text>}
              </View>
              <View style={styles.containerButton}>
                <Button onPress={onPress}>
                    Continue
                </Button>
              </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFC3A9',
        paddingTop: 65,
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
       clickText: {
         fontSize: 39,
         paddingBottom: 20,        
         height: 70,        
         paddingTop: 5,
         paddingHorizontal: 20,
         borderWidth: .9,
         color: 'black',
         backgroundColor: 'rgba(255,255,255,.4)',
         borderRadius: 20
        },
       containerMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4
    },    question: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25
    },
});