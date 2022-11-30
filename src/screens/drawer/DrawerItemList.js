import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, constant } from '../constant'
import Icon, { Icons } from '../../../components/Icons'


const DrawerItem = ({
  label,
  onPress,
  tabBarTestID,
  type,
  name,
  notification,
  activeItemColor,
  color,
  styles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button">
    </TouchableOpacity>
  )
}

const DrawerItemList = ({ state, descriptors, navigation, styles }) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        return (
          <DrawerItem />
        )
      })}
    </View>
  )
}

export default DrawerItemList
