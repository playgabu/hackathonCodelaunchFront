import React from "react";
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { Text, View, StyleSheet,Button, Pressable, Image, ImageBackground,ScrollView } from 'react-native';

const styles = StyleSheet.create(
  {
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


const NextGame = ({gameUri, gameName, coachName, gameDate}) => {
  const dateArrays = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  const dateName = dateArrays[gameDate.getDay()]

  const getHoursText = (date) => {
    
    let timeHour = ' AM';
    if(date.getHours() >= 12)
    {
      timeHour = ' PM'
    }

    return date.getHours() + ':' + gameDate.getMinutes() + timeHour;
  }

  return (
    <View className="bg-primary" style={styles.nextGameContainer}>
      <View style={{paddingRight:10}}>
        <Image
          className="rounded-full"
          style={{height:35, width:35}}
          source={{
            uri: gameUri
          }}>
        </Image>
      </View>
      <View style={{flexDirection:'column', justifyContent: 'flex-start'}}>
        <Text style={{color:'white', fontWeight: "700"}}>{gameName}</Text>
        <Text style={{color:'white'}}>Coach {coachName}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
          <View style={{flexDirection:'column', justifyContent: 'flex-start'}}>
          <Text style={{color:'white'}}>{dateName}</Text>
          <Text style={{color:'white'}}>{getHoursText(gameDate)}</Text>
        </View>
      </View>
    </View>
  );
}

export default NextGame;