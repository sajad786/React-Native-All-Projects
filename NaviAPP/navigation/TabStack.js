
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Button,
    TextInput,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import imagePath from '../assets/constants/imagePath';


const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();





const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'gray',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#1B98F5',
                    position: 'absolute',
                    // backgroundColor:'transparent'
                    bottom: 20,
                    height: 60,
                    borderRadius: 50,
                    // marginBottom:2,
                    marginHorizontal: 16,
                    // flex:1,
                },
            }}>
            <Tab.Screen
                name="mainStackHome"
                component={MainStackScreen}
                options={
                    ({ title: 'Home' },
                    {
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    style={{
                                        tintColor: focused ? 'red' : 'gray',
                                    }}
                                    source={imagePath.icHOME}
                                />
                            );
                        },
                    })
                }
            />
            <Tab.Screen
                options={
                    ({ title: 'Sign UP' },
                    {
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    style={{
                                        tintColor: focused ? 'red' : 'gray',
                                    }}
                                    source={imagePath.IcSIGNUP}
                                />
                            );
                        },
                    })
                }
                name="SignUp"
                component={ModalScreen}
            />
        </Tab.Navigator>
    );
};






export default TabStack;
