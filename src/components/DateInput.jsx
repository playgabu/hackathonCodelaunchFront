import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import DatePicker from 'react-native-date-picker'
import { SvgUri } from 'react-native-svg'

const DateInput = (props) => {
    const {
        label,
        placeholder,
        error,
        isRequired,
        onChange
    } = props

    const [date, setDate] = useState(null)
    const [open, setOpen] = useState(false)

    const onKeyPress = () => {
        console.log('Presionado')
        setOpen(true)
    }

    return (
        <View className='w-100'>
            <Text className="text-md font-bold">
                {label || ''}{isRequired && '*'}
            </Text>
            <View className='flex flex-row'>
                <TextInput
                    className='flex-1 h-12 p-2 rounded-lg border-2 bg-gray-200'
                    placeholder={placeholder || ''}
                    inputMode='text'
                    onPressOut={onKeyPress}
                    defaultValue=''
                    value={date ? date.toDateString() : ''}
                />
                <Image
                    className='absolute inset-y-2 right-2'
                    source={require('../assets/icons/Calendar.png')}
                    style={{ width: 30, height: 30 }}
                />
            </View>
                <DatePicker
                    modal
                    open={open}
                    mode='date'
                    date={date || new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        onChange(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            <Text className='text-red-500 mb-2'>
                {error || ''}
            </Text>
        </View>
    )
}

export default DateInput;