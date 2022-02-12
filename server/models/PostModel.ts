import Mongoose from 'mongoose';
import { IComment } from './CommentModel';
import { IUser } from './UserModel';

export interface IPost {
  title: string;
  str: string;
  user: IUser;
  comments: IComment[];
  createdAt: Date;
}

export const PostSchema: Mongoose.Schema = new Mongoose.Schema(
  {
    title: { type: String, required: true },
    str: { type: String, required: false },
    user: { type: Mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    comments: [
      { type: Mongoose.Schema.Types.ObjectId, required: false, ref: 'Comment' },
    ],
  },
  { timestamps: true }
);

export default Mongoose.model<IPost & Mongoose.Document>('Post', PostSchema);
