import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyAppSvg from './Assets/avatar.jpg';
//<Image style={styles.image} source={require('./Assets/avatar.jpg')} />

const TheUser = () => {
  return (
    <View style={styles.cardName}>
      <Text>
        <Icon name="user" size={32} color="#0154AD" />
      </Text>

      <Text style={styles.name}>Leonardo Augusto da Silva</Text>
      <View style={styles.cardEmail}>
        <Text>
          <Icon name="envelope-o" size={28} color="#0154AD" />
        </Text>
        <Text style={styles.nameEmail}>social@incontre.com.br</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardName: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  cardEmail: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: 450,
    margin: 10,
    marginVertical: 35,
    right: '3%',
  },
  name: {
    fontSize: 16,
    color: '#7C8B99',

    fontFamily: 'cairo',
    left: '30%',
  },
  nameEmail: {
    fontSize: 16,
    color: '#7C8B99',
    left: '55%',
    fontFamily: 'cairo',
  },
});

export default TheUser;
