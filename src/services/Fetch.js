import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import Button from '../components/Button';
export default function () {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch('http://192.168.42.146:3000/users')
      .then(resp => resp.json())
      .then(json => setDados(json.users))
      .catch(() => alert('Erro'))
      .finally(() => setCarregando(false));
  }, []);
  // arrumar para async await  essa funcao
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.cardView}
        data={dados}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require('../components/Users/Assets/image01.jpg')}
            />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
      />
    </View>
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
    width: 96,
    lineHeight: 30,
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
