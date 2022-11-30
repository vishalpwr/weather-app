import { StyleSheet } from 'react-native'
import React from 'react'
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

const DrawerView = ({ children, style }) => {

  const drawerProgress = useDrawerProgress();

  const viewStyles = useAnimatedStyle(() => {
    return {}
  })
  return (
    <Animated.View style={[styles.container, style, viewStyles]}>
      {children}
    </Animated.View>
  )
}

export default DrawerView

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})