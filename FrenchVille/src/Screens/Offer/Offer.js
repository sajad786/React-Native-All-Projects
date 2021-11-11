import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import ImagePath from '../../Constants/ImagePath/ImagePath';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Offer = props => {
  const {navigation} = props;
  return (
    <ScrollView style={{flex: 1}}>
      <CustomHeader navigation={navigation} />
      <View>
        <Text style={styles.heading}>My Offers</Text>
      </View>

      <View style={styles.offerTitle}>
        <View style={styles.OfferImageBox}>
          <Image
            style={{
              width: 79,
              height: 57,
              justifyContent: 'center',
              alignSelf: 'center',
              padding: 5,
            }}
            source={ImagePath.MYOFFERLOGO}
          />
        </View>
        <View style={styles.UserDetailsText}>
          <Text style={styles.texty}>DAVID WARNER</Text>
          <Text style={styles.texty}>MEMBER ID: 94435</Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.innerBoxes}>
          <FontAwesome name={'gift'} style={styles.Icon} />
          <Text style={{color: '#000', fontWeight: '600'}}>Voucher One</Text>
          <Text style={styles.innerBoxText}>$ 5.50</Text>
        </View>
        <View style={styles.innerBoxes}>
          <FontAwesome name={'gift'} style={styles.Icon} />
          <Text style={{color: '#000', fontWeight: '600'}}>Voucher Two</Text>
          <Text style={styles.innerBoxText}>1 available</Text>
        </View>
        <View style={styles.innerBoxes}>
          <FontAwesome name={'gift'} style={styles.Icon} />
          <Text style={{color: '#000', fontWeight: '600'}}>Voucher Three</Text>
          <Text style={styles.innerBoxText}>Ruby</Text>
        </View>
        <View style={styles.innerBoxes}>
          <FontAwesome name={'gift'} style={styles.Icon} />
          <Text style={{color: '#000', fontWeight: '600'}}>Voucher Four</Text>
          <Text style={styles.innerBoxText}>Member Info </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },

  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginVertical: 15,
    alignSelf: 'center',
  },

  offerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'green',
    marginHorizontal: 20,
    padding: 10,
    flex: 1,
    height: 80,
    backgroundColor: '#3D6151',
  },
  OfferImageBox: {
    width: 111,
    height: 80,
    padding: 10,
    backgroundColor: '#99BD89',
    borderColor: '3D6151',
    borderWidth: 1,
  },
  UserDetailsText: {
    width: '75%',
    // paddingRight:10,
  },
  texty:{
      color:'#fff',
    fontWeight:'600',
    marginLeft:10,
    marginVertical:2
  },

    boxContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      flex: 1,
      marginTop: 45,
    
    },
    innerBoxes: {
    
      height: 159,
      width:158,
      margin: 6,
      backgroundColor: '#E1DDD6',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    Icon: {
      color: '#fff',
      fontSize: 80,
      color: '#3D6151',
    },

    innerBoxText: {
      marginTop:1,
    },
});

export default Offer;
