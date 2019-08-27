import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  
  const setColor = (color, val) => {
    switch(color) {
      case 'R':
        R+val>255 || R+val<0 ? null: setR(R+val)
        return;
      case 'G':
        G+val>255 || G+val<0 ? null: setG(G+val)
        return;
      case 'B':
        B+val>255 || B+val<0 ? null: setB(B+val)
        return;
      default:
        return;
    }
  }

  const [R, setR] = useState(124);
  const [G, setG] = useState(124);
  const [B, setB] = useState(124);
  const INC_VALUE = 10;
  return (
    <View>
      <ColorCounter 
        onIncrease = { () => setColor('R', INC_VALUE) }
        onDecrease = { () => setColor('R', -1*INC_VALUE) } 
        color='Red'
        colorValue = {R}
      />
      <ColorCounter 
        onIncrease = { () => setColor('G', INC_VALUE) } 
        onDecrease = { () => setColor('G', -1*INC_VALUE) } 
        color='Green'
        colorValue = {G}
      />
      <ColorCounter 
        onIncrease = { () => setColor('B', INC_VALUE) } 
        onDecrease = { () => setColor('B', -1*INC_VALUE) } 
        color='Blue'
        colorValue = {B}
      />
      <View style={ {height: 100, width:100, backgroundColor:`rgb(${R}, ${G}, ${B})`}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
