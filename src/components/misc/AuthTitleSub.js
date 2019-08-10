import React from 'react'
import { View, Text } from 'react-native'
import { Constants } from '../../config';

function AuthTitleSub (props) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  )
}

const styles = {
  title: {
    fontFamily: Constants.HEADER_FONT,
    fontSize: 16,
    color: '#000',
    textAlign:'center'
    
  },
  subtitle: {
    fontFamily: Constants.HEADER_FONT,
    fontSize: 13,
    color: '#5F5F5F',
    marginTop: 5,
    textAlign:'center',

  }
}

export default AuthTitleSub
