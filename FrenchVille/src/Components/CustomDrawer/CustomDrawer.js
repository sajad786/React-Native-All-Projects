import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ImagePath from '../../Constants/ImagePath/ImagePath';
import NavigationStrings from '../../Constants/NavigationStrings/NavigationStrings';

function CustomDrawer(props) {
  const {navigation} = props;
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        // backgroundColor: 'rgba(0,0,0,0.7)',
        backgroundColor: 'rgba(50,123,91,0.7)',
      }}>
      {/* <DrawerItemList {...props} /> */}

      <View
        style={{
          // backgroundColor: 'rgba(0,0,0,0.5)',
          backgroundColor: 'rgba(50,123,91,0.5)',
          alignItems: 'center',
        }}>
        <Text
          onPress={() => navigation.closeDrawer()}
          style={{
            color: 'white',
            marginTop: 8,
            fontWeight: '800',
            alignSelf: 'flex-end',
            marginRight: 16,
          }}>
          close{' '}
        </Text>
        <View style={{paddingVertical: 24}}>
          <Image
            source={{
              uri: 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg',
            }}
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
            }}
          />
          <Text
            style={{
              color: 'white',
              marginTop: 8,
              fontWeight: '800',
            }}>
            user Name
          </Text>
        </View>
      </View>

      <DrawerItem
        label="Home"
        labelStyle={{color: 'white', fontWeight: '400'}}
        onPress={() => navigation.navigate(NavigationStrings.MEMBERSHIP)}

        // icon={() => <Image source={ImagePath.icHome} />}
      />
      <DrawerItem
        label="Login"
        onPress={() => navigation.navigate(NavigationStrings.LOGIN)}
        // icon={() => <Image source={ImagePath.icPROFILE} />}
      />
      <DrawerItem
        label="Profile"
        // onPress={() => navigation.navigate('Settings')}
        // icon={() => <Image source={ImagePath.icSETTING} />}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
