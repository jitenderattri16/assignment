import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function BottomBar({state, descriptors, navigation}: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.opacityContainer}>
            <Icon
              name={label === 'Home' ? 'home' : 'logo-ionic'}
              size={30}
              color={isFocused ? '#000000' : '#808080'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 70,
    paddingTop: 10,
    // borderTopStartRadius: 10,
    // borderTopRightRadius: 50,
    // paddingVertical: 20,
    // shadowColor: '#171717',
    // shadowOffset: {width: -4, height: -4},
    // shadowOpacity: 0.5,
    // shadowRadius: 3,
    elevation: 5,
  },
  opacityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default BottomBar;
