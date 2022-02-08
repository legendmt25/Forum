import Mongoose from 'mongoose';
import { Inject, Service } from 'typedi';
import { CommunityInput } from '../graphql/schema/CommunitySchema';
import { ICommunity } from '../models/CommunityModel';
import UserService from './UserService';

@Service()
export class CommunityService {
  constructor(
    @Inject('COMMUNITY')
    private readonly communityModel: Mongoose.Model<ICommunity>,
    private readonly userService: UserService
  ) {}

  async findAll() {
    return this.communityModel
      .find()
      .populate('admin')
      .populate('posts')
      .populate('moderators');
  }

  async findById(communityId: string) {
    return this.communityModel
      .findById(communityId)
      .populate({
        path: 'posts',
        populate: {
          path: 'user comments',
        },
      })
      .populate('admin')
      .populate('moderators')
      .populate('posts.comments');
  }

  async create(adminId: string, communityInput: CommunityInput) {
    try {
      const community = await new this.communityModel({
        ...communityInput,
        admin: adminId,
      }).save();
      const user = await this.userService.findById(adminId);
      user!.communities.push(community);
      user!.save();
      return community;
    } catch (err) {
      throw err;
    }
  }

  async deleteById(CommunityId: string) {
    return this.communityModel.findByIdAndDelete(CommunityId);
  }
}
