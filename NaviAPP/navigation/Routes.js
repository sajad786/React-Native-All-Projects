import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomDrawer from '../components/customDrawer';
import TabStack from './TabStack';
import About from '../Screens/About/About';




// Drawer = createDrawerNavigator();

export default function (Drawer) {
    return (
      <>
        <Drawer.Navigator>
          <Drawer.Screen name="TabStack" component={TabStack} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </>
    );
};

