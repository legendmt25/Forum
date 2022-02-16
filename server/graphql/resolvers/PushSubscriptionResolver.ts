import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { PushSubscriptionService } from '../../services/PushSubscriptionService';
import {
  PushSubscription,
  PushSubscriptionInput,
} from '../schema/PushSubscriptionSchema';

@Service()
@Resolver()
export class PushSubscriptionResolver {
  constructor(
    private readonly pushSubscriptionService: PushSubscriptionService
  ) {}
  @Query((returns) => [PushSubscription])
  async subscriptions() {
    return this.pushSubscriptionService.findAll();
  }

  @Mutation((returns) => Boolean)
  async addedSubscription(
    @Arg('pushSubscriptionInput') pushSubscriptionInput: PushSubscriptionInput,
    @Arg('userId') userId: string
  ) {
    await this.pushSubscriptionService.addSubscription(
      userId,
      pushSubscriptionInput
    );
    console.log('New subscription added');
    return true;
  }
}
