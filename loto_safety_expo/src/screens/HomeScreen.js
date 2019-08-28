import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.firstViewTagStyle}>
      <Text style={styles.imageOneStyle}>Image 1</Text>

      <Button 
        style={styles.buttonStyle}
        title="Go to camera trial demo"
        onPress={ () => navigation.navigate('Camera_trial')}
      />
      <Text style={styles.imageTwoStyle}> Image 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  firstViewTagStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 10,
    height: 500,
  },
  imageOneStyle: {
    borderWidth: 1,
    flex: 1,
    // alignItems: 'center',
    // height: 100,
  },
  buttonStyle: {
    borderWidth: 1,
    flex: 1,
    // alignItems: 'center',
    // height: 100,
  },
  imageTwoStyle: {
    borderWidth: 1,
    flex: 1,
    // alignItems: 'center',
    // height: 100,
  }
});

export default HomeScreen;
