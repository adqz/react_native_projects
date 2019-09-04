import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
// import * as ImagePicker from 'expo-image-picker';

const CameraScreen = ( {navigation} ) => {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back)

  useEffect( () => {
    const { status1 } = Permissions.askAsync(Permissions.CAMERA);
    const { status2 } = Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status1 !== 'granted') {
      setCameraPermission(true)
    }
    if (status2 !== 'granted') {
      setGalleryPermission(true)
    }
  }
  );

  const funcSetType = (type) => {
    switch(type) {
      case Camera.Constants.Type.back:
        setType(Camera.Constants.Type.front)
        return;
      case Camera.Constants.Type.front:
        setType(Camera.Constants.Type.back)
        return;
    }
  }

  const snap = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync(quality=1.0, exif=true, base64=true);
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      navigation.navigate('Loading', {uri: photo.uri});
      // console.log(photo.uri)
    }
  };

  if (cameraPermission === null) {
    return <View />;
  } else if (cameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera 
          style={{ flex: 1 }}
          type={type}
          ref={ref => {
            camera = ref;
            }}
          
          >
          <View style={styles.cameraViewStyle}>
            <TouchableOpacity
              style={styles.flipButtonStyle}
              onPress={ () => funcSetType(type)}
            >
              <Ionicons name="md-reverse-camera" size={50} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.flipButtonStyle}
              onPress={ () => snap()}
            >
              <Ionicons name="ios-camera" size={50}/>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={styles.flipButtonStyle}
              onPress={ () => ImagePicker.launchImageLibraryAsync(mediaTypes=ImagePicker.MediaTypeOptions.Images)}
            > 
              <MaterialIcons name="photo-library" size={50}/>
            </TouchableOpacity> */}
          </View>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cameraViewStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  flipButtonStyle: {
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
    margin: 30,
    marginBottom: 50,
    backgroundColor:'rgba(247, 255, 5, 0.4)',
    
  },
  flipTextStyle: {
    fontSize: 18,
    padding: 10,
    color: 'white'
  },
  captureButtonStyle: {
    
  }
});

export default CameraScreen;