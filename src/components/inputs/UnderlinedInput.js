import React from 'react'
import { View } from 'react-native'
import { Item, Input, Label, Text } from 'native-base'

function UnderlinedInput (props) {
  return (
    <View>
      <Item floatingLabel style={styles.item} error={props.error}>
        <Label style={styles.label}>{props.label}</Label>
        <Input

          multiline={props.multiLine}
          style={styles.input}
          keyboardType={props.keyboardType || 'default'}
          maxLength={props.maxLength}
          secureTextEntry={props.isSecure}
          disabled={props.disabled}
          returnKeyType={props.returnKeyType || 'next'}
          value={props.value}
          onChangeText={text => props.onChangeText(text)}
        />

      </Item>
      {props.error === true && <Text style={{ color: 'red', fontSize: 10 }}>{props.errorText}</Text> }
    </View>
  )
}

const styles = {
  item: {
    marginLeft: 0
  },
  label: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#5C6979',
    paddingTop: 4
  },
  input: {
    fontFamily: 'Arial',
    fontSize: 17,
    color: '#000'
  }
}

export default UnderlinedInput
