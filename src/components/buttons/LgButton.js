import React from 'react'
import { Text } from 'react-native'
import { Button } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import { Constants } from '../../config'
function LgButton (props) {
  return (
    <Button
      full
      style={{marginTop:25,
        backgroundColor: props.color,
        borderRadius: 3}}
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
    marginTop:25,
    backgroundColor: '#000',
    borderRadius: 3
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

export default LgButton
