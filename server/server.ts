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

import { schema, typeDefsAndResolvers } from './graphql/schema';

async function startServer() {
  const PORT = process.env.PORT || 3000;
  const app = express();

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.json());
  app.use(cors());

  const ws = createServer(app);

  const sch = await schema;
  const subscriptionServer = SubscriptionServer.create(
    {
      execute,
      subscribe,
      schema: sch,
      onConnect() {
        console.log('connected');
      },
      onDisconnect() {
        console.log('disconnect');
      },
    },
    { server: ws, path: '/graphql' }
  );

  const schTypeDefsAndResolvers = await typeDefsAndResolvers;
  const apollo = new ApolloServer({
    typeDefs: schTypeDefsAndResolvers.typeDefs,
    resolvers: schTypeDefsAndResolvers.resolvers,
  });

  app.use('/graphql', bodyParser.json());

  await Mongoose.connect('mongodb://localhost:27017/');
  await apollo.start();
  apollo.applyMiddleware({ app });

  ws.listen(PORT, () => {
    console.log(
      `GraphQL running on http://localhost:${PORT}${apollo.graphqlPath}`
    );
  });
}

startServer();
