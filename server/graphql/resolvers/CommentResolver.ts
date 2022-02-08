import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { CommentService } from '../../services/CommentService';
import { Comment, CommentInput } from '../schema/CommentSchema';

@Service()
@Resolver()
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
  @Query((returns) => [Comment])
  async comments() {
    return this.commentService.findAll();
  }

  @Mutation((returns) => Comment)
  async createComment(
    @Arg('userId') userId: string,
    @Arg('postId') postId: string,
    @Arg('commentInput') commentInput: CommentInput
  ) {
    return this.commentService.create(userId, postId, commentInput);
  }

  @Mutation((returns) => Comment)
  async reply(
    @Arg('commentId') commentId: string,
    @Arg('userId') userId: string,
    @Arg('replyInput') replyInput: CommentInput
  ) {
    return this.commentService.reply(commentId, userId, replyInput);
  }
}
