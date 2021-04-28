import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import UserList from '../services/userList';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import getUsers from '../services/usersOperations';
import {updateUser} from '../services/usersOperations';

//Terminar de passar os outros parametros
//e arrumar a funcao no botao para realizar o update

const AboutUser = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [user, setUser] = useState(
    route.params
      ? route.params.user
      : {
          name: '',
          email: '',
          telefone: '',
        },
  );
  console.log(route.params);
  const backgroundStyle = 'red';

  const title = 'Usuários';
  //const namebut = 'Adicionar';
  //<Header title={title} />
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>
              <Icon name="user" size={32} color="#0154AD" />
            </Text>
            <TextInput
              value={user.name}
              onChangeText={name => setUser({...user, ...{name}})}
              placeholder="Insira o teu nome"
            />
          </View>
          <View style={styles.card}>
            <Icon name="envelope-o" size={28} color="#0154AD" />
            <TextInput
              value={user.email}
              onChangeText={email => setUser({...user, ...{email}})}
              placeholder=" Informe seu email"
            />
          </View>
          <View style={styles.card}>
            <Icon name="phone" size={28} color="#0154AD" />
            <TextInput
              value={user.telefone}
              onChangeText={telefone => setUser({...user, ...{telefone}})}
              placeholder=" Informe seu telefone"
            />
          </View>

          <View style={styles.card}>
            <Icon name="calendar" size={28} color="#0154AD" />
            <TextInput
              value={user.datadenascimento}
              onChangeText={datadenascimento =>
                setUser({...user, ...{datadenascimento}})
              }
              placeholder=" Informe sua data de nascimento"
            />
          </View>

          <View style={styles.card}>
            <Icon name="id-card-o" size={28} color="#0154AD" />
            <TextInput
              value={user.cpf}
              onChangeText={cpf => setUser({...user, ...{cpf}})}
              placeholder=" Informe seu CPF"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateUser(user.id, user)}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
          }}
        />
      </ScrollView>
    </SafeAreaView>
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

export default AboutUser;

// function handleSubmit = (values) => {
//   console.log(values);
//   // const user = JSON.stringify(values);
//   // console.log(user);
//   usersOperations.postUsers(values); // ao clicar em salvar adicionar um novo usuario
// }
