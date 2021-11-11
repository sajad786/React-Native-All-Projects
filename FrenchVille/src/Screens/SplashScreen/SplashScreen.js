
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ImagePath from '../../Constants/ImagePath/ImagePath';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={{height:100, width:100}} source ={ImagePath.icSPLASHSCREEN} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});


export default SplashScreen;
