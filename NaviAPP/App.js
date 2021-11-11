import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TextInput,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import imagePath from './assets/constants/imagePath';
import Routes from './navigation/Routes';

const MainStack = createNativeStackNavigator();
const RootStack = createBottomTabNavigator();

const HomeScreen = ({navigation, route}) => {
  console.log(route);
  // const {user} = route.params

  return (
    <SafeAreaView>
      <View>
        <Text>this is home screen</Text>
        <Text>Welcome </Text>
        <Button
          title="Go to about"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </SafeAreaView>
  );
};

const ModalScreen = ({navigation, route}) => {
  const [userName, setUserName] = React.useState('');
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Exit"
          onPress={() => navigation.navigate('mainStackHome')}
        />

        <Text style={{textAlign: 'center'}}>Sign Up Page </Text>

        <View style={styles.signUP}>
          <TextInput
            placeholder="User Name"
            value={userName}
            onChangeText={setUserName}
          />
          <TextInput secureTextEntry={true} placeholder="Password" />
        </View>
        <Button
          title="Go back"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Home',
              params: {user: userName},
              merge: true,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const AboutScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <Button title="go back" onPress={() => navigation.navigate('Home')} />
        <Button
          title="sign up "
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      <View>
        <Text>this is About screen</Text>
      </View>
    </SafeAreaView>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Page',
        }}
      />
      <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#1B98F5',
          position: 'absolute',
          // backgroundColor:'transparent'
          bottom: 20,
          height: 60,
          borderRadius: 50,
          // marginBottom:2,
          marginHorizontal: 16,
          // flex:1,
        },
      }}>
      <RootStack.Screen
        name="mainStackHome"
        component={MainStackScreen}
        options={
          ({title: 'Home'},
          {
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{
                    tintColor: focused ? 'red' : 'gray',
                  }}
                  source={imagePath.icHOME}
                />
              );
            },
          })
        }
      />
      <RootStack.Screen
        options={
          ({title: 'Sign UP'},
          {
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={{
                    tintColor: focused ? 'red' : 'gray',
                  }}
                  source={imagePath.IcSIGNUP}
                />
              );
            },
          })
        }
        name="SignUp"
        component={ModalScreen}
      />
    </RootStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const App = Drawer => {
  return (
    <NavigationContainer>
      {/* <RootStackScreen /> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen
          options={{headerShown: false}}
          name="user Access"
          component={RootStackScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUP: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  textinputy: {
    marginVertical: 5,
    backgroundColor: 'blue',
  },
});

//make this component available to the app
export default App;
