import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink  } from 'apollo-link-http'
import Routes from './src/navigation/Routes'
import { ApolloLink} from 'apollo-link'
import { onError } from 'apollo-link-error'
import { Alert } from 'react-native';
import { setContext } from 'apollo-link-context'
const httpLink = createHttpLink({
  uri: 'https://quizizz.herokuapp.com/v1/graphql'
})

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => Alert.alert('Message: ',message))
  }
})
const cache = new InMemoryCache()
const authLink = setContext( (_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': '2f46147c-7f03-11e9-8f9e-2a86e4085a59'
    }
  }
})
const client = new ApolloClient({
  link: ApolloLink.from([errorLink,  authLink.concat(httpLink)]),
  cache: cache
})

class App extends Component {
  //push notification

  render () {
    console.log('App')
    return <ApolloProvider client={client}>
    <Routes />
    </ApolloProvider>
  }
}

export default App


