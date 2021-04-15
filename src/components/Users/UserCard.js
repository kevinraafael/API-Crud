import React, {Component} from 'react';
import {View, Text, To, Image, StyleSheet} from 'react-native';

const UserCard = () => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={require('./Assets/image01.jpg')} />
      <Text style={styles.name}>Amanda</Text>
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
