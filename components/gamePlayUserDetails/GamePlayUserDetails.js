import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';

const GamePlayUserDetails = ({user}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView>
        <View>
            <Image source={user.profileImage} style={{width: (width / 350) * 65, height: (height / 680) * 65}}></Image>
        </View>
        <View>
            <Text>{user.name}</Text>
            <Text>{user.score}</Text>
        </View>
    </SafeAreaView>
  );
};

export default GamePlayUserDetails;