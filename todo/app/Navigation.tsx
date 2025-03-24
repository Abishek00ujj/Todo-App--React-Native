import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomeScreen from './Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
type RootStackParamList = {
   Home: undefined;
};


const Stack=createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator>
  )
}

export default Navigation