import {
  Arg,
  Mutation,
  Query,
  Resolver,
  Subscription,
  PubSub,
  PubSubEngine,
  Root,
} from 'type-graphql';
import { Service } from 'typedi';
import { PostService } from '../../services/PostService';
import { Post, PostInput } from '../schema/PostSchema';

@Service()
@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query((returns) => [Post])
  async posts() {
    return this.postService.findAll();
  }

  @Mutation((returns) => Post)
  async createPost(
    @Arg('userId') userId: string,
    @Arg('communityId') communityId: string,
    @Arg('postInput') postInput: PostInput,
    @PubSub() pubSub: PubSubEngine
  ) {
    let post = await this.postService.create(userId, communityId, postInput);
    pubSub.publish('POST_ADDED', post);
    return post;
  }

  @Subscription((returns) => Post, { topics: 'POST_ADDED' })
  async postAdded(@Root() payload: Post) {
    return payload;
  }
}
