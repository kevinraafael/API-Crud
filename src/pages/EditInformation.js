import {useNavigation, useRoute} from '@react-navigation/core';
import React from 'react';
import {useState, useEffect} from 'react';

import {TextInputMask} from 'react-native-masked-text';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import UserAvatar from '../components/Users/Assets/Icons/avatar.svg';
import Calendar from '../components/Users/Assets/Icons/encontro.svg';
import Email from '../components/Users/Assets/Icons/email.svg';
import Phone from '../components/Users/Assets/Icons/phone.svg';
import Cpf from '../components/Users/Assets/Icons/CPF.svg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {updateUser, postUsers} from '../services/usersOperations';

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

  function newUserOrUpdate() {
    const requestUser = route.params
      ? updateUser(user.id, user)
      : postUsers(user);
    return requestUser;
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={styles.card}>
              <Text>
                <UserAvatar name="user" size={32} color="#0154AD" />
              </Text>
              <TextInput
                style={styles.allText}
                value={user.name}
                onChangeText={name => setUser({...user, ...{name}})}
                placeholder="Insira o teu nome"
              />
            </View>
            <View style={styles.card}>
              <Email name="envelope-o" size={28} color="#0154AD" />
              <TextInput
                style={styles.allText}
                value={user.email}
                onChangeText={email => setUser({...user, ...{email}})}
                placeholder=" Informe seu email"
              />
            </View>
            <View style={styles.card}>
              <Phone name="phone" size={28} color="#0154AD" />
              <TextInputMask
                style={styles.allText}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                value={user.telefone}
                onChangeText={telefone => setUser({...user, ...{telefone}})}
                placeholder=" Informe seu telefone"
              />
            </View>

            <View style={styles.card}>
              <Calendar name="calendar" size={28} color="#0154AD" />
              <TextInputMask
                style={styles.allText}
                type={'datetime'}
                options={{
                  format: 'YYYY/MM/DD',
                }}
                value={user.datadenascimento}
                onChangeText={datadenascimento =>
                  setUser({...user, ...{datadenascimento}})
                }
                placeholder=" Informe sua data de nascimento"
              />
            </View>

            <View style={styles.card}>
              <Cpf style={styles.cpfS} width={35} height={35} />
              <TextInputMask
                style={styles.allText}
                type={'cpf'}
                value={user.cpf}
                onChangeText={cpf => setUser({...user, ...{cpf}})}
                placeholder=" Informe seu CPF"
              />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => newUserOrUpdate() && navigation.navigate('Home')}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: Colors.white,
            }}
          />
        </KeyboardAvoidingView>
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
  allText: {
    paddingLeft: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',

    fontFamily: 'Cairo',
  },
  cpfS: {
    padding: 5,
  },
});

export default AboutUser;

// function handleSubmit = (values) => {
//   console.log(values);
//   // const user = JSON.stringify(values);
//   // console.log(user);
//   usersOperations.postUsers(values); // ao clicar em salvar adicionar um novo usuario
// }
