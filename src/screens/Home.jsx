import React from "react";
import NextGame from "../components/NextGame";
import AvailableGame from "../components/AvailableGame";
import { withExpoSnack } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

import { Text, View, StyleSheet,Button, Pressable, Image, ImageBackground,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create(
  {
    center: {
      alignItems: 'center',
    },
    homeTitle : {
      flexDirection: 'row',
    },
    profileButton: {
      borderRadius: 100
    },
    buttonHeader: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 9,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "rgba(0, 122, 255, 1)",
      elevation: 3,
      backgroundColor: 'white',
      fontSize: 15,
      color: "rgba(0, 122, 255, 1)",
    },
    buttonText : {
      fontSize: 15,
      color: "rgba(0, 122, 255, 1)",
    },
    headerText : {
      color: "rgba(0, 0, 0, 1)",
      fontSize: 32,
      fontWeight: "700"

    },
    pictureContainer: {
      padding: 2.5,
      backgroundColor: 'rgba(75, 211, 123, 1)',
      width: 55,
      height: 55,
    },
    coachPictureContainer: {
      padding: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      width: 30,
      height: 30,
      borderRadius: 9999
    },
    red: {
      backgroundColor: 'red',
      width: 59,
      height: 20,
      borderRadius: 5,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    nextGameContainer : {
      borderRadius: 20,
      backgroundColor: "rgba(101, 98, 243, 1)",
      color: 'white',
      height: 58,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding:10
    }

  }
);




const ProfilePictureCircle = ({uri, userName}) => {
  return (
    <View className="flex-1 flex-row flex-wrap flex-start">
       <View className="rounded-full" style={styles.pictureContainer}>
          <Image
            className="rounded-full"
            style={styles.tinyLogo}
            source={{
              uri: uri
            }}>  
          </Image>
        </View>
        <Text className="p-3 text-base text-primary font-bold">
          {userName}
        </Text>
    </View>
    
  );
}

const KidProfileButton = props => {
  const navigation = useNavigation();

  const goToKidProfile = () => {
    navigation.navigate('KidProfile')
  }

  return (
    <Pressable
      onPress={goToKidProfile}>
      <ProfilePictureCircle 
        uri="https://reactnative.dev/img/tiny_logo.png"
        userName="DiegoSonic"/>
    </Pressable>
  );
};

const HomeHeader = props => {
  const navigation = useNavigation();

  const goToDadProfile = () => {
    navigation.navigate('DadProfile')
  }
  
  return (
    <View style={{flex: 1, flexDirection: 'row'}}  className="pt-4 pb-4" >
      <View className="w-6/12 items-start">
        <Text className="text-black text-2xl font-bold">Home</Text>
      </View>
      <View className="border-blue-600 w-6/12 items-end">
        <Pressable style={styles.buttonHeader} onPress={goToDadProfile}>
          <Text className="text-blue-600 text-s">
            Perfil papá
          </Text>
        </Pressable>
      </View>
    </View>
  );

}

const Home = props => {
  const today = new Date();

  return (
    <ScrollView>
      <View className="p-5">
        <View>
          <HomeHeader name="test"/>
        </View>
        
        <View><KidProfileButton/></View>
        <Text className="pt-2 text font-bold text-xl text-black">
          Play with us
        </Text>

        {/*We can use a for cicle later to view all the available Games*/}
        <AvailableGame
          coachName={"Javi"}
          coachUri="https://reactnative.dev/img/tiny_logo.png"
          imageBg="https://prod.docsiteassets.roblox.com/assets/avatar/character-customization/Avatar-Banner.jpg"
          gameName={"Roblox: Murder Mystery 2"}
          gameDate={today}/>

        <Text className="pt-2 text font-bold text-xl text-black">
          Después
        </Text>

        <NextGame
          gameUri="https://prod.docsiteassets.roblox.com/assets/avatar/character-customization/Avatar-Banner.jpg"
          gameName={"Minecraft"}
          coachName={"Kim"}
          gameDate={today}></NextGame>
      </View>
    </ScrollView>
    
  );
};

export default withExpoSnack(Home);
