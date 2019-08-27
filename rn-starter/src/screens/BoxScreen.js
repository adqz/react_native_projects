import React, { useState } from 'react';
import { Text, StyleSheet, View} from 'react-native';

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.text1Style}> Child 1 </Text>
      <Text style={styles.text2Style}> Child 2 </Text>
      <Text style={styles.text3Style}> Child 3 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 4,
    borderColor: 'black',
    height: 200,
    // alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1Style: {
    borderWidth: 2,
    borderColor: 'red',
    // flex: 1,
    height: 80,
    width: 80,
    backgroundColor: 'red',
  },
  text2Style: {
    borderWidth: 2,
    borderColor: 'green',
    // flex: 1,
    height: 80,
    width: 80,
    alignSelf: 'flex-end',
    // top: 80,
    backgroundColor: 'green',
  },
  text3Style: {
    borderWidth: 2,
    borderColor: 'blue',
    // flex: 1,
    height: 80,
    width: 80,
    backgroundColor: 'blue',
  }
});

export default BoxScreen;

/*
1. "alignItems" is set on parent element but affects the children. By default, it aligns in horizontal direction.
It is affected by "flexDirection"
2. "flexDirection" decided whether children are laid down as rows or columns
*/


/* 
----------------------Properties of Parent component----------------------
alignItems: stretch(default), flex-start, center, flex-eng
flexDirection: column(default), row
justifyConent: flex-start, center, flex-end, space-between, space-around

----------------------Properties of Child component----------------------

*/