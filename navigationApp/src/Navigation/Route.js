import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Home,
    Contact,
    About
} from '../Screens';
import navigationStrings from '../Constants/navigationStrings';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            presentation: 'card',
            headerStyle: {backgroundColor: '#38CC77'},
            headerShown:false

          }}
          initialRouteName={navigationStrings.HOME}>
          <Stack.Screen
            name={navigationStrings.HOME}
            component={Home}></Stack.Screen>
          <Stack.Screen
            name={navigationStrings.ABOUT}
            component={About}></Stack.Screen>
          <Stack.Screen
            name={navigationStrings.CONTACT}
            component={Contact}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Route;

