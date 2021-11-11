import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
// import ImagePath from '../../Constants/ImagePath/ImagePath';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePath from '../../Constants/ImagePath/ImagePath';

const Offer = props => {
  const [searchValue, setSearchValue] = React.useState('');
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} />
      <View style={styles.formContent}>
        <AntDesign style={styles.icon} name={'search1'} />
        <TextInput
          placeholder="Search for events & activities"
          placeholderTextColor="#787878"
          value={searchValue}
          onChangeText={searchValue => setSearchValue(searchValue)}
          style={styles.formInput}
        />
      </View>
      <ScrollView >
        <View style={styles.boxContainer}>
          <View style={styles.innerBoxes}>
            <TouchableOpacity>
              <Image style={styles.img} source={ImagePath.WHATSONIMG1} />

              <View style={styles.texty}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  Barra Bucks Bonaza
                </Text>
                <Text style={styles.innerBoxText}>Friday & Saturday </Text>
                <Text style={styles.innerBoxText}>3rd Sept - 10th Oct </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.innerBoxes}>
            <TouchableOpacity>
              <Image style={styles.img} source={ImagePath.WHATSONIMG2} />

              <View style={styles.texty}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  Barra Bucks Bonaza
                </Text>
                <Text style={styles.innerBoxText}>Friday & Saturday </Text>
                <Text style={styles.innerBoxText}>3rd Sept - 10th Oct </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.innerBoxes}>
            <TouchableOpacity>
              <Image style={styles.img} source={ImagePath.WHATSONIMG3} />

              <View style={styles.texty}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  Barra Bucks Bonaza
                </Text>
                <Text style={styles.innerBoxText}>Friday & Saturday </Text>
                <Text style={styles.innerBoxText}>3rd Sept - 10th Oct </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.innerBoxes}>
            <TouchableOpacity>
              <Image style={styles.img} source={ImagePath.WHATSONIMG4} />

              <View style={styles.texty}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  Barra Bucks Bonaza
                </Text>
                <Text style={styles.innerBoxText}>Friday & Saturday </Text>
                <Text style={styles.innerBoxText}>3rd Sept - 10th Oct </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.innerBoxes}>
            <TouchableOpacity>
              <Image style={styles.img} source={ImagePath.WHATSONIMG1} />

              <View style={styles.texty}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  Barra Bucks Bonaza
                </Text>
                <Text style={styles.innerBoxText}>Friday & Saturday </Text>
                <Text style={styles.innerBoxText}>3rd Sept - 10th Oct </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.innerBoxes}>
            <TouchableOpacity>
              <Image style={styles.img} source={ImagePath.WHATSONIMG2} />

              <View style={styles.texty}>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  Barra Bucks Bonaza
                </Text>
                <Text style={styles.innerBoxText}>Friday & Saturday </Text>
                <Text style={styles.innerBoxText}>3rd Sept - 10th Oct </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  formContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    marginVertical: 25,
    marginHorizontal: '5%',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  icon: {
    width: '10%',
    fontSize: 20,
    marginLeft: 15,
    color: '#327B5B',
  },
  formInput: {
    width: '85%',
  },

  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
    paddingBottom:70,
    // marginTop: 45,
  },
  innerBoxes: {
    height: 230,
    width: '45%',
    margin: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // padding:5,
  },

  img: {
    height: 155,
    width: 145,
  },

  innerBoxText: {
    marginTop: 1,
    fontSize: 10,
  },

  texty: {
    alignSelf: 'flex-start',
    marginLeft: 3,
    marginTop: 5,
  },
});

export default Offer;
