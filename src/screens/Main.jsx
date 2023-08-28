
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button'


const Main = () => {
    const [showLogin, setShowLogin] = useState(false)
    const translateY = new Animated.Value(0);
    const opacity = useState(new Animated.Value(0))[0]
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
            handleTransition();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (showLogin) {
            Animated.timing(translateY, {
                toValue: -200,
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [showLogin]);

    const handleTransition = () => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const login = () => {
        navigation.navigate('Login')
    }

    const signin = () => {
        // navigation.navigate('Signin')
        console.log('signin')
    }

    const openTerminos = () => {
        console.log('Open Terminos')
    }

    const openPrivacidad = () => {
        console.log('Open Privacidad')
    }

    return (
        <View className="flex w-screen h-screen bg-primaryLighter flex-1 items-center justify-center p-2" >
            <Animated.View style={[{position:'absolute', transform: [{ translateY }] }]}>
                <View className='flex flex-row justify-center mx-4'>
                    <Image
                        className='flex w-100'
                        style={{ width: 155, height: 62 }}
                        source={require('../assets/gabu_logo.png')}
                    />
                </View>
                <Text className="flex flex-row text-white text-2xl text-center font-bold">
                    Donde los niños juegan y se divierten seguros
                </Text>
            </Animated.View>

            {showLogin ? (
                <Animated.View style={[{ opacity }]} className='flex w-screen h-100 mx-2 pt-80'>
                    <View className='flex w-100 m-2 p-2'>
                        <Button
                            text='Registrarme'
                            isSecondary
                            onPress={login}
                        />
                    </View>
                    <View className='flex w-100 m-2 p-2'>
                        <Button
                            text='Ingresar'
                            onPress={login}
                        />
                    </View>
                    <View className="flex flex-row justify-center w-100 px-10 py-10">
                        <TouchableOpacity
                            className="text-black text-center mx-5"
                            onPress={openTerminos}
                        >
                            <Text className='text-lg font-bold text-secondary text-decoration-line: underline'>
                                Terminos
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="text-black text-center mx-5"
                            onPress={openPrivacidad}
                        >
                            <Text className='text-lg font-bold text-secondary text-decoration-line: underline'>
                                Privacidad
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            ) : (
                    <View></View>
                )
            }
        </View>
        
    );
};

export default withExpoSnack(Main);
