import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Keyboard } from 'react-native';

const QuestionAnswer = ({ flexValue, ans, onAnswerChange}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        borderWidth: 2,
        borderColor: 'orange',
        flex: flexValue>=0? flexValue : 1,
      }}
    >
      <Text style={styles.text}> Dummy question </Text>
      <TextInput 
        autoCorrect
        multiline
        numberOfLines={3}
        style={styles.input}
        placeholder='Enter answer here' //check
        value={ans}
        onChangeText = { newTerm => onAnswerChange(newTerm) }
        onEndEditing = { () => Keyboard.dismiss()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewMain:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderWidth: 2,
    borderColor: 'orange',
    flex: 0.3,
  },
  text:{
    fontSize: 20,
    color: 'black',
    borderWidth: 2,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    margin: 15,
    borderColor: 'red',
    borderWidth: 2,
    flex: 1,
  },
});

export default QuestionAnswer;
