import { Platform } from 'react-native'

function getHeaderContainerStyle (nomargin) {
  return {
    backgroundColor: '#FFF',
    ...Platform.select({
      android: { marginTop: nomargin ? 0 : 0 }
    })
  }
}

export default getHeaderContainerStyle
