import { IsDate } from 'class-validator';
import { Field, ID, InputType, ObjectType } from 'type-graphql';
import { User } from './UserSchema';

@ObjectType()
export class Comment {
  @Field((is) => ID)
  id!: String;

  @Field()
  text!: String;

  @Field((is) => User)
  user!: User;

  @Field((is) => [Comment])
  replies!: Comment[];

  //type!: String;

  @Field()
  @IsDate()
  createdAt!: Date;
}

@InputType()
export class CommentInput {
  @Field()
  text!: String;
}
