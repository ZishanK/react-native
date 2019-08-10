import React from 'react'
import { Header, Left, Body, Title, Right } from 'native-base'
import getHeaderContainerStyle from './getHeaderContainerStyle'
import { Constants } from '../../config'
import { Platform, Text } from 'react-native'
function TitleHeader (props) {
  return (
    <Header
      iosBarStyle='dark-content'
      androidStatusBarColor='#FFF'
      style={getHeaderContainerStyle(props.nomargin)}
    >
    {Platform.OS=='ios'?<Left>
    {!!props.title && <Title style={styles.title}>{props.title}</Title>}
    </Left>:null}
    {Platform.OS=='ios'?null:<Body>
    {!!props.title && <Title style={styles.title}>{props.title}</Title>}

    </Body>}
      {props.dashboard?<Right>
      <Text style={styles.logout}  onPress={() => props.onLogoutPress()}>Logout</Text>
      </Right>:
    <Right/>}
      
    </Header>
  )
}

const styles = {
  title: {
    paddingLeft:15,
    fontFamily: Constants.HEADER_FONT,
    color: '#000'
  },
  logout: {
    paddingRight:15,
    fontFamily: Constants.HEADER_FONT,
    color: '#000'
  }
}

export default TitleHeader
