
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import {
  
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,
  H3,
  Button,
  Wrap,
  Circle,
  Title,
  NativeBaseProvider,
  Heading,
} from 'native-base';

import Icons from './components/Icons';

import Snackbar from 'react-native-snackbar';
import { grid, styles } from 'styled-system';

const itemArray = new Array(9).fill('empty');

const App = () =>{
  return(
    <View>
      <Text>Hello</Text>
    </View>
  )
}

export default App;


styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    marginTop: 20,
    backgroundColor: '#4652B3',
    paddingVertical: 10,
  },
  headings: {
    backgroundColor: '#333945',
    padding: 5,
    color: 'white',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
});