import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MyButton from '../components/MyButton';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewMain}>
      <Header title='Choose Exercise'/>

      <View style={styles.view1}>
        <MyButton 
          text = 'High Intensity Interval Training'
          onPress = { () => navigation.navigate('HIIT')}
          bgColor = '#EF321E' //red
          fontColor = 'white'
          fontSize = {30}
          horizontalPadding = {0}
        />
      </View>

      <View style={styles.view1}>
        <MyButton 
          text = 'Exercise 2'
          onPress = { () => navigation.navigate('HIIT')}
          bgColor = '#FEFE1E' //yellow
          fontColor = 'black'
          fontSize = {30}
          horizontalPadding = {0}
        />
      </View>

      <View style={styles.view1}>
        <MyButton 
          text = 'Exercise 3'
          onPress = { () => navigation.navigate('HIIT')}
          bgColor = '#1ED5FE' //blue
          fontColor = 'white'
          fontSize = {30}
          horizontalPadding = {0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMain:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#D0EAF0'
  },
  view1:{
    flex: 0.3333,
  }
});

export default HomeScreen;
