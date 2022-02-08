import { Inject, Service } from 'typedi';
import { IComment } from '../models/CommentModel';
import Mongoose from 'mongoose';
import { CommentInput } from '../graphql/schema/CommentSchema';
import UserService from './UserService';
import { PostService } from './PostService';

@Service()
export class CommentService {
  constructor(
    @Inject('COMMENT') private readonly commentModel: Mongoose.Model<IComment>,
    private readonly userService: UserService,
    private readonly postService: PostService
  ) {}

  async findAll() {
    return this.commentModel.find();
  }

  async findById(commentId: string) {
    return this.commentModel.findById(commentId);
  }

  async create(userId: string, postId: string, commentInput: CommentInput) {
    try {
      const post = await this.postService.findById(postId);
      const user = await this.userService.findById(userId);
      const comment = await new this.commentModel({
        ...commentInput,
        user: user,
      }).save();
      post!.comments.push(comment);
      user!.comments.push(comment);
      post!.save();
      user!.save();
      return comment;
    } catch (err) {
      throw err;
    }
  }

  async reply(commentId: string, userId: string, replyInput: CommentInput) {
    try {
      const comment = await this.findById(commentId);
      const user = await this.userService.findById(userId);
      const reply = await new this.commentModel({
        ...replyInput,
        user: user,
        type: 'reply',
      }).save();
      comment!.replies.push(reply);
      comment!.save();
      return reply;
    } catch (err) {
      throw err;
    }
  }
}
