import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Button = ({title}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text>Adicionar</Text>
    </TouchableOpacity>
  );
};
//rota para outra tela ao pressionar botão
const styles = StyleSheet.create({
  button: {
    flex: 1,
    color: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: '#FF7E1F',
    height: 40,
    lineHeight: 327,
  },
});

export default Button;
