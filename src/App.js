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
  StatusBar,
  useColorScheme,
} from 'react-native';
import DrawerNavigation from './screens/drawer/DrawerNavigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={Colors.white} />
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
