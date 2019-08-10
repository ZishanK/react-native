import React from 'react'
import { Text } from 'react-native'
import { Button } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import { Constants } from '../../config'
function SmButton (props) {
  return (
    <Button
      style={{backgroundColor: props.color,borderRadius: 3,paddingHorizontal: 40,marginBottom:20,marginTop:15,paddingVertical: 8}}
      onPress={() => !props.busy && props.onPress()}
    >
      {props.busy === true ? (
        <Feather name='zap' style={styles.icon} />
      ) : (
        <Text style={styles.text}>{props.text}</Text>
      )}
    </Button>
  )
}

const styles = {
  container: {
    backgroundColor: '#1a73e8',
    borderRadius: 3,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  text: {
    fontFamily: Constants.HEADER_FONT,
    fontSize: 16,
    color: '#FFF'
  },
  icon: {
    color: '#FFF',
    fontSize: 25
  }
}

export default SmButton
