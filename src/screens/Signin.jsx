import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Title from '../components/Title'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
    const [accountData, setAccountData ] = useState({
        email: '',
        password: ''
    })
    const navigation = useNavigation();
    
    const handleData = (e) => {
        setAccountData({
            ...accountData, [e.field]: e.value
        })
    }

    const signin = () => {
        // navigation.navigate('SecureProfile')
    }

    const back = () => {
        navigation.navigate('Main')
    }

    const forgottenPassword = () => {
        console.log('Open Terminos')
    }


    return (
        <View className="flex flex-col w-screen h-screen p-6">
            <View className='text-center'>
                <Image
                    className='flex w-100'
                    style={{ width: 83, height: 33 }}
                    source={require('../assets/gabu_logo_colored.png')}
                />
                <View className='mt-12 mb-6'>
                    <Title>Ingresar</Title>
                </View>
            </View>
            <View className='flex text-center justify-center flex-grow'>
                <TextInput
                    label='Correo electrónico (Papá o mamá)'
                    onChange={e => handleData({ value: e, field: 'email' })}
                    placeholder='Correo electrónico de papá o mamá'
                    inputMode='email'
                    value={accountData?.email || ''}
                    isRequired
                />
                <TextInput
                    label='Contraseña'
                    onChange={e => handleData({ value: e, field: 'password' })}
                    placeholder='Por lo menos 8 caractéres'
                    isPassword={true}
                    value={accountData?.password || ''}
                    isRequired
                />
            </View>
            <TouchableOpacity
                className="text-black text-center m-5"
                onPress={forgottenPassword}
            >
                <Text className='text-lg font-bold text-center text-decoration-line: underline'>
                    Olvidé mi contraseña
                </Text>
            </TouchableOpacity>
            <View className='mt-4'>
                <Button
                    text='Ingresar'
                    onPress={signin}  
                />
            </View>
            <View className='mt-4'>
                <Button
                    text='Regresar'
                    isSecondary
                    onPress={back}  
                />
            </View>
        </View>
    );
};

export default Signin;
