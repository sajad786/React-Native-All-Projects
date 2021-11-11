import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Style';

const About = () => {
    return (
        <View>
            <SafeAreaView>
                <HeaderComponent
                    goBack={() => { navigation.goBack() }}
                    text="About screen"
                    homePage={() => { navigation.navigate(navigationStrings.HOME) }}
                />
                <Text>{title}</Text>
                <Text>About us </Text>
            </SafeAreaView>
        </View>
    )
}

export default About;

