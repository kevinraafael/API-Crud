import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const UserCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={require('./Assets/image01.jpg')} />
      <TouchableOpacity onPress={() => navigation.navigate('aboutUser')}>
        <Text style={styles.name}>Amanda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#0154AD',
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50,
    margin: 10,
  },
});

export default UserCard;
