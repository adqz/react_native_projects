import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    console.log(this.state);
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View style={styles.cameraViewStyle}>
              <TouchableOpacity
                style={styles.flipButtonStyle}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={styles.flipTextStyle}> Flip </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  cameraViewStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  flipButtonStyle: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    alignSelf: 'flex-end',
    alignItems: 'stretch',
    margin: 30,
    marginBottom: 50,
  },
  flipTextStyle: {
    fontSize: 18,
    padding: 10,
    color: 'white'
  },
});
