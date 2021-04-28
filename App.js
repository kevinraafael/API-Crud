import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home';
import aboutUser from './src/pages/aboutUser';
import EditInformation from './src/pages/EditInformation';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.backgroundColor}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Usuários',
            headerTitleStyle: {alignSelf: 'center'},
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#0154AD',
            },
          }}
        />
        <Stack.Screen
          name="aboutUser"
          component={aboutUser}
          options={{
            title: 'Editar',
            headerTitleStyle: {
              alignSelf: 'center',
              right: '9%',
              textAlign: 'center',
            },
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#0154AD',
            },
          }}
        />
        <Stack.Screen
          name="EditInformation"
          component={EditInformation}
          options={{
            title: 'Editar',
            headerTitleStyle: {
              alignSelf: 'center',
              right: '9%',
              textAlign: 'center',
            },
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#0154AD',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
  },
  header: {
    fontSize: 18,
    color: '#FFFFFF',
    height: 64,
    fontWeight: 'bold',
    //top: 76,
    //left: 21,
    //position: 'absolute',
    marginBottom: 0,
    textAlign: 'center',
    lineHeight: 56,
    backgroundColor: '#0154AD',
  },
  backgroundColor: {
    backgroundColor: '#0154AD',
  },
});
