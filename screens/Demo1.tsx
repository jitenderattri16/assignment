import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';
import FeatureIcon from 'react-native-vector-icons/Feather';

import BarCharts from '../components/BarChart';
import {Menu, MenuItem} from 'react-native-material-menu';
import LinearGradient from 'react-native-linear-gradient';

function Dashboard() {
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  }, []);

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 24, fontWeight: '600', color: '#000'}}>
                Accounting
              </Text>
              <Menu
                visible={visible}
                anchor={
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: '#000'}}
                    onPress={showMenu}>
                    This month
                  </Text>
                }
                onRequestClose={hideMenu}>
                <MenuItem onPress={hideMenu}>Option 1</MenuItem>
                <MenuItem onPress={hideMenu}>Option 2</MenuItem>
              </Menu>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#8c989bff',
                marginBottom: 25,
              }}>
              Aug 1, 2021 - Aug 31, 2021
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#e8ebeeff',
              borderRadius: 1,
              marginBottom: 20,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>
              AVG. Monthly Income
            </Text>
            <Text style={{fontSize: 50, fontWeight: '800', color: '#000'}}>
              $5,849.36
            </Text>
            <View style={styles.row}>
              <FeatureIcon name="arrow-up-right" style={styles.iconColor} />
              <Text style={styles.text2}>3.89%</Text>
              <Text style={styles.text5}>vs</Text>
              <Text style={styles.text3}>$5.432.74 </Text>
              <Text style={styles.text4}>prev. 90 days</Text>
            </View>

            <BarCharts />
          </View>
        </View>
        <View style={styles.container2}>
          <LinearGradient
            colors={['#209fa7ff', '#b5eaeeff', '#f7f7f7', '#FFF']}
            style={{
              height: 48,
              width: 48,
              borderRadius: 24,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}>
              <FeatureIcon
                style={{
                  fontSize: 20,
                  color: '#209fa7ff',
                }}
                name="trending-up"></FeatureIcon>
            </View>
          </LinearGradient>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
              $89,240.38
            </Text>
            <Text style={{color: '#000', fontWeight: '500'}}>Total Income</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <LinearGradient
            colors={['#feded5ff', '#f8ebe6ff', '#f7f7f7', '#FFF']}
            style={{
              height: 48,
              width: 48,
              borderRadius: 24,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}>
              <FeatureIcon
                style={{
                  fontSize: 20,
                  color: '#FF0000',
                }}
                name="trending-up"></FeatureIcon>
            </View>
          </LinearGradient>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>
              $16,237.82
            </Text>
            <Text style={{color: '#000', fontWeight: '500'}}>
              Total Expenses
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fafafa',
    padding: 20,
    borderBottomColor: '#e8ebeeff',
    borderBottomWidth: 1,
    fontFamily: 'Roboto Condensed',
  },
  container2: {
    backgroundColor: '#fafafa',
    padding: 20,
    flexDirection: 'row',
  },
  container3: {
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  iconColor: {
    color: '#209fa7ff',
    fontSize: 24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text2: {
    fontSize: 20,
    fontWeight: '600',
    color: '#209fa7ff',
  },
  text3: {
    fontSize: 18,
    letterSpacing: -0.1,
    color: '#000',
    fontWeight: '600',
  },
  text4: {
    fontSize: 18,
    fontWeight: '500',
  },
  text5: {
    marginHorizontal: 5,
    fontSize: 16,
  },
});

export default Dashboard;
