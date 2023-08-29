import { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const Picker = (props) => {
    const {
        label,
        onChange,
        options,
        error,
        isRequired
    } = props

    return (
        <View className=''>
            <Text className="text-md font-bold">
                {label || ''}{isRequired && '*'}
            </Text>
            <ModalDropdown
                className='bg-gray-200-100 text-xl text-black p-3 rounded-lg border-2'
                textStyle={{ fontSize: 16 }}
                style={{ backgroundColor: '#f3f4f6' }} 
                isFullWidth
                dropdownTextStyle={{ fontSize: 16 }}
                dropdowntyle={{ width: '100%' }}
                defaultValue='Selecciona'
                onSelect={onChange}
                options={options}
            />
            <Image
                className='absolute inset-y-9 right-2'
                style={{ width: 15, height: 15 }}
                source={require('../assets/icons/DropArrow.png')}
            />
            <Text className='text-red-500 mb-2'>
                {error || ''}
            </Text>
        </View>
    )
}

export default Picker;