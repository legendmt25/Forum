import Mongoose from 'mongoose';
import { IComment } from './CommentModel';
import { IUser } from './UserModel';

export interface IPost {
  title: string;
  image: string;
  user: IUser;
  comments: IComment[];
}

export const PostSchema: Mongoose.Schema = new Mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: false },
  user: { type: Mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  comments: [
    { type: Mongoose.Schema.Types.ObjectId, required: false, ref: 'Comment' },
  ],
});

export default Mongoose.model<IPost & Mongoose.Document>('Post', PostSchema);
