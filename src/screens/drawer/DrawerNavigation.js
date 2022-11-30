import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet } from 'react-native'
import { DrawerMenu } from '../arrays';
import { colors } from '../constant';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyles,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {DrawerMenu.map((_, i) => (
        <Drawer.Screen key={i}
          name={_.route}
          component={_.component}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({
  drawerStyles: {
    width: 220,
    backgroundColor: colors.sceneBg,
    paddingTop: 40,
  },
})