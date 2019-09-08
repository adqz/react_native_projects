import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet, } from 'react-native';
import MyButton from '../components/MyButton';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeScreen = ({ navigation }) => {

  const [galleryPermission, setGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect( () => {
    const { status2 } = Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status2 !== 'granted') {
      setGalleryPermission(true)
    }
  });

  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri)
      navigation.navigate('Loading', {uri: result.uri})
    }
  }

  return (
    <View style={styles.firstViewTagStyle}>
      <Header title='Home'/>
      <Image
        source = {require("../../assets/loto-logo.png")}
        style = {styles.imageOneStyle}
      />
      <View style = {styles.buttonStyle}>
        <MyButton 
          onPress={() => _pickImage()}
          text = "Choose from gallery"
        />
        <MyButton 
          onPress = { () => navigation.navigate('Test')}
          text = "Click Picture"
        />
      </View>
      <Image
        source = {require("../../assets/lok-force-logo.png")}
        style = {styles.imageTwoStyle}
      />
      <Footer title='LOTO Safety Products' />
    </View>
  );
}

const styles = StyleSheet.create({
  firstViewTagStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // marginVertical: 10,
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
    // marginBottom: 20
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    flexDirection: 'row',
    flex: 0.5,
    alignItems: 'center',
    height: 100,
  }
});

export default HomeScreen;
