import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderComponent = ({goBack = () => {}, text, homePage=()=>{}}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#38CC77',
      }}>
      <TouchableOpacity onPress={goBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
      <Text>{text}</Text>

      <TouchableOpacity onPress={homePage}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
