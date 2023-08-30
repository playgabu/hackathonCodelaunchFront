import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, NativeModules, Platform, DeviceEventEmitter } from 'react-native';
import Title from '../components/Title'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';
import axiosInstance from '../utils/axiosInstance';
import TitleBig from '../components/TitleBig';

import DailyInstance from '../utils/dailyInstance';

const events = [
    'participant-joined',
    'participant-updated',
    'participant-left',
]

Games = {
	roblox: 0,
	minecraft: 1,
	fortnite: 2,
	fallGuys: 3,
}

var call;



const GameSessionRoom = ({route}) => {
    const {sessionId} = route.params;
    const [modalVisible, setModalVisible] = useState(true);
    const [session, setSession ] = useState(null)
    const navigation = useNavigation();
    const getSession = async () => {
        try {
            var response = await axiosInstance.get("gameSession/"+sessionId)
            setSession(response.data)
            console.log("🚀 ~ file: GameSessionRoom.jsx:26 ~ getSession ~ response.data:", response.data)
        }
        catch(error){
            console.log("🚀 ~ file: GameSessions.jsx:23 ~ getSessions ~ error:", JSON.stringify(error))

        }
    }


    const endCall = async () => {
        await call.leave();
        await call.destroy();
        let dailyInstance = DailyInstance.getInstance()
        dailyInstance.setCallState(false)
        dailyInstance.finishCall()
    }

    const muteUnmute = async (curLocalAudio) => {
        call.setLocalAudio(!curLocalAudio)
    }

    const microphoneTouched = () => {
        let curLocalAudio = call.localAudio()
        NativeModules.RNGabuWidgetModule.setAudio(!curLocalAudio)
        muteUnmute(curLocalAudio)
    }

    const signoutTouched = async () => {
        console.log("signOut touched")
        endCall()
    }

    const openWidget = async () => {
        NativeModules.RNGabuWidgetModule.start()
    }

    useEffect(() => {
        let dailyInstance = DailyInstance.getInstance()
        call = dailyInstance.getCall()
        console.log("🚀 ~ file: GameSessionRoom.jsx:80 ~ useEffect ~ call:", call)
        getSession().then()
        if(Platform.OS === 'android'){
            DeviceEventEmitter.addListener("microphoneTouched", microphoneTouched)
            DeviceEventEmitter.addListener("signoutTouched", signoutTouched)
        }
    }, []);

    const cancel = ()=>{
        setModalVisible(false)
        navigation.navigate('Home')
    }

    const join = async () => {
        await call.join({ url: session.sessionUrl,
        startVideoOff: true,
        userName: "DiegoSonic",
        videoSource: false,
        reactNativeConfig: {
            androidInCallNotification:
            {
                title: "GABU - Coach: "+ session.coach,
                subtitle: Object.keys(Games).find(key => Games[key] === session.game).toLocaleUpperCase()
            }
        }
         })
        let enumDevices = await call.enumerateDevices();
        console.log("🚀 ~ file: GameSessionRoom.jsx:104 ~ join ~ devices:", enumDevices)
        if(enumDevices.devices.some(device => device.deviceId === "WIRED_OR_EARPIECE"))
            await call.setAudioDevice("WIRED_OR_EARPIECE")
        else
            await call.setAudioDevice("SPEAKERPHONE")
        console.log("🚀 ~ file: GameSessionRoom.jsx:110 ~ join ~ Platform.OS:", Platform.OS)
        let dailyInstance = DailyInstance.getInstance()
        dailyInstance.setCallState(true)
        if(Platform.OS === 'android')
            await openWidget()
    }



    return (
        <View className="flex w-screen h-screen bg-white flex-1" >
            <Modal animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                <View className='flex-1 justify-center content-center align-middle '>
                    <View className='m-4 bg-white border-2 border-primary rounded-2xl'>
                        <View className='mt-6 mx-4 mb-6'>
                            <Text className='text-black text-2xl font-bold'>¡Solicitud para unirse!</Text>
                            <Text className='text-black text-xl'>Te uniras a la sala</Text>
                        </View>
                        <View className='flex flex-row w-auto mb-6 items-center bg-red-300' >
                            <View className='basis-1/12 bg-white h-12'></View>
                            <TouchableOpacity className="basis-4/12 w-32 h-12 bg-primary border-gray-500 align-middle items-center" onPress={cancel}>
                                <Text className='text-white text-2xl font-bold'>Cancelar</Text>
                            </TouchableOpacity>
                            <View className='basis-2/12 bg-white h-12'></View>
                            <TouchableOpacity className="basis-4/12 w-32 h-12 bg-primaryLighter border-gray-500 align-middle items-center" onPress={join}>
                                <Text className='text-white text-2xl font-bold'>Unirse</Text>
                            </TouchableOpacity>
                            <View className='basis-1/12 bg-white h-12'></View>
                        </View>
                    </View>
                </View>
            </Modal>
            <TitleBig
            titleLine1="Salas de"
            titleLine2={"Coach "+ session?.coach}
            ></TitleBig>

        </View>
    );
};

export default GameSessionRoom;
