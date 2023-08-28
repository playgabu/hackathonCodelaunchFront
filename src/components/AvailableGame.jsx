import React from "react";

import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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


const AvailableGame = ({imageBg, coachName, coachUri, gameName, gameDate}) => {

  const getHoursText = (date) => {
    let timeHour = ' AM';
    if(date.getHours() >= 12)
    {
      timeHour = ' PM'
    }

    return date.getHours() + ':' + gameDate.getMinutes() + timeHour;
  }

  const image = {uri: imageBg};

  return (
    <View className={"rounded-[30px] w-full h-52 overflow-hidden"}>
      <ImageBackground
        style={{height:"100%"}}
        source={image}>
          <View
            style={{height:"100%", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
            <View 
              className="pr-5 pt-5"
              style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <View style={styles.red} className="">
                <Text className="text-center text-secondary">¡En Vivo!</Text>
              </View>
            </View>
            <View style={{bottom: 50, position: 'absolute', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', paddingLeft: 20}}>
                <View className="rounded-full" style={styles.coachPictureContainer}>
                  <Image
                    className="rounded-full"
                    style={{height:27, width:27}}
                    source={{
                      uri: coachUri
                    }}>
                  </Image>
                </View>
                <View className="pl-1">
                  <Text style={{color:'white', fontSize: 16, fontWeight:500}}>Coach {coachName}</Text>
                </View>
              </View>
            </View>

            <LinearGradient
              start={{x: 0.0, y: 0.25}} 
              end={{x: 0.5, y: 1.0}}
              locations={[0,0.5]}
              colors={['rgba(101, 98, 243, 0.3)', 'rgba(154, 152, 207 ,0.5)']}
              style={{height: 42, bottom: 0, position: 'absolute', justifyContent: 'center', width:'100%', flexDirection:'column'}}>
                <View style={{padding:10, flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <View>
                    <Image
                      style={{height:20, width:20}}
                      source={
                        require('../assets/icons/controller_icon2.png')
                      }>  
                    </Image>
                  </View>
                  <View>
                    <Text
                      style={{paddingLeft: 10, flex: 3}}
                      className="text-white text-base">{gameName}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
                    <View>
                      <Text className="text-white text-base" >
                        {getHoursText(gameDate)}
                      </Text>
                    </View>
                    
                  </View>
                </View>
            </LinearGradient>
          </View>
      </ImageBackground>
    </View>
  );
}

export default AvailableGame;