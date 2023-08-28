
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';


const Main = ({ navigation }) => {
    const [showLogin, setShowLogin] = useState(false)
    const translateY = new Animated.Value(0);
    const opacity = useState(new Animated.Value(0))[0]

    const StyledView = styled(View)
    const StyledText = styled(Text)
    const StyledTouchableOpacity = styled(TouchableOpacity)

    useEffect(() => {
        const timer = setTimeout(() => {
            // navigation.navigate('Login');
            setShowLogin(true);
            handleTransition();
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    useEffect(() => {
        if (showLogin) {
            Animated.timing(translateY, {
                toValue: -200,
                duration: 300,
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
            duration: 1000,
            useNativeDriver: true,
        }).start();
    };

    const openTerminos = () => {
        console.log('Open Terminos')
    }

    const openPrivacidad = () => {
        console.log('Open Privacidad')
    }

    return (
        <StyledView className="flex w-screen h-screen bg-primaryLighter flex-1 items-center justify-center p-2" >
            <Animated.View style={[{position:'absolute', transform: [{ translateY }] }]}>
                <StyledView className='flex flex-row justify-center mx-4'>
                    <Image
                        className='flex w-100'
                        style={{ width: 155, height: 62 }}
                        source={require('../assets/gabu_logo.png')}
                    />
                </StyledView>
                <StyledText className="flex flex-row text-white text-2xl text-center font-bold">Donde los niños juegan y se divierten seguros</StyledText>
            </Animated.View>

            {showLogin ? (
                <Animated.View style={[{ opacity }]} className='flex w-screen h-100 mx-2 pt-80'>
                    <StyledView className='flex w-100 m-2 p-2'>
                        <StyledText className="flex flex-row bg-secondary border-solid border-2 text-black text-xl font-extrabold shadow-xl text-center rounded-xl ma-5 p-4"> Registrarme</StyledText>
                    </StyledView>
                    <StyledView className='flex w-100 m-2 p-2'>
                        <StyledText
                            className="flex flex-row bg-primary text-secondary text-xl font-bold text-center rounded-xl ma-5 p-4"
                        >
                            Ingresar
                        </StyledText>
                    </StyledView>
                    <StyledView className="flex flex-row justify-center w-100 px-10 py-10">
                        <StyledTouchableOpacity
                            className="text-black text-center mx-5"
                            onPress={openTerminos()}
                        >
                            <StyledText className='text-lg font-bold text-secondary text-decoration-line: underline'>
                                Terminos
                            </StyledText>
                        </StyledTouchableOpacity>
                        <StyledTouchableOpacity
                            className="text-black text-center mx-5"
                            onPress={openPrivacidad()}
                        >
                            <StyledText className='text-lg font-bold text-secondary text-decoration-line: underline'>
                                Privacidad
                            </StyledText>
                        </StyledTouchableOpacity>
                    </StyledView>
                </Animated.View>
            ) : (
                    <StyledView></StyledView>
                )
            }
        </StyledView>
        
    );
};

export default withExpoSnack(Main);
