import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Spinner from '../components/Spinner';

const LoadingResult = ({ navigation }) => {
  const imageURI = navigation.getParam('uri', null);
  console.log(typeof imageURI)
  if (imageURI === null) {
    return (
      <View>
        <Text> Loading result </Text>
      </View>
    );
  }
  else { 
    return (
      <View style={styles.viewMain}>
        {/* Header */}
        <View style={styles.view1}>
          <Image
            source = {require('../../assets/loto-logo.png')} //put tag photo, not logo
            style = {styles.image1a}
          />
          <View style = {styles.view1b}>
            <Text style={styles.text1b1}> Loading </Text>
          </View>
        </View>
        {/* Image with spinner */}
        <View style={styles.view2}> 
          <Image 
            source = {{uri: imageURI}}
            style = {styles.image2a}
          />
          <View style={styles.view2b}>
            <Spinner size='large' spinnerColor='red'/>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 40,
    flex: 1,
  },
  view1: {
    flex: 1.1,
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
  },
  image1a: {
    flex: 1,
    opacity: 0.2,
    alignSelf: 'center',
  },
  view1b: {
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject
  },
  text1b1: {
    fontSize: 50,
    fontFamily: 'Arial',
    alignSelf: 'center',
  },
  view2: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: 'red',
  },
  image2a: {
    flex: 1,
    borderRadius: 10,
  },
  view2b: {
    alignSelf: 'center',
    ...StyleSheet.absoluteFillObject
  }
});

export default LoadingResult;