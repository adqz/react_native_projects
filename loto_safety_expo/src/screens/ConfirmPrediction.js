import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import MyButton from '../components/MyButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageDetail from '../components/ImageDetail';

const ConfirmPrediction = ({ navigation }) => {
  const imageURI = navigation.getParam('uri', null);
  const [status, setStatus] = useState(null);
  return (
    <View style={styles.viewMain}>
      <Header title='Confirm Prediction'/>
      <View style={styles.view1}>
        <Text style={styles.text1}> Is this the same lock? </Text>
      </View>

      <View style={styles.view2}>
        <ImageDetail 
          imagePath = {{uri: imageURI}}
          title = 'Image (from Device)'
        />
        <ImageDetail 
          imagePath = {require('../../assets/elcb00335.jpg')}
          title = 'Image (from Database)'
        />
      </View>
      <View style = {styles.view3}>
        <MyButton 
          onPress={ () => navigation.navigate('Feedback') }
          text = "No"
          bgColor = 'red'
          fontSize = {30}
          fontColor = 'white'
        />
        <MyButton 
          onPress = { () => navigation.navigate('Successful') }
          text = "Yes"
          bgColor = 'green'
          fontSize = {30}
          fontColor = 'white'
        />
      </View>
      <Footer title='LOTO Safety Products'/>
    </View>
  );
}

const styles = StyleSheet.create({
  viewMain:{
    flexDirection: 'column',
    flex: 1,
    borderWidth: 2,
    borderColor: 'orange',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  view1:{
    justifyContent: 'center',
    flex: 0.2,
  },
  view2: {
    flexDirection: 'row', 
    justifyContent: 'space-around',
    flex: 0.6,
    borderWidth: 2,
    alignItems: 'center',
  },
  text1:{
    fontSize: 25,
    textAlign: 'center',
  },
  view3: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
    flexDirection: 'row',
    flex: 0.2,
    alignItems: 'center',
    height: 30,
  }
});

export default ConfirmPrediction;
