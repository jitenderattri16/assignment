import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatureIcon from 'react-native-vector-icons/Feather';
import {LineChart, PieChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import FlipCard from 'react-native-flip-card';

// import SVGShape from './back.svg';

interface Properties {
  color: string;
  label: number;
  text: string;
  percentage: number;
}

interface Cards {
  label: string;
  count: number;
}

const cards: Cards[] = [
  {label: 'New', count: 3},
  {label: 'Assigned', count: 16},
  {label: 'Closed', count: 32},
];

const properties: Properties[] = [
  {color: '#2253ddff', label: 298, text: 'Occupied', percentage: 48},
  {color: '#209fa7ff', label: 249, text: 'Vacant', percentage: 39},
  {color: '#fc900fff', label: 85, text: 'Maintenance', percentage: 13},
];

export const getPieChartDataRounded = (data: Properties[]) => {
  return data.map((item, index) => {
    return {
      key: index,
      value: item.percentage,
      svg: {fill: item.color},
      arc: {cornerRadius: 2},
    };
  });
};

function TaskSummary() {
  const data2 = [80, 10, 95, 48, 24, 67, 51, 12, 33, 0, 24, 20, 50];
  // const data10 = [40, 83, 52];
  const pieChartDataRounded = getPieChartDataRounded(properties);
  return (
    <ScrollView>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Task Summary</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            {cards.map(card => (
              <View style={{width: '32%', height: 120}} key={card.label}>
                <FlipCard flipHorizontal={true} flipVertical={false}>
                  <View
                    style={{
                      backgroundColor: '#FF9800',
                      width: '100%',
                      borderRadius: 15,
                      padding: 15,
                    }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: '#FFF',
                        fontSize: 16,
                        letterSpacing: 0.2,
                      }}>
                      {card.label}
                    </Text>
                    <Text
                      style={{
                        fontSize: 40,
                        fontWeight: '700',
                        color: '#FFF',
                        marginTop: 20,
                        borderRadius: 25,
                      }}>
                      {card.count}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#FF9800',
                      width: '100%',
                      borderRadius: 15,
                      padding: 15,
                      height: '100%',
                    }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        color: '#FFF',
                        fontSize: 16,
                        letterSpacing: 0.2,
                      }}>
                      {'Flipped view '}
                    </Text>
                  </View>
                </FlipCard>
              </View>
            ))}

            {/* <View style={{width: 33, height: 70}}>
              <View
                style={{
                  position: 'absolute',
                  width: 33,
                  height: '100%',
                  // bottom: 0,
                  zIndex: -1,
                }}>
                <BackgroundSvg />
              </View>
            </View> */}
            {/* <View style={{width: 33, height: 70}}>
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  // bottom: 0,
                  zIndex: -1,
                }}>
                <BackgroundSvg />
              </View> */}
            {/* </View> */}
          </View>

          {/* <View></View> */}
          <View style={styles.seeMoreTextContainer}>
            <Text style={styles.seeMoreText}>See all today tasks</Text>
            <Icon style={styles.nextIcon} name="navigate-next" />
          </View>
          <View style={styles.divider} />
          <Text style={styles.text1}>On-Time Completion Rate</Text>
          <View style={styles.spaceBetween}>
            <View style={styles.row}>
              <Text style={styles.text2}>98%</Text>
              <FeatureIcon name="arrow-up-right" style={styles.iconColor} />
              <Text style={styles.text3}>2.75%</Text>
            </View>
            <View>
              <LineChart
                style={styles.chart}
                gridMin={-20}
                gridMax={120}
                data={data2}
                curve={shape.curveNatural}
                svg={{
                  strokeWidth: 5,
                  stroke: '#FF9800',
                }}
                contentInset={{top: 5, bottom: 1, left: 5}}>
                {/* <Shadow /> */}
                {/* <Grid /> */}
                {/* <Gradient /> */}
              </LineChart>
            </View>
          </View>

          {/* <PieChart
          style={{width: 300, height: 300}}
          data={pieChartDataRounded}
          innerRadius={109}
          outerRadius={100}
          labelRadius={1}
          sort={(a, b) => b.key - a.key}></PieChart> */}
        </View>
        <View style={styles.container2}>
          <View style={styles.spaceBetween}>
            <Text style={styles.title}>Properties</Text>
            {/* <View></View> */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
              }}>
              <Text style={styles.seeMoreText}>All properties</Text>
              <Icon style={styles.nextIcon} name="navigate-next" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              {properties.map(property => (
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <View
                    style={{
                      backgroundColor: property.color,
                      height: 12,
                      width: 12,
                      borderRadius: 3,
                      marginTop: 10,
                    }}
                  />
                  <View style={{marginLeft: 7}}>
                    <Text
                      style={{
                        fontSize: 24,
                        color: '#000',
                        fontWeight: '600',
                      }}>
                      {property.label}
                    </Text>
                    <View
                      style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '500',
                          color: '#000',
                          marginRight: 5,
                        }}>
                        {property.text}
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          color: '#8c989bff',
                          fontSize: 17,
                        }}>
                        {property.percentage}%
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View>
              <PieChart
                style={{width: 150, height: 150}}
                data={pieChartDataRounded}
                innerRadius={55}
                outerRadius={50}
                labelRadius={1}
                sort={(a, b) => b.key - a.key}>
                <Text>{`${10} km/h`}</Text>
              </PieChart>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 20,
  },
  container2: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  seeMoreTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  seeMoreText: {
    color: '#209fa7ff',
    fontSize: 20,
    fontWeight: '600',
  },
  nextIcon: {
    fontSize: 30,
    color: '#209fa7ff',
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: '#f7f7f7',
    marginVertical: 20,
  },
  text1: {
    color: '#2c3a3dff',
    fontSize: 16,
    fontWeight: '800',
  },
  iconColor: {
    color: '#209fa7ff',
    fontSize: 30,
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
    fontSize: 36,
    fontWeight: '600',
    color: '#000',
  },
  text3: {
    fontSize: 20,
    color: '#209fa7ff',
  },
  chart: {
    height: 60,
    width: 150,
  },
});

export default TaskSummary;
