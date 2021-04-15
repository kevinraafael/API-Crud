import React from 'react';

import {Text, View} from 'react-native';

export default function aboutUser({route}) {
  return (
    <View>
      <Text> Tela 2 {route.params}</Text>
    </View>
  );
}
