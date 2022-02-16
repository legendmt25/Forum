import 'reflect-metadata';
import express from 'express';
import Mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import { graphqlUploadExpress } from 'graphql-upload';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { subscribe, execute } from 'graphql';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import webPush from 'web-push';

import { schema } from './graphql/schema';

async function startServer() {
  const PORT = process.env.PORT || 3000;

  const app = express();
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.json());
  app.use(cors());

  const httpServer = createServer(app);
  const sch = await schema;

  const subscriptionServer = SubscriptionServer.create(
    {
      execute,
      subscribe,
      schema: sch,
      async onConnect() {
        console.log('connected');
        return 'connected';
      },
      onDisconnect() {
        console.log('disconnect');
      },
    },
    { server: httpServer, path: '/graphql' }
  );

  const apollo = new ApolloServer({
    schema: sch,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  const vapidKeys = {
    publicKey:
      'BBCJhz9zZnZCPmERIDeY_vz8H8HWMeiktLMtu93-6FlfvIgD_LZPc4y8VjUaOpHeOGmiJsKwmxwxqrsyzM6JhC0',
    privateKey: 'R4EZk_xh3xd3vPtzGXc0-E5eyeWQ7ebcwuIcYOuQYS8',
  };
  webPush.setVapidDetails(
    'mailto:test@test.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  await Mongoose.connect('mongodb://localhost:27017/');

  await apollo.start();
  apollo.applyMiddleware({ app });

  httpServer.listen(PORT, () => {
    console.log(
      `GraphQL running on http://localhost:${PORT}${apollo.graphqlPath}`
    );
  });
}

startServer();
