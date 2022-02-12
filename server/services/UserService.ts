import { Inject, Service } from 'typedi';
import { IUser } from '../models/UserModel';
import { UserCredentialsInput, UserInput } from '../graphql/schema/UserSchema';
import { Model } from 'mongoose';

@Service()
export default class UserService {
  constructor(@Inject('USER') private readonly userModel: Model<IUser>) {}
  
  async loginUser(userCredentials: UserCredentialsInput) {
    const user = await this.userModel.findOne(userCredentials);
    if(user == null) {
      throw new Error("Invalid username or password");
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
    return this.userModel.findById(id).populate('communities').populate('posts').populate('comments');
  }

  async create(userInput: UserInput) {
    try {
      const x = new this.userModel(userInput);
      return x.save();
    } catch (err) {
      throw err;
    }
  }

  async deleteById(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
