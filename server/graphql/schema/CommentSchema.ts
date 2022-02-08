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

  type!: String;
}

@InputType()
export class CommentInput {
  @Field()
  text!: String;
}
