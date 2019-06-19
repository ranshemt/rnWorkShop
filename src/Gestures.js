import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SwipeGesture from './swipeGestures'
import styles from './Gestures.styles'
import Draggable from 'react-native-draggable'

export default class Gestures extends Component {
  constructor(props) {
    super(props)
    this.state = {
      swipes: [],
      longPress: 0
    }
  }
  onSwipePerformed = action => {
    const newSwipes = [...this.state.swipes]
    newSwipes.push(action)
    this.setState({ swipes: newSwipes })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.swipeContainer}>
          <SwipeGesture gestureStyle={styles.swipeArea} onSwipePerformed={this.onSwipePerformed}>
            <Text>Swipe here</Text>
          </SwipeGesture>
          <FlatList
            style={styles.feedbackArea}
            horizontal
            data={this.state.swipes}
            ref="flatList"
            onContentSizeChange={() => this.refs.flatList.scrollToEnd()}
            renderItem={({ item }) => (
              <Icon name={`arrow-${item}`} size={50} color="#9D9DA0" margin={10} />
            )}
          />
        </View>

        <View style={styles.dragContainer}>
          <View style={styles.dragTitle}>
            <Text>I'm drag container 111</Text>
          </View>
          <View style={styles.dragArea}>
            <Draggable
              reverse={false}
              renderColor="red"
              renderSize={80}
              renderShape="square"
              offsetX={0}
              offsetY={0}
              renderText="B"
            />
          </View>
        </View>

        <View style={styles.holdContainer}>
          <TouchableOpacity
            style={styles.longPress}
            onLongPress={() => this.setState({ longPress: this.state.longPress + 1 })}
          >
            <Text>long press here</Text>
          </TouchableOpacity>

          <View style={styles.pressFeedback}>
            <Text>long press times: {this.state.longPress}</Text>
          </View>
        </View>
      </View>
    )
  }
}
