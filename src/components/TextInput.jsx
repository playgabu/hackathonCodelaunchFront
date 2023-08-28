import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const TextInpput = (props) => {
    const {
        label,
        onChange,
        value,
        placeholder,
        inputMode = 'text',
        isPassword,
        error,
        isRequired
    } = props

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View className='w-100'>
            <Text className="text-md font-bold">
                {label || ''}{isRequired && '*'}
            </Text>
            <View className='flex flex-row'>
                <TextInput
                    className='flex-1 h-12 p-2 rounded-lg border-2'
                    onChangeText={onChange}
                    placeholder={placeholder || ''}
                    inputMode={inputMode}
                    secureTextEntry={!isPasswordVisible} 
                    value={value || ''}
                />
                {isPassword && (
                    <TouchableOpacity onPress={togglePasswordVisibility} className='absolute inset-y-2 right-2'>
                        <Image
                            source={require('../assets/icons/Eye.png')}
                            style={{ width: 30, height: 30 }}
                        />

                    </TouchableOpacity>
                )}
            </View>
            <Text className='text-red-500 mb-2'>
                {error || ''}
            </Text>
        </View>
    )
}

export default TextInpput;