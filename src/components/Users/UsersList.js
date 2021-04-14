import React, {component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Linking,
  StyleSheet,
  FlatList,
} from 'react-native';

export default function FlatList(){
    return (
        data = {[1, 2,3,4,5,6,7,8]}, // Lista com os dados dos usuarios 
        // no caso data vai ser o numero de usuarios do banco 
        
        keyExtractor = {},// Retorna uma chave para ser usada na indexação dos itens da lista
        renderItem = {}, // Função que retorna o componente para renderizar na lista
    )
}