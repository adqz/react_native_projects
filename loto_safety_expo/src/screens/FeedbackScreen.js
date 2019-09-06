import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuestionAnswer from '../components/QuestionAnswer';
import MyButton from '../components/MyButton';

const FeedbackScreen = ({ navigation }) => {
  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior="padding" >
      
      <View style={styles.viewMain}>
        <Header title='Feedback Form (Optional)'/>
        
        <QuestionAnswer flexValue={0.375} ans={ans1} onAnswerChange={ newAns => setAns1(newAns)}/>
        <QuestionAnswer flexValue={0.375} ans={ans2} onAnswerChange={ newAns => setAns2(newAns)}/>
        
        <View style={{flex: 0.125}}>
          <MyButton 
            text = 'Submit Feedback'
            onPress = { () => navigation.navigate('Home')}
            bgColor = '#21E066'
            fontColor = 'white'
            horizontalPadding = {0}
          />
        </View>
        <View style={{flex: 0.125}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <MyButton 
              text = 'Home'
              onPress = { () => navigation.navigate('Home')}
              bgColor = '#727674'
              fontColor = 'white'
              horizontalPadding = {0}
            />
              <MyButton 
              text = 'Retake photo'
              onPress = { () => navigation.navigate('Camera')}
              bgColor = '#115494'
              fontColor = 'white'
              horizontalPadding = {0}
            />
          </View>
          
        </View>

        <Footer title='LOTO Safety Products'/>
      </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  
});

export default FeedbackScreen;

/*
<Text> Dummy question </Text>
      <TextInput 
        autoCapitalize = "none" //change
        autoCorrect
        style={styles.input} 
        value={ans1}
        onChangeText = { (newAns1) => setAns1(newAns1)}
      />


text1:{
    fontSize: 20,
    fontColor
  },
  input1: {
    fontSize: 18,
    borderWidth: 1,
    margin: 15,
    borderColor: 'black',
  },
*/