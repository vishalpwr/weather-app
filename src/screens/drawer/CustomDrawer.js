import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useDrawerProgress } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  const drawerProgress = useDrawerProgress();

  return (
    <View style={styles.container}>
      {/* header */}
      {/* Drawer List Item */}
      {/* footer */}
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})