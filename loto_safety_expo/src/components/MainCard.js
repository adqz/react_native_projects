import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';

const MainCard = () => {
  return (
    <View styles={styles.mainView}>
      <View styles={styles.body}> 
        <Text styles={{fontSize: 45}}> Body part </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainCard;