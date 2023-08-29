
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button'
import {SvgUri} from 'react-native-svg'

const SelectProfile = () => {
    const profiles = [
        { name: 'DiegoSonic', avatar: 'https://source.boringavatars.com/beam/120/avatar1?colors=7B97FF,9F76F5,FF6A65,FFC73B'},
        { name: 'Samantix', avatar: 'https://source.boringavatars.com/beam/120/avatar2?colors=7B97FF,9F76F5,FF6A65,FFC73B'},
    ]

    const navigation = useNavigation();

    const addChild = () => {
        navigation.navigate('ChildAccount')
    }

    const next = () => {
        navigation.navigate('Home')
    }
    return (
        <View className="flex flex-col w-screen h-screen flex-1 p-6  bg-primaryLighter">
            <View className='text-center'>
                <View className='flex flex-row justify-center mt-8'>
                    <Image
                        className='flex w-100'
                        style={{ width: 91, height: 36 }}
                        source={require('../assets/gabu_logo.png')}
                    />
                </View>
            </View>

            <View className='flex text-center justify-center flex-grow'>
                <Text className="flex flex-row text-white text-2xl text-center font-bold">
                    Selecciona un perfil
                </Text>
                <View className='flex flex-row justify-center'>
                    {profiles.map((profile) => (
                        <View className='m-6'>
                            <SvgUri
                                width="100"
                                height="100"
                                uri={profile.avatar}
                        />
                            <Text className='text-center text-lg text-secondary font-bold'>{ profile.name }</Text>
                        </View>  
                    ))}
                </View>

            </View>

            <View className='mt-4'>
                <Button
                    text='Agregar otro niño'
                    isSecondary
                    onPress={addChild}
                />
                <Image
                    className='absolute inset-y-4 right-5'
                    source={require('../assets/icons/UserCircle.png')}
                    style={{ width: 30, height: 30 }}
                />
            </View>
            <View className='mt-4'>
                <Button
                    text='Continuar'
                    onPress={next}
                />
            </View>
        </View>
        
    );
};

export default withExpoSnack(SelectProfile);
