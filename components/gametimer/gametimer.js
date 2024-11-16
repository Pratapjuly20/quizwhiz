import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';

const GameTimer = ({timeLimit}) => {
  const [timer, setTimer] = useState(timeLimit);
  
  useEffect(() => {
    startClock(timeLimit);
  },[timer]);

  const startClock = () => {
    if(timer > 0) {
      setTimeout(() => {
        setTimer(prev => prev - 1);
      }, 1000)
    }
  }
  return (
    <SafeAreaView>
        <Text>{timer}</Text>
    </SafeAreaView>
  );
};

export default GameTimer;