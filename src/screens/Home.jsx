import React from "react";
import NextGame from "../components/NextGame";
import AvailableGame from "../components/AvailableGame";
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { Text, View, StyleSheet,Button, Pressable, Image, ImageBackground,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const StyledView = styled(View)
const StyledText = styled(Text)
const StyledButton = styled(Button)
const StyledImages = styled(Image)


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
    <StyledView className="flex-1 flex-row flex-wrap flex-start">
       <StyledView className="rounded-full" style={styles.pictureContainer}>
          <StyledImages
            className="rounded-full"
            style={styles.tinyLogo}
            source={{
              uri: uri
            }}>  
          </StyledImages>
        </StyledView>
        <StyledText className="p-3 text-base text-primary font-bold">
          {userName}
        </StyledText>
    </StyledView>
    
  );
}

const KidProfileButton = props => {
  return (
    <StyledView>
      <ProfilePictureCircle 
        uri="https://reactnative.dev/img/tiny_logo.png"
        userName="DiegoSonic"/>
    </StyledView>
  );
};

const HomeHeader = props => {
  return (
    <StyledView className="flex-1 flex-row pt-4 pb-4" >
      <StyledView className="w-6/12 items-start">
        <StyledText className="text-black text-2xl font-bold">Home</StyledText>
      </StyledView>
      <StyledView className="border-blue-600 w-6/12 items-end">
        <Pressable style={styles.buttonHeader}>
          <StyledText className="text-blue-600 text-s">
            Perfil papá
          </StyledText>
        </Pressable>
      </StyledView>
    </StyledView>
  );

}

const Home = props => {
  const today = new Date();

  return (
    <ScrollView>
      <StyledView className="p-5">
        <StyledView className="">
          <HomeHeader name="test"/>
        </StyledView>
        
        <StyledView><KidProfileButton/></StyledView>
        <StyledText className="pt-2 text font-bold text-xl text-black">
          Play with us
        </StyledText>

        {/*We can use a for cicle later to view all the available Games*/}
        <AvailableGame
          coachName={"Javi"}
          coachUri="https://reactnative.dev/img/tiny_logo.png"
          imageBg="https://prod.docsiteassets.roblox.com/assets/avatar/character-customization/Avatar-Banner.jpg"
          gameName={"Roblox: Murder Mystery 2"}
          gameDate={today}/>

        <StyledText className="pt-2 text font-bold text-xl text-black">
          Después
        </StyledText>

        <NextGame
          gameUri="https://prod.docsiteassets.roblox.com/assets/avatar/character-customization/Avatar-Banner.jpg"
          gameName={"Minecraft"}
          coachName={"Kim"}
          gameDate={today}></NextGame>
      </StyledView>
    </ScrollView>
    
  );
};

export default withExpoSnack(Home);

