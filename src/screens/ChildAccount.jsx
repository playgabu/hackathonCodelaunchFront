import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, Text, Modal } from 'react-native';
import {SvgUri} from 'react-native-svg'
import Title from '../components/Title'
import TextInput from '../components/TextInput'
import DateInput from '../components/DateInput'
import Picker from '../components/Picker'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';

const ChildAccount = () => {
    const [accountData, setAccountData ] = useState({
        name: '',
        birthdate: '',
        phone: '',
        email: '',
        password: ''
    })
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleAvatarSelection = (avatar) => {
        setSelectedAvatar(avatar);
        toggleModal();
    };

    
    const handleData = (e) => {
        console.log(e)
        setAccountData({
            ...accountData, [e.field]: e.value
        })
    }

    const registerMe = () => {
        navigation.navigate('SecureProfile')
    }

    const next = () => {
        navigation.navigate('SelectProfile')
    }
    
    const gender = ['Niño', 'Niña']
    const games = ['Juego 1','Juego 2','Juego 3'];

    const avatars = [
        'https://source.boringavatars.com/beam/120/avatar1?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar2?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar3?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar4?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar5?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar6?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar7?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar8?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar9?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar10?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar11?colors=7B97FF,9F76F5,FF6A65,FFC73B',
        'https://source.boringavatars.com/beam/120/avatar12?colors=7B97FF,9F76F5,FF6A65,FFC73B'
    ]

    return (
        <View className="flex flex-col w-screen h-screen flex-1 p-6">
            <View className='text-center'>
                <Image
                    className='flex w-100'
                    style={{ width: 83, height: 33 }}
                    source={require('../assets/gabu_logo_colored.png')}
                />
                <View className='mt-12 mb-6'>
                    <Title>Crea un perfil para tu hijo</Title>
                </View>
            </View>
            <View className='flex text-center justify-center flex-grow'>
                <View className='flex flex-row my-4 w-100'>
                    <SvgUri
                        width="50"
                        height="50"
                        uri={selectedAvatar}
                    />
                    <TouchableOpacity
                        className='flex justify-center'
                        onPress={toggleModal}
                    >
                        <View className='flex flex-row h-100 w-100'>
                            <Text className='flex text-md font-bold text-black mx-2'>
                                Seleccionar Avatar
                            </Text>
                            <Image
                                className='flex h-100'
                                style={{ width: 15, height: 15 }}
                                source={require('../assets/icons/DropArrow.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>

                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={modalVisible}
                        onRequestClose={toggleModal}
                    >
                        <View className='flex bg-secondary rounded-3xl w-scren h-50 m-8 p-8'>
                            <Text className='font-bold text-xl text-black p-2'>Selecciona un avatar</Text>
                            <FlatList
                                data={avatars}
                                numColumns={3}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleAvatarSelection(item)}
                                    >
                                        <SvgUri
                                            className='m-2'
                                            width='80'
                                            height='80'
                                            uri={item}
                                        />
                                    </TouchableOpacity>
                                )}
                            >
                            </FlatList>
                            <TouchableOpacity onPress={toggleModal}>
                                <Text className='text-center text-black text-lg font-bold'>Cerrar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
                <TextInput
                    label='Nombre de usuario'
                    onChange={e => handleData({ value: e, field: 'name' })}
                    placeholder='Nombre completo'
                    value={accountData?.name || ''}
                    isRequired
                />
                <DateInput
                    label='Fecha de nacimiento'
                    placeholder='Fecha'
                    onChange={e => handleData({ value: e, field: 'name' })}
                ></DateInput>

                <Picker
                    label='Género (opcional)'
                    options={gender}
                    onChange={(e)=>console.log(e)}
                />
                <Picker
                    label='Juegos favoritos'
                    options={games}
                    onChange={(e)=>console.log(e)}
                />
            </View>
            <View className='mt-4'>
                <Button
                    text='Agregar otro niño'
                    isSecondary
                    onPress={registerMe}  
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

export default ChildAccount;
