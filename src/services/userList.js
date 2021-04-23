import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';

import {getUsers} from './usersOperations';
export default function () {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  function renderItem({item}) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../components/Users/Assets/Perfil.jpeg')}
        />
        <Text style={styles.name}>{item.name}</Text>
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
});

//Mascara nos imputs, salvando,deletando
//react native masked  test
