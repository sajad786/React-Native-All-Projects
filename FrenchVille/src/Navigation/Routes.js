import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { LogIn } from '../Screens';
import NavigationStrings from '../Constants/NavigationStrings/NavigationStrings';
import TabStack from './TabStack';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import {AuthContext} from './AuthProvider'
import AuthStack from './AuthStack'


const Drawer = createDrawerNavigator();

export default function () {

  // const [user, setUser] = useState(AuthContext);
  // const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    }

  return (
    <NavigationContainer>

      <Drawer.Navigator
      screenOptions={{
        headerShown:false
      }}
      drawerContent={props => <CustomDrawer {...props} />} >
        <Drawer.Screen name={NavigationStrings.TABSTACK} component={TabStack} />
        <Drawer.Screen name={NavigationStrings.LOGIN} component={LogIn} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
