import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';

const MainCard = () => {
  return (
    <View >
      <View style={styles.header}/>
        <Text> Filler </Text>
      <View style={styles.footer}/>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: 2,
    borderColor: 'yellow',
    borderRadius: 10,
    backgroundColor: 'grey',
    height: 50,
    width: undefined,
  },
  footer: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: 'grey',
    height: 50,
    width: undefined,
  }
});

export default MainCard;
