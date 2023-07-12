/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Header from './components/Header';
import TaskSummary from './screens/TaskSummary';
import BottomBar from './components/BottomBar';
import Demo1 from './screens/Demo1';
import Demo2 from './screens/Demo2';
import Demo3 from './screens/Demo3';
import Demo4 from './screens/Demo4';
// import {BlurView} from '@react-native-community/blur';
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={BottomBar}
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          header: Header,
          tabBarStyle: {
            // position: 'absolute',
            // borderTopLeftRadius: 24,
            // borderTopRightRadius: 24,
            // borderLeftWidth: 3,
            // borderRightWidth: 3,
            // overflow: 'hidden',
            backgroundColor: '#000000',
          },
        }}>
        <Tab.Screen name="Home" component={Demo1} />
        <Tab.Screen name="Task Summary" component={TaskSummary} />
        <Tab.Screen name="demo1" component={Demo2} />
        <Tab.Screen name="demo2" component={Demo3} />
        <Tab.Screen name="demo3" component={Demo4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
