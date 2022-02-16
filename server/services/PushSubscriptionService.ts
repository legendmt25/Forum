import { Inject, Service } from 'typedi';
import { Model } from 'mongoose';
import UserService from './UserService';
import { PushSubscriptionInput } from '../graphql/schema/PushSubscriptionSchema';
import { IPushSubscription } from '../models/PushSubscriptionModel';

@Service()
export class PushSubscriptionService {
  constructor(
    @Inject('PUSH_SUBSCRIPTION')
    private readonly pushSubscriptionModel: Model<IPushSubscription>,
    private readonly userService: UserService
  ) {}

  async findAll() {
    return this.pushSubscriptionModel.find().populate('user');
  }

  async findByUserId(userId: string) {
    return this.pushSubscriptionModel.findOne({ user: userId });
  }

  async addSubscription(
    userId: string,
    pushSubscriptionInput: PushSubscriptionInput
  ) {
    //update
    const existingSubscription = await this.findByUserId(userId);
    const subscription = {
      endpoint: pushSubscriptionInput.subscription.endpoint.toString(),
      keys: {
        auth: pushSubscriptionInput.subscription.keys.auth.toString(),
        p256dh: pushSubscriptionInput.subscription.keys.p256dh.toString(),
      },
    };
    if (existingSubscription != null) {
      existingSubscription.subscription = subscription;
      return existingSubscription.save();
    }

    //create new
    const user = await this.userService.findById(userId);
    return new this.pushSubscriptionModel({
      user,
      subscription,
    }).save();
  }
}
