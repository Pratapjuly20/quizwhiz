import {SafeAreaView, View, Text} from 'react-native';
import UserDetails from '../../components/userDetails/UserDetails';
import React, {useEffect} from 'react';
import { Routes } from '../../navigation/Routes';

const Matchup = ({navigation}) => {
  const self = {
    name: 'Divya Pratap',
    level: 'Level 1',
    country: 'India',
    profileImage: require('../../assets/images/naruto.jpg')
  }

  const opponent = {
    name: 'Vivek Walecha',
    level: 'Level 2',
    country: 'India',
    profileImage: require('../../assets/images/sasuke.png')
  }

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.Gamearena);
    }, 4000)
  });

  return (
    <SafeAreaView>
      <View>
        <UserDetails user={self}></UserDetails>
      </View>
      <View>
        <Text>V/S</Text>
      </View>
      <View>
        <UserDetails user={opponent}></UserDetails>
      </View>
    </SafeAreaView>
  );
};

export default Matchup;
