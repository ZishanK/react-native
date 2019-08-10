import React from 'react'
import { View } from 'react-native'
import { Form } from 'native-base'
import { Constants } from '../../config'
import { UnderlinedInput } from '../inputs'
import { LgButton } from '../buttons'
function RegisterForm (props) {
  return (
    <Form>
      <UnderlinedInput
        label={'First Name'}
        errorText={props.fnameErrorText}
        error={props.fnameError}
        value={props.fname}
        onChangeText={text => props.onFNameChange(text)}
      />
      <View style={styles.separator} />
      <UnderlinedInput
        error={props.lnameError}
        errorText={props.lnameErrorText}
        label={'Last Name'}
        value={props.lname}
        onChangeText={text => props.onLNameChange(text)}
      />
      <View style={styles.separator} />

      <UnderlinedInput
        error={props.emailError}
        errorText={props.emailErrorText}
        keyboardType='email-address'
        label={'Email'}
        value={props.email}
        onChangeText={text => props.onEmailChange(text)}
      />
      <View style={styles.separator} />

      <UnderlinedInput
        error={props.passwordError}
        errorText={props.passwordErrorText}
        label={'Password'}
        isSecure
        value={props.password}
        onChangeText={text => props.onPasswordChange(text)}
      />
      <View style={styles.separator} />
      <UnderlinedInput
        error={props.confirmPasswordError}
        errorText={props.confirmPasswordErrorText}
        label={'Confirm Password'}
        isSecure
        value={props.confirmPassword}
        onChangeText={text => props.onconfirmPasswordChange(text)}
      />
      <View style={styles.separator} />

      <LgButton color="#000"
        text={'signup'}
        onPress={() => props.onSubmitPress()}
      />
    </Form>
  )
}

const styles = {
  separator: {
    marginTop: 20
  }
}

export default RegisterForm
