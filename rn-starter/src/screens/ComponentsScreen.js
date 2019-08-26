import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Adnan';
  return (
  <View>
    <Text style={styles.textStyle}>Getting started bitches</Text>
    <Text style={styles.subHeaderStyle}>My name is {name} </Text>
  </View>
  

  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  subHeaderStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
