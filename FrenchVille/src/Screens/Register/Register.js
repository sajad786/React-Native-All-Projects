import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePath from '../../Constants/ImagePath/ImagePath';

const Register = () => {
    const [userName, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.logo}>
                        <Image source={ImagePath.icAPP} style={styles.logoImage} />
                    </View>
                    <View style={styles.form}>
                        <View style={styles.formContent}>
                            <AntDesign style={styles.icon} name={'user'} />
                            <TextInput
                                placeholder="Membership Number"
                                placeholderTextColor="#787878"
                                value={userName}
                                onChangeText={userName => setUserName(userName)}
                                style={styles.formInput}
                            />
                        </View>
                        <View style={styles.formContent}>
                            <Fontisto style={styles.icon} name={'email'} />
                            <TextInput
                                placeholder="Email Address"
                                placeholderTextColor="#787878"
                                value={email}
                                onChangeText={email => setEmail(email)}
                                style={styles.formInput}
                            />
                        </View>
                        <View style={styles.formContent}>
                            <SimpleLineIcons style={styles.icon} name={'lock'} />
                            <TextInput
                                placeholder="Pin"
                                secureTextEntry={true}
                                placeholderTextColor="#787878"
                                value={password}
                                onChangeText={password => setPassword(password)}
                                style={styles.formInput}
                            />
                        </View>

                        <View style={(styles.formContent, { marginTop: 40 })}>
                            <Button color="#327B5B" title="Login" />
                        </View>

                        <View style={styles.bottomText}>
                            <Text>Contact Us to</Text>
                            <TouchableOpacity onPress={() => { }}>
                                <Text style={{ color: '#327B5B', fontWeight: '600' }}>
                                   
                                    Setup Access
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    logoImage: {
        Width: 43,
        Height: 27,
        alignSelf: 'center',
    },
    form: {
        height: 'auto',
        width: '70%',
        justifyContent: 'center',
        marginTop: 25,
    },
    formContent: {
        borderBottomColor: '#787878',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        marginBottom: 15,
    },

    icon: {
        width: '15%',
        fontSize: 20,
        marginLeft: 5,
        color: '#327B5B',
    },
    formInput: {
        width: '80%',
    },
    LoginButton: {
        width: '100%',
    },
    bottomText: {
        marginTop: 215,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default Register;
