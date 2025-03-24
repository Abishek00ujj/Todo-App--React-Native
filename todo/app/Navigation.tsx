import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import HomeScreen from './Home'
import Login from './Login'
import Register from './Register'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};


const Stack=createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
</Stack.Navigator>
  )
}

export default Navigation