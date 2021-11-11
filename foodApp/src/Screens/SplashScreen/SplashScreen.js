
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../Assets/images/splashLogo.jpg')}
        />

        {/* <Text>SplashScreen</Text> */}
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default SplashScreen;
