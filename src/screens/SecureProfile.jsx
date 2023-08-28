import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Title from '../components/Title'
import PinInput from '../components/PinInput'
import Button from '../components/Button'

const handleData = (e) => {
    console.log(e)
    // accountData = {...accountData, [e.field] : e.value}
}

const next = () => {
    console.log('next')
}

const Login = () => {
    return (
        <View className="flex flex-col w-screen h-screen flex-1 p-6">
            <Image
                className='flex w-100'
                style={{ width: 83, height: 33 }}
                source={require('../assets/gabu_logo_colored.png')}
            />
            <View className='mt-12 mb-6'>
                <Title>Para asegurar tu perfil, crea un PIN de 4 dígitos</Title>
            </View>
            <View>
                <PinInput
                    // onChange={e => handleData({ value: e, field: 'name' })}
                    value={0}
                    inputMode='numeric'
                />
            </View>
            <View className='mt-6'>
                <Button
                    text='Continuar'
                    onPress={next}  
                />
            </View>
        </View>
    );
};

export default Login;
