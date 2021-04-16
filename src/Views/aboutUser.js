import React from 'react';
import Header from '../components/Header';
import {CommonActions} from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TouchableOpacityBase,
} from 'react-native';

export default function aboutUser() {
  const backgroundStyle = {
    backgroundColor: '#FFFF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TouchableOpacity onPress={() => {}} />
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}
/*
<TouchableOpacity style={styles.backTouchabel} onPress={() => {}}>
          <Image style={styles.backIcon}>
            source = {require('../components/Users/Assets/backIcon.jpg')}
          </Image>
        </TouchableOpacity>
*/
const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 30,
    margin: 10,
  },
});
