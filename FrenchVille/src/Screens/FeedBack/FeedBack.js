import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput, ActivityIndicator, componentDidMount, Button, Modal} from 'react-native';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import SplashScreen from '../SplashScreen/SplashScreen'
import axios from 'axios';


class FeedBack extends React.Component {
  constructor() {
    super();
    this.state = {
      add: '',
      loader: true,
      show:false,
      info : []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loader:false});
    }, 2000);

    this.getapiData();
    

  }

    async getapiData() {
    const resp = await axios.get('https://facebook.github.io/react-native/movies.json')
    // this.setState({data:resp.movies})
     
       this.setState({info: resp.data.movies});
      
  }
 

   
      
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader navigation={this.props.navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {this.state.loader ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Button
                onPress={() => {
                  this.setState({show: true});
                }}
                title="Click to FeedBack"
              />
              <Modal visible={this.state.show} transparent={true}>
                <View style={{flex: 1, backgroundColor: '#000000aa'}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: 50,
                      marginVertical: 140,
                      backgroundColor: '#fff',
                      borderTopLeftRadius: 140,
                      borderBottomRightRadius: 140,
                    }}>
                    <Text >Here is fetched Api data below</Text>

                    {this.state.info.length > 0 ? (
                      <View style={{marginVertical:20, justifyContent:'center', alignItems:'center'}}>
                        {this.state.info.map(item => (
                          <Text>{item.title} {item.releaseYear} </Text>
                        ))}
                      </View>
                    ) : (
                      <Text>Loading</Text>
                    )}

                    <Button
                      style={{
                        flex: 1,
                        alignSelf: 'center',
                        width: 50,
                        height: 20,
                        marginHorizontal: 60,
                      }}
                      onPress={() => {
                        this.setState({show: false});
                      }}
                      title="Cancel"
                    />
                  </View>
                </View>
              </Modal>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

export default FeedBack;

// const FeedBack = (props) => {
//     const { navigation } = props;
//     const [data, setData] = useState('');

//     const componentDidMount = () => {
//       callApi();
//     };

//       async callApi ; () {
//       const resp = await fetch('https://randomuser.me/api/');
//       const respJson = resp.json();
//       setData({respJson});
//     }

//     return (
//       <SafeAreaView>
//         <ScrollView>
//           <CustomHeader navigation={navigation} />
//           <Text>This is feedback Screen </Text>
//           <Text>{setData.name.first}</Text>
//         </ScrollView>
//       </SafeAreaView>
//     );
// };

// // //////////////////////

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// export default FeedBack;
