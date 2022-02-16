import { Field, ObjectType, ID, InputType } from 'type-graphql';
import { User } from './UserSchema';

@ObjectType()
export class PushSubscriptionKeys {
  @Field()
  p256dh!: String;

  @Field()
  auth!: String;
}

@InputType()
export class PushSubscriptionKeysInput {
  @Field()
  p256dh!: String;

  @Field()
  auth!: String;
}

@ObjectType()
export class PushSubscriptionCore {
  @Field()
  endpoint!: String;

  @Field((is) => PushSubscriptionKeys)
  keys!: PushSubscriptionKeys;
}

@InputType()
export class PushSubscriptionCoreInput {
  @Field()
  endpoint!: String;

  @Field((is) => PushSubscriptionKeysInput)
  keys!: PushSubscriptionKeysInput;
}

@ObjectType()
export class PushSubscription {
  @Field((is) => ID)
  id!: String;

  @Field()
  user!: User;

  @Field((is) => PushSubscriptionCore, { nullable: true })
  subscription!: PushSubscriptionCore;
}

@InputType()
export class PushSubscriptionInput {
  @Field((is) => PushSubscriptionCoreInput)
  subscription!: PushSubscriptionCoreInput;
}
