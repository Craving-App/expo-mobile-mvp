import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


export default function Craving ({navigation}) {
  return (
    <View style={styles.container}>
{/*           
          <TextInput
            style={styles.inputText}
            keyboardType='default'
            multiline={true}
            placeholder="Tell us about yourself..."
          /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC3A9',
    paddingTop: 65,
  },
    inputText: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});
