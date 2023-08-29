
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button'


const SelectProfile = () => {
    const profiles = [
        { name: 'DiegoSonic', avatar: 'https://source.boringavatars.com/beam/120/avatar1?colors=7B97FF,9F76F5,FF6A65,FFC73B'},
        { name: 'Samantix', avatar: 'https://source.boringavatars.com/beam/120/avatar2?colors=7B97FF,9F76F5,FF6A65,FFC73B'},
    ]

    const addChild = () => {
        console.log('addChild')
    }

    const next = () => {
        console.log('next')
    }
    return (
        <View className="flex w-screen h-screen bg-primaryLighter flex-1 items-center justify-center p-2" >
            <View className='text-center'>
                <View className='flex flex-row justify-center mx-4'>
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
                <View>
                    {profiles.map((profile) => (
                        <View>
                            <SvgUri
                                width="50"
                                height="50"
                                uri={profile.avatar}
                        />
                        <Text>{ profile.name }</Text>
                        </View>  
                    ))}
                </View>

            </View>

            <View className='mt-4'>
                <Button
                    text='Agregar otro niño'
                    onPress={addChild}
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
