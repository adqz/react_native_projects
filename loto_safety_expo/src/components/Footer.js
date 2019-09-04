import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Footer = ({ title }) => {
  return (
    <View style = {styles.mainView}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: 50,
    width: undefined,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 25,
  }
});

export default Footer;
