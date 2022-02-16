import { Inject, Service } from 'typedi';
import { IUser } from '../models/UserModel';
import {
  UserCredentialsInput,
  UserInput,
  UserOptionInput,
} from '../graphql/schema/UserSchema';
import { Model, model } from 'mongoose';

@Service()
export default class UserService {
  constructor(@Inject('USER') private readonly userModel: Model<IUser>) {}

  async loginUser(userCredentials: UserCredentialsInput) {
    const user = await this.userModel.findOne(userCredentials);
    if (user == null) {
      throw new Error('Invalid username or password');
    }
    return user;
  }

  async findAll() {
    return this.userModel
      .find()
      .populate('communities')
      .populate('posts')
      .populate({
        path: 'comments',
        populate: {
          path: 'user',
        },
      });
  }

  async findById(id: string) {
    return this.userModel
      .findById(id)
      .populate('communities')
      .populate('posts')
      .populate('comments');
  }

  async create(userInput: UserInput) {
    try {
      const x = new this.userModel(userInput);
      x.options = {
        newPosts: false,
        inboxMessages: false,
        newFollowers: false,
        upvotesOnComments: false,
        upvotesOnPosts: false,
      };
      return x.save();
    } catch (err) {
      throw err;
    }
  }

  async updateOptions(userId: string, userOptionsInput: UserOptionInput) {
    const user = await this.findById(userId);
    user!.options = {
      newPosts: userOptionsInput.newPosts as boolean,
      inboxMessages: userOptionsInput.inboxMessages as boolean,
      newFollowers: userOptionsInput.newFollowers as boolean,
      upvotesOnComments: userOptionsInput.upvotesOnComments as boolean,
      upvotesOnPosts: userOptionsInput.upvotesOnPosts as boolean,
    };
    return user!.save();
  }

  async deleteById(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
