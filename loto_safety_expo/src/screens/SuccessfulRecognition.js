import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';
import MyButton from '../components/MyButton';

const SuccessfulRecognition = () => {
  return (
    <View styles={styles.mainView}>
      <Text> Congratulations! You are one step closer to safety. </Text>
      <Text> The following LOTO-LOK product will securely lock out the device </Text>
      
      {/* <ImageDetail 
        imagePath = {} // pull from firebase
        title = {} // pull from firebase
      /> */}

      <MyButton 
        title = 'More details on product'
        onPress = { () => {}} //get link of product from website
        bgColor = '#fff'
        fontSize = {18}
      />

      <MyButton
        title = 'Save this product in basket'
      />

      <MyButton
        title = 'Home'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },

});

export default SuccessfulRecognition;
