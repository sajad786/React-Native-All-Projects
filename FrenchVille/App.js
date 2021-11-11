import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LogIn } from './src/Screens';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import TabStack from './src/Navigation/TabStack';
import { NavigationContainer } from '@react-navigation/native';
import CustomHeader from './src/Components/CustomHeader/CustomHeader';
import Routes from './src/Navigation/Routes';
import HomePageHeader from './src/Components/Header/HomePageHeader'



const App = () => {
  return (
    <>
      <Routes />
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});


export default App;
