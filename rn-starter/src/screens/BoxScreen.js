import React, { useState } from 'react';
import { Text, StyleSheet, View} from 'react-native';

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> box screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    marginVertical: 20,
  }
});

export default BoxScreen;
