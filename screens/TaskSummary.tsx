import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatureIcon from 'react-native-vector-icons/Feather';
import {LineChart, PieChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import FlipCard from 'react-native-flip-card';

// import img1 from '../assets/images/back1.png'
// import img2 from '../assets/images/back2.png'
// import img3 from '../assets/images/back3.png'

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
  backgroundColor: string;
}

const cards: Cards[] = [
  {label: 'New', count: 3, backgroundColor: '#BE853B'},
  {label: 'Assigned', count: 16, backgroundColor: '#14319E'},
  {label: 'Closed', count: 32, backgroundColor: '#43A0A8'},
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
          <View style={styles.cardContainer}>
            {cards.map(card => (
              <View style={styles.card} key={card.label}>
                <FlipCard flipHorizontal={true} flipVertical={false}>
                  <View
                    style={[
                      styles.innerCard,
                      {
                        backgroundColor: card.backgroundColor,
                      },
                    ]}>
                    <Text style={styles.cardTitle}>{card.label}</Text>
                    <Text style={styles.cardCount}>{card.count}</Text>
                  </View>
                  <View style={styles.innerCard}>
                    <Text style={styles.cardTitle}>{'Flipped view '}</Text>
                  </View>
                </FlipCard>
              </View>
            ))}
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
        </View>
        <View style={styles.container2}>
          <View style={styles.spaceBetween}>
            <Text style={styles.title}>Properties</Text>
            {/* <View></View> */}
            <View style={[styles.rowCenter, styles.mb24]}>
              <Text style={styles.seeMoreText}>All properties</Text>
              <Icon style={styles.nextIcon} name="navigate-next" />
            </View>
          </View>
          <View style={styles.rowCenter}>
            <View>
              {properties.map(property => (
                <View style={styles.propertyContainer}>
                  <View
                    style={[
                      styles.propertyBoxContainer,
                      {
                        backgroundColor: property.color,
                      },
                    ]}
                  />
                  <View style={styles.container3}>
                    <Text style={styles.propertyLabel}>{property.label}</Text>
                    <View style={styles.alignEnd}>
                      <Text style={styles.propertyText}>{property.text}</Text>
                      <Text style={styles.propertyPercentage}>
                        {property.percentage}%
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View style={{position: 'relative'}}>
              <PieChart
                style={styles.pieChart}
                data={pieChartDataRounded}
                innerRadius={60}
                outerRadius={70}
                labelRadius={5}
                sort={(a, b) => b.key - a.key}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  marginTop: '35%',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 32,
                    fontWeight: '700',
                    color: '#000',
                  }}>
                  632
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  Total units
                </Text>
              </View>
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
    borderTopWidth: 1,
    borderTopColor: '#fafafa',
  },
  container2: {
    backgroundColor: '#fafafa',
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    width: '32%',
    height: 120,
  },
  innerCard: {
    backgroundColor: '#FF9800',
    width: '100%',
    borderRadius: 15,
    padding: 15,
    height: '100%',
  },
  cardTitle: {
    fontWeight: '600',
    color: '#FFF',
    fontSize: 16,
    letterSpacing: 0.2,
  },
  cardCount: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFF',
    marginTop: 20,
    borderRadius: 25,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pieChart: {
    width: 200,
    height: 200,
  },
  propertyLabel: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600',
  },
  propertyContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  propertyBoxContainer: {
    height: 12,
    width: 12,
    borderRadius: 3,
    marginTop: 10,
  },
  container3: {
    marginLeft: 7,
  },
  alignEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  propertyText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginRight: 5,
  },
  propertyPercentage: {
    fontWeight: '500',
    color: '#8c989bff',
    fontSize: 17,
  },
  mb24: {
    marginBottom: 24,
  },
});

export default TaskSummary;
