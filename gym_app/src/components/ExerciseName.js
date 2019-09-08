import React, { useEffect } from 'react';
import * as Speech from 'expo-speech';

const ExerciseName = ({ mins, seconds, setExName, exName, setExColor, }) => {

  useEffect(
    () => { Speech.speak(exName, { rate: 0.65, pitch: 1, })},
    [exName],
  );

  const _getName = () => {
    cond1 = seconds>=0 && seconds <=15
    cond2 = seconds>15 && seconds <=30
    cond3 = seconds>30 && seconds <60
    
    let set1 = [0,1,6,7];
    let set2 = [2,3,8,9];
    let set3 = [4,5,10,11];

    if (set1.includes(mins)){
      // console.log(mins)
      if (cond1) {setExName('High Knees'); setExColor('blue');}
      if (cond2) {setExName('Jump Lunges'); setExColor('#E29700');}
      if (cond3) {setExName('Rest'); setExColor('green');}
    }
    if (set2.includes(mins)){
      if (cond1) {setExName('Mountain Climber'); setExColor('blue');}
      if (cond2) {setExName('Crab Toes'); setExColor('#E29700');}
      if (cond3) {setExName('Rest'); setExColor('green');}
    }
    if (set3.includes(mins)){
      if (cond1) {setExName('Pushup Side Plank'); setExColor('blue');}
      if (cond2) {setExName('Plank Hip Roll'); setExColor('#E29700');}
      if (cond3) {setExName('Rest'); setExColor('green');}
    }

  }
  _getName();
  return null;
}


export default ExerciseName;
