import { View, Text } from 'react-native'
import React,{useState} from 'react'
import axios from 'axios'
import { TextInput,Button, Alert } from 'react-native'
import { NativeStackScreenProps} from '@react-navigation/native-stack'
import { ActivityIndicator } from 'react-native'
type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
  };

  
  type Props = NativeStackScreenProps<RootStackParamList,'Register'>;
  
const Register: React.FC<Props>  = ({navigation}) => {

   const [email, setEmail] = useState('');
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
     const URL="https://todo-1-znkx.onrender.com/api/v1/register";
     const register=async()=>{
        setLoading(true);
        if(email=='' || password=='' || name=='')
        {
            Alert.alert('Please fill all fields');
            return;
        }
        Alert.alert('Login'+email+password);
        if(password!=password1){
            Alert.alert('Password does not match');
            return;
        }
    
        try{
            const res=await axios.post(URL,{
                email:email,
                name:name,
                password:password,
            })
            Alert.alert('Register Success'+res.data.message);
            navigation.navigate('Login');
           // await AsyncStorage.setItem('userData',JSON.stringify(res.data));
        }
        catch(err){
            Alert.alert('Register Failed'+err);
        }
        finally
        {
            setLoading(false);
        }
     }
  return (
    <View className='flex items-center justify-center w-screen h-screen bg-black'>
      <View className='w-[300px] rounded-xl flex flex-col gap-5 h-[350px] bg-white justify-center items-center'>
            <View>
                <Text className='text-4xl font-bold text-center'>Register</Text>
            </View>
            <View className='w-[200px]'>
                <TextInput value={name} onChangeText={setName} placeholder='Name' className='w-full p-2 border-2 rounded-lg'/>
            </View>
            <View className='w-[200px]'>
                <TextInput value={email} onChangeText={setEmail} placeholder='Email' className='w-full p-2 border-2 rounded-lg'/>
            </View>
            <View className='w-[200px]'>
                <TextInput value={password} onChangeText={setPassword} placeholder='Password' className='w-full p-2 border-2 rounded-lg'/>
            </View>
            <View className='w-[200px]'>
                <TextInput value={password1} onChangeText={setPassword1} placeholder='Re-enter Password' className='w-full p-2 border-2 rounded-lg'/>
            </View>
            <View className='w-[200px]'>
                {
                    loading ?(
                        <ActivityIndicator size="large" color="#841584" />

                    ):(
                        <>
                <Button onPress={()=>{
                    register()
                }} color="#841584"  title='Register'/>
                        </>
                    )
                }
    
            </View>
      </View>
    </View>
  )
}

export default Register