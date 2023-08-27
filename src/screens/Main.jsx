
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styled } from 'nativewind';
import { withExpoSnack } from 'nativewind';


const Main = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            // navigation.navigate('Login');
            setShowLogin(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    const [showLogin, setShowLogin] = useState(false)

    const StyledView = styled(View)
    const StyledText = styled(Text)
    const StyledButton = styled(Button)
    const StyledImages = styled(Image)

    const openTerminos = () => {
        console.log('Open Terminos')
    }

    const openPrivacidad = () => {
        console.log('Open Privacidad')
    }

    return (
        <StyledView className="w-screen h-screen bg-primaryLighter flex-1 items-center justify-center p-2">
            <StyledImages
                source={require('../assets/gabu_logo.svg')}
                style={{ width: 200, height: 200 }}
            />
            <StyledText className="text-white text-2xl text-center font-bold">Donde los niños juegan y se divierten seguros</StyledText>

            {showLogin &&
                <View>
                    <StyledText className="bg-primary shadow-xl"> Registrarme</StyledText>
                    <StyledText className="bg-primary text-secondary shadow-xl"> Ingresar</StyledText>
                    <View className="flex">
                        <StyledButton
                            className="bg-secondary text-black rounded-lg p-5"
                            onPress={openTerminos()}
                            title="Terminos"
                        />
                        <StyledButton
                            className="bg-primary text-white"
                            onPress={openPrivacidad()}
                            title="Privacidad"
                        />
                    </View>
                </View>
            }
        </StyledView>
        
    );
};

export default withExpoSnack(Main);
