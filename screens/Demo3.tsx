import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Demo3() {
  return (
    <View style={styles.container}>
      <Text>Demo 3</Text>
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

export default Demo3;
