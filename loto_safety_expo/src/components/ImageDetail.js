import React from 'react'
import { Text, View, Button, StyleSheet, Image, Dimensions } from 'react-native';

const ImageDetail = ({ title, imagePath}) => {
  return (
    <View style = {styles.mainView}>
      <Text style={styles.title}> {title} </Text>
      <Image 
        source={imagePath}
        style = {styles.image}
      />
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainView:{
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'skyblue',
    aspectRatio: 1,
    flex: 0.5
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
    flex: 0.2,
  },
  image:{
    height: null,
    width: 200,
    aspectRatio: 1,
    flex: 0.8,
    resizeMode: 'cover',
    borderColor: 'blue',
    borderWidth: 2,
  }
  
});

export default ImageDetail;
