import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';
import GamePlayUserDetails from '../gamePlayUserDetails/GamePlayUserDetails';
import GameTimer from '../gametimer/gametimer';

const GamePlayHeader = () => {
    const self = {
        name: 'Divya Pratap',
        score: 10,
        profileImage: require('../../assets/images/naruto.jpg')
      }
    
      const opponent = {
        name: 'Vivek Walecha',
        score: 10,
        profileImage: require('../../assets/images/sasuke.png')
      }
      let timeLimit = 5;
  return (
    <SafeAreaView>
        <GamePlayUserDetails user={self}></GamePlayUserDetails>
        <GameTimer timeLimit={timeLimit}></GameTimer>
        <GamePlayUserDetails user={opponent}></GamePlayUserDetails>
    </SafeAreaView>
  );
};

export default GamePlayHeader;