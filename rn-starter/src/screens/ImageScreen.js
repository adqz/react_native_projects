import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <ImageDetail title="Forest" imagePath={require("../../assets/forest.jpg")} score={"9"}/>
      <ImageDetail title="Beach" imagePath={require("../../assets/beach.jpg")} score={"8"}/>
      <ImageDetail title="Mountain" imagePath={require("../../assets/mountain.jpg")} score={"10"}/>

      <Button 
        title="Go to components demo"
        onPress={ () => navigation.navigate('Components')}
      />
    </View>

  );
}

const styles = StyleSheet.create({

});

export default ImageScreen;
