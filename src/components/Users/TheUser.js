import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SaveButton from '../SaveButton';
//<Image style={styles.image} source={require('./Assets/avatar.jpg')} />

const TheUser = () => {
  const [text, OnchangeText] = React.useState('Informe seu nome');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
      <View style={styles.card}>
        <Text>
          <Icon name="user" size={32} color="#0154AD" />
        </Text>
        <TextInput
          style={styles.name}
          OnchangeText={onChangeNumber}
          value={number}
          placeholder="informe seu nome"
        />
      </View>

      <View style={styles.card}>
        <Text>
          <Icon name="envelope-o" size={28} color="#0154AD" />
        </Text>
        <TextInput
          style={styles.name}
          OnchangeText={onChangeNumber}
          value={number}
          placeholder="informe seu email"
        />
      </View>

      <View style={styles.card}>
        <Text>
          <Icon name="phone" size={32} color="#0154AD" />
        </Text>
        <TextInput
          style={styles.name}
          OnchangeText={onChangeNumber}
          value={number}
          placeholder="informe seu telefone"
        />
      </View>
      <View style={styles.card}>
        <Text>
          <Icon name="calendar" size={32} color="#0154AD" />
        </Text>
        <TextInput
          style={styles.name}
          OnchangeText={onChangeNumber}
          value={number}
          placeholder="informe sua data de nascimento"
        />
      </View>

      <View style={styles.card}>
        <Text>
          <Icon name="id-card-o" size={32} color="#0154AD" />'
        </Text>
        <TextInput
          style={styles.name}
          OnchangeText={onChangeNumber}
          value={number}
          placeholder="informe seu CPF"
        />
      </View>
      <SaveButton />
    </View>
  );
};

// const insertText = () => {
//   return (
//     <TextInput
//       style={styles.name}
//       OnchangeText={onChangeNumber}
//       value={number}
//       placeholder="informe seu nome"
//     />
//   );
// };
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
