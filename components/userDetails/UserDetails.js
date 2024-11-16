import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';

const UserDetails = ({user}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView>
      <View>
        <Image source={user.profileImage} style={{width: (width / 350) * 65, height: (height / 680) * 65}}></Image>
      </View>
      <View>
        <Text>{user.name}</Text>
        <Text>{user.level}</Text>
        <Text>{user.country}</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;
