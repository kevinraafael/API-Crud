import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getUsers, deleteUsers} from './usersOperations';
export default function () {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let [removed, setRemove] = useState();

  useEffect(() => {
    async function start() {
      const request = await getUsers();
      if (request) {
        setData(request.users);
      }
      setLoading(false);
    }
    start();
  }, []);
  function remove(item) {
    console.log(item);
    return deleteUsers(item);
  }

  function confirmUserDeletion(item) {
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário ?', [
      {
        text: 'sim',

        onPress() {
          //console.warn('delete ' + item.id),
          remove(item.id);
        },
      },
      {
        text: 'nao',
      },
    ]);
  }
  function getActions(item) {
    return (
      <TouchableOpacity onPress={() => deleteUsers(item.id)}>
        <Text>
          <Icon name="trash" size={24} color="#0154AD" />
        </Text>
      </TouchableOpacity>
      // onPress ={() =>baseProps.}
    );
  }
  function renderItem({item}) {
    const id = item.id;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../components/Users/Assets/Perfil.jpeg')}
        />
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity onPress={() => confirmUserDeletion(item)}>
          <Text>
            <Icon name="trash" size={24} color="#0154AD" />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.cardView}
      data={data}
      keyExtractor={({id}) => id}
      renderItem={renderItem}
    />
  );
}
//
//<Text style={styles.name}>{item.name}</Text>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,

    backgroundColor: '#FFFF',
  },
  name: {
    fontSize: 16,
    color: '#0154AD',
    fontWeight: 'bold',
    fontFamily: 'Cairo',
    lineHeight: 60,
    width: 177,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 41,
    height: 41,
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
  delete: {},
});

//Mascara nos imputs, salvando,deletando
//react native masked  test
