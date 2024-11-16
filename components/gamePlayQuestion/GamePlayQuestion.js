import {SafeAreaView, View, Text, Pressable, Alert} from 'react-native';
import React from 'react';

const GamePlayQuestion = ({currentQuestion, category, sendNext}) => {
    const handleClick = (option) => {
        console.log("event", option);
        if(option.id === currentQuestion.correctOption) {
            Alert.alert("Quiz", "That's a right answer");
            sendNext();
        } else {
            Alert.alert("Quiz", "Try Again");
        }
    };

    return (
        <SafeAreaView>
            <View>
                <Text>{category}</Text>
            </View>
            <View>
                <Text>{currentQuestion.statement}</Text>
            </View>
            <View>
                {
                    currentQuestion.options.map((option) => {
                        return (<Pressable key={option.id} onPressIn={() => {
                            return handleClick(option)
                        }}><Text>{option.name}</Text></Pressable>);
                    })
                }
            </View>
        </SafeAreaView>
    );
};

export default GamePlayQuestion;