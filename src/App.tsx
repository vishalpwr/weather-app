/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StatusBar,
  useColorScheme,
} from 'react-native';
import DrawerNavigation from './screens/drawer/DrawerNavigation';
import Colors from './constants/Colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.white} />
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </View>
  );
};

export default App;
