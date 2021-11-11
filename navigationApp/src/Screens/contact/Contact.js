import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import HeaderComponent from '../../Components/HeaderComponent';
import navigationStrings from '../../Constants/navigationStrings';
import styles from './Style';

const Contact = ({navigation, route}) => {
  const {title} = route.params
  return (
    <View>
      <SafeAreaView>
        <HeaderComponent
        goBack={()=>{navigation.goBack()}}
        text="Contact screen"
        homePage={()=>{navigation.navigate(navigationStrings.HOME)}}
        />
      <Text>{title}</Text>
      <Text>Contact screen</Text>
      </SafeAreaView>
    </View>
  );
};

export default Contact;
