import React from "react";
import SessionInfo from "../components/SessionInfo";
import NavigationToolbar from "../components/NavigationToolbar";


import { Text, View, StyleSheet, Image, ImageBackground,ScrollView } from 'react-native';
const styles = StyleSheet.create(
  {
    coachPictureContainer: {
      padding: 3,
      backgroundColor: 'rgba(75, 211, 123, 1)',
      width: 105,
      height: 105,
      borderRadius: 9999
    },
    red: {
      backgroundColor: 'red',
      width: 59,
      height: 20,
      borderRadius: 5,
    },
    center: {
      justifyContent: 'center',
      alignItems:'center'
    },
    image: {
      flex: 6,
      justifyContent: 'center',
    },

  }
);

const KidProfile = () => {
  const coachName = 'Javi'
  const today = new Date();
  const endSession = new Date();
  const startSession = new Date(new Date().setHours(today.getHours() - 2))

  const gameInfo = [ startSession, endSession]
  return(
    <View style={{ flex: 1}}>
      <ScrollView>
      <View className="flex flex-col">
        <View className="w-full h-52 flex flex-col mb-12">
          <ImageBackground
            resizeMode="cover"
            style={styles.image}
            source={
              require('../assets/ProfileHeadImage.png')
            }>
              <View style={{position:'relative', top: 50}}>
                <View style={{ ...styles.center}}>
                  <Text className="text-white text-xl font-bold">Mi Perfil</Text>
                </View>
                <View style={styles.center}>
                  <View style={{flexDirection: 'row'}} className="pt-4">
                    <View className="rounded-full" style={styles.coachPictureContainer}>
                      <Image
                        className="rounded-full"
                        style={{height:100, width:100}}
                        source={{
                          uri: "https://reactnative.dev/img/tiny_logo.png"
                        }}>
                      </Image>
                    </View>
                  </View>
                </View>
                <View style={styles.center}>
                  <Text className="text-base font-bold pt-1 text-black">DiegoSonic</Text>
                </View>
                <View style={styles.center}>
                  <Text className="text-base pt-1 text-primary">Hijo de {"Aldo German"}</Text>
                </View>
              </View>
              
          </ImageBackground>
        </View>
        

        <View className="p-4" style={{paddingTop:100}}>
          <Text className="text-black text-xl font-bold">Mis sesiones</Text>
          <SessionInfo
            coachUri="https://reactnative.dev/img/tiny_logo.png"
            gameInfo={gameInfo}
            coachName={coachName}
          ></SessionInfo>
          <SessionInfo
            coachUri="https://reactnative.dev/img/tiny_logo.png"
            gameInfo={gameInfo}
            coachName={coachName}
          ></SessionInfo>
          <SessionInfo
            coachUri="https://reactnative.dev/img/tiny_logo.png"
            gameInfo={gameInfo}
            coachName={coachName}
          ></SessionInfo>
        </View>

      </View>
    </ScrollView>
    <View >
        <NavigationToolbar
          current={'Profile'}>

        </NavigationToolbar>
      </View>
    </View>
    
    
  );
}

export default KidProfile;