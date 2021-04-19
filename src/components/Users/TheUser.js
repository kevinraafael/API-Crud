import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SaveButton from '../SaveButton';
//<Image style={styles.image} source={require('./Assets/avatar.jpg')} />

const TheUser = () => {
  return (
    <View>
      <View style={styles.card}>
        <Text>
          <Icon name="user" size={32} color="#0154AD" />
        </Text>
        <Text style={styles.name}>informe seu nome</Text>
        <Text />
      </View>

      <View style={styles.card}>
        <Text>
          <Icon name="envelope-o" size={28} color="#0154AD" />
        </Text>
        <Text style={styles.name}>social@incontre.com.br</Text>
        {/* <Text style={styles.checkItem2}>
          <Icon name="check" size={16} color="#7C8B99" />
        </Text> */}
      </View>

      <View style={styles.card}>
        <Text>
          <Icon name="phone" size={32} color="#0154AD" />
        </Text>
        <Text style={styles.name}>67991318961</Text>
        {/* <Text style={styles.checkItem3}>
          <Icon name="check" size={16} color="#7C8B99" />
        </Text> */}
      </View>
      <View style={styles.card}>
        <Text>
          <Icon name="calendar" size={32} color="#0154AD" />
        </Text>
        <Text style={styles.name}>24/09/1999</Text>
        {/* <Text style={styles.checkItem4}>
          <Icon name="check" size={16} color="#7C8B99" />
        </Text> */}
      </View>

      <View style={styles.card}>
        <Text>
          <Icon name="id-card-o" size={32} color="#0154AD" />'
        </Text>
        <Text style={styles.name}>001.***.***</Text>
        {/* <Text style={styles.checkItem4}>
          <Icon name="check" size={16} color="#7C8B99" />
        </Text> */}
      </View>
      <SaveButton />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
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
  // input: {
  //   backgroundColor: 'blue',
  //   left: '30%',
  // },

  /*checkItem1: {
    left: '370%',
  },
  checkItem2: {
    left: '400%',
  },
  checkItem3: {
    marginStart: '370%',
  },
  checkItem4: {
    marginStart: 200,
  },*/
});

export default TheUser;

//fetch nativo
//axios
