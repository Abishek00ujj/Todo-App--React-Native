import { View, Text,Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import React from 'react'
import { NativeStackScreenProps} from '@react-navigation/native-stack'
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Todo:undefined
};


type Props = NativeStackScreenProps<RootStackParamList,'Home'>;

const Home: React.FC<Props>  = ({navigation}) => {
  if(AsyncStorage.getItem('userData')!=null)
  {
    navigation.navigate('Todo');
  }
  return (
    <View className='flex items-center justify-center w-screen h-screen bg-black text-wrap'>
        <View className='w-[300px] rounded-xl flex flex-col gap-10 h-[250px] bg-white justify-center items-center'>
           <View>
                <Text className='text-4xl font-bold text-center'>TODO APP</Text>
           </View>
           <View className='flex items-center justify-center gap-5'>
                <View className='w-[200px] flex justify-center'>
                <Button onPress={()=>{
                  navigation.navigate('Login')
                }} color="#841584"  title='Login'/>
                </View>
                <View className='w-[200px] flex justify-center'>
                <Button onPress={()=>{
                  navigation.navigate('Register')
                }} color="#841584"  title='Register'/>
                </View>
           </View>
        </View>
    </View>
  )
}

export default Home