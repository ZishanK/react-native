import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { Header, Left, Body, Right, Title } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import { Constants } from '../../config'
import getHeaderContainerStyle from './getHeaderContainerStyle'

function BackButtonHeader (props) {
  return (
    <Header style={getHeaderContainerStyle(props.nomargin)}>
      <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
      <Left>
        <View style={{flexDirection:'row'}}>
        <Feather
          name={props.closeIcon === true ? 'x' : 'chevron-left'}
          style={styles.icon}
          onPress={() => props.onBackPress()}
        />
      {Platform.OS=='ios'?<Title style={styles.title}>{props.title}</Title>:null}
                </View>
      </Left>
      {Platform.OS=='ios'?null: <Body style={{ flex: 3 }}>
        {!!props.title && <Title style={styles.title}>{props.title}</Title>}
      </Body>}
      <Right />
    </Header>
  )
}

const styles = {
  icon: {
    color: '#2E2F4F',
    fontSize: 25
  },
  title: {
    color: '#000',
    fontFamily: Constants.HEADER_FONT,
    // fontSize: 18,
    ...Platform.select({
      android: { marginLeft: 0 }
    })
  }
}

export default BackButtonHeader
