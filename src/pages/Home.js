/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

import Button from '../components/Button';
import UserCard from '../components/Users/UserCard';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import ShowUsers from '../services/userList';
const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#FFF',
    flex: 1,
  };
  const title = 'Usuários';
  //>
  return (
    <View style={backgroundStyle}>
      <Button />
      <ShowUsers />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}
      />
    </View>
  );
};

export default Home;
