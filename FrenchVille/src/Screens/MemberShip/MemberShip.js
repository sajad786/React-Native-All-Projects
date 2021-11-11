//import liraries
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

// create a component
const MemberShip = props => {
  const {navigation} = props;
  return (
    <ScrollView style={{flex: 1}}>
      <CustomHeader navigation={navigation} />
      <View style={styles.cardSection}>
        <View>
          <Text style={styles.heading}>Your MemberShip Card</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.card}>
            <Image style={styles.cardImage} source={ImagePath.MEMBERSHIPCARD} />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={{color: '#000', fontsize: 15}}>Tap card to scan</Text>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.innerBoxes}>
            <FontAwesome name={'money'} style={styles.Icon} />
            <Text style={{color: '#000', fontWeight: '600'}}>Points</Text>
            <Text style={styles.innerBoxText}>$ 5.50</Text>
          </View>
          <View style={styles.innerBoxes}>
            <FontAwesome name={'gift'} style={styles.Icon} />
            <Text style={{color: '#000', fontWeight: '600'}}>Offers</Text>
            <Text style={styles.innerBoxText}>1 available</Text>
          </View>
          <View style={styles.innerBoxes}>
            <FontAwesome name={'heart'} style={styles.Icon} />
            <Text style={{color: '#000', fontWeight: '600'}}>Tier</Text>
            <Text style={styles.innerBoxText}>Ruby</Text>
          </View>
          <View style={styles.innerBoxes}>
            <FontAwesome name={'user'} style={styles.Icon} />
            <Text style={{color: '#000', fontWeight: '600'}}>Stats</Text>
            <Text style={styles.innerBoxText}>Member Info </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  cardSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  card: {
    borderColor: '#327B5B',
    borderWidth: 10,
    borderRadius: 2,
    marginBottom: 8,
  },
  cardImage: {
    borderColor: '#99BD89',
    width: 300,
    borderWidth: 1,
    borderRadius: 2,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '85%',
    flex: 1,
    marginTop: 25,
  },
  innerBoxes: {
    width: '45%',
    height: 120,
    margin: 6,
    backgroundColor: '#E1DDD6',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  Icon: {
    color: '#fff',
    fontSize: 60,
    color: '#3D6151',
  },

  innerBoxText: {
    marginTop: 8,
  },
});

//make this component available to the app
export default MemberShip;
