import { UserResolver } from './resolvers/UserResolver';
import { CommunityResolver } from './resolvers/CommunityResolver';
import { PostResolver } from './resolvers/PostResolver';
import { CommentResolver } from './resolvers/CommentResolver';
import { CountryResolver } from './resolvers/CountryResolver';
import { CategoryResolver } from './resolvers/CategoryResolver';
import { PushSubscriptionResolver } from './resolvers/PushSubscriptionResolver';

import { buildSchema, buildTypeDefsAndResolvers } from 'type-graphql';
import { Container } from 'typedi';
import UserModel from '../models/UserModel';
import CommunityModel from '../models/CommunityModel';
import PostModel from '../models/PostModel';
import CommentModel from '../models/CommentModel';
import CountryModel from '../models/CountryModel';
import CategoryModel from '../models/CategoryModel';
import PushSubscriptionModel from '../models/PushSubscriptionModel';

Container.set({ id: 'USER', factory: () => UserModel });
Container.set({
  id: 'COMMUNITY',
  factory: () => CommunityModel,
});
Container.set({ id: 'POST', factory: () => PostModel });
Container.set({
  id: 'COMMENT',
  factory: () => CommentModel,
});
Container.set({
  id: 'COUNTRY',
  factory: () => CountryModel,
});
Container.set({
  id: 'CATEGORY',
  factory: () => CategoryModel,
});
Container.set({
  id: 'PUSH_SUBSCRIPTION',
  factory: () => PushSubscriptionModel,
});

export const schema = buildSchema({
  resolvers: [
    UserResolver,
    CommunityResolver,
    PostResolver,
    CommentResolver,
    CountryResolver,
    CategoryResolver,
    PushSubscriptionResolver,
  ],
  emitSchemaFile: true,
  container: Container,
});

export const typeDefsAndResolvers = buildTypeDefsAndResolvers({
  resolvers: [
    UserResolver,
    CommunityResolver,
    PostResolver,
    CommentResolver,
    CountryResolver,
    CategoryResolver,
  ],
  container: Container,
});
