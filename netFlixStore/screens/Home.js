import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {Fab, Icon, ScrollView} from 'native-base';


const Home = (navigation, route) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Here are list of seasons </Text>
            <Fab 
            style={{backgroundColor:"#5067ff"}}
            position="bottomRight"
            onPress={()=>{navigation.navigate('Add')}}
            >
                <Icon
                name="Add"/>
            </Fab>
        </ScrollView>
    )
}

export default Home;


const styles = StyleSheet.create({
    emptyContainer: {
        backgroundColor: '#1b262c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#1b262c',
        flex: 1,
    },
    heading: {
        textAlign: 'center',
        color: '#00b7c2',
        marginVertical: 15,
        marginHorizontal: 5,
    },
    actionButton: {
        marginLeft: 5,
    },
    seasonName: {
        color: '#fdcb9e',
        textAlign: 'justify',
    },
    listItem: {
        marginLeft: 0,
        marginBottom: 20,
    },
});