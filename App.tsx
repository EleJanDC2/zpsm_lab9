import * as React from 'react';
// @ts-ignore
// import MyStack from './navigations/MyStack.js';
import MyBottomNavigator from './navigations/MyBottomNavigator.js';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';

// @ts-ignore
export default function App() {
  return (
    <NavigationContainer>
      <MyBottomNavigator />
    </NavigationContainer>
  );
}

// onPress={navigation.navigate('Test')};

// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';
//
// function App(): React.JSX.Element {
//   return (
//     <SafeAreaView>
//       <Text> HELLO START</Text>
//     </SafeAreaView>
//   );
// }
