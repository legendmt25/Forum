import Mongoose from 'mongoose';
import { IPost } from './PostModel';
import { IUser } from './UserModel';

export interface ICommunity {
  name: string;
  description: string;
  posts: IPost[];
  admin: IUser;
  moderators: IUser[];
  avatarImage: string;
}

export const CommunitySchema: Mongoose.Schema = new Mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  posts: [
    { type: Mongoose.Schema.Types.ObjectId, required: false, ref: 'Post' },
  ],
  admin: { type: Mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  moderators: [
    { type: Mongoose.Schema.Types.ObjectId, required: false, ref: 'User' },
  ],
  avatarImage: { type: String, required: false },
});

CommunitySchema.pre('find', function (next) {
  this.populate({
    path: 'posts',
    populate: {
      path: 'user comments',
    },
  })
    .populate('admin')
    .populate('moderators')
    .populate('posts.comments');
  next();
});

export default Mongoose.model<ICommunity & Mongoose.Document>(
  'Community',
  CommunitySchema
);
