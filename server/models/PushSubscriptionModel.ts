import Mongoose from 'mongoose';
import { PushSubscription } from 'web-push';
import { IUser } from './UserModel';

export interface IPushSubscription {
  user: IUser;
  subscription: PushSubscription;
}

export const PushSubscriptionSchema: Mongoose.Schema = new Mongoose.Schema({
  user: {
    type: Mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User',
  },
  subscription: {
    type: new Mongoose.Schema({
      endpoint: { type: String, required: true },
      keys: {
        type: new Mongoose.Schema({
          p256dh: { type: String, required: true },
          auth: { type: String, required: true },
        }),
        required: true,
      },
    }),
    required: false,
  },
});

export default Mongoose.model<IPushSubscription & Mongoose.Document>(
  'PushSubscription',
  PushSubscriptionSchema
);
