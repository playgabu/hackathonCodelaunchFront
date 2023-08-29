import React, { useState } from 'react';
import WhiteButton from '../components/WhiteButton';
import NavigationToolbar from '../components/NavigationToolbar';
import { Text, View, StyleSheet, Image, ImageBackground,ScrollView} from 'react-native';


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
    tinyLogo: {
      width: 70,
      height: 70,
    },
    pictureContainer: {
      padding: 2.5,
      backgroundColor: 'rgba(75, 211, 123, 1)',
      width: 75,
      height: 75,
    },

  }
);


const ProfileImage = ({imageUri, name}) => {
  return(
    <View className="flex-1 flex-col flex-wrap flex-start">
       <View className="rounded-full" style={styles.pictureContainer}>
          <Image
            className="rounded-full"
            style={styles.tinyLogo}
            source={{
              uri: imageUri
            }}>  
          </Image>
        </View>
        <Text className="p-3 text-base text-primary font-bold">
          {name}
        </Text>
    </View>
  )
}

const DadsProfile = () => {
   const [userInfo, setUserInfo ] = useState(
    {
      name: 'Aldo Guzman',
      email: 'correosonic@gmai.com',
      imageUri : "https://reactnative.dev/img/tiny_logo.png",
      kids: [
        {
          name: 'DiegoSonic',
          imageUrl: "https://reactnative.dev/img/tiny_logo.png",
        },
        {
          name: 'Samantix',
          imageUrl: "https://reactnative.dev/img/tiny_logo.png",
        }
      ]
    }
   )
  
  
  return (
    <View style={{ flex: 1}}>
      <ScrollView className=' h-50'>
        <View className="flex flex-col">
          <View className="w-full h-60 flex flex-col mb-12">
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
                            uri: userInfo.imageUri
                          }}>
                        </Image>
                      </View>
                    </View>
                  </View>
                  <View style={styles.center}>
                    <Text className="text-base font-bold pt-1 text-black">{userInfo.name}</Text>
                  </View>
                  <View style={styles.center}>
                    <Text className="text-base pt-1 text-primary">{userInfo.email}</Text>
                  </View>
                  <View style={styles.center}>
                    <WhiteButton text={'Editar Perfil'}></WhiteButton>
                  </View>
                </View>
                
            </ImageBackground>
          </View>
          <View className="p-4" style={{paddingTop:100}}>
            <Text className="text-black text-xl font-bold">Mis hijos</Text>
            <View style={{flexDirection:'row', ...styles.center, paddingLeft:50, paddingTop:50}}>
              {
                userInfo.kids.map((kid,idx) => {
                  return <ProfileImage key={idx} imageUri={kid.imageUrl} name={kid.name}></ProfileImage>
                })
              }
              </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <NavigationToolbar current={'Profile'}></NavigationToolbar>
      </View>
    </View>
  );
}

export default DadsProfile;