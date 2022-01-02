import React, {useState} from "react";
import {Text, StyleSheet, Picker} from 'react-native';

// Component for drop down menus

const MenuOptions = (props) => {
    
    // constant values
    const [selectedValue, setSelectedValue] = useState("java");

    return (
      <Picker
        selectedValue={selectedValue}
        style={styles.menuBody}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
        <Picker.Item label={props.arr[0]} value={props.arr[0]}/>
        <Picker.Item label={props.arr[1]} value={props.arr[1]}/>
        <Picker.Item label={props.arr[2]} value={props.arr[2]}/>
        <Picker.Item label={props.arr[3]} value={props.arr[3]}/>
        <Picker.Item label={props.arr[4]} value={props.arr[4]}/>
        <Picker.Item label={props.arr[5]} value={props.arr[5]}/>
        <Picker.Item label={props.arr[6]} value={props.arr[6]}/>
      </Picker>
    )
}

const styles = StyleSheet.create({
menuBody: {
    height: 250,
    width: 250,
    textAlign: 'center',
    position: 'absolute'
},
menuQuestion: {
    textAlign: 'center',
    height: 20
}
});

export { MenuOptions };
