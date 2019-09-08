import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { TfImageRecognition, TensorFlow } from 'react-native-tensorflow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Mybutton from '../components/MyButton';

const TestScreen = () => {

  const tf = new TensorFlow('../../assets/resnet18.pb');
  const _doRecognition = async () => {
    await tf.feed({name: "inputName",
                  data: require('../../assets/elcb00451.jpg'),
                  shape:[224,224,3],
                  dtype: "float"})
    await tf.run(['outputNames'])
    const output = await tf.fetch('outputName')    
    console.log(output)
  }
  
  return(
    <View style={styles.mainView}>
      <Header title='Basic Header'/>
      <MyButton 
        text = 'Do recognition!'
        onPress = { () => _doRecognition()}
        bgColor = 'black'
        fontColor = 'white'
        horizontalPadding = {0}
      />
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

export default TestScreen;

// const tfImageRecognition = new TfImageRecognition({
  //   labels: require('../../assets/labels.txt'),
  //   model: require('../../assets/resnet18.pb'),
  //   // labels: require('../../assets/labels.txt'),
  //   imageMean: 0.5, // Optional, defaults to 117
  //   imageStd: 0.1, // Optional, defaults to 1
  // })

  // const _doRecognition = async () => {
  //   let results = await tfImageRecognition.recognize({
  //     image: require('../../assets/elcb00451.jpg'),
  //     inputName: "input", //Optional, defaults to "input"
  //     inputSize: 224, //Optional, defaults to 224
  //     outputName: "output", //Optional, defaults to "output"
  //     maxResults: 3, //Optional, defaults to 3
  //     threshold: 0.1, //Optional, defaults to 0.1
  //   })
  //   results.forEach(result =>
  //     console.log(
  //       result.id, // Id of the result
  //       result.name, // Name of the result
  //       result.confidence // Confidence value between 0 - 1
  //     )
  //   )
  //   await tfImageRecognition.close() // Necessary in order to release objects on native side
  // }