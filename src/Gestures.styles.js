import { StyleSheet } from 'react-native'

const GesStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  swipeContainer: {
    flex: 2
  },
  swipeArea: {
    flex: 3,
    backgroundColor: '#9D9DA0'
  },
  feedbackArea: {
    flex: 1,
    backgroundColor: '#5d5c61'
  },
  dragContainer: {
    flex: 1,
    backgroundColor: '#b1a296'
  },
  dragTitle: {
    flex: 1
  },
  dragArea: {
    flex: 5
  },
  holdContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  longPress: {
    flex: 2,
    backgroundColor: '#7395ae'
  },
  pressFeedback: {
    flex: 1,
    backgroundColor: '#394B57'
  }
})
export default GesStyles
