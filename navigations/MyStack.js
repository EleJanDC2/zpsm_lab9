import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Test from '../screens/Test';
import Results from '../screens/Results';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default MyStack;

// export default function MyStack() {
//   return (
//     <Stack.Navigator initialRouteName={Home}>
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   );
// }
