import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const TextInpput = (props) => {
    const {
        onChange,
        value,
    } = props

    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleDigitChange = (index, value) => {
        if (value.length === 1 && index < 3) {
            inputRefs[index + 1].current.focus();
        }
    };

    return (
        <View className='flex flex-row justify-center w-100'>
            <TextInput
                className='text-2xl font-bold px-4 m-2 border-2'
                onChangeText={onChange}
                inputMode='numeric'
                placeholder='0'
                value={value || 0}
            />
            <TextInput
                className='text-2xl font-bold px-4 m-2 border-2'
                onChangeText={onChange}
                inputMode='numeric'
                placeholder='0'
                value={value || 0}
            />
            <TextInput
                className='text-2xl font-bold px-4 m-2 border-2'
                onChangeText={onChange}
                inputMode='numeric'
                placeholder='0'
                value={value || 0}
            />
            <TextInput
                className='text-2xl font-bold px-4 m-2 border-2'
                onChangeText={onChange}
                inputMode='numeric'
                placeholder='0'
                value={value || 0}
            />
        </View>
    )
}

export default TextInpput;