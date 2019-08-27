import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button 
        title = "Add color"
        onPress = { () => {
          setColors([...colors, randomRGB()])
        }}
      />
      {/* <View style={ {height: 100, width:100, backgroundColor:randomRGB()}} /> */}
      <FlatList 
        keyExtractor = { item => item }
        data = {colors}
        renderItem = { ({ item }) => {
          console.log(item)
          return (<View style={ {height: 100, width:100, backgroundColor:item}} />)
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  R = Math.floor(Math.random() * 256);
  G = Math.floor(Math.random() * 256);
  B = Math.floor(Math.random() * 256);
  
  return `rgb(${R}, ${G}, ${B})` //the back ticks are for string formatting
}

const styles = StyleSheet.create({

});

export default ColorScreen;
