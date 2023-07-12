import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Demo4() {
  return (
    <View style={styles.container}>
      <Text>Demo 4</Text>
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

export default Demo4;
