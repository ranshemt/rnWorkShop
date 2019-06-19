import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppStyles from './App.styles'

import Gyroscope from './src/Gyroscope'
import GeoScreen from './src/GeoScreen'
import Gestures from './src/Gestures'
import Accelerometer from './src/Accelerometer'

const MainNav = createMaterialTopTabNavigator(
  {
    GeoScreen,
    Gyroscope,
    Gestures,
    Accelerometer
  },
  {
    initialRouteName: 'GeoScreen'
  }
)
const App = createAppContainer(MainNav)
export default App
