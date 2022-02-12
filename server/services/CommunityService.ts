import Mongoose from 'mongoose';
import { Inject, Service } from 'typedi';
import { CommunityInput } from '../graphql/schema/CommunitySchema';
import { ICommunity } from '../models/CommunityModel';
import { CategoryService } from './CategoryService';
import UserService from './UserService';

@Service()
export class CommunityService {
  constructor(
    @Inject('COMMUNITY')
    private readonly communityModel: Mongoose.Model<ICommunity>,
    private readonly userService: UserService,
    private readonly categoryService: CategoryService
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

  async create(categoryName: string, adminId: string, communityInput: CommunityInput) {
    try {
      const category = await this.categoryService.findByName(categoryName);
      if(category == null) {
        throw new Error('Category not found');
      }
      const community = await new this.communityModel({
        ...communityInput,
        admin: adminId,
      }).save();
      category!.communities.push(community);
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

  async joinCommunity(communityId: string, userId: string) {
    const user = await this.userService.findById(userId);
    const community = await this.findById(communityId);
    if (!user!.communities.includes(community!.id)) {
      user!.communities.push(community!);
      user!.save();
    }
    return community;
  }
}
