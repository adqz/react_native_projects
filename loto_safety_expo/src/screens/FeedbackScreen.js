import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  // const [ans1, setAns1] = useState('');
  return (
    <View style={styles.viewMain}>
      <Text> Feedback Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  
});

export default FeedbackScreen;

/*
<Text> Dummy question </Text>
      <TextInput 
        autoCapitalize = "none" //change
        autoCorrect
        style={styles.input} 
        value={ans1}
        onChangeText = { (newAns1) => setAns1(newAns1)}
      />


text1:{
    fontSize: 20,
    fontColor
  },
  input1: {
    fontSize: 18,
    borderWidth: 1,
    margin: 15,
    borderColor: 'black',
  },
*/