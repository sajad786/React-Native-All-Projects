
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SplashScreen from './src/Screens/SplashScreen/SplashScreen';
import Login from './src/Screens/Login/Login';
import Register from './src/Screens/Register/Register';
import Routes from './src/Navigation/Routes';



useEffect(() => {
 
  setTimeout(({navigation}) => {
    navigation.replace('SplashScreen')
  }, 2000);
}, [])


// create a component
const App = () => {
  return (
    <>
      <Routes/>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
