import Mongoose from 'mongoose';
import { ICommunity } from './CommunityModel';
import { IPost } from './PostModel';
import { IComment } from './CommentModel';

export enum Gender {
    Man = 'Man',
    Woman = 'Woman',
    Other = 'Other'
}

export interface IUser {
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    birthDate: Date
    gender: Gender
    location: string
    communities: ICommunity[]
    posts: IPost[]
    comments: IComment[]
}

export const UserSchema: Mongoose.Schema = new Mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true },
    birthDate: { type: Date, required: false },
    gender: { type: String, required: false, default: Gender.Other, enum: Gender },
    location: { type: String, required: false },
    communities: [{ type: Mongoose.Schema.Types.ObjectId, required: false, ref: 'Community' }],
    posts: [{ type: Mongoose.Schema.Types.ObjectId, required: false, ref: 'Post' }],
    comments: [{ type: Mongoose.Schema.Types.ObjectId, required: false, ref: 'Comment' }]
}, { timestamps: true });


export default Mongoose.model<IUser & Mongoose.Document>('User', UserSchema);