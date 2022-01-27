import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    Button,
    Pressable} from "react-native";

import { SocialIcon } from 'react-native-elements'

import MainContainer from "../Navigation/MainContainer";

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../assets/cravingslogo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate("MainContainer")}>
                    <Text style={styles.btnText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.socialLoginbtn} >
                    <View style={{ flexDirection: 'column'}}>
                        <SocialIcon style={{height: 43, width: 43, marginRight: 20}}
                            type='google'
                            onPress={() => {
                                alert('google')
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <SocialIcon style={{height: 43, width: 43, marginRight: 20}}
                            type='facebook'
                            onPress={() => {
                                alert('facebook')
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <SocialIcon style={{height: 43, width: 43, marginRight: 20}}
                            type='linkedin'
                            onPress={() => {
                                alert('linkedin')
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <SocialIcon style={{height: 43, width: 43}}
                            type='envelope'
                            onPress={() => {
                                alert('email')
                            }}
                        />
                    </View>
                </View>
                <Pressable
                    onPress={() => {alert('Button Press')}}>
                    <Text style={{fontSize: 20, color: 'black'}}>Forgot Password?</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.20;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFD96",
        alignSelf: 'stretch',
        padding: 60
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
       flex: 1,
       backgroundColor: '#FDFD96',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 300,
        height: 200,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        elevation: 12,
        backgroundColor: '#0A75BC',
        height: 50,
        width: "80%",
        alignSelf: 'center',
        marginBottom: 20,
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 0.50,
    },
    socialLoginbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    }
});