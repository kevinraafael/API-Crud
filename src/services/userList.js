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
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {getUsers, deleteUsers} from './usersOperations';
import {useIsFocused} from '@react-navigation/native';

export default function () {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let [removed, setRemove] = useState();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      start();
    }
  }, [isFocused]);

  async function start() {
    const request = await getUsers();
    if (request) {
      setData(request.users);
    }
    setLoading(false);
  }

  function remove(item) {
    console.log(item);
    deleteUsers(item);
    start();
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

  function renderItem({item}) {
    const id = item.id;
    //
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../components/Users/Assets/Perfil.jpeg')}
        />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditInformation', {
              user: item,
            })
          }>
          <Text style={styles.name}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => confirmUserDeletion(item)}>
          <Text>
            <Icon
              style={styles.delete}
              name="trash"
              size={17}
              color="#0154AD"
            />
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
  delete: {
    margin: 66,
    lineHeight: 60,
  },
});

//Mascara nos imputs, salvando,deletando
//react native masked  test
