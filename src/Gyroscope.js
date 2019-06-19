import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { gyroscope, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import styles from '../App.styles'
setUpdateIntervalForType(SensorTypes.gyroscope, 1000)

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      z: 0,
      Xarr: [0],
      Yarr: [0],
      Zarr: [0]
    }
  }
  componentDidMount() {
    gyroscope.subscribe(({ x, y, z }) => {
      const newXarr = [...this.state.Xarr]
      newXarr.push(parseInt(parseFloat(x) * 1000000))
      const newYarr = [...this.state.Yarr]
      newYarr.push(parseInt(parseFloat(y) * 1000000))
      const newZarr = [...this.state.Zarr]
      newZarr.push(parseInt(parseFloat(z) * 1000000))
      this.setState({
        x,
        y,
        z,
        Xarr: newXarr,
        Yarr: newYarr,
        Zarr: newZarr
      })
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Gyroscope</Text>
        <Text>X: {this.state.x}</Text>
        <View style={styles.axisContainer}>
          <YAxis
            data={this.state.Xarr}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
              fill: 'grey',
              fontSize: 10
            }}
            numberOfTicks={15}
            formatLabel={value => value / 1000000}
          />
          <LineChart
            style={styles.lineChartStyle}
            data={this.state.Xarr}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
        </View>
        <Text>Y: {this.state.y}</Text>
        <View style={styles.axisContainer}>
          <YAxis
            data={this.state.Yarr}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
              fill: 'grey',
              fontSize: 10
            }}
            numberOfTicks={15}
            formatLabel={value => value / 1000000}
          />
          <LineChart
            style={styles.lineChartStyle}
            data={this.state.Yarr}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
        </View>
        <Text>Z: {this.state.z}</Text>
        <View style={styles.axisContainer}>
          <YAxis
            data={this.state.Zarr}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{
              fill: 'grey',
              fontSize: 10
            }}
            numberOfTicks={15}
            formatLabel={value => value / 1000000}
          />
          <LineChart
            style={styles.lineChartStyle}
            data={this.state.Zarr}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
        </View>
      </ScrollView>
    )
  }
}
