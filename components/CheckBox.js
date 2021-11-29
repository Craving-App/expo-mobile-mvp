import React, {useState} from "react";
import {Text, StyleSheet, Picker, View, TouchableOpacity} from 'react-native';

// Component for a multi-select checkbox with parameter

const Checkbox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <TouchableOpacity style={styles.square}>
        </TouchableOpacity>
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

/*
 padding: 10,
 borderRadius: 10,
 alignItems: 'center',
 justifyContent: 'space-between',
 marginTop: 30,
 marginBottom: 10
 */

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 40,
    justifyContent: 'space-between',
    marginTop: 15,
    padding: 15,
  },
  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'red',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10
  },
  textBody: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5
  },
  textBodys: {
    color: 'grey',
    fontSize: 11,
    textAlign: 'center'
  }
});

export {Checkbox};
