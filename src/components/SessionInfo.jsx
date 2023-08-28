import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground,ScrollView } from 'react-native';


const styles = StyleSheet.create(
  {
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
    }

  }
);

const SessionInfo = ({coachUri, coachName, gameInfo}) => {

  const dateText = (date) => {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(); 
  }

  const getSessionDuration = (sessionInfo) => {
    var diff =(sessionInfo[0].getTime() - sessionInfo[1].getTime()) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff));
  }
  
  return (
    <View className="flex flex-row mt-2 mb-2">
      <View style={{padding:5}}>
        <View className="rounded-full" style={styles.coachPictureContainer}>
          <Image
            className="rounded-full"
            style={{height:27, width:27}}
            source={{
              uri: coachUri
            }}>
          </Image>
        </View>
      </View>
      <View className="flex flex-colum">
        <Text className="text-base font-medium text-black">
          {getSessionDuration(gameInfo)} minutos con Coach {coachName}
        </Text>
        <Text style={{color:"rgba(151, 151, 151, 1)"}}>
          {dateText(gameInfo[0])}
        </Text>
      </View>
    </View>
  );
}

export default SessionInfo;