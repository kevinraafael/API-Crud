import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import MyAppSvg from './Assets/avatar.jpg';
//<Image style={styles.image} source={require('./Assets/avatar.jpg')} />

const TheUser = () => {
  return (
    <View style={styles.cardView}>
      <Text> Amanda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    color: '#7C8B99',
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
});

export default TheUser;
