import React from 'react'
import { Text, View, Button, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imagePath, score }) => {
  return (
    <View>
      <Image source={imagePath}/>
      <Text style={styles.title}>  {title} </Text>
      <Text style={styles.score}> Score - {score} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600"
  },
  score: {
    fontSize: 20
  }
});

export default ImageDetail;
