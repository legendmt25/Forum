import 'reflect-metadata';
import express from 'express';
import Mongoose from 'mongoose';
import bodyParser from 'body-parser';
import webPush from 'web-push';
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
import CategoryModel from './models/CategoryModel';
import { CategoryResolver } from './graphql/resolvers/CategoryResolver';
import { graphqlUploadExpress } from 'graphql-upload';
import path from 'path';

Container.set({ id: 'USER', factory: () => UserModel });
Container.set({ id: 'COMMUNITY', factory: () => CommunityModel });
Container.set({ id: 'POST', factory: () => PostModel });
Container.set({ id: 'COMMENT', factory: () => CommentModel });
Container.set({ id: 'COUNTRY', factory: () => CountryModel });
Container.set({ id: 'CATEGORY', factory: () => CategoryModel });

async function startServer() {
  const publicVapidKey =
    'BDAcBc4t71bK5Zir7-d2YqkGBhuEs0YEFwa5gu4QUbYxsQrh9cCdrq1dfeffFjnHj_KIjHwjAWSZ55ABzY8-52k';
  const privateVapidKey = 'BQ1EflxLxBZKMlen4cA3-vM87bJWtl3bct53jXDP6R0';
  const PORT = process.env.PORT || 3000;
  const app = express();
  webPush.setVapidDetails(
    'mailto:test@test.com',
    publicVapidKey,
    privateVapidKey
  );

  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(bodyParser.json());

  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      CommunityResolver,
      PostResolver,
      CommentResolver,
      CountryResolver,
      CategoryResolver,
    ],
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

  //subscribe route
  app.post('/subscribe', (req, res) => {
    //subscription object
    const subscription = req.body;
    res.status(201).json({});

    //payload
    const payload = JSON.stringify({
      title: 'Push Test',
    });

    //pass object into sendNotification
    webPush
      .sendNotification(subscription, payload)
      .catch((err) => console.log(err));
  });

  Mongoose.connect('mongodb://localhost:27017/').then(() =>
    console.log('Mongodb connected')
  );
  app.listen(PORT, () => console.log(`server started on ${PORT}`));
}

startServer();
