import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // props = props.navigation;
  return (
    <View> 
      <Text style={styles.text}>Home Screen</Text>
      <Button 
        title="Go to components demo"
        onPress={ () => navigation.navigate('Components')}
      />
      <Button 
        title="Go to list demo"
        onPress={ () => navigation.navigate('List')}
      />

      <Button 
        title="Go to Image demo"
        onPress={ () => navigation.navigate('Image')}
      />

      <Button 
        title="Go to Counter demo"
        onPress={ () => navigation.navigate('Counter')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
