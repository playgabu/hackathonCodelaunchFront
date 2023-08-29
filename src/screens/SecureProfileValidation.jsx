import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image ,ScrollView} from 'react-native';
import Title from '../components/Title'
import PinInput from '../components/PinInput'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';

const SecureProfileValidation = () => {
    const navigation = useNavigation();

    const handleData = (e) => {
        console.log(e)
    }
    
    const next = () => {
        //Validation
        console.log('DadProfile')
    }
    
    const handlePin = (e) => {
        console.log(e)
    
    }
    const back = () => {
        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <View className="flex h-screen flex-col p-6">
                <View>
                    <View className='text-center'>
                        <Image
                            className='flex w-100'
                            style={{ width: 83, height: 33 }}
                            source={require('../assets/gabu_logo_colored.png')}
                        />
                        <View className='mt-12'>
                            <Title>Ingresa tu PIN de 4 digitos</Title>
                        </View>
                    </View>

                    <View className='flex text-center justify-center flex-grow'>
                        <PinInput
                            onChange={handleData}
                            inputMode='numeric'
                            handleValue={handlePin}
                        />
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'flex-end'}}>
                    <Button
                        text={"Continuar"}
                    ></Button>
                </View>
            </View>
        </ScrollView>
        
    );
};

export default SecureProfileValidation;
