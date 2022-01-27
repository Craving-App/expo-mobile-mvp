import React from "react";
import { View, StyleSheet,TouchableOpacity,Text } from "react-native";

export default function Home({ navigation }) {
// <<<<<<< HEAD
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ textAlign: "center",  fontSize: 16, fontWeight: 'bold'}}>Success!</Text>
//       <Text style={{ textAlign: "center", padding: 40}}>Onboarding all completed, get mingling.</Text>
//       <TouchableOpacity onPress={() => alert('You clicked the success button!')} style={styles.button}>
//         <Text style={styles.buttonText} >Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// =======
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Home Page{"\n"}{"\n"}</Text>
            <Text onPress={() => navigation.navigate("Profile")}>
                Click me to view profile{"\n"}{"\n"}
            </Text>

            <Text onPress={() => navigation.navigate("EnterEmail")}>
                Click to enter email
            </Text>
            
            
        </View>
    );

}

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: "orange",
//     padding: 15,
//     borderRadius: 20,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: 'bold'
//   }, 
// });