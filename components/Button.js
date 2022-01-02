import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

// Reusable Button Component
const Button = (props) => {
  return (
    // What the Text for the button would be
          <TouchableOpacity style={styles.buttonBody} onPress={props.onPress}>
      <Text style={styles.buttonText}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}



// Stylesheet is
const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#314D07',
    width: '75%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600'
  }

});

export { Button };
