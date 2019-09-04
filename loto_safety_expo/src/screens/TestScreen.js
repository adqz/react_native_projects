import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ImageSlider from '../components/ImageSlider';
import ImageDetail from '../components/ImageDetail';

const BasicScreen = () => {
  return(
    <View style={styles.mainView}>
      <Header title='Basic Header'/>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 0.4}}>
        <ImageDetail 
          imagePath = {require('../../assets/hasp-steel-hsp-pmh-25r.jpg')}
          title = 'Image Selected'
        />
        <ImageDetail 
          imagePath = {require('../../assets/hasp-steel-hsp-pmh-25r.jpg')}
          title = 'Image Database'
        />
      </View>
      <Footer title='Basic Footer'/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    flex: 1,
    borderColor: 'orange',
    borderWidth: 2,
  }
});

export default BasicScreen;


