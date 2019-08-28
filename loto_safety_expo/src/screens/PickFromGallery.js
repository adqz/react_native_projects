import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const PickFromGallery = () => {
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect( () => {
    const { status2 } = Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status2 !== 'granted') {
      setGalleryPermission(true)
    }
  });

  const _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri)
      navigation.navigate('Loading', {uri: result.uri})
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pick an image from camera roll"
        onPress={() => _pickImage()}
      />
      {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default PickFromGallery;
