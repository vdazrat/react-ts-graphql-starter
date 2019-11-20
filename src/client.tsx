import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import config from './configs';

const cache = new InMemoryCache();

export default (token: string) => {
  const client = new ApolloClient({
    cache,
    uri: config.graphqlUri, // todo: get from env
    //credentials: 'include', // todo: backend should set the expected origin
    headers: {
      authorization: token,
    },
  });
  return client;
};
