import { IsDate } from 'class-validator';
import { Field, ObjectType, ID } from 'type-graphql';

export interface NotificationPayload {
  id: number;
  message?: string;
}

@ObjectType()
export class Notification {
  @Field((type) => ID, { nullable: true })
  id!: Number;

  @Field({ nullable: true })
  message?: String;

  @Field()
  @IsDate()
  date!: Date;
}
