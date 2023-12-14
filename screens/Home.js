import {Button, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

export const Home = ({navigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Text> HOME SCREEN </Text>
    </NavigationContainer>
  );
};

export default Home;
