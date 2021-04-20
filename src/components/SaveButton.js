import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const saveButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.text}>Salvar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7E1F',
    left: '8%',
    height: 40,
    width: 327,
    marginTop: 160,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',

    fontFamily: 'Cairo',
  },
});

export default saveButton;
