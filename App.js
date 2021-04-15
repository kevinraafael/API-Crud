import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Views/Home';
import aboutUser from './src/Views/aboutUser';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Text" component={Home} />
        <Stack.Screen name="aboutUser" component={aboutUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
