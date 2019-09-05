import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyButton from '../components/MyButton'

const LoadingResult = ({ navigation }) => {
  const imageURI = navigation.getParam('uri', null);
  // console.log(typeof imageURI)
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
        <Header title='Loading Result'/>
        {/* Image with spinner */}
        <View style={styles.view1}> 
          <Image 
            source = {{uri: imageURI}}
            style = {styles.image1a}
          />
          <View style={styles.view1b}>
            <Spinner size='large' spinnerColor='black'/>
          </View>
        </View>
        
        <View style = {styles.buttonStyle}>
          <MyButton 
            onPress = { () => navigation.navigate('Confirm', {uri: imageURI})}
            text = "Move to confirm page (temp button)"
          />
      </View>
        <Footer title='LOTO Safety Products'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  view1: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'rgba(18,78,134,0.4)'
  },
  image1a: {
    // flex: 1,
    aspectRatio: 1,
    borderWidth: 1,
    // borderRadius: 10,
  },
  view1b: {
    alignSelf: 'center',
    ...StyleSheet.absoluteFillObject
  },
  buttonStyle:{
    flex: 0.2
  }
});

export default LoadingResult;