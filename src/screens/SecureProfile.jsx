import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Title from '../components/Title'
import PinInput from '../components/PinInput'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    const handleData = (e) => {
        console.log(e)
    }
    
    const next = () => {
        console.log('next')
    }
    
    const handlePin = (e) => {
        console.log(e)
    
    }
    const back = () => {
        navigation.navigate('Login')
    }

    return (
        <View className="flex flex-col w-screen h-screen p-6">
            <View className='text-center'>
                <Image
                    className='flex w-100'
                    style={{ width: 83, height: 33 }}
                    source={require('../assets/gabu_logo_colored.png')}
                />
                <View className='mt-12'>
                    <Title>Para asegurar tu perfil, crea un PIN de 4 dígitos</Title>
                </View>
            </View>

            <View className='flex text-center justify-center flex-grow'>
                <PinInput
                    onChange={handleData}
                    inputMode='numeric'
                    handleValue={handlePin}
                />
                <Text className='text-black text-lg font-bold'>
                    Lo podrás cambiar después en c|onfiguración
                </Text>
            </View>
            
            <View className=' text-center'>
                <View className='my-2'>
                    <Button
                        text='Continuar'
                        onPress={next}  
                    />
                    
                </View>
                <View className='my-2'>
                    <Button
                        text='Regresar'
                        isSecondary
                        onPress={back}  
                    />
                </View>
            </View>
        </View>
    );
};

export default Login;
