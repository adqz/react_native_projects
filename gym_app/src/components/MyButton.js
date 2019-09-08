import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const MyButton = ({ onPress, text, bgColor, fontSize, fontColor, horizontalPadding, borderRadius }) => {
  
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: bgColor || '#fff',
        borderRadius: borderRadius || 5,
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

export default MyButton;
