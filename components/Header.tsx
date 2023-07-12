import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import PersonImage from '../assets/images/user-5.jpg';

function Header({navigation}: any) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon size={24} color={'#000'} name="bar-chart" />
          <Text style={styles.headerText}>Dashboard</Text>
        </View>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View
            style={{
              height: 40,
              width: 40,
              borderWidth: 1,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFF',
              borderColor: '#e8ebeeff',
              padding: 5,
            }}>
            <EntypoIcon style={{fontSize: 20}} name="bell" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View
            style={{
              height: 40,
              width: 40,
              borderWidth: 1,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFF',
              borderColor: '#e8ebeeff',
              padding: 5,
              marginLeft: 5,
            }}>
            <Image
              style={{width: 40, height: 40, borderRadius: 20}}
              source={Image.resolveAssetSource(PersonImage)}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 70,
    backgroundColor: '#FFF',
    borderBottomColor: '#e8eaedff',
    borderBottomWidth: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
