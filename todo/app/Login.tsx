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

  
  type Props = NativeStackScreenProps<RootStackParamList,'Login'>;
  
const Login: React.FC<Props>  = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const URL="https://todo-1-znkx.onrender.com/api/v1/login";
     const login=async()=>{
        Alert.alert('Login'+email+password);
        if(email=='' || password=='')
        {
            Alert.alert('Please fill all fields');
            return;
        }
        setLoading(true);
        try{
            
            const res=await axios.post(URL,{
                email:email,
                password:password,
            })
            Alert.alert('Login Success'+res.data.message);
            await AsyncStorage.setItem('userData',JSON.stringify(res.data));
            navigation.navigate('Todo');
        }
        catch(err){
            Alert.alert('Login Failed'+err);
        }
        finally{
            setLoading(false);
        }
     }
  return (
    <View className='flex items-center justify-center w-screen h-screen bg-black'>
      <View className='w-[300px] rounded-xl flex flex-col gap-5 h-[250px] bg-white justify-center items-center'>
            <View>
                <Text className='text-4xl font-bold text-center'>Login</Text>
            </View>
            <View className='w-[200px]'>
                <TextInput value={email} onChangeText={setEmail} placeholder='Email' className='w-full p-2 border-2 rounded-lg'/>
            </View>
            <View className='w-[200px]'>
                <TextInput value={password} onChangeText={setPassword} placeholder='Password' className='w-full p-2 border-2 rounded-lg'/>
            </View>
            <View className='w-[200px]'>
                {
                    loading?<ActivityIndicator size='large' color='#00ff00'/>:(
                        <>
                <Button onPress={()=>{
                    login()
                }} color="#841584"  title='Login'/>
                        </>
                    )
                }
            </View>
      </View>
    </View>
  )
}

export default Login