import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Header = ({ title }) => {
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
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 25,
    color: 'white',
  }
});

export default Header;
