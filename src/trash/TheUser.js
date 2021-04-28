import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//<Image style={styles.image} source={require('./Assets/avatar.jpg')} />
import {withFormik} from 'formik';

const usersOperations = require('../services/usersOperations');
const Form = props => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text>
        <Icon name="user" size={32} color="#0154AD" />
      </Text>
      <TextInput
        value={props.values.name}
        onChangeText={text => props.setFieldValue('name', text)}
        placeholder="informe seu nome"
      />
    </View>
    <View style={styles.card}>
      <Icon name="envelope-o" size={28} color="#0154AD" />
      <TextInput
        value={props.values.email}
        onChangeText={text => props.setFieldValue('email', text)}
        placeholder=" Informe seu email"
      />
    </View>
    <View style={styles.card}>
      <Icon name="phone" size={28} color="#0154AD" />
      <TextInput
        value={props.values.telefone}
        onChangeText={text => props.setFieldValue('telefone', text)}
        placeholder=" Informe seu telefone"
      />
    </View>

    <View style={styles.card}>
      <Icon name="calendar" size={28} color="#0154AD" />
      <TextInput
        value={props.values.datadenascimento}
        onChangeText={text => props.setFieldValue('datadenascimento', text)}
        placeholder=" Informe sua data de nascimento"
      />
    </View>

    <View style={styles.card}>
      <Icon name="id-card-o" size={28} color="#0154AD" />
      <TextInput
        value={props.values.cpf}
        onChangeText={text => props.setFieldValue('cpf', text)}
        placeholder=" Informe seu CPF"
      />
    </View>
    <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
      <Text style={styles.buttonText}>Salvar</Text>
    </TouchableOpacity>
  </View>
);

export default withFormik({
  //   mapPropsToValues: () => ({email: '', password: '',cpf: '',name:'',datadenascimento:'',
  // }),

  handleSubmit: values => {
    console.log(values);
    // const user = JSON.stringify(values);
    // console.log(user);
    usersOperations.postUsers(values); // ao clicar em salvar adicionar um novo usuario
  },
})(Form);

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
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',

    fontFamily: 'Cairo',
  },
});

//export default TheUser;

//fetch nativo
//axios
