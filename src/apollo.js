// src/apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clqwleox8pkuw01un282kbtkd/master',
  cache: new InMemoryCache(),
});

export default client;
