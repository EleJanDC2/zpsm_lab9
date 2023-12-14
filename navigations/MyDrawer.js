import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Test from '../screens/Test';
import Results from '../screens/Results';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Test" component={Test} />
      <Drawer.Screen name="Results" component={Results} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
