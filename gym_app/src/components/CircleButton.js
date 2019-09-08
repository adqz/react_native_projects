import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CircleButton = ({ onPress, text, bgColor, fontSize, fontColor, horizontalPadding }) => {
  
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{
        width: 100,
        height: 100,
        borderRadius: 100/2,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: bgColor || '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        marginHorizontal: horizontalPadding>=0 ? horizontalPadding:5,
        justifyContent: 'space-around',
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

export default CircleButton;
