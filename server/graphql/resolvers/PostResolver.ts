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
import { Post, PostInput, PostSubscription } from '../schema/PostSchema';

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
    await pubSub
      .publish('POST_ADDED', post.title)
      .then(() => console.log('published'));
    return post;
  }

  @Subscription((returns) => String, { topics: 'POST_ADDED' })
  async postAdded(@Root() payload: string) {
    console.log(payload);
    return payload;
  }
}
