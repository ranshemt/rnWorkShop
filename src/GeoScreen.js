import React, { Component } from 'react'
import { View, Text, PermissionsAndroid } from 'react-native'
//https://hackernoon.com/react-native-basics-geolocation-adf3c0d10112
//https://facebook.github.io/react-native/docs/geolocation#watchposition
class GeoScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: -1,
      longitude: -1,
      error: null,
      timesChanged: 0
    }
    this.requestLocationPermission = this.requestLocationPermission.bind(this)
  }

  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This App needs access to your location ' + 'so we can know where you are.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use locations ')
      } else {
        console.log('Location permission denied')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  async componentDidMount() {
    await this.requestLocationPermission()
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        this.setState(prevState => ({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timesChanged: prevState.timesChanged + 1,
          error: null
        }))
      },
      error => {
        this.setState(prevState => ({
          latitude: -1,
          longitude: -1,
          timesChanged: prevState.timesChanged,
          error: error.message
        }))
      },
      { enableHighAccuracy: false, timeout: 20000 }
    )
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Text>timesChanged: {this.state.timesChanged}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    )
  }
}

export default GeoScreen
