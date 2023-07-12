import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/AntDesign';

const SimpleBarAnimated = () => {
  const barData = [
    {
      value: 230,
      label: 'Jan',
      frontColor: '#91E3E3',
      focused: true,
    },

    {value: 200, label: 'Mar', frontColor: '#91E3E3'},
    {value: 250, label: 'Apr', frontColor: '#4ABFF4'},
    {value: 320, label: 'May', frontColor: '#91E3E3'},
    {value: 320, label: 'Jun', frontColor: '#91E3E3'},
    {value: 180, label: 'July', frontColor: '#91E3E3'},
    // {value: 180, label: 'Aug', frontColor: '#91E3E3'},
  ];
  return (
    <View style={styles.removeInitial}>
      <BarChart
        hideRules
        hideAxesAndRules
        renderTooltip={(val: any) => (
          <View style={styles.container}>
            <Text style={styles.text}>${val.value}</Text>
            <Icon style={styles.icon} name="caretdown" />
          </View>
        )}
        onPress={(r: any) => {
          console.log(r);
        }}
        maxValue={400}
        data={barData}
        barWidth={40}
        // verticalLinesSpacing={30}
        // spacing={15}
        barBorderRadius={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#01585eff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    bottom: -6,
    left: '52%',
    color: '#01585eff',
    fontSize: 12,
  },
  text: {
    color: '#FFF',
  },
  removeInitial: {
    marginLeft: -69,
  },
});

export default SimpleBarAnimated;
