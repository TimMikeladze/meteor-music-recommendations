import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { apolloServer } from 'graphql-tools';
import express from 'express';
import proxyMiddleware from 'http-proxy-middleware';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

const networkInterface = createNetworkInterface('/graphql');

export const client = new ApolloClient({
  networkInterface,
});

const GRAPHQL_PORT = Meteor.settings.public.GRAPHQL_PORT || 4000;

const graphQLServer = express();

graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  // schema,
  // resolvers,
}));

graphQLServer.listen(GRAPHQL_PORT, () => {
  if (!Meteor.isProduction) {
    // eslint-disable-next-line no-console
    console.log(`GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}`);
  }
}
);

// This redirects all requests to /graphql to our Express GraphQL server
WebApp.rawConnectHandlers.use(proxyMiddleware(`http://localhost:${GRAPHQL_PORT}/graphql`));
