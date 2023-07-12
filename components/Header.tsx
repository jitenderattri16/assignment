import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import PersonImage from '../assets/images/user-5.jpg';

function Header({route, navigation}: any) {
  console.log({route});

  return (
    <View
      style={[
        styles.header,
        {backgroundColor: route?.name === 'Home' ? '#F0F0F0' : '#fff'},
      ]}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.dashboard}>
          <Icon size={24} color={'#000'} name="bar-chart" />
          <Text style={styles.headerText}>Dashboard</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.row}>
        <View style={styles.notificationIcon}>
          <View style={styles.absoluteBadge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
          <EntypoIcon style={styles.bellIcon} name="bell" />
        </View>

        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
            source={Image.resolveAssetSource(PersonImage)}
          />
        </View>
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
    // borderBottomWidth: 1,
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
  dashboard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  notificationIcon: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderColor: '#e8ebeeff',
    padding: 5,
    position: 'relative',
  },
  bellIcon: {
    fontSize: 20,
  },
  profileContainer: {
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
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  absoluteBadge: {
    top: -6,
    position: 'absolute',
    right: -3,
    backgroundColor: '#209fa7ff',
    height: 20,
    width: 20,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    elevation: 5,
  },
  badgeText: {
    color: '#FFF',
    marginLeft: 6,
  },
});

export default Header;
