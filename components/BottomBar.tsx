import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

function BottomBar({state, descriptors, navigation}: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        let name = 'dashboard';
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        if (label === 'Task Summary') {
          name = 'message';
        }
        if (label === 'demo1') {
          name = 'calendar-today';
        }
        if (label === 'demo2') {
          name = 'mobile-friendly';
        }
        if (label === 'demo3') {
          name = 'supervised-user-circle';
        }

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
            {isFocused ? (
              <LinearGradient
                colors={['#e1e8e9', '#e1e8e9', '#f7f7f7', '#FFF']}
                style={styles.linearStyles}>
                <MaterialIcons
                  name={name}
                  size={30}
                  color={isFocused ? '#01585e' : '#c6cbcdff'}
                />
              </LinearGradient>
            ) : (
              <MaterialIcons
                name={name}
                size={30}
                color={isFocused ? '#01585e' : '#c6cbcdff'}
              />
            )}
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
    elevation: 5,
  },
  opacityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  linearStyles: {
    height: 54,
    width: 54,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

export default BottomBar;
