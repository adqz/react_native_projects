import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const bitches = [
    { name: 'cutie 1', age: '234', key:'1' },
    { name: 'cutie 2', age: '25', key:'2' },
    { name: 'cutie 3', age: '245', key:'3' },
    { name: 'cutie 4', age: '25', key:'4' },
    { name: 'cutie 5', age: '245', key:'5' },
    { name: 'cutie 6', age: '235', key:'6' },
    { name: 'cutie 7', age: '5', key:'7' },
    { name: 'cutie 8', age: '2', key:'8' },
    { name: 'cutie 9', age: '3', key:'9' },
  ];
  return (
    <FlatList
      horizontal={false}
      // keyExtractor = {friend => friend.name}
      data = {bitches}
      renderItem = {({ item }) => {
        return <Text style={styles.textStyle}> {item.name} - Age: {item.age} </Text>
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    marginVertical: 50
  }
});

export default ListScreen;

/* 

<FlatList 
  data = {bitches}
  renderItem = {(element) => {
    //if we console log, element === {item: {name: cutie 1}, index: 0 }
  }}
/>


*/