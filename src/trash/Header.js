import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
