import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MyButton = ({ onPress, text, bgColor, fontSize, fontColor }) => {

  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: bgColor || '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-around', //newly added
      }}
    >
      <Text style={{
        alignSelf: 'center',
        color: fontColor || '#007aff',
        fontSize: fontSize || 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
      }}
      > 
          {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-around', //newly added
    },

    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default MyButton;
