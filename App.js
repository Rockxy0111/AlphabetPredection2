import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PickImage from './screens/camera';



export default function App() {
  return <PickImage/>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
