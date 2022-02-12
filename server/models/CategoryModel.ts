import Mongoose from 'mongoose';
import { ICommunity } from './CommunityModel';

export interface ICategory {
  name: string;
  communities: [ICommunity];
}

const categorySchema: Mongoose.Schema = new Mongoose.Schema({
  name: { type: String, required: true },
  communities: [
    { type: Mongoose.Schema.Types.ObjectId, require: false, ref: 'Community' },
  ],
});

export default Mongoose.model<ICategory & Mongoose.Document>(
  'Category',
  categorySchema
);
