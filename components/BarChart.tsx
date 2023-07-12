import React from 'react';
import {BarChart, XAxis} from 'react-native-svg-charts';
import {View} from 'react-native';
import * as scale from 'd3-scale';
import * as shape from 'd3-shape';

function BarCharts() {
  const data = [
    {
      value: 20,
      label: 'Mar',
      amount: 4000,
      svg: {
        fill: '#b5eaeeff',
      },
    },
    {
      value: 40,
      label: 'Mar',
      svg: {
        fill: '#b5eaeeff',
      },
    },
    {
      value: 80,
      label: 'Mar',
      svg: {
        fill: '#b5eaeeff',
      },
    },
    {
      value: 20,
      label: 'Mar',
      svg: {
        fill: '#b5eaeeff',
      },
    },
    {
      value: 20,
      label: 'Mar',
      amount: 4030,
      svg: {
        fill: '#b5eaeeff',
        onPress: (val: any) => {
          console.log('clicked', val);
        },
      },
    },
  ];

  return (
    <View style={{height: 200, padding: 20}}>
      <XAxis
        style={{marginTop: 10}}
        data={data}
        scale={scale.scaleBand}
        formatLabel={(value: any) => data[value]?.label}
      />
      <BarChart
        style={{flex: 1}}
        data={data}
        gridMin={0}
        svg={{fill: '#b5eaeeff'}}
        yAccessor={({item}) => item.value}
        spacingInner={0.3}
        curve={shape.curveCardinalOpen}
      />
      <XAxis
        style={{marginTop: 10}}
        data={data}
        scale={scale.scaleBand}
        formatLabel={(value: any) => data[value]?.label}
        // labelStyle={{color: 'black'}}
      />
    </View>
  );
}

export default BarCharts;
