import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
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
    left: '7%',
    height: 40,
    width: 327,
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Button;
