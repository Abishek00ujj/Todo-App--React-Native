import { View, Text, TextInput,Button, Alert } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { NativeStackScreenProps} from '@react-navigation/native-stack'
type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    Todo:undefined
  };

  
  type Props = NativeStackScreenProps<RootStackParamList,'Todo'>;
  
const Todo: React.FC<Props>  = ({navigation}) => {
  return (
    <View className='flex items-center justify-center w-screen h-screen bg-black'>
      <View className='w-[300px] rounded-xl flex flex-col gap-5 h-[250px] bg-white justify-center items-center'>
            <View>
                <Text className='text-4xl font-bold text-center'>Todo</Text>
            </View>
            <View className='w-[200px]'>
                <TextInput placeholder='Enter Todo' className='w-full p-2 border-2 rounded-lg'/>
            </View>
            <View className='w-[200px]'>
                <Button title='Add Todo' color="#841584" onPress={()=>{
                    Alert.alert('Todo Added');
                }}/>
            </View>
        </View>    
        </View>   
  )
  }
export default Todo