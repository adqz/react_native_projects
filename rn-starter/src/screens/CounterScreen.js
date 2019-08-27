import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  
  //initializing counter as a state with default value of 0
  const [counter, setCounter] = useState(0); //array destructuring (similar to tuple unpacking)

  return (
    <View>
      <Button 
        title="Increase" 
        onPress={ () => {setCounter(counter+1)}}
      />
      <Button 
        title="Decrease"
        onPress={ () => {setCounter(counter-1)}}/>
      <Text> Current Count: {counter} </Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default CounterScreen;
