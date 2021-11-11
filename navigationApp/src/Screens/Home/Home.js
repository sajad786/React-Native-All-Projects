import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import navigationStrings from '../../Constants/navigationStrings';
import styles from './Style';

const Home = ({navigation}) => {

    const goToContact = ()=>{
        navigation.navigate(navigationStrings.CONTACT, {title:"i have been added in the contact screen"})}
    
    return (
        <View style={styles.container}>
            
            <Text>Home Screen</Text>
            <Button
            onPress={goToContact}
            title="contact us"
            />
        </View>
    )
}

export default Home;

