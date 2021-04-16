import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TheUser from '../components/Users/TheUser';

const aboutUser = ({navigation}) => {
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
        <TheUser />

        <View
          style={{
            backgroundColor: Colors.white,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default aboutUser;
