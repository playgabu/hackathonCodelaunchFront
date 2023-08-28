import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Title from '../components/Title'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [accountData, setAccountData ] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })
    const navigation = useNavigation();
    
    const handleData = (e) => {
        console.log(e)
        setAccountData({
            ...accountData, [e.field]: e.value
        })
    }

    const registerMe = () => {
        navigation.navigate('SecureProfile')
    }

    const back = () => {
        navigation.navigate('Main')
    }

    const openTerminos = () => {
        console.log('Open Terminos')
    }

    const openPrivacidad = () => {
        console.log('Open Privacidad')
    }

    return (
        <View className="flex flex-col w-screen h-screen flex-1 p-6">
            <Image
                className='flex w-100'
                style={{ width: 83, height: 33 }}
                source={require('../assets/gabu_logo_colored.png')}
            />
            <View className='mt-12 mb-6'>
                <Title>Papá, crea una cuenta</Title>
            </View>
            <TextInput
                label='Nombre (Papá o mamá)'
                onChange={e => handleData({ value: e, field: 'name' })}
                placeholder='Nombre completo'
                value={accountData?.name || ''}
                isRequired
            />
            <TextInput
                label='Telefono (Papá o mamá)'
                onChange={e => handleData({ value: e, field: 'phone' })}
                placeholder='Numero a 10 digitos'
                inputMode='numeric'
                value={accountData?.phone || ''}
                isRequired
            />
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
            <View className='mt-4'>
                <Button
                    text='Registrarme'
                    onPress={registerMe}  
                />
            </View>
            <View className='mt-4'>
                <Button
                    text='Regresar'
                    isSecondary
                    onPress={back}  
                />
            </View>
            <Text className='mt-6'>
                Al hacer clic en Registrarme, acepta los Términos de uso, y aceptas la Política de privacidad.
            </Text>
            <View className="flex flex-row justify-center w-100 mt-4">
                <TouchableOpacity
                    className="text-black text-center mx-5"
                    onPress={openTerminos}
                >
                    <Text className='text-lg font-bold text-decoration-line: underline'>
                        Terminos
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="text-black text-center mx-5"
                    onPress={openPrivacidad}
                >
                    <Text className='text-lg font-bold text-decoration-line: underline'>
                        Privacidad
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
