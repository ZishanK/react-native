import React from 'react'
import { View, Text } from 'react-native'
import { Form } from 'native-base'
import { UnderlinedInput } from '../inputs'
import { LgButton } from '../buttons'
function LoginForm (props) {
  return (
    <Form>
      <UnderlinedInput
        error={props.emailError}
        errorText={props.emailErrorText}
        keyboardType='email-address'
        label={"Email"}
        value={props.email}
        onChangeText={text => props.onEmailChange(text)}
      />

      <UnderlinedInput
        error={props.passwordError}
        errorText={props.passwordErrorText}
        label={"Password"}
        isSecure
        value={props.password}
        onChangeText={text => props.onPasswordChange(text)}
      />
      <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
      <Text style={{ marginTop: 10,color:'#F84C5E' }}
        onPress={() => props.onForgetPasswordPress()}>
        Forgot Password?</Text>
        </View>

      <LgButton color="#000" text={"login"} onPress={() => props.onSubmitPress()} />
      <View style={{alignSelf:'center'}}>
      
      <Text style={{textAlign:'center', paddingBottom:20,paddingTop:15,color:'#000', fontSize:16,fontWeight:'200'}}>Already have an account? 
                <Text 
                onPress={() => props.onCreateAccountPress()}
                style={{color:'#000',fontWeight:'800'}}> Sign Up</Text>
                </Text>
      </View>
     
    </Form>
  )
}

const styles = {
  separator: {
    marginTop: 30
  },
  registerText: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#000',
    marginTop: 20,
    textAlign: 'center'
  }
}

export default LoginForm
