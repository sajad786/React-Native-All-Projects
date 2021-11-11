import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import ConstantStrings format '../Constants/'
import { 
    LogIn,
    Register,
} from '../Screens';
import { format } from 'jest-validate';
import NavigationStrings from '../Constants/NavigationStrings/NavigationStrings';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={NavigationStrings.LOGIN}>
            <Stack.Screen name={NavigationStrings.LOGIN} component={LogIn} />
            <Stack.Screen name={NavigationStrings.REGISTER} component={Register} />
        </Stack.Navigator>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default AuthStack;
