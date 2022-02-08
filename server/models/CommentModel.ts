import Mongoose from 'mongoose';
import { IUser } from './UserModel';

export interface IComment {
  text: string;
  user: IUser;
  replies: IComment[];
  type: string
}

export const CommentSchema: Mongoose.Schema = new Mongoose.Schema({
  text: { type: String, required: true },
  user: { type: Mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  replies: [{ type: [Mongoose.Schema.Types.ObjectId], ref: 'Comment'}],
  type: { type: String, default: 'comment' ,required: true }
});

CommentSchema.pre('find', function(next) {
  this.populate('replies').populate('user');
  next();
});

export default Mongoose.model<IComment & Mongoose.Document>(
  'Comment',
  CommentSchema
);
