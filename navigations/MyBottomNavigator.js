import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Test from '../screens/Test';
import Results from '../screens/Results';

const Tab = createBottomTabNavigator();

export const MyBottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Test" component={Test} />
      <Tab.Screen name="Results" component={Results} />
    </Tab.Navigator>
  );
};

export default MyBottomNavigator;
