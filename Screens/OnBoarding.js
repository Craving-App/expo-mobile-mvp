import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Animated, SafeAreaView, StatusBar, Pressable} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import FirstName from "./FirstName";
import Birthday from "./Birthday";
import Gender from "./Match_Gender";
import Orientation from "./Sexual_Orientation_Screen";
import Intention from "./Intention";
import AboutMe from "./About_Me";
import Interests from "./Interests";
import FacialRecog from "./Facial_Recog";

const OnBoarding = ({navigation}) => {
    const allQues = [
        {screen: <FirstName />}, {screen: <Birthday />}, {screen: <Gender />},
        {screen: <Orientation />}, {screen: <Intention />}, {screen: <AboutMe />},
        {screen: <Interests />}, {screen: <FacialRecog />}
    ];
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNext = () => {
        if(currentQuestionIndex == allQues.length-1) {
            navigation.navigate("Login");
        }
        else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }

        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 400,
            useNativeDriver: false
        }).start();
    }

    const handleBack = () => {
        if(currentQuestionIndex == 0) {
            navigation.goBack(null);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex - 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    const handleSkip = () => {
        navigation.navigate("Login");
    }

    const renderQuestion = () => {
        return (
            <View>
                {allQues[currentQuestionIndex]?.screen}
                <TouchableOpacity
                    onPress={handleNext}>
                    <Text style={{
                        fontSize: 30,
                        marginBottom: 100,
                        alignSelf: 'center'}}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQues.length],
        outputRange: ['0%', '100%']
    })

    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020'}}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: '#314D07'
                }, {
                    width: progressAnim
                }]}>
                </Animated.View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 2}}>
            <StatusBar barStyle="light-content" backgroundColor='black' />
            <View style={{
                paddingTop: 30,
                padding: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFC3A9'
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 50, }}>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        marginRight: 300}}>
                        <Icon
                            onPress={handleBack}
                            name='arrow-back'
                            size={30}
                            color="black"/>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Pressable
                            onPress={handleSkip}>
                            <Text style={{fontSize: 22}}>Skip</Text>
                        </Pressable>
                    </View>
                </View>

                {renderProgressBar()}
                {renderQuestion()}
            </View>
        </SafeAreaView>
    );
}

export default OnBoarding;

