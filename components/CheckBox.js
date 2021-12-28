import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function Checkbox(props) {
    
    // Component for a multi-select checkbox with parameter
    const [checked, onChange] = useState(false);
    
    function onCheckedMarked() {
      onChange(!checked);
    }
  return (
          <View style={styles.container}>
                <View style={styles.containerLeft}>
                  <Pressable
                    style={[styles.square, checked && styles.checkedBox]}
                    onPress={onCheckedMarked}>
                    {checked && <Ionicons name="checkmark" size={20} color="white" />}
                  </Pressable>
          <View style={{ flex: 1 }} >
            <Text style={styles.textBody}>
                {props.answer}
            </Text>
            <Text style={styles.textBodys}>
              {props.description}
            </Text>
          </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 9
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    opacity: 0.4,
    borderRadius: 5,
    marginLeft: 10
  },
  textBody: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5,
  },
  textBodys: {
    color: 'grey',
    fontSize: 11,
    textAlign: 'center',
  },
});

export {Checkbox};
