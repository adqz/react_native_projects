import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { StackGestureContext } from 'react-navigation';

const TextScreen = () => {
  const [currText, setText] = useState('');
  return (
    <View>
      <Text> Enter name </Text>
      <TextInput 
        autoCapitalize = "none"
        autoCorrect = {false}
        style={styles.input} 
        value={currText}
        onChangeText = { (newText) => setText(newText)}
      />
      {currText.length < 3 ? <Text> Name must be at least 3 characters </Text>: null}
      <Text> My name is: {currText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 15,
    borderColor: 'black',
  }
});

export default TextScreen;
