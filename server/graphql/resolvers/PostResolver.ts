import { Arg, Mutation, Query, Resolver } from 'type-graphql';
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
    @Arg('postInput') postInput: PostInput
  ) {
    return this.postService.create(userId, communityId, postInput);
  }
}
