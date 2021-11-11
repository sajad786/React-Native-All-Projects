//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  DataDetectorTypes,
  ScrollView,
} from 'react-native';

// create a component
const Login = ({navigation}) => {
  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.formContent}>
            <TextInput
              placeholder="Email Id "
              placeholderTextColor="#787878"
              value={userName}
              onChangeText={userName => setUserName(userName)}
              style={styles.formInput}
            />
          </View>
          <View style={styles.formContent}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#787878"
              value={password}
              onChangeText={password => setPassword(password)}
              style={styles.formInput}
            />
          </View>

          <View style={(styles.formContent, {marginTop: 40})}>
            <Button color="#327B5B" title="Login" />
          </View>

          <View style={styles.bottomText}>
            <Text>Not Registers yet ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('registered')}>
              <Text style={{color: '#327B5B', fontWeight: '600'}}>
                Register Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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
  form: {
    height: 'auto',
    width: '70%',
    justifyContent: 'center',
    marginTop: 70,
  },
  bottomText: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Login;
