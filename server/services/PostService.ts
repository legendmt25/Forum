import { Inject, Service } from 'typedi';
import { IPost } from '../models/PostModel';
import Mongoose from 'mongoose';
import { CommunityService } from './CommunityService';
import { PostInput } from '../graphql/schema/PostSchema';
import UserService from './UserService';
import { PushSubscriptionService } from './PushSubscriptionService';
import webPush from 'web-push';
import { INotification, Notification } from '../models/NotificationModel';

@Service()
export class PostService {
  constructor(
    @Inject('POST') private readonly postModel: Mongoose.Model<IPost>,
    private readonly communityService: CommunityService,
    private readonly userService: UserService,
    private readonly pushSubscriptionService: PushSubscriptionService
  ) {}

  async findAll() {
    return this.postModel
      .find()
      .populate('user')
      .populate('comments')
      .populate('comments.user');
  }

  async findById(postId: string) {
    return this.postModel.findById(postId);
  }

  async create(userId: string, communityId: string, postInput: PostInput) {
    try {
      const user = await this.userService.findById(userId);
      const post = await new this.postModel({
        ...postInput,
        user: user,
      }).save();
      const community = await this.communityService.findById(communityId);
      user!.posts.push(post);
      user!.save();
      community!.posts.push(post);
      community!.save();

      (await this.pushSubscriptionService.findAll())
        .filter((subscription) => subscription.user.options.newPosts)
        .forEach((subscription) =>
          webPush
            .sendNotification(
              subscription.subscription,
              JSON.stringify(new Notification(post.title, '', post.str))
            )
            .then(() => console.log('sent'))
        );

      return post;
    } catch (err) {
      throw err;
    }
  }
}
