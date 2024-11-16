import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';
import GamePlayHeader from '../../components/gamePlayHeader/GamePlayHeader';
import GamePlayQuestion from '../../components/gamePlayQuestion/GamePlayQuestion';
import React, {useEffect, useState} from 'react';

const Gamearena = () => {
    const [currQ, setCurrQ] = useState(0)
    const sendNext = () =>{
        setCurrQ(prev => (prev+1)%5)
    }
    const questions = [
        {
            statement: "Which country has the highest life expectancy?",
            options: [
                {
                    id: "hongkong",
                    name: "Hong Kong"
                },
                {
                    id: "sweden",
                    name: "Sweden"
                },
                {
                    id: "india",
                    name: "India"
                },
                {
                    id: "singapore",
                    name: "Singapore"
                }
            ],
            correctOption: "hongkong"
        },
        {
            statement: "What is the most common surname in the United States?",
            options: [
                {
                    id: "reeves",
                    name: "Reeves"
                },
                {
                    id: "smith",
                    name: "Smith"
                },
                {
                    id: "michelle",
                    name: "Michelle"
                },
                {
                    id: "hunt",
                    name: "Hunt"
                }
            ],
            correctOption: "smith"
        },
        {
            statement: "How many minutes are in a full week?",
            options: [
                {
                    id: "one",
                    name: "10020"
                },
                {
                    id: "two",
                    name: "11000"
                },
                {
                    id: "three",
                    name: "10080"
                },
                {
                    id: "four",
                    name: "11080"
                }
            ],
            correctOption: "three"
        },
        {
            statement: "Aureolin is a shade of what color?",
            options: [
                {
                    id: "white",
                    name: "White"
                },
                {
                    id: "red",
                    name: "Red"
                },
                {
                    id: "amber",
                    name: "Amber"
                },
                {
                    id: "yellow",
                    name: "Yellow"
                }
            ],
            correctOption: "yellow"
        },
        {
            statement: "How many faces does a Dodecahedron have?",
            options: [
                {
                    id: "one",
                    name: "12"
                },
                {
                    id: "two",
                    name: "8"
                },
                {
                    id: "three",
                    name: "16"
                },
                {
                    id: "four",
                    name: "10"
                }
            ],
            correctOption: "one"
        }
    ];
    return (
        <SafeAreaView>
            <GamePlayHeader></GamePlayHeader>
            <GamePlayQuestion currentQuestion={questions[currQ]} category={'General Knowledge'} sendNext={sendNext}></GamePlayQuestion>
        </SafeAreaView>
    )
};

export default Gamearena;