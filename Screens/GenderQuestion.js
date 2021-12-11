import React, { useState } from 'react';
import { View, Picker, StyleSheet, Text } from 'react-native';
import {Button} from '../components/Button';

export default function GenderQuestion({navigation}) { 
    const [gender, setGender] = useState('Cis Male');
    const genders = ['Cis Male', 'Cis Woman', 'Masc Nonbinary', 'Femme Nonbinary', 'Nonbinary', 'Trans Man', 'Trans Woman'];
    const onPress = () => {
        navigation.navigate("Age");
    };
      return (
            <View style={styles.container}>
              <Text style={styles.question}>What is your gender?</Text>
                <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    style={{ height: 50, width: 200, marginBottom: 100, marginTop: 20 }}>
                    {genders.map((gender, idx) =>
                    <Picker.Item label={gender} value={gender} key={idx}/>
                    )}  
                </Picker>
              <Button text="Continue" onPressHandler={onPress} />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    input: {
        marginBottom: 40
    },   question: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
      },
});