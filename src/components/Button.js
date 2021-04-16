import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Button = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        navigation.navigate('aboutUser');
      }}>
      <Text style={styles.text}>Adicionar</Text>
    </TouchableOpacity>
  );
};
//rota para outra tela ao pressionar botão
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7E1F',
    left: '8%',
    height: 40,
    width: 327,
    marginTop: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',

    fontFamily: 'Cairo',
  },
});

export default Button;
