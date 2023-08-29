import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create(
  {
    tinyLogo: {
      width: 25,
      height: 25,
    },
    navigationContainer: {
      backgroundColor:"rgba(101, 98, 243, 1)", padding:10, borderTopEndRadius: 30, borderTopLeftRadius:30
    }

  }
);

const NavigationToolbar = ({current}) => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('KidProfile')
  }

  const goToHome = () => {
    navigation.navigate('Home')

  }

  return (
    <View style={styles.navigationContainer} className="flex flex-row flex-start">
      <TouchableOpacity
        style={{flex: 1, alignItems:'center'}}
        onPress={goToHome}>
          <View 
            style={{alignItems:'center', width: 60, height:60}} 
            className={current == 'Home' ? 'border-white border-2 rounded-full' : '' + 'flex flex-col flex-start'}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/icons/Home.png')}>
            </Image>
            <View style={{marginTop:10}}>
              <Text className="text-white">Home</Text>
            </View>
          </View>
          
      </TouchableOpacity>
      <TouchableOpacity
        style={{flex: 1, alignItems:'center'}}
        onPress={goToProfile}>
          <View 
            style={{alignItems:'center', width: 60, height:60}} 
            className={current == 'Profile' ? 'border-white border-2 rounded-full' : '' + 'flex flex-col flex-start'}>
            <Image
              style={styles.tinyLogo}
              source={require('../assets/icons/ProfileIcon.png')}>
            </Image>
            <View style={{marginTop:10}}>
              <Text className="text-white">Profile</Text>
            </View>
          </View>
          
      </TouchableOpacity>
      <View style={{flex: 1}}>
      </View>
    </View>
  )
};

export default NavigationToolbar;