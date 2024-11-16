import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes';
import Matchup from '../screens/matchup/Matchup';
import Gamearena from '../screens/gamearena/Gamearena';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}} initialRouteName={Routes.Matchup}>
      <Stack.Screen name={Routes.Matchup} component={Matchup} />
      <Stack.Screen name={Routes.Gamearena} component={Gamearena} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
