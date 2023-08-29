import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Title from '../components/Title'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState({
        email: '',
        code: '',
        password: ''
    })
    const [codeSended, setCodeSended] = useState(false)

    const handleData = (e) => {
        setUserData({
            ...userData, [e.field]: e.value
        })
    }


    const sendCode = () => {
        // console.log('sendCode)
        setCodeSended(true)
    }

    const restore = () => {
        console.log('restore')
    }

    const back = () => {
        setCodeSended(false)
        navigation.navigate('Signin')
    }

    return (
        <View className="flex flex-col w-screen h-screen p-6">
            <View className='text-center'>
                <View className='mt-12'>
                    <Title>Restablecer Contraseña</Title>
                </View>
            </View>
            {codeSended ? (
                <View className='flex flex-grow'>
                    <View className='flex text-center justify-center mt-4'>
                        <TextInput
                            label='Código de validación'
                            onChange={e => handleData({ value: e, field: 'code' })}
                            placeholder='Ingresa tu código de validación'
                            value={userData?.code || ''}
                            isRequired
                        />
                        <TextInput
                            label='Nueva contraseña'
                            onChange={e => handleData({ value: e, field: 'password' })}
                            placeholder='Ingresa tu contraseña'
                            isPassword={true}
                            value={userData?.password || ''}
                            isRequired
                        />
                        <TextInput
                            label='Correo electrónico'
                            onChange={e => handleData({ value: e, field: 'confirmPassword' })}
                            placeholder='Correo electrónico de papá o mamá'
                            isPassword={true}
                            value={userData?.confirmPassword || ''}
                            isRequired
                        />
                    </View>
                    <View className='flex h-100 text-center flex-grow justify-end'>
                        <View className='my-2'>
                            <Button
                                text='Restablecer'
                                onPress={restore}
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
            ) : (
                <View className='flex flex-grow'>
                    <Text className='text-md text-black mt-4'>
                        Ingresa el correo con el que registraste y recibirás una contraseña temporal con la que podrás elegir una contraseña.
                    </Text>

                    <View className='flex text-center justify-center mt-4'>
                        <TextInput
                            label='Correo electrónico'
                            onChange={e => handleData({ value: e, field: 'email' })}
                            placeholder='Correo electrónico de papá o mamá'
                            inputMode='email'
                            value={userData?.email || ''}
                            isRequired
                        />
                    </View>

                    <View className='flex h-100 text-center flex-grow justify-end'>
                        <View className='my-2'>
                            <Button
                                text='Enviar código'
                                onPress={sendCode}
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
            )}
        </View>
    );
};

export default Login;
