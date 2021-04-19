import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyAppSvg from './Assets/avatar.jpg';
//<Image style={styles.image} source={require('./Assets/avatar.jpg')} />

const TheUser = () => {
  return (
    <View>
      <View style={styles.cardName}>
        <Text>
          <Icon name="user" size={32} color="#0154AD" />
        </Text>
        <Text style={styles.name}>Leonardo Augusto da Silva</Text>
        <Text>
          <Icon name="check" size={16} color="#7C8B99" />
        </Text>
      </View>

      <View style={styles.cardEmail}>
        <Text>
          <Icon name="envelope-o" size={28} color="#0154AD" />
        </Text>
        <Text style={styles.name}>social@incontre.com.br</Text>
      </View>

      <View style={styles.cardTelphone}>
        <Text>
          <Icon name="phone" size={32} color="#0154AD" />
        </Text>
        <Text style={styles.name}>67991318961</Text>
      </View>
      <View style={styles.cardCallendar}>
        <Text>
          <Icon name="calendar" size={32} color="#0154AD" />
        </Text>
        <Text style={styles.name}>24/09/1999</Text>
      </View>
      <View style={styles.cardCpf}>
        <Text>
          <Icon name="id-card-o" size={32} color="#0154AD" />'
        </Text>
        <Text style={styles.name}>001.***.***</Text>
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  cardTelphone: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  cardCallendar: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  cardCpf: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
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
