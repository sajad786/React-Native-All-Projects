import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MemberShip, FeedBack, Offer, WhatsOn} from '../Screens';
// import NavigationStrings from '../Constants/NavigationStrings';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import NavigationStrings from '../Constants/NavigationStrings/NavigationStrings';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#327B5B',
            position: 'absolute',
            bottom: 0,
            left: 0,
            elevation: 0,
            // flex: 1,
            height: 70,
            paddingBottom: 10,
          },
        }}>
        <Tab.Screen
          name={NavigationStrings.MEMBERSHIP}
          component={MemberShip}
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <FontAwesome5Icon
                    name={'user-friends'}
                    style={styles.activeIcon}
                  />
                );
              } else {
                return (
                  <FontAwesome5Icon
                    name={'user-friends'}
                    style={styles.passiveIcon}
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <FontAwesome5Icon name={'box'} style={styles.activeIcon} />
                );
              } else {
                return (
                  <FontAwesome5Icon name={'box'} style={styles.passiveIcon} />
                );
              }
            },
          }}
          name={NavigationStrings.WHATSON}
          component={WhatsOn}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <FontAwesome5Icon name={'gift'} style={styles.activeIcon} />
                );
              } else {
                return (
                  <FontAwesome5Icon name={'gift'} style={styles.passiveIcon} />
                );
              }
            },
          }}
          name={NavigationStrings.OFFER}
          component={Offer}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <FontAwesome5Icon
                    name={'comment'}
                    style={styles.activeIcon}
                  />
                );
              } else {
                return (
                  <FontAwesome5Icon
                    name={'comment'}
                    style={styles.passiveIcon}
                  />
                );
              }
            },
          }}
          name={NavigationStrings.FEEDBACK}
          component={FeedBack}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  activeIcon: {
    color: '#000',
    fontSize: 25,
  },
  passiveIcon: {
    color: '#fff',
    fontSize: 25,
    
  },
});

export default TabStack;
