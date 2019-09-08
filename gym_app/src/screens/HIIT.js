import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TimeFormatter from 'minutes-seconds-milliseconds';
import Header from '../components/Header';
import MyButton from '../components/MyButton';

const HIIT = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [mainTimer, setMainTimer] = useState(null);
  const [mainTimerStart, setMainTimerStart] = useState(null);
  console.log(mainTimer)
  const handleStartStop = () => {
    // Case 1: Stop button clicked
    if(isRunning) {
      clearInterval(interval)
      setIsRunning(false)
      return;
    } else {
      setMainTimerStart( new Date() )
      setIsRunning(true)
    }

    let interval = setInterval( () => {
      setMainTimer( new Date() - mainTimerStart + mainTimer)
    }, 50)
  }

  return (
    <View style={styles.mainView}>
      <Header title='High Intensity Training'/>
      <Text style={styles.text1}> {TimeFormatter(mainTimer)} </Text>
      
      <View style={styles.view3}>
        <MyButton 
          text = {isRunning? 'Stop':'Start'}
          onPress = { () => handleStartStop()}
          bgColor = '#1ED5FE' //blue
          fontColor = 'white'
          fontSize = {30}
          horizontalPadding = {0}
        />
        {/* {console.log(isRunning)} */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  text1:{
    flex: 0.2,
    borderWidth: 2,
    borderColor: 'orange',
    fontSize: 40,
    color: 'red',
  },
  view3:{
    flexDirection: 'row',
    flex: 0.333,
    alignSelf: 'center',
  }
});

export default HIIT;
