import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    onPress,
    Image
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ImagePath from '../../Constants/ImagePath/ImagePath';


const CustomHeader = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <AntDesign name={'menuunfold'} style={styles.Icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerItem}>
          <TouchableOpacity>
            <Image source={ImagePath.icAPPWHITE} style={styles.AppIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerItem}>
          <TouchableOpacity>
            <FontAwesome name={'calendar'} style={styles.Icon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: '#327B5B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        // paddingVertical:15,
    },
    Icon: {
        color: '#fff',
        fontSize: 35,
    },
    AppIcon: {
      height: 50,
      width: 80,
    },
});

export default CustomHeader;
