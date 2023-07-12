import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import InteractiveChart from '../components/InteractiveChart';

function Demo2() {
  return (
    <View style={styles.container}>
      <Text>Demo 2</Text>
      <InteractiveChart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Demo2;
