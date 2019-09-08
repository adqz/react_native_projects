import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import * as Speech from 'expo-speech';
import Timer from '../components/Timer';
import Header from '../components/Header';
import CircleButton from '../components/CircleButton'
import ExerciseName from '../components/ExerciseName';

const HIIT = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [exName, setExName] = useState('Wait');
  const [exColor, setExColor] = useState('blue');
  
  // useEffect(
  //   () => { Speech.speak(exName, { rate: 0.65, pitch: 1, })},
  //   [exName],
  // );
  
  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setTotalSeconds(0);
    setIsActive(false);
  }

  return (
    <View style={styles.mainView}>
      
      <Header title='High Intensity Training'/>
      {/* ----------------- Clock ----------------- */}
      <Timer
          totalSeconds={totalSeconds}
          setTotalSeconds={setTotalSeconds}
          isActive={isActive}
          setIsActive={setIsActive}
          minutes={minutes}
          setMinutes={setMinutes}
        />
      
      <View style={styles.view1}>
        <View style={styles.view1a}>
          <Text style={styles.text1b}> {minutes}m {totalSeconds%60}s </Text>
        </View>
      </View>

      {/* ------------ Logic to check which exercise to display ------------ */}
      <ExerciseName 
        mins={minutes}
        seconds={totalSeconds%60}
        setExName={setExName}
        exName={exName}
        setExColor={setExColor}
      />
      {/* {console.log(exName, minutes, totalSeconds%60)} */}
      <View 
        style={{
          flex: 0.65,
          backgroundColor: exColor,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          // flexGrow: 1,
        }}>
        <Text style={styles.text2a}> {exName} </Text>
      </View>

      {/* ----------------- Buttons ----------------- */}
      <View style={styles.view3}>
        <CircleButton 
          text = 'Reset'
          onPress = { () => reset()}
          bgColor = 'red' 
          fontColor = 'white'
          fontSize = {30}
          horizontalPadding = {0}
        />
        <CircleButton 
          text = {isActive? 'Pause':'Start'}
          onPress = { () => toggle()}
          bgColor = {isActive? 'grey':'green'}
          fontColor = 'white'
          fontSize = {30}
          horizontalPadding = {0}
        />
      </View>
    </View> //close of mainView
  );
}

const styles = StyleSheet.create({
  mainView:{
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  //timer
  view1:{
    flex: 0.15,
    backgroundColor: '#8289A0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1a:{
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
  text1b:{
    fontSize: 40,
    color: 'red',
    textAlign: 'center',
  },
  //exercise name
  // view2:{
  //   flex: 0.65,
  //   backgroundColor: exColor,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  // },
  text2a:{
    flex: 0.98,
    // flexWrap: 'wrap',
    fontSize: 90,
    color: 'white',
    textAlign: 'center',
  },
  view3:{
    flexDirection: 'row',
    flex: 0.2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HIIT;
