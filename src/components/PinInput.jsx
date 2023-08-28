import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

const TextInpput = (props) => {
    const {
        handleValue
    } = props

    let pinValue = ''
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    const handleDigitChange = (index, value) => {
        if (value.length === 1) {
            if (index < 3) {
                inputRefs[index + 1].current.focus();
            }
        } else {
            if (index > 0) {
                inputRefs[index - 1].current.focus();
            }
        }
        
        pinValue = pinValue.substring(0, index) + value + pinValue.substring(index + 1);
        handleValue(pinValue)
    };

    return (
        <View className='flex flex-row justify-center w-100'>
            <TextInput
                ref={inputRefs[0]}
                className='text-5xl font-bold py-1 px-5 m-3 border-2'
                onChangeText={value => handleDigitChange(0, value)}
                inputMode='numeric'
                maxLength={1}
                placeholder='0'
            />
            <TextInput
                ref={inputRefs[1]}
                className='text-5xl font-bold py-1 px-5 m-3 border-2'
                onChangeText={value => handleDigitChange(1, value)}
                maxLength={1}
                inputMode='numeric'
                placeholder='0'
            />
            <TextInput
                ref={inputRefs[2]}
                className='text-5xl font-bold py-1 px-5 m-3 border-2'
                onChangeText={value => handleDigitChange(2, value)}
                maxLength={1}
                inputMode='numeric'
                placeholder='0'
            />
            <TextInput
                ref={inputRefs[3]}
                className='text-5xl font-bold py-1 px-5 m-3 border-2'
                onChangeText={value => handleDigitChange(3, value)}
                maxLength={1}
                inputMode='numeric'
                placeholder='0'
            />
        </View>
    )
}

export default TextInpput;