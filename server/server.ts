import 'reflect-metadata';
import express from 'express';
import Mongoose from 'mongoose';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { buildSchema } from 'type-graphql';
import Container from 'typedi';
import UserModel from './models/UserModel';
import CommunityModel from './models/CommunityModel';
import { CommunityResolver } from './graphql/resolvers/CommunityResolver';
import PostModel from './models/PostModel';
import { PostResolver } from './graphql/resolvers/PostResolver';
import CommentModel from './models/CommentModel';
import { CommentResolver } from './graphql/resolvers/CommentResolver';
import CountryModel from './models/CountryModel';
import { CountryResolver } from './graphql/resolvers/CountryResolver';

Container.set({ id: 'USER', factory: () => UserModel });
Container.set({ id: 'COMMUNITY', factory: () => CommunityModel });
Container.set({ id: 'POST', factory: () => PostModel });
Container.set({ id: 'COMMENT', factory: () => CommentModel });
Container.set({ id: 'COUNTRY', factory: () => CountryModel });

async function startServer() {
  const PORT = process.env.PORT || 3000;
  const app = express();
  const schema = await buildSchema({
    resolvers: [UserResolver, CommunityResolver, PostResolver, CommentResolver, CountryResolver],
    emitSchemaFile: true,
    container: Container,
  });

  app.use(cors());
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );
  Mongoose.connect('mongodb://localhost:27017/').then(() =>
    console.log('Mongodb connected')
  );
  app.listen(PORT, () => console.log(`server started on ${PORT}`));
}

startServer();
