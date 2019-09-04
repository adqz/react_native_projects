import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

const ImageSlider = () => {
  const imageList = [
    {src: require('../../assets/hasp-non-conductive-hsp-dey6.jpg'), key: '1',},
    {src: require('../../assets/padlocks-non-conductive-shackle.jpg'), key: '2',},
    {src: require('../../assets/padlocks-ss304-long-shackle.jpg'), key: '3',},
    {src: require('../../assets/key-safe-box-ksb-5l.jpg'), key: '4',},
    {src: require('../../assets/hasp-steel-hsp-pmh-25r.jpg'), key: '5',},
  ]
  return (
    <View style={styles.mainView}> 
      <FlatList 
        data = {imageList}
        keyExtractor = { (item) => item.key}
        renderItem = { ({item}) => {
          // console.log(item)
          return <Image source={item.src} style={styles.image}/>
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    height: 100,
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
});

export default ImageSlider;
