import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create(
  {
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
      height: 44,
      color: "rgba(0, 122, 255, 1)"
    },
    buttonText: {
            fontSize: 15,
      fontWeight: '700',
    }
  }
);


const WhiteButton = ({text, onPress}) => {

  return (
    <TouchableOpacity style={styles.buttonHeader} onPress={onPress}>
      <Text style={styles.buttonText} className="text-blue-600 text-s">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default WhiteButton;