import React from 'react';
import {Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

const SimpleBarAnimated = () => {
  const barData = [
    {
      value: 230,
      label: 'Jan',
      frontColor: '#91E3E3',
      focused: true,
    },
    {value: 180, label: 'Feb', frontColor: '#91E3E3'},
    {value: 200, label: 'Mar', frontColor: '#91E3E3'},
    {value: 250, label: 'Apr', frontColor: '#4ABFF4'},
    {value: 320, label: 'May', frontColor: '#91E3E3'},
    {value: 320, label: 'May', frontColor: '#91E3E3'},
  ];
  return (
    <View style={{flex: 1}}>
      <BarChart
        // hideRules
        hideAxesAndRules
        // hideOrigin
        // hideYAxisText
        yAxisLabelWidth={0}
        rulesThickness={0}
        renderTooltip={() => <Text>hello</Text>}
        noOfSections={4}
        onPress={(r: any) => {
          console.log(r);
        }}
        maxValue={400}
        data={barData}
        // barWidth={40}
        capRadius={20}
        barBorderRadius={20}
        // sideWidth={15}
        // intactTopLabel
      />
    </View>
  );
};

export default SimpleBarAnimated;
