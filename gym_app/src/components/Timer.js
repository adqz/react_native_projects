import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton'

const Timer = ( {totalSeconds, setTotalSeconds, isActive, setIsActive, minutes, setMinutes} ) => {
  // const [totalSeconds, setTotalSeconds] = useState(0);
  // const [isActive, setIsActive] = useState(false);

  // function toggle() {
  //   setIsActive(!isActive);
  // }

  // function reset() {
  //   setTotalSeconds(0);
  //   setIsActive(false);
  // }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTotalSeconds(totalSeconds => totalSeconds + 1);
      }, 1000);
    } else if (!isActive && totalSeconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, totalSeconds]);


  const _getTimeDetails = () => {
    mins = Math.floor(totalSeconds/60.0);
    setMinutes(mins)
  }
  
  _getTimeDetails();
  return null;
  // return (
  //   <View style={styles.mainView}>
  //     <Text style={styles.text1}> {totalSeconds}s </Text>
  //   </View>
  // );
};

// const styles = StyleSheet.create({
//   mainView:{
//     flexDirection: 'column',
//     flex: 1,
//     justifyContent: 'center'
//   },
//   text1:{
//     flex: 0.2,
//     borderWidth: 2,
//     borderColor: 'orange',
//     fontSize: 40,
//     color: 'red',
//   },
//   view3:{
//     flexDirection: 'row',
//     flex: 0.333,
//     alignSelf: 'center',
//   }
// });

export default Timer;
