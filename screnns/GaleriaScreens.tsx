
import React from 'react'
import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function GaleriaScreens() {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };
  
    return (
      <View style={(StyleSheet.create({
            container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            },
            image: {
                width: 200,
                height: 200,
            },
        })).container}>
        <Button title="abrir galeria" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={(StyleSheet.create({
                container: {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                image: {
                    width: '95%',
                    height: 400,
                },
            })).image} />}
      </View>
    );
  }
  

const styles = StyleSheet.create({})