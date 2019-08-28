import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, } from 'react-native';
import MyButton from '../components/MyButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.firstViewTagStyle}>
      {/* <Text style={styles.imageOneStyle}>Image 1</Text> */}
      <Image
        source = {require("../../assets/loto-logo.png")}
        style = {styles.imageOneStyle}
      />
      <View style = {styles.buttonStyle}>
        <MyButton 
          onPress = { () => navigation.navigate('Camera_trial')}
          children = "Choose from gallery"
        />
        <MyButton 
          onPress = { () => navigation.navigate('Camera_trial')}
          children = "Click Picture"
        />
      </View>
      <Image
        source = {require("../../assets/lok-force-logo.png")}
        style = {styles.imageTwoStyle}
        // resizeMethod = 'scale'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  firstViewTagStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 10,
    flex: 1,
  },
  imageOneStyle: {
    height:100,
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
  },
  imageTwoStyle: {
    height: 100,
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
    borderWidth: 2,
    borderColor: 'orange',
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    height: 100,
  }
});

export default HomeScreen;
